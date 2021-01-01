const { requests } = require('../utils/utils.js');
const parse = require('../parse/main.js');

async function getPlaylist(ID, options){
	let url = 'https://www.youtube.com/playlist?list=' + ID;

	let body = await requests.fetch(url, options);
	let data = requests.getData(body, 1), YTconfig = requests.getData(body, 3);

	let videos = data.contents
		.twoColumnBrowseResultsRenderer.tabs[0]
		.tabRenderer.content
		.sectionListRenderer.contents[0]
		.itemSectionRenderer.contents[0]
		.playlistVideoListRenderer.contents;
	
	while(videos.length < options.quantity){
		if(!videos[videos.length -1].continuationItemRenderer) break;
		let continuationItem = videos.pop();

		let continuation = await requests.getContinuation(continuationItem, YTconfig);

		videos = videos.concat(
			continuation.onResponseReceivedActions[0]
				.appendContinuationItemsAction
				.continuationItems
		);
	}

	return Playlist(data, videos);
}

module.exports = getPlaylist;