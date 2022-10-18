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

interface playerMicroformatData {
	isFamilySafe: boolean;
	isUnlisted: boolean;
	availableCountries: string[];
	uploadDate: Date | null;
	publishDate: Date | null;
}

function playerMicroformatRenderer({ playerMicroformatRenderer }: object): playerMicroformatData {
	return {
		isFamilySafe: playerMicroformatRenderer.isFamilySafe || true,
		isUnlisted: playerMicroformatRenderer.isUnlisted || false,
		availableCountries: playerMicroformatRenderer.availableCountries || [],
		uploadDate: playerMicroformatRenderer.uploadDate || null,
		publishDate: playerMicroformatRenderer.publishDate || null,
	};
}