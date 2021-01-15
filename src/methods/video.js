const { getProp, getID, parseOptions, requests } = require('../utils/utils.js');
const { parse, Utils } = require('../parser/main.js');
//const parseStreamingData = require('../download/formats.js');

async function getVideo(URLorID, options){
	options = parseOptions(options, 1);

	const body = await requests.fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 1)}`, 
		options
	).text();
	const data = requests.getData(body, 1), playerResponse = requests.getData(body, 2);

	if(!playerResponse.videoDetails) return null;
	
	return videoInfo(data, playerResponse);
}

module.exports = getVideo;

function videoInfo(data, playerResponse){
	let { secondaryResults, playlist, results } = data.contents.twoColumnWatchNextResults;
	const [ { videoPrimaryInfoRenderer }, { videoSecondaryInfoRenderer } ] = results.results.contents;

	const [likes, dislikes] = videoPrimaryInfoRenderer.sentimentBar
		.sentimentBarRenderer.tooltip.split(' / ').map(Utils.extractInt);

	const info = {
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${playerResponse.videoDetails.videoId}`,
		name: Utils.parseText(videoPrimaryInfoRenderer.title).toString(),

		likes, dislikes,

		views: new Utils.Views(videoPrimaryInfoRenderer.viewCount),
		owner: parse(videoSecondaryInfoRenderer.owner),

		description: Utils.parseText(videoSecondaryInfoRenderer.description),
		thumbnails: new Utils.Thumbnails(playerResponse.videoDetails.thumbnail),
		keywords: playerResponse.videoDetails.keywords,
		uploadDateLabel: Utils.parseText(videoPrimaryInfoRenderer.dateText).toString(),
		isLive: playerResponse.videoDetails.isLiveContent,
		...parse(playerResponse.microformat),
	};

	const endScreen = getProp(data, 'playerOverlays.playerOverlayRenderer.endScren.watchNextEndScreenRenderer');
	if(endScreen && endScreen.results) info.endScreen = {
		title: Utils.parseText(endScreen.title).toString(),
		items: endScreen.results.map(parse),
	};

	if(secondaryResults){
		secondaryResults = secondaryResults.secondaryResults.results;
		if(secondaryResults[secondaryResults.length -1].continuationItemRenderer){
			secondaryResults.pop();
		}
	
		info.related = secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse);
	}
	if(playlist) info.playlist = {
		ID: playlist.playlistId,
		title: Utils.parseText(playlist.titleText).toString(),
		owner: Utils.bylineText(playlist),
		videoQuantity: playlist.totalVideos,
		videos: playlist.videos.map(playlistVideo),
	};

	if(playerResponse.streamingData){
		//Object.assign(info, parseStreamingData(playerResponse.streamingData));
	}

	return info;
}

function playlistVideo({ playlistPanelVideoRenderer }){
	return {
		name: Utils.parseText(playlistPanelVideoRenderer.title).toString(),
		ID: playlistPanelVideoRenderer.videoId,
		playlistID: playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint.playlistId,
		URL: `https://www.youtube.com${playlistPanelVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,

		duration: new Utils.Duration(playlistPanelVideoRenderer),
		views: new Utils.Views(playlistPanelVideoRenderer),
		thumbnails: new Utils.Thumbnails(playlistPanelVideoRenderer.thumbnail),

		publishedDate: Utils.parseText(playlistPanelVideoRenderer.publishedTimeText).toString(),

		owner: Utils.bylineText(playlistPanelVideoRenderer),
	};
}