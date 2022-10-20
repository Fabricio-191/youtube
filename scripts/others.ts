import { writeFileSync } from 'fs' 
import { fetch } from '../src/base/utils';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// to get a list of languages and locations codes
(async function(){
	const languagesList = await getList(`https://www.googleapis.com/youtube/v3/i18nLanguages?part=snippet&key=${YOUTUBE_API_KEY}`);
	const regionsList = await getList(`https://www.googleapis.com/youtube/v3/i18nRegions?part=snippet&key=${YOUTUBE_API_KEY}`);

	async function getList(url){
		// @ts-ignore
		const { items } = JSON.parse(await fetch(url));
		return items
			.map(item => ({
				code: item.snippet.gl || item.snippet.hl,
				name: item.snippet.name,
			}))
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	console.log(languagesList.map(x => `'${x.code}'`).join(' | '));
	console.log(regionsList.map(x => `'${x.code}'`).join(' | '));

	function getStr(list){
		let part = Math.floor((list.length + 1) / 3),
			str = '',
			[a, b, c] = [
				list.slice(0, part),
				list.slice(part, part * 2),
				list.slice(part * 2)
			];

		for(let i = 0; i < part; i++){
			str += `${
				(a[i] || '').padEnd(40, ' ')
			}${
				(b[i] || '').padEnd(40, ' ')
			}${
				(c[i] || '').padEnd(40, ' ')
			}\n`;
		}

		return str;
	}

	const txt = `
# List of locations

\`\`\`js
${getStr(regionsList.map(item => `${item.code} => ${item.name}`))}
\`\`\`
	
# List of languages
	
\`\`\`js
${getStr(languagesList.map(item => `${item.code} => ${item.name}`))}
\`\`\`	
`;

	console.log();
	writeFileSync(__dirname + '/list.md', txt);
})();