/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unreachable */
const fs = require('fs');

const { getVideo, getPlaylist, search } = require('../')
	.setDefaultOptions({ 
		location: 'AR',
		language: 'es-419',
		quantity: 120
	});

(async () => {
	let data = {};

	console.log('Getting video info');
	data.video = await getVideo(
		'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
	);

	console.log('Getting playlist');
	data.playlist = await getPlaylist(
		'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', 
	);

	console.log('Searching...');
	data.search = await search('Node.js', { quantity: 100 });

	console.log('Works well :D');
	if(fs.existsSync('./test')) return;
	fs.writeFileSync('./results.json', JSON.stringify(data, null, '\t'));
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