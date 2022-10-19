import { getID, parseOptions, type RawOptions } from '../base/options';
import { fetch, getData, getContinuation, parseText } from '../base/utils';
import type { Playlist as Types, YTCFG, ContinuationItem, Thumbnail } from '../base/rawTypes';
import { parsePlaylistVideo, parseVideoOwnerRenderer } from './parsers';

export default async function getPlaylist(URLorID: string, options: RawOptions): Promise<object | null> {
	const parsedOptions = parseOptions(options, 'playlist');

	const body = await fetch(
		`https://www.youtube.com/playlist?list=${getID(URLorID, 'playlist')}`,
		parsedOptions
	);
	const data = getData(body, 'initialData') as Types.InitialData;

	const videos = data.contents.twoColumnBrowseResultsRenderer.tabs[0]?.tabRenderer
		.content.sectionListRenderer.contents[0]?.itemSectionRenderer
		.contents[0]?.playlistVideoListRenderer.contents;

	if(!videos) return null;

	if(videos.length < parsedOptions.quantity && videos.length !== 0){
		const ytcfg = getData(body, 'ytcfg') as YTCFG;

		while(videos.length < parsedOptions.quantity){
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			if(!('continuationItemRenderer' in videos[videos.length - 1]!)) break;
			const continuationItem = videos.pop() as ContinuationItem;

			const continuation = await getContinuation(continuationItem, ytcfg, parsedOptions) as Types.ContinuationResponse;

			videos.push(
				...continuation.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems
			);
		}

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		if('continuationItemRenderer' in videos[videos.length - 1]!) videos.pop();
	}

	return parsePlaylist(data, videos as Types.PlaylistVideoRenderer[]);
}

interface PlaylistData {
	ID: string;
	URL: string;
	name: string;
	videoQuantity: string;
	views: string;
	lastUpdate: string;
	description?: string;
	isUnlisted: boolean;
	videos: ReturnType<typeof parsePlaylistVideo>[];
	owner?: ReturnType<typeof parseVideoOwnerRenderer>;
	thumbnails?: Thumbnail[];
}

function parsePlaylist(data: Types.InitialData, videos: Types.PlaylistVideoRenderer[]): object {
	const [
		{ playlistSidebarPrimaryInfoRenderer: info },
		item2,
	] = data.sidebar.playlistSidebarRenderer.items;

	const ID = info.navigationEndpoint.watchEndpoint.playlistId;
	const result: PlaylistData = {
		ID,
		URL: `https://www.youtube.com/playlist?list=${ID}`,
		name: parseText(info.title),

		videoQuantity: parseText(info.stats[0]),
		views: parseText(info.stats[1]),
		lastUpdate: parseText(info.stats[2]),

		isUnlisted: data.microformat.playerMicroformatRenderer.isUnlisted ?? false,
		videos: videos.map(parsePlaylistVideo),
	};

	if('description' in info) result.description = parseText(info.description);

	const ownerInfo = item2?.playlistSidebarSecondaryInfoRenderer;
	if(ownerInfo) result.owner = parseVideoOwnerRenderer(ownerInfo.videoOwner);

	const thumbnails = info.thumbnailRenderer?.playlistVideoThumbnailRenderer ||
		info.thumbnailRenderer?.playlistCustomThumbnailRenderer;
	if(thumbnails) result.thumbnails = thumbnails.thumbnail.thumbnails;

	return result;
}