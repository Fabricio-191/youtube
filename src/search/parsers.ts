import { parseText } from '../base/parsing';

function videoRenderer({ videoRenderer, promotedVideoRenderer }){
	const videoData = videoRenderer || promotedVideoRenderer;

	const data = {
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',

		title: parseText(videoData.title).toString(),
		description: parseText(
			videoData.descriptionSnippet
		),

		thumbnails: videoData.thumbnail,
		views: new Views(videoData),

		owner: bylineText(videoData),

		publishedTime: parseText(videoData.publishedTimeText).toString(),
	};

	if(videoData.lengthText){
		data.duration = new Duration(videoData);
	}

	if(videoData.channelThumbnailSupportedRenderers){
		data.owner.thumbnails = new Thumbnails(
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
		title: parseText(childVideoRenderer.title).toString(),
		ID: childVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${childVideoRenderer.videoId}`,

		duration: new Duration(childVideoRenderer),
	};
}

function playlistRenderer({ playlistRenderer }){
	const data = {
		ID: playlistRenderer.playlistId,
		URL: `https://www.youtube.com/playlist?list=${playlistRenderer.playlistId}`,
		title: parseText(playlistRenderer.title).toString(),

		type: 'playlist',
		videoCount: Number(playlistRenderer.videoCount),

		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: bylineText(playlistRenderer),
	};

	const thumbnails = optionalChaining(playlistRenderer.thumbnailRenderer, 'playlistVideoThumbnailRenderer', 'playlistCustomThumbnailRenderer');

	if(thumbnails) data.thumbnails = new Thumbnails(thumbnails.thumbnail);

	return data;
}

function channelRenderer({ channelRenderer }){
	const data = {
		ID: channelRenderer.channelId,
		URL: `https://www.youtube.com/channel/${channelRenderer.channelId}`,
		type: 'channel',

		name: parseText(channelRenderer.title).toString(),

		description: parseText(channelRenderer.descriptionSnippet),

		thumbnails: new Thumbnails(channelRenderer.thumbnail),
	};

	if(channelRenderer.subscriberCountText){
		data.subscribers = extractInt(channelRenderer.subscriberCountText);
	}
	if(channelRenderer.videoCountText){
		data.videoCount = extractInt(channelRenderer.videoCountText);
	}

	return data;
}

function shelfRenderer({ shelfRenderer }){
	const {
		items, collapsedStateButtonText,
	} = shelfRenderer.content.verticalListRenderer;

	return {
		title: parseText(shelfRenderer.title).toString(),
		label: parseText(collapsedStateButtonText).toString(),
		type: 'shelf',
		items: items.map(parse),
	};
}

function horizontalCardListRenderer({ horizontalCardListRenderer }){
	return {
		title: parseText(
			horizontalCardListRenderer.header
				.richListHeaderRenderer.title
		).toString(),
		type: 'horizontalCardList',
		items: horizontalCardListRenderer.cards.map(
			({ searchRefinementCardRenderer }) => ({
				title: parseText(searchRefinementCardRenderer.query).toString(),
				thumbnails: new Thumbnails(searchRefinementCardRenderer.thumbnail),
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