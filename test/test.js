/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const YouTube = require('../')
	.setDefaulOptions({ 
		location: 'AR',
		language: 'es'
	});

(async () => {
	let data = {
		video: await YouTube.getVideo(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
		),
		playlist: await YouTube.getPlaylist(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', 
			{ quantity: 'all' }
		),
		search: await YouTube.search(
			'Rainbow six siege', { quantity: 5 }
		)
	};

	fs.writeFileSync('./results.json', JSON.stringify(data, null, '\t'));
})();

//to get raw data:
/*
(async function(){
	let videoBody = await fetch('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg');
	let playlistBody = await fetch('https://www.youtube.com/playlist?list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg');
	let searchBody = await fetch('https://www.youtube.com/results?search_query=' + 'Fazt');

	let data = {
		video: {
			initialData: getData(videoBody, 1),
			initialPlayerResponse: getData(videoBody, 2),
		},
		playlist: {
			initialData: getData(playlistBody, 1),
			ytcfg: getData(playlistBody, 3),
			continuations: [],
		},
		search: {
			initialData: getData(searchBody, 1),
			ytcfg: getData(searchBody, 3),
			continuations: []
		},
	};

	let playlistVideos = data.playlist.initialData.contents
		.twoColumnBrowseResultsRenderer.tabs[0]
		.tabRenderer.content
		.sectionListRenderer.contents[0]
		.itemSectionRenderer.contents[0]
		.playlistVideoListRenderer.contents;

	while(playlistVideos.length < 300){
		if(!playlistVideos[playlistVideos.length -1].continuationItemRenderer) break;
		let token = playlistVideos.pop()
			.continuationItemRenderer
			.continuationEndpoint
			.continuationCommand
			.token;

		let continuation = await getContinuation(
			token, data.playlist.ytcfg
		);

		playlistVideos = playlistVideos.concat(
			continuation.onResponseReceivedActions[0].appendContinuationItemsAction
			.continuationItems
		);
		data.playlist.continuations.push(continuation);
	}

	
	const { contents } = data.search.initialData.contents.twoColumnSearchResultsRenderer
		.primaryContents.sectionListRenderer;

	let results = contents.find(a => 
		a.itemSectionRenderer && a.itemSectionRenderer.contents.length > 3
	).itemSectionRenderer.contents;

	while(results.length < 40){
		try{
			let index = contents.findIndex(a => a.continuationItemRenderer);
			let continuationToken = contents.splice(index, 1)[0]
				.continuationItemRenderer.continuationEndpoint
				.continuationCommand.token;

			let continuation = await getContinuation(
				continuationToken, data.search.ytcfg, true
			);

			contents.push(
				continuation.onResponseReceivedCommands[0].appendContinuationItemsAction
				.continuationItems[1]
			)

			results = results.concat(
				continuation.onResponseReceivedCommands[0].appendContinuationItemsAction
				.continuationItems[0]
				.itemSectionRenderer.contents
			);
			data.search.continuations.push(continuation);
		}catch(e){
			console.log(e);
			break;
		}
	}
		
	require('fs')
		.writeFileSync('./cosas.json', JSON.stringify(data, null, '\t'));
});
*/