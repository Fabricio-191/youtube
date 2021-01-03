const { parseOptions, requests } = require('../utils/utils.js');
const parse = require('../parser/main.js');

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

	let body = await requests.fetch(
		'https://www.youtube.com/results?search_query=' + search_query, 
		options
	);
	let data = requests.getData(body, 1), ytcfg = requests.getData(body, 3);

	const contents = data.contents
		.twoColumnSearchResultsRenderer
		.primaryContents.sectionListRenderer.contents;

	if(
		contents.length === 1 && 
		contents[0].itemSectionRenderer && 
		contents[0].itemSectionRenderer.contents[0].backgroundPromoRenderer
	) return null;

	let continuationItem = contents.pop();
	let results = contents.find(a => 
		a.itemSectionRenderer && a.itemSectionRenderer.contents.length > 2
	).itemSectionRenderer.contents;
	
	while(results.length < options.quantity){
		let continuation = await requests.getContinuation(continuationItem, ytcfg, options);
		
		let items = continuation.onResponseReceivedCommands[0]
			.appendContinuationItemsAction.continuationItems;

		results.push(...items[0].itemSectionRenderer.contents);
		
		continuationItem = items[1];
		if(!continuationItem) break;
	}
	
	if(options.raw){
		return { initialData: data, ytcfg, items: results };
	}

	return {
		searchQuery: search_query.trim(),
		estimatedResults: Number(data.estimatedResults),
		results: results.map(parse).filter(x => x)
	};
}

module.exports = search;