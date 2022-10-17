export function compactVideoRenderer({ compactVideoRenderer, endScreenVideoRenderer }){
	const videoData = compactVideoRenderer || endScreenVideoRenderer;

	const data = {
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

export function compactRadioRenderer({ compactRadioRenderer, endScreenPlaylistRenderer }){
	const data = compactRadioRenderer || endScreenPlaylistRenderer;

	return {
		name: Utils.parseText(data.title).toString(),
		ID: data.playlistId,
		URL: data.shareUrl || `https://www.youtube.com/playlist?list=${data.playlistId}`,
		type: 'playlist',

		thumbnails: new Utils.Thumbnails(data.thumbnail),

		owner: bylineText(data),
	};
}

export function compactPlaylistRenderer({ compactPlaylistRenderer }){
	// @ts-expect-error
	const data = {
		name: Utils.parseText(compactPlaylistRenderer.title).toString(),
		ID: compactPlaylistRenderer.playlistId,
		URL: compactPlaylistRenderer.shareUrl || `https://www.youtube.com/playlist?list=${compactPlaylistRenderer.playlistId}`,
		type: 'playlist',

		thumbnails: new Utils.Thumbnails(compactPlaylistRenderer.thumbnail),

		owner: bylineText(compactPlaylistRenderer),
		publishDate: Utils.parseText(compactPlaylistRenderer.publishedTimeText).toString(),
		videoCount: Utils.extractInt(compactPlaylistRenderer.videoCountShortText),
	};

	return data;
}
