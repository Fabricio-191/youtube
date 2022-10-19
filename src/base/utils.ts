import { request as HTTPrequest } from 'http';
import { request as HTTPSrequest } from 'https';
import type { Options } from './options';
import type { Text, ContinuationItem, YTCFG, Thumbnail } from './rawTypes';

export function parseText(thing: Text.Any): string {
	if(!thing) throw new Error('Could not parse text');

	if('simpleText' in thing) return thing.simpleText;
	if('accessibilityData' in thing) return thing.accessibilityData.label;
	if('runs' in thing){
		return thing.runs.map(run => run.text).join('');
	}

	throw new Error('Unknown text type');
}

export function parseNumber(str: string): number | null {
	const result = str.match(/K|M|\.|,|\d/g);
	if(result === null){
		throw new Error("Couldn't parse number");
	}

	return Number(result.join(''));
}

// eslint-disable-next-line @typescript-eslint/sort-type-union-intersection-members
export type Channel = ({ name: string } | { name: string; ID: string; URL: string }) & {
	canonicalURL?: string;
	thumbnails?: Thumbnail[];
};

export function parseBylineText(byLineText: Text.Runs): Channel {
	const text = parseText(byLineText);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const endpoint = byLineText.runs.find(obj => 'navigationEndpoint' in obj)?.navigationEndpoint?.browseEndpoint;
	if(!endpoint) return { name: text };

	const data: Channel = {
		name: text,
		ID: endpoint.browseId,
		URL: `https://www.youtube.com/channel/${endpoint.browseId}`,
	};

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = `https://www.youtube.com${endpoint.canonicalBaseUrl}`;
	}

	return data;
}
export function fetch(url: string, options: Options): Promise<string> {
	const parsedURL = new URL(url);

	if(options.language && options.location){
		parsedURL.searchParams.set('hl', options.language);
		parsedURL.searchParams.set('gl', options.location);
	}

	const lib = parsedURL.protocol === 'htts:' ? HTTPrequest : HTTPSrequest;
	return new Promise((res, rej) => {
		// https://nodejs.org/api/http.html#http_http_request_options_callback
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

	optionsCopy.requestsOptions = Object.assign(
		{}, options.requestsOptions, {
			method: 'POST',
			body: JSON.stringify(POST_BODY),
		}
	);

	return JSON.parse(await fetch(url, optionsCopy)) as object;
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
