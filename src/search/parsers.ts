/* eslint-disable @typescript-eslint/no-shadow */
import type * as Types from './types';
import { parseText, parseBylineText } from '../base/utils';

interface VideoData {
	ID: string;
	URL: string;
	type: 'video';
	title: string;
	description: string;
	thumbnails: Types.Thumbnail[];
	views: Views;
	owner: Types.Owner;
}

function videoRenderer(rawData: Types.PromotedVideoRenderer | Types.VideoRenderer){
	const videoData = 'videoRenderer' in rawData ? rawData.videoRenderer : rawData.promotedVideoRenderer;

	const data = {
		ID: videoData.videoId,
		URL: `https://www.youtube.com/watch?v=${videoData.videoId}`,
		type: 'video',

		title: parseText(videoData.title).toString(),
		description: parseText(videoData.descriptionSnippet),

		thumbnails: videoData.thumbnail,
		views: new Views(videoData),
		owner: parseBylineText(videoData.longBylineText), // shortBylineText

		publishedTime: parseText(videoData.publishedTimeText),
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

function playlistRenderer({ playlistRenderer }: Types.PlaylistRenderer){
	const data = {
		ID: playlistRenderer.playlistId,
		URL: `https://www.youtube.com/playlist?list=${playlistRenderer.playlistId}`,
		title: parseText(playlistRenderer.title),

		type: 'playlist',
		videoCount: Number(playlistRenderer.videoCount),
		showedVideos: playlistRenderer.videos.map(childVideoRenderer),

		owner: parseBylineText(playlistRenderer.),
	};

	const thumbnails = playlistRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer || playlistRenderer.thumbnailRenderer.playlistCustomThumbnailRenderer;

	if(thumbnails) data.thumbnails = new Thumbnails(thumbnails.thumbnail);

	return data;
}

function channelRenderer({ channelRenderer }: Types.ChannelRenderer){
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

function shelfRenderer({ shelfRenderer }: Types.ShelfRenderer){
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

function horizontalCardListRenderer({ horizontalCardListRenderer }: Types.HorizontalCardListRenderer){
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


