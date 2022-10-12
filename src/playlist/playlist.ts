/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type * as Types from './types';
import { getID, parseOptions, getData, fetch } from '../utils/utils.js';
import type { BaseOptions, RawBaseOptions } from '../utils/utils.js';

export default async function getPlaylist(URLorID, options: RawBaseOptions): Promise<object | null> {
	options = parseOptions(options, 2);

	const body = await fetch(
		`https://www.youtube.com/playlist?list=${getID(URLorID, 2)}`,
		options
	);
	const data = getData(body, 1) as Types.Raw.initialData;

	const videos = data.contents.twoColumnBrowseResultsRenderer.tabs[0]?.tabRenderer
		.content.sectionListRenderer.contents[0]?.itemSectionRenderer
		.contents[0]?.playlistVideoListRenderer.contents;

	if(!videos) return null;

	if(videos.length < options.quantity){
		const ytcfg = getData(body, 3);

		while(videos.length < options.quantity){
			if(!videos[videos.length - 1].continuationItemRenderer) break;
			const continuationItem = videos.pop();

			const continuation = await requests.getContinuation(continuationItem, ytcfg, options);

			videos.push(
				...continuation.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems
			);
		}
	}

	return parsePlaylist(data, videos);
}

function parsePlaylist(data, videos){
	const [
		{ playlistSidebarPrimaryInfoRenderer: info },
		item2,
	] = data.sidebar.playlistSidebarRenderer.items;

	const ID = info.navigationEndpoint.watchEndpoint.playlistId;
	const result = {
		ID,
		URL: `https://www.youtube.com/playlist?list=${ID}`,
		name: Utils.parseText(info.title).toString(),

		videoQuantity: Utils.extractInt(info.stats[0]),
		views: Utils.extractInt(info.stats[1]),
		lastUpdate: Utils.parseText(info.stats[2]).toString(),

		description: Utils.parseText(info.description),


		isUnlisted: data.microformat.unlisted || false,
		videos: videos.map(playlistVideo),
	};

	const ownerInfo = optionalChaining(item2, 'playlistSidebarSecondaryInfoRenderer');
	if(ownerInfo) data.owner = parse(ownerInfo); // videoOwnerRenderer

	const thumbnails = optionalChaining(info.thumbnailRenderer, 'playlistVideoThumbnailRenderer', 'playlistCustomThumbnailRenderer');
	if(thumbnails) result.thumbnails = new Utils.Thumbnails(thumbnails.thumbnail);

	return result;
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