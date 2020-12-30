const { fetch, getData, getContinuation, parseOptions } = require('../utils/utils.js');
const SearchStructures = require('../utils/structures/search.js');

async function search(search_query, options){
	options = parseOptions(options, 3);
	const searchQuery = encodeURIComponent(
		search_query.trim().split(/\s+/).join('+')
	);

	let body = await fetch('https://www.youtube.com/results?search_query=' + searchQuery, options);
	let data = getData(body, 1), YTconfig = getData(body, 3);

	const results = {
		searchQuery: search_query.trim(),
		encodedSearchQuery: searchQuery,
		estimatedResults: Number(data.estimatedResults),
		results: { 
			videos: [], playlists: [], 
			channels: [], shelfs: [], 
			others: [] 
		},
	};

	const contents = data.contents
		.twoColumnSearchResultsRenderer
		.primaryContents.sectionListRenderer.contents;

	if(
		contents.length === 1 && 
		contents[0].itemSectionRenderer && 
		contents[0].itemSectionRenderer.contents[0].backgroundPromoRenderer
	) return results;

	let continuationItem = contents.pop();
	let items = contents.find(a => 
		a.itemSectionRenderer && a.itemSectionRenderer.contents.length > 2
	).itemSectionRenderer.contents;
	
	while(results.length < options.quantity){
		let continuation = await getContinuation(continuationItem, YTconfig);
		
		let items = continuation.onResponseReceivedCommands[0]
			.appendContinuationItemsAction.continuationItems;

		items = items.concat(items[0].itemSectionRenderer.contents);
		
		continuationItem = items[1];
		if(!continuationItem) break;
	}

	return Search(results, items);
}

module.exports = search;

function Search(results, items){
	items.reduce((acc, value) => {
		let key = Object.keys(value)[0];

		let prop = {
			videoRenderer: ['videos', 'Video'],
			playlistRenderer: ['playlists', 'Playlist'],
			channelRenderer: ['channels', 'Channel'],
			shelfRenderer: ['shelfs', 'Shelf'],
		}[key];

		if(!prop){
			acc.others.push(value);
		}else{
			acc[prop[0]].push(
				SearchStructures[prop[1]](value)
			);
		}

		return acc;
	}, results.results);

	delete results.others;//just wait

	return results;
}