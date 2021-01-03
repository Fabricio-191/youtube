/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const fs = require('fs');

const { getVideo, getPlaylist, search } = require('../')
	.setDefaultOptions({ 
		location: 'AR',
		language: 'es-419',
	});

(async () => {
	let data = {
		video: await getVideo(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
		),
		playlist: await getPlaylist(
			'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', 
			{ quantity: 'all' }
		),
		search: await search(
			'Node.js', { quantity: 20 }
		)
	};

	fs.writeFileSync(
		fs.existsSync('./test') ? './test/results.json' : './results.json', 
		JSON.stringify(data, null, '\t')
	);
})();