const { getID, parseOptions, requests } = require('../utils/utils.js');
const parse = require('../parser/main.js');
const { Thumbnails } = require('../parser/structures.js');

async function getVideo(URLorID, options){
	options = parseOptions(options, 1);

	let body = await requests.fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 1)}`, 
		options
	);
	let data = requests.getData(body, 1), playerResponse = requests.getData(body, 2);

	if(!playerResponse.videoDetails) return null;
	if(options.raw){
		return { initialData: data, playerResponse, ytcfg: requests.getData(body, 3) };
	}
	

	let { 
		secondaryResults, playlist, results 
	} = data.contents.twoColumnWatchNextResults;

	secondaryResults = secondaryResults.secondaryResults.results;
	if(secondaryResults[secondaryResults.length -1].continuationItemRenderer) secondaryResults.pop();


	let [
		videoPrimaryInfoRenderer, videoSecondaryInfoRenderer
	] = results.results.contents;

	let info = Object.assign({
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${  playerResponse.videoDetails.videoId}`
	}, 
	parse(videoPrimaryInfoRenderer), 
	parse(videoSecondaryInfoRenderer), 
	{
		thumbnails: new Thumbnails(playerResponse.videoDetails.thumbnail),
		keywords: playerResponse.videoDetails.keywords,
		secondaryResults: secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse),
		endScreen: parse(data.playerOverlays.playerOverlayRenderer.endScreen),
	});

	if(playlist) info.playlist = parse(info.playlist);

	return info;
}

module.exports = getVideo;