import { getID, parseOptions, type RawOptions } from './base/options';
import { fetch, getData, getContinuation } from './base/utils';
import type { Playlist, Video, Search, YTCFG, ContinuationItem } from './base/rawTypes';

export async function getVideo(URLorID: string, options: RawOptions = {}){
	const body = await fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 'video')}`,
		parseOptions(options, 'video')
	);

	return {
		initialData: getData(body, 'initialData') as Video.InitialData,
		playerResponse: getData(body, 'initialPlayerResponse') as Video.InitialPlayerResponse,
		ytcfg: getData(body, 'ytcfg') as YTCFG,
	};
}

export async function getPlaylist(URLorID: string, options: RawOptions = {}): Promise<object | null> {
	const parsedOptions = parseOptions(options, 'playlist');

	const body = await fetch(
		`https://www.youtube.com/playlist?list=${getID(URLorID, 'playlist')}`,
		parsedOptions
	);
	const initialData = getData(body, 'initialData') as Playlist.InitialData;
	const ytcfg = getData(body, 'ytcfg') as YTCFG;

	let videos = initialData.contents.twoColumnBrowseResultsRenderer.tabs[0]?.tabRenderer
		.content.sectionListRenderer.contents[0]?.itemSectionRenderer
		.contents[0]?.playlistVideoListRenderer.contents;

	let videosQty = videos.length - 1;

	const continuations = [];

	let continuationItem = videos.at(-1) as ContinuationItem;

	do{
		if(!('continuationItemRenderer' in continuationItem)) break;
		const continuation = await getContinuation(continuationItem, ytcfg, parsedOptions) as Playlist.ContinuationResponse;

		videos = continuation.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
		continuations.push(continuation);
		videosQty += videos.length - 1;

		continuationItem = videos.at(-1) as ContinuationItem;
	}while(videosQty < parsedOptions.quantity);

	return {
		initialData,
		continuations,
		ytcfg,
	};
}

export async function search(searchString: string, options: RawOptions = {}){
	if(!searchString){
		throw new Error("You didn't introduced a search query");
	}else if(typeof searchString !== 'string'){
		throw new Error('Search query must be a string');
	}

	const parsedOptions = parseOptions(options, 'search');
	const searchQuery = encodeURIComponent(
		searchString.trim().split(/\s+/).join('+')
	);
	const body = await fetch(
		`https://www.youtube.com/results?search_query=${searchQuery}`,
		parsedOptions
	);

	const initialData = getData(body, 'initialData') as Search.InitialData;

	const results = initialData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents;
	if(!results) return null;

	let continuationItem = results.find(x => 'continuationItemRenderer' in x) as ContinuationItem;
	const itemSectionRenderer = results.find(x => 'itemSectionRenderer' in x) as Search.ItemSectionRenderer;
	if(!itemSectionRenderer) return null;

	const continuations = [];
	let resultsQty = itemSectionRenderer.itemSectionRenderer.contents.length - 1;
	const ytcfg = getData(body, 'ytcfg') as YTCFG;

	while(resultsQty < parsedOptions.quantity){
		const continuation = await getContinuation(continuationItem, ytcfg, parsedOptions) as Search.ContinuationResponse;
		continuations.push(continuation);

		const items = continuation.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;

		resultsQty += items[0].itemSectionRenderer.contents.length - 1;

		// eslint-disable-next-line prefer-destructuring
		continuationItem = items[1];
	}

	return {
		initialData,
		ytcfg,
		continuations,
	};
}
