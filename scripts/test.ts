/* eslint-disable no-console */
/* eslint-disable no-unreachable */
import { writeFileSync } from 'fs';
import { setDefaultOptions } from '../src';

const { getVideo, getPlaylist, search } = setDefaultOptions({
	location: 'US',
	quantity: 120,
});

const data: {
	video?: ReturnType<typeof getVideo>;
	playlist?: ReturnType<typeof getPlaylist>;
	search?: ReturnType<typeof search>;
} = {};

console.log('Getting video info');
data.video = await getVideo(
	'https://www.youtube.com/watch?v=pUxtpgREKjY'
);

console.log('Getting playlist');
data.playlist = await getPlaylist(
	'https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg'
);

console.log('Searching...');
data.search = await search('Node.js', { quantity: 50 });

console.log('Works well :D');

writeFileSync(
	'./scripts/results.json',
	JSON.stringify(data, null, '\t')
);