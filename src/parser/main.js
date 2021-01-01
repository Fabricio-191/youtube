const {
	Thumbnails, Duration, Views,
	parseText, extractInt
} = require('./structures.js');

//#region video
function videoPrimaryInfoRenderer({ videoPrimaryInfoRenderer }){
	const [likes, dislikes] = videoPrimaryInfoRenderer.sentimentBar
		.sentimentBarRenderer.tooltip.split(' / ').map(Number);

	return {
		name: parseText(videoPrimaryInfoRenderer.title),
		views: new Views(videoPrimaryInfoRenderer.viewCount),

		likes, dislikes,

		uploadDate: parseText(videoPrimaryInfoRenderer.dateText),
	};
}

function videoSecondaryInfoRenderer({ videoSecondaryInfoRenderer }){
	return {
		owner: parse(videoSecondaryInfoRenderer.owner),
		description: parseText(videoSecondaryInfoRenderer.description)
	};
}

function compactVideoRenderer({ compactVideoRenderer }){
	let data = {
		name: parseText(compactVideoRenderer.title),
		ID: compactVideoRenderer.videoId,
		URL: 'https://www.youtube.com/watch?v=' + compactVideoRenderer.videoId,

		views: new Views(compactVideoRenderer),
		thumbnails: new Thumbnails(compactVideoRenderer.thumbnail),

		publishedDate: parseText(compactVideoRenderer.publishedTimeText),

		channel: bylineText(compactVideoRenderer)
	};

	if(compactVideoRenderer.lengthText){
		data.duration = new Duration(compactVideoRenderer);
	}

	return data;
}

function compactRadioRenderer({ compactRadioRenderer }){
	return {
		name: parseText(compactRadioRenderer.title),
		ID: compactRadioRenderer.playlistId,
		URL: compactRadioRenderer.shareUrl || 'https://www.youtube.com/playlist?list=' + compactRadioRenderer.playlistId,

		thumbnails: new Thumbnails(compactRadioRenderer.thumbnail),

		owner: bylineText(compactRadioRenderer),
	};
}

function watchNextEndScreenRenderer({ watchNextEndScreenRenderer }){
	return {
		title: parseText(watchNextEndScreenRenderer.title),
		items: watchNextEndScreenRenderer.results.map(parse)
	};
}

let endScreenVideoRenderer = ({ endScreenVideoRenderer }) => {
	return compactVideoRenderer({
		compactVideoRenderer: endScreenVideoRenderer
	});
};


let endScreenPlaylistRenderer = ({ endScreenPlaylistRenderer }) => {
	return compactRadioRenderer({
		compactRadioRenderer: endScreenPlaylistRenderer
	});
};

function playlist({ playlist }){//playlist where the video is
	return {
		ID: playlist.playlistId,
		title: parseText(playlist.titleText),

		owner: bylineText(playlist),

		videoQuantity: playlist.totalVideos,

		videos: playlist.videos.map(parse)
	};
}

function playlistPanelVideoRenderer({ playlistPanelVideoRenderer }){ //playlist video
	return {
		name: parseText(playlistPanelVideoRenderer.title),
		ID: playlistPanelVideoRenderer.videoId,
		playlistID: playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint.playlistId,
		URL: 'https://www.youtube.com' + playlistPanelVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url,

		duration: new Duration(playlistPanelVideoRenderer),
		views: new Views(playlistPanelVideoRenderer),
		thumbnails: new Thumbnails(playlistPanelVideoRenderer.thumbnail),

		publishedDate: parseText(playlistPanelVideoRenderer.publishedTimeText),

		channel: bylineText(playlistPanelVideoRenderer)
	};
}

//#endregion

//#region playlist
function playlistSidebarRenderer({ playlistSidebarRenderer }){
	let info = parse(playlistSidebarRenderer.items[0]);

	let ownerInfo = parse(playlistSidebarRenderer.items[1].playlistSidebarSecondaryInfoRenderer.videoOwner);

	info.owner = ownerInfo;

	return info;
}

function playlistSidebarPrimaryInfoRenderer({ playlistSidebarPrimaryInfoRenderer }){
	let ID = playlistSidebarPrimaryInfoRenderer.navigationEndpoint.watchEndpoint.playlistId;

	return {
		ID,
		URL: 'https://www.youtube.com/playlist?list=' + ID,
		name: parseText(playlistSidebarPrimaryInfoRenderer.title),

		videoQuantity: extractInt(playlistSidebarPrimaryInfoRenderer.stats[0]),
		views: extractInt(playlistSidebarPrimaryInfoRenderer.stats[1]),
		lastUpdate: parseText(playlistSidebarPrimaryInfoRenderer.stats[2]),

		description: parseText(playlistSidebarPrimaryInfoRenderer.description),

		thumbnails: new Thumbnails(
			playlistSidebarPrimaryInfoRenderer.thumbnailRenderer
				.playlistVideoThumbnailRenderer.thumbnail
		)
	};
}

