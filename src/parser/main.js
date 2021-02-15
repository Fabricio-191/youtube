const Utils = require('./utils.js');

//#region video
function compactVideoRenderer({ compactVideoRenderer, endScreenVideoRenderer }){
	let videoData = compactVideoRenderer || endScreenVideoRenderer;

	let data = {
		name: Utils.parseText(videoData.title).toString(),
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',

		views: new Utils.Views(videoData),
		thumbnails: new Utils.Thumbnails(videoData.thumbnail),

		publishedDate: Utils.parseText(videoData.publishedTimeText).toString(),

		owner: bylineText(videoData),
	};

	if(videoData.lengthText) data.duration = new Utils.Duration(videoData);

	return data;
}

function compactRadioRenderer({ compactRadioRenderer, endScreenPlaylistRenderer }){
	let data = compactRadioRenderer || endScreenPlaylistRenderer;

	return {
		name: Utils.parseText(data.title).toString(),
		ID: data.playlistId,
		URL: data.shareUrl || `https://www.youtube.com/playlist?list=${data.playlistId}`,
		type: 'playlist',

		thumbnails: new Utils.Thumbnails(data.thumbnail),

		owner: bylineText(data),
	};
}
//#endregion

//#region search
function videoRenderer({ videoRenderer, promotedVideoRenderer }){
	let videoData = videoRenderer || promotedVideoRenderer;

	let data = {
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',
		
		title: Utils.parseText(videoData.title).toString(),
		description: Utils.parseText(
			videoData.descriptionSnippet
		),

		thumbnails: new Utils.Thumbnails(videoData.thumbnail),
		views: new Utils.Views(videoData),

		owner: bylineText(videoData),

		publishedTime: Utils.parseText(videoData.publishedTimeText).toString(),
	};

	if(videoData.lengthText){
		data.duration = new Utils.Duration(videoData);
	}

	if(videoData.channelThumbnailSupportedRenderers){
		data.owner.thumbnails = new Utils.Thumbnails(
			videoData
				.channelThumbnailSupportedRenderers
				.channelThumbnailWithLinkRenderer
				.thumbnail
		);
	}

	if(promotedVideoRenderer){
		data.AD = promotedVideoRenderer.navigationEndpoint.urlEndpoint.url;
	}

	return data;
}

function childVideoRenderer({ childVideoRenderer }){
	return {
		title: Utils.parseText(childVideoRenderer.title).toString(),
		ID: childVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${childVideoRenderer.videoId}`,

		duration: new Utils.Duration(childVideoRenderer),
	};
}

function playlistRenderer({ playlistRenderer }){
	return {
		ID: playlistRenderer.playlistId,
		URL: `https://www.youtube.com/playlist?list=${playlistRenderer.playlistId}`,
		title: Utils.parseText(playlistRenderer.title).toString(),

		type: 'playlist',
		videoCount: Number(playlistRenderer.videoCount),

		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: bylineText(playlistRenderer),

		thumbnails: new Utils.Thumbnails(
			playlistRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail
		),
	};
}

function channelRenderer({ channelRenderer }){
	return {
		ID: channelRenderer.channelId,
		URL: `https://www.youtube.com/channel/${channelRenderer.channelId}`,
		type: 'channel',

		name: Utils.parseText(channelRenderer.title).toString(),

		description: Utils.parseText(channelRenderer.descriptionSnippet),
		
		thumbnails: new Utils.Thumbnails(channelRenderer.thumbnail),
		videoCount: Utils.extractInt(channelRenderer.videoCountText),
		subscribers: Utils.extractInt(channelRenderer.subscriberCountText),
	};
}

function shelfRenderer({ shelfRenderer }){
	let { 
		items, collapsedStateButtonText,
	} = shelfRenderer.content.verticalListRenderer;

	return {
		title: Utils.parseText(shelfRenderer.title).toString(),
		label: Utils.parseText(collapsedStateButtonText).toString(),
		type: 'shelf',
		items: items.map(parse),
	};
}

function horizontalCardListRenderer({ horizontalCardListRenderer }){
	return {
		title: Utils.parseText(
			horizontalCardListRenderer.header
				.richListHeaderRenderer.title
		).toString(),
		type: 'horizontalCardList',
		items: horizontalCardListRenderer.cards.map(
			({ searchRefinementCardRenderer }) => ({
				title: Utils.parseText(searchRefinementCardRenderer.query).toString(),
				thumbnails: new Utils.Thumbnails(searchRefinementCardRenderer.thumbnail),
			})
		),
	};
}

function searchPyvRenderer({ searchPyvRenderer }){
	return {
		type: 'searchAds',
		items: searchPyvRenderer.ads.map(videoRenderer),
	};
}
//#endregion

//#region others
function videoOwnerRenderer({ videoOwnerRenderer }){
	let { browseId, canonicalBaseUrl } = videoOwnerRenderer.navigationEndpoint.browseEndpoint;

	let data = {
		name: Utils.parseText(videoOwnerRenderer.title).toString(),
		ID: browseId,
		URL: `https://www.youtube.com/channel/${browseId}`,
		canonicalURL: `https://www.youtube.com${canonicalBaseUrl}`,
		thumbnails: new Utils.Thumbnails(videoOwnerRenderer.thumbnail),
	};

	if(videoOwnerRenderer.subscriberCountText){
		let normal = Utils.parseText(videoOwnerRenderer.subscriberCountText).toString();

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

function bylineText({ longBylineText, shortBylineText }){//channel/owner
	let obj = longBylineText || shortBylineText;

	let text = Utils.parseText(obj);
	if(!obj.runs) return text;
	let endpoint = obj.runs.find(obj => obj.navigationEndpoint);

	if(!endpoint) return text.toString();
	endpoint = endpoint.navigationEndpoint.browseEndpoint;

	let data = {
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
//#endregion

const parsers = {
	compactVideoRenderer, 
	compactRadioRenderer, 
	endScreenVideoRenderer: compactVideoRenderer,
	endScreenPlaylistRenderer: compactRadioRenderer,

	channelRenderer,
	shelfRenderer,
	videoRenderer,
	playlistRenderer,
	
	horizontalCardListRenderer,
	searchPyvRenderer,

	videoOwnerRenderer,
	bylineText,
	playerMicroformatRenderer,
};

function parse(obj){
	let key = Object.keys(obj)[0];

	if(!parsers[key]){
		//require('fs').writeFileSync(`./${key}.json`, JSON.stringify(obj, null, '\t'));
		return null;
	}

	return parsers[key](obj);
}

module.exports = {
	parsers,
	parse,
	Utils,
};