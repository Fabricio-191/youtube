/* eslint-disable no-unused-vars */
const YTinfo = require('../src/index.js');
const fs = require('fs');

YTinfo.setDefaulOptions({ 
	location: 'AR',
	language: 'es'
});

(async () => {
	let data = {
		video: await YTinfo.getVideo(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
		),
		playlist: await YTinfo.getPlaylist(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', 
			{ quantity: 'all' }
		),
		search: await YTinfo.search(
			'Rainbow six siege', { quantity: 5 }
		)
	};

	fs.writeFileSync('./results.json', JSON.stringify(data, null, '\t'));
})();