function playlistVideoRenderer({ playlistVideoRenderer }){
	return {
		title: parseText(playlistVideoRenderer.title),

		ID: playlistVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${playlistVideoRenderer.videoId}`,
		
		index: extractInt(playlistVideoRenderer.index),

		thumbnails: new Thumbnails(playlistVideoRenderer.thumbnail),
		duration: new Duration(playlistVideoRenderer),

		channel: bylineText(playlistVideoRenderer)
	};
}
//#endregion

//#region search
function videoRenderer({ videoRenderer }){
	let channel = bylineText(videoRenderer);
	channel.thumbnails = new Thumbnails(
		videoRenderer
			.channelThumbnailSupportedRenderers
			.channelThumbnailWithLinkRenderer
			.thumbnail
	);

	return {
		ID: videoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${videoRenderer.videoId}`,
		
		title: parseText(videoRenderer.title),
		description: parseText(
			videoRenderer.descriptionSnippet
		),

		thumbnails: new Thumbnails(videoRenderer.thumbnail),

		duration: new Duration(videoRenderer),
		views: new Views(videoRenderer),

		channel,

		publishedTime: parseText(videoRenderer.publishedTimeText),
	};
}

function childVideoRenderer({ childVideoRenderer }){
	return {
		title: parseText(childVideoRenderer.title),
		ID: childVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${childVideoRenderer.videoId}`,

		duration: new Duration(childVideoRenderer),
	};
}

function playlistRenderer({ playlistRenderer }){
	return {
		ID: playlistRenderer.playlistId,
		title: parseText(playlistRenderer.title),
		videoCount: Number(playlistRenderer.videoCount),

		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: bylineText(playlistRenderer),

		thumbnails: new Thumbnails(
			playlistRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail
		),
	};
}

function channelRenderer({ channelRenderer }){
	return {
		ID: channelRenderer.channelId,
		URL: 'https://www.youtube.com/channel/' + channelRenderer.channelId,

		name: parseText(channelRenderer.title),

		description: parseText(channelRenderer.descriptionSnippet),
		
		thumbnails: new Thumbnails(channelRenderer.thumbnail),
		videoCount: extractInt(channelRenderer.videoCountText),
		subscribers: extractInt(channelRenderer.subscriberCountText)
	};
}

function shelfRenderer({ shelfRenderer }){
	let { 
		items, collapsedStateButtonText
	} = shelfRenderer.content.verticalListRenderer;

	return {
		title: parseText(shelfRenderer.title),
		label: parseText(collapsedStateButtonText),
		items: items.map(parse)
	};
}

function searchRefinementCardRenderer({ searchRefinementCardRenderer }){
	/*
    searchRefinementCardRenderer.thumbnail.thumbnails.map(img => {
        if(!img.url.startsWith('http')){
            img.url = 'https:' + img.url;
        }
        return img;
    })
    */

	return {
		query: parseText(searchRefinementCardRenderer.query),
		thumbnails: new Thumbnails(searchRefinementCardRenderer.thumbnail)
	};
}

function horizontalCardListRenderer({ horizontalCardListRenderer }){
	return {
		title: parseText(
			horizontalCardListRenderer.header
				.richListHeaderRenderer.title
		),
		items: horizontalCardListRenderer.cards.map(searchRefinementCardRenderer)
	};
}
//#endregion

//#region others
function videoOwnerRenderer({ videoOwnerRenderer }){
	let a = videoOwnerRenderer.navigationEndpoint.browseEndpoint;
	let data = {
		name: parseText(videoOwnerRenderer.title),
		thumbnails: new Thumbnails(videoOwnerRenderer.thumbnail),

		channel: {
			ID: a.browseId,
			URL: 'https://www.youtube.com/channel/' + a.browseId
		},

		user: {
			originalName: a.canonicalBaseUrl.slice(6),
			URL: 'https://www.youtube.com' + a.canonicalBaseUrl
		}
	};

	if(videoOwnerRenderer.subscriberCountText){
		let normal = parseText(videoOwnerRenderer.subscriberCountText);

		data.subscribers = {
			normal,
			number: extractInt(normal),
			toString(){
				return normal;
			}
		};
	}

	return data;
}

function bylineText({ longBylineText, shortBylineText }){//channel/owner
	let obj = longBylineText || shortBylineText;

	let text = parseText(obj);
	if(!obj.runs) return text;
	let endpoint = obj.runs.find(
		obj => obj.navigationEndpoint
	);

	if(!endpoint) return text;
	endpoint = endpoint.navigationEndpoint.browseEndpoint;

	let data = {
		name: text,
		ID: endpoint.browseId,
		URL: 'https://www.youtube.com/channel/' + endpoint.browseId
	};

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = 'https://www.youtube.com' + endpoint.canonicalBaseUrl;
	}

	return data;
}
//#endregion

const parsers = {
	videoPrimaryInfoRenderer,
	videoSecondaryInfoRenderer,
	compactVideoRenderer,
	compactRadioRenderer,
	playlistPanelVideoRenderer,
	watchNextEndScreenRenderer,
	endScreenVideoRenderer,
	endScreenPlaylistRenderer,
	playlist,

	playlistSidebarRenderer,
	playlistSidebarPrimaryInfoRenderer,  
	playlistVideoRenderer,

	channelRenderer,
	shelfRenderer,
	videoRenderer,
	playlistRenderer,
	horizontalCardListRenderer,

	videoOwnerRenderer
};

function parse(obj){
	let key = Object.keys(obj)[0];

	let parser = parsers[key];
	if(!parser){
		console.trace(`Cannot parse: ${key}`);
		//require('fs').writeFileSync(`./${key}.json`, JSON.stringify(obj, null, '\t'));
		return null;
	}

	return parser(obj);
}

module.exports = parse;

