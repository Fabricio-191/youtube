// #region search
function videoRenderer({ videoRenderer, promotedVideoRenderer }){
	const videoData = videoRenderer || promotedVideoRenderer;

	const data = {
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
	const data = {
		ID: playlistRenderer.playlistId,
		URL: `https://www.youtube.com/playlist?list=${playlistRenderer.playlistId}`,
		title: Utils.parseText(playlistRenderer.title).toString(),

		type: 'playlist',
		videoCount: Number(playlistRenderer.videoCount),

		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: bylineText(playlistRenderer),
	};

	const thumbnails = Utils.optionalChaining(playlistRenderer.thumbnailRenderer, 'playlistVideoThumbnailRenderer', 'playlistCustomThumbnailRenderer');

	if(thumbnails) data.thumbnails = new Utils.Thumbnails(thumbnails.thumbnail);

	return data;
}

function channelRenderer({ channelRenderer }){
	const data = {
		ID: channelRenderer.channelId,
		URL: `https://www.youtube.com/channel/${channelRenderer.channelId}`,
		type: 'channel',

		name: Utils.parseText(channelRenderer.title).toString(),

		description: Utils.parseText(channelRenderer.descriptionSnippet),

		thumbnails: new Utils.Thumbnails(channelRenderer.thumbnail),
	};

	if(channelRenderer.subscriberCountText){
		data.subscribers = Utils.extractInt(channelRenderer.subscriberCountText);
	}
	if(channelRenderer.videoCountText){
		data.videoCount = Utils.extractInt(channelRenderer.videoCountText);
	}

	return data;
}

function shelfRenderer({ shelfRenderer }){
	const {
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
// #endregion