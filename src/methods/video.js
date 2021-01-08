const { getID, parseOptions, requests } = require('../utils/utils.js');
const parse = require('../parser/main.js');
const { Thumbnails } = require('../parser/structures.js');
//const parseStreamingData = require('../download/formats.js');

async function getVideo(URLorID, options){
	options = parseOptions(options, 1);

	let response = await requests.fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 1)}`, 
		options
	);
	let body = await response.text();
	let data = requests.getData(body, 1), playerResponse = requests.getData(body, 2);

	if(options.raw) return { 
		initialData: data, playerResponse, ytcfg: requests.getData(body, 3) 
	};
	if(!playerResponse.videoDetails) return playabilityStatus(playerResponse);

	let { 
		secondaryResults, playlist, results 
	} = data.contents.twoColumnWatchNextResults;

	let [
		videoPrimaryInfoRenderer, videoSecondaryInfoRenderer
	] = results.results.contents;

	let info = Object.assign({
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${playerResponse.videoDetails.videoId}`,
		isLive: playerResponse.videoDetails.isLiveContent,
	}, 
	parse(videoPrimaryInfoRenderer), 
	parse(videoSecondaryInfoRenderer), 
	parse(playerResponse.microformat.playerMicroformatRenderer),
	{
		thumbnails: new Thumbnails(playerResponse.videoDetails.thumbnail),
		keywords: playerResponse.videoDetails.keywords
	});


	let endScreen = data.playerOverlays.playerOverlayRenderer.endScreen;
	if(endScreen?.watchNextEndScreenRenderer?.results){
		info.endScreen = parse(data.playerOverlays.playerOverlayRenderer.endScreen);
	}

	if(secondaryResults){
		info.relatedVideos = parseSecondaryResults(secondaryResults);
	}
	if(playlist) info.playlist = parse(info.playlist);

	if(playerResponse.streamingData){
		//Object.assign(info, parseStreamingData(playerResponse.streamingData));
	}

	return info;
}

module.exports = getVideo;

function parseSecondaryResults(results){
	results = results.secondaryResults.results;
	if(results[results.length -1].continuationItemRenderer) results.pop();

	return results.filter(a => !a.compactAutoplayRenderer).map(parse);
}

function playabilityStatus({ playabilityStatus }){
	let data = {
		status: playabilityStatus.status,
	};		
	if(playabilityStatus.messages){
		data.messages = playabilityStatus.messages;
	}

	return { 
		error: Object.assign(data, 
			parse(playabilityStatus.errorScreen)
		)
	};
}