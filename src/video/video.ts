import { getID, parseOptions, requests } from '../utils/utils.js';
import { parse, Utils, parsers } from '../parser/main.js';
// const parseStreamingData = require('../download/formats.js');

export default async function getVideo(URLorID, options){
	const body = await requests.fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 1)}`,
		parseOptions(options, 1)
	// @ts-expect-error
	).text();
	const data = requests.getData(body, 1), playerResponse = requests.getData(body, 2);

	if(!playerResponse.videoDetails) return null;

	return videoInfo(data, playerResponse);
}

function videoInfo(data, playerResponse){
	data = data.contents.twoColumnWatchNextResults;
	const [ { videoPrimaryInfoRenderer }, { videoSecondaryInfoRenderer } ] = data.results.results.contents;

	const info = {
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${playerResponse.videoDetails.videoId}`,
		name: Utils.parseText(videoPrimaryInfoRenderer.title).toString(),

		likes: getLikes(videoPrimaryInfoRenderer),

		views: new Utils.Views(videoPrimaryInfoRenderer.viewCount),
		owner: parse(videoSecondaryInfoRenderer.owner),

		description: Utils.parseText(videoSecondaryInfoRenderer.description),
		thumbnails: new Utils.Thumbnails(playerResponse.videoDetails.thumbnail),
		keywords: playerResponse.videoDetails.keywords || null,
		uploadDateLabel: Utils.parseText(videoPrimaryInfoRenderer.dateText).toString(),
		isLive: playerResponse.videoDetails.isLiveContent,
		...parse(playerResponse.microformat),
		duration: new Utils.Duration(playerResponse.videoDetails.lengthSeconds),
	};

	const endScreen = Utils.optionalChaining(data, 'playerOverlays.playerOverlayRenderer.endScren.watchNextEndScreenRenderer');
	if(endScreen && endScreen.results) info.endScreen = {
		title: Utils.parseText(endScreen.title).toString(),
		items: endScreen.results.map(parse),
	};

	const secondaryResults = Utils.optionalChaining(data, 'secondaryResults.secondaryResults.results');
	if(secondaryResults && secondaryResults.length > 1){
		if(secondaryResults[secondaryResults.length - 1].continuationItemRenderer){
			secondaryResults.pop();
		}

		info.related = secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse);
	}

	if(data.playlist) info.playlist = {
		ID: data.playlist.playlistId,
		title: Utils.parseText(data.playlist.titleText).toString(),
		owner: parsers.bylineText(data.playlist),
		videoQuantity: data.playlist.totalVideos,
		videos: data.playlist.videos.map(playlistVideo),
	};

	if(playerResponse.streamingData){
		// Object.assign(info, parseStreamingData(playerResponse.streamingData));
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

		owner: parsers.bylineText(playlistPanelVideoRenderer),
	};
}

function getLikes(videoPrimaryInfoRenderer){
	const likeButton = Utils.optionalChaining(videoPrimaryInfoRenderer, 'videoActions.menuRenderer.topLevelButtons.0.toggleButtonRenderer');

	return Utils.extractInt(likeButton.defaultText) || 0;
}