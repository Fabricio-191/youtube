/* eslint-disable no-console */
/* eslint-disable no-unreachable */
const fs = require('fs');

const { getVideo, getPlaylist, search } = require('../')
	.setDefaultOptions({
		location: 'US',
		quantity: 120,
	});

(async () => {
	const data = {};

	console.log('Getting video info');
	data.video = await getVideo(
		'https://www.youtube.com/watch?v=pUxtpgREKjY'
	).catch(err => { throw err; });

	console.log('Getting playlist');
	data.playlist = await getPlaylist(
		'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
	).catch(err => { throw err; });

	console.log('Searching...');
	data.search = await search('Node.js', { quantity: 50 })
		.catch(err => { throw err; });

	console.log('Works well :D');

	fs.writeFileSync(
		fs.existsSync('./test') ? './test/results.json' : './results.json',
		JSON.stringify(data, null, '\t')
	);
	return;

	fs.writeFileSync(
		fs.existsSync('./test') ? './test/results.js' : './results.js',
		'module.exports = ' + require('util').inspect(data, {
			depth: Infinity,
		})
	);
})();