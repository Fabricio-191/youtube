const { getProp, parseOptions, requests } = require('../utils/utils.js');
const { parse } = require('../parser/main.js');

async function search(searchString, options){
	if(!searchString){
		throw new Error("You didn't introduced a search query");
	}else if(typeof searchString !== 'string'){
		throw new Error('Search query must be a string');
	}

	options = parseOptions(options, 3);
	const search_query = encodeURIComponent(
		searchString.trim().split(/\s+/).join('+')
	);
	const body = await requests.fetch(
		`https://www.youtube.com/results?search_query=${search_query}`, 
		options
	).text();

	const data = requests.getData(body, 1);
	let results = getProp(data, 'contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents');

	let continuationItem = results.pop(); 
	results = getProp(results.pop(), 'itemSectionRenderer.contents');

	if(!results) return null;

	if(results.length < options.quantity){
		const ytcfg = requests.getData(body, 3);

		while(results.length < options.quantity){
			let continuation = await requests.getContinuation(continuationItem, ytcfg, options);
			let items = getProp(continuation, 'onResponseReceivedCommands.0.appendContinuationItemsAction.continuationItems');

			results.push(...items[0].itemSectionRenderer.contents);
			
			continuationItem = items[1];
			if(!continuation) break;
		}
	}

	return {
		searchQuery: searchString.trim(),
		estimatedResults: Number(data.estimatedResults),
		refinements: data.refinements,
		results: results.map(parse).filter(x => x),
	};
}
	
module.exports = search;