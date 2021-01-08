const { getID, parseOptions, requests } = require('../utils/utils.js');
const parse = require('../parser/main.js');

async function getPlaylist(URLorID, options){
	options = parseOptions(options, 2);

	let body = await requests.fetch(
		`https://www.youtube.com/playlist?list=${getID(URLorID, 2)}`, 
		options
	).text();
	let data = requests.getData(body, 1), ytcfg = requests.getData(body, 3);

	if(
		!data.contents || 
		!data.contents
			.twoColumnBrowseResultsRenderer.tabs[0]
			.tabRenderer.content.sectionListRenderer
	){ 
		if(options.raw) return { initialData: data, ytcfg };
		if(data.alerts?.[0]?.alertRenderer){
			return {
				error: parse(data.alerts[0])
			};
		}
		return null;
	}

	let videos = data.contents
		.twoColumnBrowseResultsRenderer.tabs[0]
		.tabRenderer.content
		.sectionListRenderer.contents[0]
		.itemSectionRenderer.contents[0]
		.playlistVideoListRenderer.contents;
	

	while(videos.length < options.quantity){
		if(!videos[videos.length -1].continuationItemRenderer) break;
		let continuationItem = videos.pop();

		let continuation = await requests.getContinuation(continuationItem, ytcfg, options);

		videos.push(
			...continuation.onResponseReceivedActions[0]
				.appendContinuationItemsAction
				.continuationItems
		);
	}


	if(options.raw){
		return { initialData: data, ytcfg, items: videos };
	}

	let results = parse(data.sidebar);
	results.videos = videos.map(parse);
	results.isUnlisted = data.microformat.unlisted;

	return results;
}

module.exports = getPlaylist;