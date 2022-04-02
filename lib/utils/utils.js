/* eslint-disable new-cap */
const PARSER = [
	null,
	{
		URL(url){
			const matches = url.match(
				/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{9,11})/i
			);

			return matches[1] || matches[0];
		},
		ID: /^[A-Za-z0-9-_]{9,11}$/,
	}, {
		URL(url){
			// @ts-ignore
			url = new URL(url);

			return url.searchParams.get('list');
		},
		ID: /^[A-Za-z0-9-_]{16,43}$/,
	},
	null,
	{
		URL(url){
			// @ts-ignore
			url = new URL(url);
			let { pathname } = url;

			for(const str of ['/channel/', '/user/']){
				if(pathname.startsWith(str)) continue;
				pathname = pathname.slice(str.length);
			}

			return pathname;
		},
		ID: /^[a-zA-Z0-9-_]{22,34}$|/,
	}
];

/*
const PLAYLIST_REGEX = /^(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}$/;
const ALBUM_REGEX = /^OLAK5uy_[a-zA-Z0-9-_]{33}$/;
const CHANNEL_REGEX = /^UC[a-zA-Z0-9-_]{22,32}$/;
*/

function getID(string, type){
	if(!string){
		throw new Error(`You must introduce and URL or ID to a ${
			[null, 'video', 'playlist'][type]
		} in YouTube`);
	}else if(typeof string !== 'string'){
		throw new Error('The URL or ID must be a string');
	}

	let isURL = false;

	try{
		// @ts-ignore
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

function parseOptions(options = {}, type = 0){
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

module.exports = {
	requests: require('./requests.js'),

	defaultOptions, parseOptions,
	getID,
};