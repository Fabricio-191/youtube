const http = require('http'), https = require('https');
const defaultOptions = {
	language: 'en',
	location: 'US',
	quantity: 100
};

function fetch(url, options = {}){
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
			.request(url, options, cb)
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
		if(body[i-1] === '\\') continue;
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

async function getContinuation(continuationToken, { INNERTUBE_API_KEY, INNERTUBE_CONTEXT }, isSearch){
	const POST_BODY = {
		context: INNERTUBE_CONTEXT, 
		continuation: continuationToken
	};

	let URL = `https://www.youtube.com/youtubei/v1/${isSearch?'search':'browse'}?key=${INNERTUBE_API_KEY}`;

	let body = await fetch(URL, { 
		method: 'POST',
		body: JSON.stringify(POST_BODY)
	});

	let data = JSON.parse(body);

	data = (
		data.onResponseReceivedActions || //playlist
		data.onResponseReceivedCommands //search
	);

	return data[0]
		.appendContinuationItemsAction
		.continuationItems;
}


module.exports = {
	getData, fetch,
	parseOptions, defaultOptions,
	getID, getContinuation, parseText, extractInt,
};

function getID(string, playlist){
	let url = new URL(string);
	let ID = url.searchParams.get(
		playlist ? 'list' : 'v'
	);

	return ID;
}

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

function parseOptions(obj = {}){
	if(typeof obj !== 'object'){
		throw new Error('');
	}
	let options = Object.assign({}, defaultOptions, obj);

	return {
		quantity: options.quantity,
		query: {
			gl: options.location,
			hl: options.language,
		}
	};
}