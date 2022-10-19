/* eslint-disable @typescript-eslint/no-shadow */
import type { Search as Types, Thumbnail } from '../base/rawTypes';
import { parseText, parseNumber, parseBylineText, type Channel } from '../base/parsing';

interface VideoData {
	ID: string;
	URL: string;
	type: 'video';
	title: string;
	description: string;
	thumbnails: Thumbnail[];
	views: Views;
	owner: Channel;
	publishedTime: string;
	duration?: Duration;
	AD?: string;
}

function videoRenderer(rawData: Types.PromotedVideoRenderer | Types.VideoRenderer){
	const videoData = 'videoRenderer' in rawData ? rawData.videoRenderer : rawData.promotedVideoRenderer;

	const data: VideoData = {
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',

		title: parseText(videoData.title).toString(),
		description: parseText(videoData.descriptionSnippet),

		thumbnails: videoData.thumbnail.thumbnails,
		views: new Views(videoData),
		owner: parseBylineText(videoData.longBylineText), // shortBylineText

		publishedTime: parseText(videoData.publishedTimeText),
	};

	if(videoData.lengthText){
		data.duration = new Duration(videoData);
	}

	if(videoData.channelThumbnailSupportedRenderers){
		data.owner.thumbnails = videoData
			.channelThumbnailSupportedRenderers
			.channelThumbnailWithLinkRenderer
			.thumbnail.thumbnails;
	}

	if('promotedVideoRenderer' in rawData){
		data.AD = rawData.promotedVideoRenderer.navigationEndpoint.urlEndpoint.url;
	}

	return data;
}

function childVideoRenderer({ childVideoRenderer }: Types.ChildVideoRenderer){
	return {
		title: parseText(childVideoRenderer.title),
		ID: childVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${childVideoRenderer.videoId}`,

		duration: parseText(childVideoRenderer.lengthText),
	};
}

interface Playlist {
	ID: string;
	URL: string;
	title: string;

	type: 'playlist';
	videoCount: number;
	showedVideos: ReturnType<typeof childVideoRenderer>[];
	owner: Channel;
	thumbnails?: Thumbnail[];
}

function playlistRenderer({ playlistRenderer }: Types.PlaylistRenderer){
	const data: Playlist = {
		ID: playlistRenderer.playlistId,
		URL: `https://www.youtube.com/playlist?list=${playlistRenderer.playlistId}`,
		title: parseText(playlistRenderer.title),

		type: 'playlist',
		videoCount: Number(playlistRenderer.videoCount),
		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: parseBylineText(playlistRenderer.longBylineText || playlistRenderer.shortBylineText),
	};

	const thumbnails = playlistRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer || playlistRenderer.thumbnailRenderer.playlistCustomThumbnailRenderer;

	if(thumbnails) data.thumbnails = thumbnails.thumbnail.thumbnails;

	return data;
}

interface ChannelData {
	ID: string;
	URL: string;
	type: 'channel';
	name: string;
	description: string;
	thumbnails: Thumbnail[];
	subscribers?: number;
	videoCount?: number;
}

function channelRenderer({ channelRenderer }: Types.ChannelRenderer){
	const data: ChannelData = {
		ID: channelRenderer.channelId,
		URL: `https://www.youtube.com/channel/${channelRenderer.channelId}`,
		type: 'channel',

		name: parseText(channelRenderer.title),

		description: parseText(channelRenderer.descriptionSnippet),

		thumbnails: channelRenderer.thumbnail,
	};

	if(channelRenderer.subscriberCountText){
		data.subscribers = parseNumber(channelRenderer.subscriberCountText);
	}
	if(channelRenderer.videoCountText){
		data.videoCount = parseNumber(channelRenderer.videoCountText);
	}

	return data;
}

function shelfRenderer({ shelfRenderer }: Types.ShelfRenderer){
	const { items, collapsedStateButtonText } = shelfRenderer.content.verticalListRenderer;

	return {
		title: parseText(shelfRenderer.title),
		label: parseText(collapsedStateButtonText),
		type: 'shelf',
		items: items.map(videoRenderer),
	};
}

function horizontalCardListRenderer({ horizontalCardListRenderer }: Types.HorizontalCardListRenderer){
	return {
		title: parseText(
			horizontalCardListRenderer.header
				.richListHeaderRenderer.title
		).toString(),
		type: 'horizontalCardList',
		items: horizontalCardListRenderer.cards.map(
			({ searchRefinementCardRenderer }) => ({
				title: parseText(searchRefinementCardRenderer.query),
				thumbnails: searchRefinementCardRenderer.thumbnail.thumbnails,
			})
		),
	};
}

function searchPyvRenderer({ searchPyvRenderer }: Types.SearchPyvRenderer){
	return {
		type: 'searchAds',
		items: searchPyvRenderer.ads.map(videoRenderer),
	};
}

export function parseSearchResult(rawData: Types.AnySearchResult) {
	if('videoRenderer' in rawData) return videoRenderer(rawData);
	if('playlistRenderer' in rawData) return playlistRenderer(rawData);
	if('channelRenderer' in rawData) return channelRenderer(rawData);
	if('shelfRenderer' in rawData) return shelfRenderer(rawData);
	if('horizontalCardListRenderer' in rawData) return horizontalCardListRenderer(rawData);
	if('searchPyvRenderer' in rawData) return searchPyvRenderer(rawData);
	throw new Error('Unknown search result type');
}

