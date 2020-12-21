const { fetch, getData, getContinuation, parseOptions } = require('../utils/utils.js');
const SearchStructures = require('../utils/structures/searchResults.js');

async function search(search_query, options){
	options = parseOptions(options, 3);
	const searchQuery = encodeURIComponent(
		search_query.trim().split(/\s+/).join('+')
	);

	let body = await fetch('https://www.youtube.com/results?search_query=' + searchQuery, options);
	let data = getData(body, 1), YTconfig = getData(body, 3);

	const { contents } = data.search.initialData.contents.twoColumnSearchResultsRenderer
		.primaryContents.sectionListRenderer;

	let results = contents.find(a => 
		a.itemSectionRenderer && a.itemSectionRenderer.contents.length > 3
	).itemSectionRenderer.contents;

	
	let continuationToken = contents.pop()
		.continuationItemRenderer.continuationEndpoint
		.continuationCommand.token;

	while(results.length < options.quantity){
		try{
			let continuation = await getContinuation(
				continuationToken, YTconfig, true
			);

			let [
				{ itemSectionRenderer }, { continuationItemRenderer }
			] = continuation.onResponseReceivedCommands[0]
				.appendContinuationItemsAction.continuationItems;

			continuationToken = continuationItemRenderer.continuationEndpoint
				.continuationCommand.token;

			contents.push(
				continuation.onResponseReceivedCommands[0].appendContinuationItemsAction
					.continuationItems[1]
			);

			results = results.concat(itemSectionRenderer.contents);
		}catch(e){
			break;
		}
	}

	let resultsObj = results.reduce((acc, value) => {
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
	}, { 
		videos: [], playlists: [], 
		channels: [], shelfs: [], 
		others: [] 
	});

	return {
		searchQuery: search_query.trim(),
		estimatedResults: Number(data.estimatedResults),
		results: resultsObj,
	};
}

module.exports = search;