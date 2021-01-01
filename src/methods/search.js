const { requests, parseOptions } = require('../utils/utils.js');
const parse = require('../parser/main.js');

async function search(search_query, options){
	options = parseOptions(options, 3);
	const searchQuery = encodeURIComponent(
		search_query.trim().split(/\s+/).join('+')
	);

	let body = await requests.fetch('https://www.youtube.com/results?search_query=' + searchQuery, options);
	let data = requests.getData(body, 1), YTconfig = requests.getData(body, 3);

	const results = {
		searchQuery: search_query.trim(),
		estimatedResults: Number(data.estimatedResults),
		results: { 
			videos: [], playlists: [], 
			channels: [], shelfs: [], 
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
		let continuation = await requests.getContinuation(continuationItem, YTconfig);
		
		let items = continuation.onResponseReceivedCommands[0]
			.appendContinuationItemsAction.continuationItems;

		items = items.concat(items[0].itemSectionRenderer.contents);
		
		continuationItem = items[1];
		if(!continuationItem) break;
	}

	items.reduce((acc, value) => {
		let key = Object.keys(value)[0];

		let prop = {
			videoRenderer: 'videos',
			playlistRenderer: 'playlists',
			channelRenderer: 'channels',
			shelfRenderer: 'shelfs',
		}[key];

		if(prop){
			acc[prop].push(
				parse(value)
			);
		}

		return acc;
	}, results.results);

	return results;
}

module.exports = search;