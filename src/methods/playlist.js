const Utils = require('../utils/utils.js');
const Structures = require('../structures/structures.js');

async function getPlaylist(url, options){
	options = Utils.parseOptions(options, 2);
	let playlistId = Utils.getID(url, true);
	url = 'https://www.youtube.com/playlist?list=' + playlistId;

	let body = await Utils.fetch(url, options);
	let data = Utils.getData(body, 1), YTconfig = Utils.getData(body, 3);

	let videos = data.contents
		.twoColumnBrowseResultsRenderer.tabs[0]
		.tabRenderer.content
		.sectionListRenderer.contents[0]
		.itemSectionRenderer.contents[0]
		.playlistVideoListRenderer.contents;
	
	while(videos.length < options.quantity){
		if(!videos[videos.length -1].continuationItemRenderer) break;
		let continuationItem = videos.pop();

		let continuation = await Utils.getContinuation(continuationItem, YTconfig);

		videos = videos.concat(
			continuation.onResponseReceivedActions[0]
				.appendContinuationItemsAction
				.continuationItems
		);
	}

	let [ 
		{ playlistSidebarPrimaryInfoRenderer: playlistInfo },
		{ playlistSidebarSecondaryInfoRenderer: { videoOwner } }
	] = data.sidebar.playlistSidebarRenderer.items;

	return {
		ID: playlistId,
		name: Utils.parseText(playlistInfo.title),

		views:  Utils.extractInt(playlistInfo.stats[1]),
		itemsQuantity: Utils.extractInt(playlistInfo.stats[0]),

		description: Utils.parseText(playlistInfo.description),

		thumbnails: new Structures.Thumbnails(
			playlistInfo.thumbnailRenderer.playlistVideoThumbnailRenderer
		),

		owner: Structures.Owner(videoOwner.videoOwnerRenderer),
		videos: videos
			.filter(v => v && v.playlistVideoRenderer)
			.map(PlaylistVideo)
	};
}

module.exports = getPlaylist;

function PlaylistVideo({ playlistVideoRenderer }){
	let ID = playlistVideoRenderer.videoId;

	return {
		title: Utils.parseText(playlistVideoRenderer.title),

		ID,
		URL: `https://www.youtube.com/watch?v=${ID}`,
		
		index: Utils.extractInt(playlistVideoRenderer.index),

		thumbnails: new Structures.Thumbnails(playlistVideoRenderer),
		duration: new Structures.Duration(playlistVideoRenderer),
	};
}