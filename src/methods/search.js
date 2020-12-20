const { fetch, getData, getContinuation, parseOptions } = require('../utils/utils.js');
const SearchStructures = require('../utils/structures/searchResults.js');

async function search(searchString, options){
	options = parseOptions(options);
	const searchQuery = encodeURIComponent(
		searchString.split(/\s+/).join('+')
	);

	let body = await fetch('https://www.youtube.com/results?search_query=' + searchQuery, options);
	let data = getData(body, 1), ytcfg = getData(body, 3);

	const { contents } = data.contents.twoColumnSearchResultsRenderer
		.primaryContents.sectionListRenderer;

	let results = contents.find(a => 
		a.itemSectionRenderer && a.itemSectionRenderer.contents.length > 3
	).itemSectionRenderer.contents;

	let continuationToken = contents.find(a => a.continuationItemRenderer)
		.continuationItemRenderer.continuationEndpoint
		.continuationCommand.token;

	while(results.length < options.quantity){
		let continuation = await getContinuation(
			continuationToken, ytcfg, true
		);

		results = results.concat(continuation);
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
			acc[prop[0]].push(SearchStructures[prop[1]](value));
		}

		return acc;
	}, { 
		videos: [], 
		playlists: [], 
		channels: [], 
		shelfs: [], 
		others: [] 
	});

	return {
		estimatedResults: Number(data.estimatedResults),
		results: resultsObj,
	};
}
module.exports = search;

search('a')
	.then(r => console.log(r.results.videos.length));