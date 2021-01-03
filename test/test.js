/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const fs = require('fs');

const { getVideo, getPlaylist, search } = require('../')
	.setDefaultOptions({ 
		location: 'AR',
		language: 'es-419',
	});

(async () => {
	throw new Error('a');
	let data = {
		video: await getVideo(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao'
		),
		playlist: await getPlaylist(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', 
			{ quantity: 'all' }
		),
		search: await search('Node.js', { quantity: 40 })
	};

	return; //console.log(data);

	if(fs.existsSync('./test')) return; //running from the test script

	fs.writeFileSync('./results.json', JSON.stringify(data, null, '\t'));
})();