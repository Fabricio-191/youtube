import { parseText, parseNumber, parseBylineText, type Channel } from '../base/parsing';
import type { Search as Types } from '../base/rawTypes';

export function compactVideoRenderer({ compactVideoRenderer, endScreenVideoRenderer }){
	const videoData = compactVideoRenderer || endScreenVideoRenderer;

	const data = {
		name: parseText(videoData.title).toString(),
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',

		views: new Views(videoData),
		thumbnails: new Thumbnails(videoData.thumbnail),

		publishedDate: parseText(videoData.publishedTimeText).toString(),

		owner: bylineText(videoData),
	};

	if(videoData.lengthText) data.duration = new Duration(videoData);

	return data;
}

export function compactRadioRenderer({ compactRadioRenderer, endScreenPlaylistRenderer }){
	const data = compactRadioRenderer || endScreenPlaylistRenderer;

	return {
		name: parseText(data.title).toString(),
		ID: data.playlistId,
		URL: data.shareUrl || `https://www.youtube.com/playlist?list=${data.playlistId}`,
		type: 'playlist',

		thumbnails: new Thumbnails(data.thumbnail),

		owner: bylineText(data),
	};
}

export function compactPlaylistRenderer({ compactPlaylistRenderer }){
	// @ts-expect-error
	const data = {
		name: parseText(compactPlaylistRenderer.title).toString(),
		ID: compactPlaylistRenderer.playlistId,
		URL: compactPlaylistRenderer.shareUrl || `https://www.youtube.com/playlist?list=${compactPlaylistRenderer.playlistId}`,
		type: 'playlist',

		thumbnails: new Thumbnails(compactPlaylistRenderer.thumbnail),

		owner: bylineText(compactPlaylistRenderer),
		publishDate: parseText(compactPlaylistRenderer.publishedTimeText).toString(),
		videoCount: extractInt(compactPlaylistRenderer.videoCountShortText),
	};

	return data;
}

export function playlistVideo({ playlistPanelVideoRenderer }){
	return {
		name: parseText(playlistPanelVideoRenderer.title),
		ID: playlistPanelVideoRenderer.videoId,
		playlistID: playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint.playlistId,
		URL: `https://www.youtube.com${playlistPanelVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,

		duration: new Duration(playlistPanelVideoRenderer),
		views: new Views(playlistPanelVideoRenderer),
		thumbnails: new Thumbnails(playlistPanelVideoRenderer.thumbnail),

		publishedDate: parseText(playlistPanelVideoRenderer.publishedTimeText).toString(),

		owner: parsers.bylineText(playlistPanelVideoRenderer),
	};
}