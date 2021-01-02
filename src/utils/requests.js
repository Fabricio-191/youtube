const http = require('http'), https = require('https');

function fetch(url, options){
	const parsedURL = new URL(url);

	parsedURL.searchParams.set('hl', options.language);
	parsedURL.searchParams.set('gl', options.location);

	return new Promise((resolve, reject) => {
		function cb(response){
			const chunks = [];

			response
				.on('data', chunk => {
					chunks.push(chunk);
				})
				.on('end', () => {
					let body = Buffer.concat(chunks).toString();
					
					resolve(body);
				})
				.on('error', reject);
		}

		(parsedURL.protocol === 'https:' ? https : http)
			.request(parsedURL, options.requestsOptions, cb) 
			//https://nodejs.org/api/http.html#http_http_request_options_callback
			.on('error', reject)
			.end(options.body || '');
	});
}

async function getContinuation(continuationItem, ytcfg, options){
	const continuationEndpoint = continuationItem.continuationItemRenderer.continuationEndpoint;
	
	const POST_BODY = {
		context: ytcfg.INNERTUBE_CONTEXT, 
		continuation: continuationEndpoint.continuationCommand.token
	};

	const endpoint = continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
	const URL = `https://www.youtube.com${endpoint}?key=${ytcfg.INNERTUBE_API_KEY}`;
	
	const body = await fetch(URL, 
		Object.assign({}, options.requestsOptions, {
			method: 'POST',
			body: JSON.stringify(POST_BODY)
		})	
	);

	return JSON.parse(body);
}

module.exports = {
	fetch, getData, getContinuation
};

function getData(body, type){
	const start = {
		1: 'var ytInitialData = {',
		2: 'var ytInitialPlayerResponse = {',
		3: 'ytcfg.set({'
	}[type];
	
	const offset = body.indexOf(start);
	if(offset === -1) throw new Error('Error getting data from youtube');

	body = body.slice(offset + start.length -1);

	let counter = 0;
	let inString = false;
	for(let i = 0; i < body.length; i++){
		let char = body[i];

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
					body.slice(0, i +1)
				);
			}catch(e){
				throw new Error('Error getting data from youtube');
			}
		}
	}
}
