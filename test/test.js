const { getVideo, search, getPlaylist } = require('../src/index.js');

(async () => {
	let data = {
		video: await getVideo('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'),
		playlist: await getPlaylist('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'),
		search: await search('Fazt')
	};

	require('fs')
		.writeFileSync('./cosas.json', JSON.stringify(data, null, '\t'));
})();