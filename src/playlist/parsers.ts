function videoOwnerRenderer({ videoOwnerRenderer }){
	const { browseId, canonicalBaseUrl } = videoOwnerRenderer.navigationEndpoint.browseEndpoint;

	const data = {
		name: Utils.parseText(videoOwnerRenderer.title).toString(),
		ID: browseId,
		URL: `https://www.youtube.com/channel/${browseId}`,
		canonicalURL: `https://www.youtube.com${canonicalBaseUrl}`,
		thumbnails: new Utils.Thumbnails(videoOwnerRenderer.thumbnail),
	};

	if(videoOwnerRenderer.subscriberCountText){
		const normal = Utils.parseText(videoOwnerRenderer.subscriberCountText).toString();

		data.subscribers = {
			normal,
			number: Utils.extractInt(normal),
			toString(){
				return normal;
			},
		};
	}

	return data;
}

function bylineText({ longBylineText, shortBylineText }){// channel/owner
	const obj = longBylineText || shortBylineText;

	const text = Utils.parseText(obj);
	if(!obj.runs) return text;
	let endpoint = obj.runs.find(obj => obj.navigationEndpoint);

	if(!endpoint) return text.toString();
	endpoint = endpoint.navigationEndpoint.browseEndpoint;

	const data = {
		name: text.toString(),
		ID: endpoint.browseId,
		URL: `https://www.youtube.com/channel/${endpoint.browseId}`,
	};

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = `https://www.youtube.com${endpoint.canonicalBaseUrl}`;
	}

	return data;
}

function playerMicroformatRenderer({ playerMicroformatRenderer }){
	return {
		isFamilySafe: playerMicroformatRenderer.isFamilySafe || true,
		isUnlisted: playerMicroformatRenderer.isUnlisted || false,
		availableCountries: playerMicroformatRenderer.availableCountries || [],
		uploadDate: playerMicroformatRenderer.uploadDate || null,
		publishDate: playerMicroformatRenderer.publishDate || null,
	};
}