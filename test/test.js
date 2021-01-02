/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const fs = require('fs');

const YouTube = require('../')
	.setDefaultOptions({ 
		location: 'AR',
		language: 'es-419'
	});

//global['@Fabricio-191{ debugging }'] = true;

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

	fs.writeFileSync(
		fs.existsSync('./test') ? './test/results.json' : './results.json', 
		JSON.stringify(data, null, '\t')
	);
})();