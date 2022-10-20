import { request as HTTPrequest } from 'http';
import { request as HTTPSrequest } from 'https';
import type { Options } from './options';
import type { ContinuationItem, YTCFG } from './rawTypes';

export function fetch(url: string, options: Options): Promise<string> {
	const parsedURL = new URL(url);

	parsedURL.searchParams.set('hl', options.language);
	parsedURL.searchParams.set('gl', options.location);

	const lib = parsedURL.protocol === 'htts:' ? HTTPrequest : HTTPSrequest;
	return new Promise((res, rej) => {
		lib(parsedURL, options.requestsOptions, response => {
			const chunks: Buffer[] = [];

			response
				.on('data', (c: Buffer) => chunks.push(c))
				.on('end', () => res(Buffer.concat(chunks).toString()))
				.on('error', rej);
		})
			.on('error', rej)
			.end(options.requestsOptions.body ?? '');
	});
}

export async function getContinuation(
	continuationItem: ContinuationItem,
	ytcfg: YTCFG,
	options: Options
): Promise<unknown> {
	const { continuationEndpoint } = continuationItem.continuationItemRenderer;

	const POST_BODY = {
		context: ytcfg.INNERTUBE_CONTEXT,
		continuation: continuationEndpoint.continuationCommand.token,
	};

	const endpoint = continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
	const url = `https://www.youtube.com${endpoint}?key=${ytcfg.INNERTUBE_API_KEY}`;

	const optionsCopy = JSON.parse(JSON.stringify(options)) as Options;

	optionsCopy.requestsOptions.method = 'POST';
	optionsCopy.requestsOptions.body = JSON.stringify(POST_BODY);

	return JSON.parse(await fetch(url, optionsCopy)) as unknown;
}

const starts = {
	initialData: 'var ytInitialData = {',
	initialPlayerResponse: 'var ytInitialPlayerResponse = {',
	ytcfg: 'ytcfg.set({',
} as const;

export function getData(body: string, type: keyof typeof starts): unknown {
	const start = starts[type];

	const offset = body.indexOf(start);
	if(offset === -1) throw new Error('Error getting data from youtube');

	const startIndex = offset + start.length;

	let counter = 1;
	let inString = false;
	for(let i = startIndex; i < body.length; i++){
		const char = body[i];

		if(char === '"'){
			let count = 0;
			while(body[i - 1 - count] === '\\') count++;
			if(count % 2 === 1) continue;

			inString = !inString;
			continue;
		}
		if(inString) continue;

		if(char === '{'){
			counter++;
		}else if(char === '}'){
			counter--;
		}

		if(counter === 0){
			try{
				return JSON.parse(
					body.slice(startIndex - 1, i + 1)
				) as unknown;
			}catch(e){
				throw new Error('Error getting data from youtube');
			}
		}
	}

	throw new Error('Error getting data from youtube');
}
