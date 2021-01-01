const http = require('http'), https = require('https');
function fetch(url, options){
	//https://nodejs.org/api/http.html#http_http_request_options_callback
	const parsedURL = new URL(url);

	parsedURL.searchParams.set('hl', options.language);
	parsedURL.searchParams.set('gl', options.location);

	return new Promise((resolve, reject) => {
		function cb(response){
			const chunks = [];

			response
				.on('data', chunk => chunks.push(chunk))
				.on('end', () => {
					let body = Buffer.concat(chunks).toString();

					resolve(body);
				})
				.on('error', reject);
		}

		(parsedURL.protocol === 'https:' ? https : http)
			.request(parsedURL, options, cb)
			.on('error', reject)
			.end(options.body || '');
	});
}

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
	for(let i = 0; i < body.length; i++){
		if(body[i-1] === '\\'){
			continue;

			/*
			let count = 1;
			while(body[i-1-count] === '\\'){
				count++;
			}	

			if(count % 0) continue;
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

async function getContinuation(continuationItem, YTconfig){
	const continuationEndpoint = continuationItem.continuationItemRenderer.continuationEndpoint;
	
	const POST_BODY = {
		context: YTconfig.INNERTUBE_CONTEXT, 
		continuation: continuationEndpoint.continuationCommand.token
	};

	const endpoint = continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
	const URL = `https://www.youtube.com${endpoint}?key=${YTconfig.INNERTUBE_API_KEY}`;

	const body = await fetch(URL, { 
		method: 'POST',
		body: JSON.stringify(POST_BODY)
	});

	return JSON.parse(body);
}

module.exports = {
    fetch, getData, getContinuation
}