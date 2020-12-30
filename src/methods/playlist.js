const Utils = require('../utils/utils.js');
const Structures = require('../utils/structures/structures.js');

async function getPlaylist(ID, options){
	let url = 'https://www.youtube.com/playlist?list=' + ID;

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

	return Playlist(ID, data, videos);
}

module.exports = getPlaylist;

function Playlist(ID, data, videos){
	let [ 
		{ playlistSidebarPrimaryInfoRenderer: playlistInfo },
		{ playlistSidebarSecondaryInfoRenderer: { videoOwner } }
	] = data.sidebar.playlistSidebarRenderer.items;

	return {
		name: Utils.parseText(playlistInfo.title),

		ID,
		URL: 'https://www.youtube.com/playlist?list=' + ID,

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