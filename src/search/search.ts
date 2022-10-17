import { parseOptions, type RawOptions } from '../base/options';
import { fetch, getData, getContinuation } from '../base/utils';

export default async function search(searchString: string, options: RawOptions){
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

	const data = getData(body, 'initialData');
	let results = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents;
	if(!results) return null;

	let continuationItem = results.pop();
	results = results.pop().itemSectionRenderer.contents;

	if(!results) return null;

	if(results.length < parsedOptions.quantity){
		const ytcfg = getData(body, 'ytcfg');

		while(results.length < parsedOptions.quantity){
			const continuation = await getContinuation(continuationItem, ytcfg, parsedOptions);
			const items = continuation?.onResponseReceivedCommands?.[0]?.appendContinuationItemsAction.continuationItems;

			results.push(...items[0].itemSectionRenderer.contents);

			// eslint-disable-next-line prefer-destructuring
			continuationItem = items[1];
			if(!continuation) break;
		}
	}

	return {
		searchQuery: searchString.trim(),
		estimatedResults: Number(data.estimatedResults),
		refinements: data.refinements || null,
		results: results.map(parse).filter(x => x),
	};
}

module.exports = search;