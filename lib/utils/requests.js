const http = require('http'), https = require('https');

function fetch(url, options = {}){
	// @ts-ignore
	const parsedURL = new URL(url);

	if(options.language && options.location){
		parsedURL.searchParams.set('hl', options.language);
		parsedURL.searchParams.set('gl', options.location);
	}

	if(!options.requestsOptions) options = {
		requestsOptions: options,
	};

	const promise = new Promise((resolve, reject) => {
		(parsedURL.protocol === 'htts:' ? http : https)
			.request(parsedURL, options.requestsOptions, cb)
			// https://nodejs.org/api/http.html#http_http_request_options_callback
			.on('error', reject)
			.end(options.requestsOptions.body || '');

		function cb(response){
			const body = new Promise((res, rej) => {
				const chunks = [];

				response
					.on('data', chunks.push.bind(chunks))
					.on('end', () => res(Buffer.concat(chunks)))
					.on('error', rej);
			});

			Object.assign(response, {
				buffer: () => body,
				text: async () => (await body).toString(),
				json: async () => JSON.parse(
					(await body).toString()
				),
			});

			resolve(response);
		}
	});

	Object.assign(promise, {
		buffer: async () => (await promise).buffer(),
		text: async () => (await promise).text(),
		json: async () => (await promise).json(),
	});

	return promise;
}

/*
let response = await fetch(url);
let body = await response.text();

//or

let body = await fetch(url).text();
*/

async function getContinuation(continuationItem, ytcfg, options){
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

	// @ts-ignore
	return await fetch(url, optionsCopy).json();
}

module.exports = {
	fetch, getData, getContinuation,
};

function getData(body, type){
	const start = {
		1: 'var ytInitialData = {',
		2: 'var ytInitialPlayerResponse = {',
		3: 'ytcfg.set({',
	}[type];

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
				);
			}catch(e){
				throw new Error('Error getting data from youtube');
			}
		}
	}

	throw new Error('Error getting data from youtube');
}