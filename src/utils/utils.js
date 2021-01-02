const REGEX = [
	null,
	{
		URL: /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i,
		ID: /^[A-Za-z0-9-_]{9,11}$/,
	}, {
		URL: /[?&]list=([^#&?]+)/,
		ID: /^[A-Za-z0-9-_]{16,43}$/,
	}
];

/*
const PLAYLIST_REGEX = /^(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}$/;
const ALBUM_REGEX = /^OLAK5uy_[a-zA-Z0-9-_]{33}$/;
const CHANNEL_REGEX = /^UC[a-zA-Z0-9-_]{22,32}$/;
*/

function getID(string, type){
	let a = {
		1: 'video',
		2: 'playlist'
	}[type];

	if(!string){
		throw new Error(`You must introduce and URL or ID to a ${a} in YouTube`);
	}else if(typeof string !== 'string'){
		throw new Error('The URL or ID must be a string');
	}

	if(isURL(string)){
		let matches = string.match(REGEX[type].URL);
		if(!matches){
			throw Error("Canno't get a valid ID from the URL");
		}
		string = matches[1] || matches[0];
		
		if(!REGEX[type].ID.test(string)){
			throw Error("Canno't get a valid ID from the URL");
		}
	}else if(!REGEX[type].ID.test(string)){
		throw Error('Introduced ID is not valid');
	}

	return string;
}

function isURL(string){
	try{
		new URL(string);
		return true;
	}catch(e){
		return false;
	}
}

const defaultOptions = {
	language: 'en',
	location: 'US',
	quantity: 'all',
	raw: false,
	requestsOptions: {}
};

function parseOptions(options = {}, type){
	//types: 1 = video, 2 = playlist, 3 = search
	if(options === 'all' || typeof options === 'number'){
		options = { quantity: options };
	}
	
	if(typeof options !== 'object'){
		throw new Error('The options should be an object');
	}

	if(type === 3 && !options.quantity){
		options.quantity = 20;
	}

	options = Object.assign({}, defaultOptions, options);
	
	if(type === 3 && options.quantity === 'all'){
		console.warn('I hope you know what you are doing when trying to get all the results of a search on youtube');
	}

	if(options.quantity === 'all'){
		options.quantity = Infinity;
	}

	if(typeof options.language !== 'string'){
		throw new Error('Language option must be a string');
	}else if(typeof options.location !== 'string'){
		throw new Error('Location option must be a string');
	}else if(Math.sign(options.quantity) !== 1){
		throw new Error("Quantity must be an non-zero positive number or 'all'");
	}else if(typeof options.raw !== 'boolean'){
		throw new Error("The 'raw' option must be a boolean");
	}else if(typeof options.requestsOptions !== 'object'){
		throw new Error('Request options must be an object');
	}

	return options;
}

module.exports = {
	requests: require('./requests.js'),

	defaultOptions, parseOptions,
	getID
};