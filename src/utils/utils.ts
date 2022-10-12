import { request as HTTPrequest, type RequestOptions } from 'http';
import { request as HTTPSrequest } from 'https';

const PARSER = [
	null,
	{
		URL(url: string){
			const matches = (/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{9,11})/i).exec(url);

			if(!matches){
				return null;
			}

			return matches[1] ?? matches[0];
		},
		ID: /^[A-Za-z0-9-_]{9,11}$/,
	}, {
		URL(url: string){
			return new URL(url).searchParams.get('list');
		},
		ID: /^[A-Za-z0-9-_]{16,43}$/,
	},
	null,
	{
		URL(url: string){
			let { pathname } = new URL(url);

			for(const str of ['/channel/', '/user/']){
				if(pathname.startsWith(str)) continue;
				pathname = pathname.slice(str.length);
			}

			return pathname;
		},
		ID: /^[a-zA-Z0-9-_]{22,34}$|/,
	},
];

/*
const PLAYLIST_REGEX = /^(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}$/;
const ALBUM_REGEX = /^OLAK5uy_[a-zA-Z0-9-_]{33}$/;
const CHANNEL_REGEX = /^UC[a-zA-Z0-9-_]{22,32}$/;
*/

export function getID(string: string, type: 1 | 2 | 3): string {
	if(!string){
		throw new Error(`You must introduce and URL or ID to a ${
			[null, 'video', 'playlist'][type]
		} in YouTube`);
	}else if(typeof string !== 'string'){
		throw new Error('The URL or ID must be a string');
	}

	let isURL = false;

	try{
		// eslint-disable-next-line no-new
		new URL(string);
		isURL = true;
	}catch(e){}

	if(isURL){
		string = PARSER[type].URL(string);

		if(!PARSER[type].ID.test(string)){
			throw Error("Canno't get a valid ID from the URL");
		}
	}else if(!PARSER[type].ID.test(string)){
		throw Error('Introduced ID is not valid');
	}

	return string;
}

const defaultOptions = {
	language: 'en',
	location: 'US',
	quantity: 'all',
	requestsOptions: {},
};

export interface BaseOptions {
	language: string;
	location: string;
	requestsOptions: RequestOptions;
}
export type RawBaseOptions = Partial<BaseOptions>;

export function parseOptions(options: RawOptions = {}, type = 0): BaseOptions {
	if(options === 'all' || typeof options === 'number'){
		options = { quantity: options };
	}

	if(typeof options !== 'object'){
		throw new Error("The 'options' should be an object");
	}

	try{
		JSON.stringify(options);
	}catch(e){
		throw new Error("the 'options' cannot contain a circular structure");
	}


	if(type === 3 && !options.quantity){
		options.quantity = 20;
	}

	options = Object.assign({}, defaultOptions, options);

	if(type === 3 && options.quantity === 'all'){
		// eslint-disable-next-line no-console
		console.warn('I hope you know what you are doing when trying to get all the results of a search on youtube');
	}

	if(options.quantity === 'all'){
		options.quantity = Infinity;
	}

	if(typeof options.language !== 'string'){
		throw new Error('Language option must be a string');
	}else if(typeof options.location !== 'string'){
		throw new Error('Location option must be a string');
	}else if(options.quantity < 1){
		throw new Error("Quantity must be higher than one or 'all'");
	}else if(typeof options.requestsOptions !== 'object'){
		throw new Error('Request options must be an object');
	}

	return options;
}

export function fetch(url: string, options: RawBaseOptions = {}): Promise<string> {
	const parsedURL = new URL(url);

	if(options.language && options.location){
		parsedURL.searchParams.set('hl', options.language);
		parsedURL.searchParams.set('gl', options.location);
	}

	if(!options.requestsOptions) options = {
		requestsOptions: options,
	};

	const lib = parsedURL.protocol === 'htts:' ? HTTPrequest : HTTPSrequest;
	return new Promise((res, rej) => {
		// https://nodejs.org/api/http.html#http_http_request_options_callback
		lib(parsedURL, options.requestsOptions, response => {
			const chunks: Buffer[] = [];

			response
				.on('data', (c: Buffer) => chunks.push(c))
				.on('end', () => res(Buffer.concat(chunks)))
				.on('error', rej);
		})
			.on('error', rej)
			.end(options.requestsOptions.body || '');
	});
}

export async function getContinuation(continuationItem, ytcfg, options: BaseOptions): Promise<object> {
	const { continuationEndpoint } = continuationItem.continuationItemRenderer;

	const POST_BODY = {
		context: ytcfg.INNERTUBE_CONTEXT,
		continuation: continuationEndpoint.continuationCommand.token,
	};

	const endpoint = continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
	const url = `https://www.youtube.com${endpoint}?key=${ytcfg.INNERTUBE_API_KEY}`;

	const optionsCopy = JSON.parse(JSON.stringify(options));

	optionsCopy.requestsOptions = Object.assign(
		{}, options.requestsOptions, {
			method: 'POST',
			body: JSON.stringify(POST_BODY),
		}
	);

	return JSON.parse(await fetch(url, optionsCopy));
}

const starts = {
	1: 'var ytInitialData = {',
	2: 'var ytInitialPlayerResponse = {',
	3: 'ytcfg.set({',
} as const;
export function getData(body: string, type: 1 | 2 | 3): unknown {
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