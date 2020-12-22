const http = require('http'), https = require('https');
const defaultOptions = {
	language: 'en',
	location: 'US',
	quantity: 20
};

function fetch(url, options){
	//https://nodejs.org/api/http.html#http_http_request_options_callback
	const parsedURL = new URL(url);

	parsedURL.searchParams.set('hl', options.language);
	parsedURL.searchParams.set('gl', options.location);

	return new Promise((resolve, reject) => {
		function cb(response){
			let body = [];

			response
				.on('data', chunk => body.push(chunk))
				.on('end', () => 
					resolve(Buffer.concat(body).toString())
				)
				.on('error', reject);
		}

		(parsedURL.protocol === 'https:' ? https : http)
			.request(parsedURL, options, cb)
			.on('error', reject)
			.end(options.body || '');
	});
}

function getData(body, type){
	let start = {
		1: 'var ytInitialData = {',
		2: 'var ytInitialPlayerResponse = {',
		3: 'ytcfg.set({'
	}[type];
	
	let offset = body.indexOf(start);
	if(offset === -1) throw new Error('Error getting data from youtube');

	body = body.slice(offset + start.length -1);

	let counter = 0;
	for(let i = 0; i < body.length; i++){
		if(body[i-1] === '\\'){
			continue;

			/*
			let count = 1;
			while(body[i-1-count] === '\\'){
				count++;
			}

			if(count % 2) continue;
			*/
		}
		let char = body[i];

		if(char === '{'){
			counter++;
		}else if(char === '}'){
			counter--;
		}

		if(counter === 0){
			try{
				return JSON.parse(
					body.slice(0, i +1)
				);
			}catch(e){
				throw new Error('Error getting data from youtube');
			}
		}
	}
}

async function getContinuation(continuationItem, { INNERTUBE_API_KEY, INNERTUBE_CONTEXT }){
	let continuationEndpoint = continuationItem.continuationItemRenderer.continuationEndpoint;
	
	const POST_BODY = {
		context: INNERTUBE_CONTEXT, 
		continuation: continuationEndpoint.continuationCommand.token
	};

	let endpoint = continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
	let URL = `https://www.youtube.com${endpoint}?key=${INNERTUBE_API_KEY}`;

	let body = await fetch(URL, { 
		method: 'POST',
		body: JSON.stringify(POST_BODY)
	});

	return JSON.parse(body);
}

module.exports = {
	getData, fetch, getContinuation,
	
	parseText, extractInt,

	getID, parseOptions, defaultOptions,
};

function parseText(obj = ''){
	if(obj.simpleText) return obj.simpleText;
	
	let str = '';
	if(obj.runs){
		obj.runs.map(t => str += t.text);
	}

	return str;
}

function extractInt(str){
	if(typeof str === 'object') {
		str = parseText(str);
	}

	return Number(
		str.match(/\d/g).join('')
	);
}


function getID(string, playlist){
	let url = new URL(string);
	let ID = url.searchParams.get(
		playlist ? 'list' : 'v'
	);

	return ID;
}

function parseOptions(options = {}, type){
	//types: 1 = video, 2 = playlist, 3 = search
	if(options === 'all' || typeof options === 'number'){
		options = { quantity: options };
	}
	
	if(typeof options !== 'object'){
		throw new Error('The options should be an object');
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
	}

	return options;
}