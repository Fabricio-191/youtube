const { requests } = require('../utils/utils.js');
const parse = require('../parser/main.js');
const { Thumbnails } = require('../parser/structures.js');

async function getVideo(ID, options){
	let body = await requests.fetch('https://www.youtube.com/watch?v=' + ID, options);
	let data = requests.getData(body, 1), { videoDetails } = requests.getData(body, 2);
	
	if(!videoDetails) return null;

	let { 
		secondaryResults, playlist, results 
	} = data.contents.twoColumnWatchNextResults;

	let [
		videoPrimaryInfoRenderer, videoSecondaryInfoRenderer
	] = results.results.contents;

	let info = Object.assign(
		parse(videoPrimaryInfoRenderer),
		parse(videoSecondaryInfoRenderer)
	);

	secondaryResults = secondaryResults.secondaryResults.results;

	if(
		secondaryResults[secondaryResults.length -1].continuationItemRenderer
	) secondaryResults.pop(); //continuationItemRenderer


	if(playlist){
		info.playlist = parse(info.playlist);
	}

	Object.assign(info, {
		ID: videoDetails.videoId,
		URL: 'https://www.youtube.com/watch?v=' + videoDetails.videoId,
		keywords: videoDetails.keywords,
		thumbnails: new Thumbnails(videoDetails.thumbnail),
		secondaryResults: secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse),
		endScreen: parse(data.playerOverlays.playerOverlayRenderer.endScreen),
	});

	return info;
}

module.exports = getVideo;