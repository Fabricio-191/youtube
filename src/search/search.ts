import { parseOptions, type RawOptions } from '../base/options';
import { fetch, getData, getContinuation } from '../base/utils';
import type { Search as Types, YTCFG, ContinuationItem } from '../base/rawTypes';
import { parseSearchResult } from './parsers';

export default async function search(searchString: string, options: RawOptions = {}){
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

	const data = getData(body, 'initialData') as Types.InitialData;
	const results = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents;
	if(!results) return null;

	let continuationItem = results.find(x => 'continuationItemRenderer' in x) as ContinuationItem;
	const itemSectionRenderer = results.find(x => 'itemSectionRenderer' in x) as Types.ItemSectionRenderer;
	if(!itemSectionRenderer) return null;

	const searchResults = itemSectionRenderer.itemSectionRenderer.contents;

	if(searchResults.length < parsedOptions.quantity){
		const ytcfg = getData(body, 'ytcfg') as YTCFG;

		do{
			const continuation = await getContinuation(continuationItem, ytcfg, parsedOptions) as Types.ContinuationResponse;
			const items = continuation.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;

			searchResults.push(...items[0].itemSectionRenderer.contents);

			// eslint-disable-next-line prefer-destructuring
			continuationItem = items[1];
		}while(searchResults.length < parsedOptions.quantity);
	}

	return {
		searchQuery: searchString.trim(),
		estimatedResults: Number(data.estimatedResults),
		refinements: data.refinements ?? null,
		results: searchResults.map(parseSearchResult),
	};
}
