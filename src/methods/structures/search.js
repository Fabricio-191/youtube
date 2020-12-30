const { parseText, extractInt } = require('../utils.js');
const { Thumbnails, Duration, Views } = require('./structures.js');

function Video({ videoRenderer }){
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

		thumbnails: new Thumbnails(videoRenderer),

		duration: new Duration(videoRenderer),
		views: new Views(videoRenderer),

		channel: {
			ID: channelID,
			URL: 'https://www.youtube.com/channel/' + channelID,
			name: parseText(videoRenderer.ownerText),
	
			thumbnails: new Thumbnails(
				videoRenderer.channelThumbnailSupportedRenderers
					.channelThumbnailWithLinkRenderer
			),
		},

		publishedTime: parseText(videoRenderer.publishedTimeText),
	};
}

function Playlist({ playlistRenderer }){
	let ownerEndpoint = playlistRenderer.longBylineText.runs
		.find(a => a.navigationEndpoint).navigationEndpoint.browseEndpoint;

	return {
		ID: playlistRenderer.playlistId,
		title: parseText(playlistRenderer.title),
		videoCount: Number(playlistRenderer.videoCount),

		showedVideos: playlistRenderer.videos.map(
			({ childVideoRenderer }) => ({
				title: parseText(childVideoRenderer.title),
				ID: childVideoRenderer.videoId,
				URL: `https://www.youtube.com/watch?v=${childVideoRenderer.videoId}`,
		
				duration: new Duration(childVideoRenderer),
			})
		),

		owner: {
			name: parseText(playlistRenderer.longBylineText),
			ID: ownerEndpoint.browseId,
			URL: `https://www.youtube.com/${ownerEndpoint.canonicalBaseUrl}`
		},

		thumbnails: new Thumbnails(playlistRenderer),
	};
}

function Channel({ channelRenderer }){
	return {
		ID: channelRenderer.channelId,
		name: parseText(channelRenderer.title),
		description: parseText(channelRenderer.descriptionSnippet),
		thumbnails: new Thumbnails(channelRenderer),
		videos: extractInt(channelRenderer.videoCountText),
		subscribers: extractInt(channelRenderer.subscriberCountText)
	};
}

function Shelf({ shelfRenderer }){
	let { 
		items, collapsedStateButtonText
	} = shelfRenderer.content.verticalListRenderer;

	return {
		title: parseText(shelfRenderer.title),
		label: collapsedStateButtonText.accessibility
			.accessibilityData.label,
		items: items.map(Video)
	};
}

module.exports = {
	Video,
	Playlist,
	Channel,
	Shelf,
};
