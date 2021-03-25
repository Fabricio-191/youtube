const { getProp, getID, parseOptions, requests } = require('../utils/utils.js');
const { parse, parsers: { bylineText }, Utils } = require('../parser/main.js');

async function getPlaylist(URLorID, options){
	options = parseOptions(options, 2);

	const body = await requests.fetch(
		`https://www.youtube.com/playlist?list=${getID(URLorID, 2)}`, 
		options
	// @ts-ignore
	).text();
	const data = requests.getData(body, 1);

	let videos = getProp(data, `contents.twoColumnBrowseResultsRenderer.tabs.0.tabRenderer.content
		.sectionListRenderer.contents.0.itemSectionRenderer.contents.0.playlistVideoListRenderer.contents`);

	if(!videos) return null;
	
	if(videos.length < options.quantity){
		const ytcfg = requests.getData(body, 3);

		while(videos.length < options.quantity){
			if(!videos[videos.length -1].continuationItemRenderer) break;
			let continuationItem = videos.pop();
	
			let continuation = await requests.getContinuation(continuationItem, ytcfg, options);
	
			videos.push(
				...continuation.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems
			);
		}
	}

	return parsePlaylist(data, videos);
}

module.exports = getPlaylist;

function parsePlaylist(data, videos){
	let [
		{ playlistSidebarPrimaryInfoRenderer: info },
		{ playlistSidebarSecondaryInfoRenderer: { videoOwner: ownerInfo } }
	] = data.sidebar.playlistSidebarRenderer.items;

	let ID = info.navigationEndpoint.watchEndpoint.playlistId;

	return {
		ID,
		URL: `https://www.youtube.com/playlist?list=${ID}`,
		name: Utils.parseText(info.title).toString(),

		videoQuantity: Utils.extractInt(info.stats[0]),
		views: Utils.extractInt(info.stats[1]),
		lastUpdate: Utils.parseText(info.stats[2]).toString(),

		description: Utils.parseText(info.description),

		thumbnails: new Utils.Thumbnails(
			info.thumbnailRenderer
				.playlistVideoThumbnailRenderer.thumbnail
		),
		owner: parse(ownerInfo), //videoOwnerRenderer
		isUnlisted: data.microformat.unlisted,
		videos: videos.map(playlistVideo),
	};
}

function playlistVideo({ playlistVideoRenderer }){
	return {
		title: Utils.parseText(playlistVideoRenderer.title).toString(),

		ID: playlistVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${playlistVideoRenderer.videoId}`,
		
		index: Utils.extractInt(playlistVideoRenderer.index),

		thumbnails: new Utils.Thumbnails(playlistVideoRenderer.thumbnail),
		duration: new Utils.Duration(playlistVideoRenderer),

		owner: bylineText(playlistVideoRenderer),
	};
}