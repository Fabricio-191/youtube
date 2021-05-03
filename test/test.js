/* eslint-disable no-console */
/* eslint-disable no-unreachable */
const fs = require('fs');

const { getVideo, getPlaylist, search } = require('../')
	.setDefaultOptions({
		location: 'US',
		language: 'es-419',
		quantity: 120,
	});

(async () => {
	const data = {};

	console.log('Getting video info');
	data.video = await getVideo(
		'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
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

/*
function extractFormatsFromXML(text){

}

let text = fs.readFileSync('./temp/index.m3u8').toString();

function extractFormatsFromM3U8(text){
	let manifests = text.split('#')
		.filter(x => x.startsWith('EXT-X-STREAM-INF'))
		.map(async txt => {
			let [meta, url] = txt.slice('EXT-X-STREAM-INF:'.length).split('\n');

			meta = meta.split(',')
				.reduce((acc, t, index, raw) => {
					let [key, value] = t.split('=');

					if(key === 'CODECS'){
						let next = raw[index +1];
						if(!next.includes('=')){
							value += `,${next}`;
						}
					}

					if(key && value) acc[key] = value;
					return acc;
				}, {});

			meta.CODECS = meta.CODECS.slice(1, -1).split(',');
			let formats = await fetch(url).text();

			formats = formats.split('\n').filter(x => x.startsWith('#EXTINF:'));

			console.log(formats)
			return {
				meta, url, formats
			};
		});

	return Promise.all(manifests);
}

extractFormatsFromM3U8(text)
*/
