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
		views: new Views(videoPrimaryInfoRenderer),

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

	return {
		name: parseText(compactVideoRenderer.title),
		ID: compactVideoRenderer.videoId,
		URL: 'https://www.youtube.com/watch?v=' + compactVideoRenderer.videoId,

		duration: new Duration(compactVideoRenderer),
		views: new Views(compactVideoRenderer),
		thumbnails: new Thumbnails(compactVideoRenderer.thumbnail),

		publishedDate: parseText(compactVideoRenderer.publishedTimeText),

		channel: longBylineText(compactVideoRenderer)
	};
}

function compactRadioRenderer({ compactRadioRenderer }){
    return {
		name: parseText(compactRadioRenderer.title),
		ID: compactRadioRenderer.playlistId,

		thumbnails: new Thumbnails(compactRadioRenderer.thumbnail)
	}
}

function playlistPanelVideoRenderer({ playlistPanelVideoRenderer }){
	return {
		name: parseText(compactVideoRenderer.title),
		ID: compactVideoRenderer.videoId,
		URL: 'https://www.youtube.com/watch?v=' + compactVideoRenderer.videoId,

		duration: new Duration(compactVideoRenderer),
		views: new Views(compactVideoRenderer),
		thumbnails: new Thumbnails(compactVideoRenderer.thumbnail),

		publishedDate: parseText(compactVideoRenderer.publishedTimeText),

		channel: longBylineText(playlistPanelVideoRenderer)
	};
}

function endScreenVideoRenderer({ endScreenVideoRenderer }){
    
}

function endScreenPlaylistRenderer({ endScreenPlaylistRenderer }){
    
}
//#endregion

//#region playlist
function playlistSidebarPrimaryInfoRenderer({ playlistSidebarPrimaryInfoRenderer }){
	let ID = playlistSidebarPrimaryInfoRenderer.navigationEndpoint.watchEndpoint.playlistId;

	return {
		ID,
		URL: 'https://www.youtube.com/playlist?list=' + ID,
		name: parseText(playlistSidebarPrimaryInfoRenderer.title),

		itemsQuantity: extractInt(playlistSidebarPrimaryInfoRenderer.stats[0]),
		views: extractInt(playlistSidebarPrimaryInfoRenderer.stats[1]),
		lastUpdate: parseText(playlistSidebarPrimaryInfoRenderer.stats[2]),

		description: parseText(playlistSidebarPrimaryInfoRenderer.description),

		thumbnails: new Thumbnails(
			playlistSidebarPrimaryInfoRenderer.thumbnailRenderer
				.playlistVideoThumbnailRenderer.thumbnails
		)
	};
}

function playlistVideoRenderer({ playlistVideoRenderer }){
	let channelID = playlistVideoRenderer.shortBylineText.runs.find(x => 
		x.navigationEndpoint
	).navigationEndpoint.browseEndpoint.browseId;

	return {
		title: Utils.parseText(playlistVideoRenderer.title),

		ID: playlistVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${playlistVideoRenderer.videoId}`,
		
		index: Utils.extractInt(playlistVideoRenderer.index),

		thumbnails: new Structures.Thumbnails(playlistVideoRenderer.thumbnail),
		duration: new Structures.Duration(playlistVideoRenderer),

		channel: {
			ID: channelID,
			name: Utils.parseText(playlistVideoRenderer.shortBylineText)
		}
	};
}
//#endregion

//#region search
function videoRenderer({ videoRenderer }){
	let channelID = videoRenderer.ownerText.runs.find(
		obj => obj.navigationEndpoint
	).navigationEndpoint.browseEndpoint.browseId;

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

		channel: {
			ID: channelID,
			URL: 'https://www.youtube.com/channel/' + channelID,
			name: parseText(videoRenderer.ownerText),
	
			thumbnails: new Thumbnails(
				videoRenderer
					.channelThumbnailSupportedRenderers
					.channelThumbnailWithLinkRenderer
					.thumbnail
			),
		},

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

		owner: longBylineText(playlistRenderer),

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
		items: items.map(Video)
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
			URL: 'https://www.youtube.com/' + a.canonicalBaseUrl
		}
	};

	if(videoOwnerRenderer.subscriberCountText){
		let normal = parseText(data.subscriberCountText);

		data.subscribers = {
			normal,
			number: extractInt(normal),
			toString(){
				return normal;
			}
		}
	}

	return data;
}

function longBylineText({ longBylineText }){//channel/owner
	let endpoint = longBylineText.runs.find(
		obj => obj.navigationEndpoint
	);

	if(!endpoint){
		return parseText(longBylineText);
	}
	endpoint = endpoint.navigationEndpoint.browseEndpoint

	let data = {
		name: parseText(longBylineText),
		ID: endpoint.browseId,
		URL: 'https://www.youtube.com/channel/' + endpoint.browseId
	}

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = 'https://www.youtube.com' + endpoint.canonicalBaseUrl
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
	endScreenVideoRenderer,
	endScreenPlaylistRenderer,

	playlistSidebarPrimaryInfoRenderer,  
	playlistVideoRenderer,

	channelRenderer,
	shelfRenderer,
	videoRenderer,
	playlistRenderer,
	horizontalCardListRenderer
};


function parse(obj){
	let key = Object.keys(obj)[0];

	let parser = parsers[key];
	if(!parsers){
		console.warn(`Cannot parse: ${key}`);
		return null;
	}

	return parser(obj);
}

module.exports = parse;

