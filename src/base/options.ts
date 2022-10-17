import type { RequestOptions } from 'http';

const PARSER = {
	video: {
		url(url: string){
			const matches = (/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{9,11})/i).exec(url);

			if(!matches) return null;

			return matches[1] ?? matches[0] ?? null;
		},
		ID: /^[A-Za-z0-9-_]{9,11}$/,
	},
	playlist: {
		url(url: string){
			return new URL(url).searchParams.get('list');
		},
		ID: /^[A-Za-z0-9-_]{16,43}$/,
	},
	search: null,
	channel: {
		url(url: string){
			let { pathname } = new URL(url);

			for(const str of ['/channel/', '/user/']){
				if(pathname.startsWith(str)) continue;
				pathname = pathname.slice(str.length);
			}

			return pathname;
		},
		ID: /^[a-zA-Z0-9-_]{22,34}$|/,
	},
	/*
	const PLAYLIST_REGEX = /^(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}$/;
	const ALBUM_REGEX = /^OLAK5uy_[a-zA-Z0-9-_]{33}$/;
	const CHANNEL_REGEX = /^UC[a-zA-Z0-9-_]{22,32}$/;
	*/
};

type TYPE = keyof typeof PARSER;

const isURL = (string: string): boolean => {
	try{
		// eslint-disable-next-line no-new
		new URL(string);
		return true;
	}catch{
		return false;
	}
};

export function getID(string: string, type: Exclude<TYPE, 'search'>): string {
	if(!string){
		throw new Error(`You must introduce and URL or ID to a ${type} in YouTube`);
	}else if(typeof string !== 'string'){
		throw new Error('The URL or ID must be a string');
	}

	const id = isURL(string) ?
		PARSER[type].url(string) :
		string;

	if(!id || !PARSER[type].ID.test(string)){
		throw new Error(
			isURL(string) ?
				`The URL is not a valid YouTube ${type} URL` :
				`The ID is not a valid YouTube ${type} ID`
		);
	}

	return id;
}

export interface Options {
	language: string;
	location: string;
	quantity: number;
	raw: boolean;
	requestsOptions: RequestOptions & { body?: string };
}

export const defaultOptions: Options = {
	language: 'en',
	location: 'US',
	quantity: 1,
	raw: false,
	requestsOptions: {},
};

export type RawOptions = Partial<{
	language: string;
	location: string;
	quantity: number | 'all';
	requestsOptions: RequestOptions & { body?: string };
}> | number | 'all';

export function parseOptions(rawOptions: RawOptions, type: TYPE): Options {
	if(rawOptions === 'all' || typeof rawOptions === 'number'){
		// @ts-expect-error - rawOptions is not an object here
		rawOptions = { quantity: rawOptions };
	}

	if(typeof rawOptions !== 'object'){
		throw new Error("The 'options' should be an object");
	}

	try{
		JSON.stringify(rawOptions);
	}catch(e){
		throw new Error("the 'options' cannot contain a circular structure");
	}

	if(rawOptions.quantity === 'all'){
		rawOptions.quantity = Infinity;
	}

	const options = Object.assign({}, defaultOptions, rawOptions) as Options;

	if(type === 'search' && options.quantity === Infinity){
		// eslint-disable-next-line no-console
		console.warn('I hope you know what you are doing when trying to get all the results of a search on youtube');
	}

	if(typeof options.language !== 'string'){
		throw new Error('Language option must be a string');
	}else if(typeof options.location !== 'string'){
		throw new Error('Location option must be a string');
	}else if(options.quantity < 1){
		throw new Error("Quantity must be a number higher than one or 'all'");
	}else if(typeof options.requestsOptions !== 'object'){
		throw new Error('Request options must be an object');
	}

	return options;
}
