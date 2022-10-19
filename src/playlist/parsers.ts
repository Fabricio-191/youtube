import type { Playlist as Types, Thumbnail } from '../base/rawTypes';
import { parseBylineText, parseNumber, parseText } from '../base/parsing';

interface VideoOwner {
	name: string;
	ID: string;
	URL: string;
	canonicalURL: string;
	thumbnails: Thumbnail[];
	subscribers?: number;
}

export function parseVideoOwnerRenderer({ videoOwnerRenderer }: Types.VideoOwnerRenderer) {
	const { browseId, canonicalBaseUrl } = videoOwnerRenderer.navigationEndpoint.browseEndpoint;

	const data: VideoOwner = {
		name: parseText(videoOwnerRenderer.title).toString(),
		ID: browseId,
		URL: `https://www.youtube.com/channel/${browseId}`,
		canonicalURL: `https://www.youtube.com${canonicalBaseUrl}`,
		thumbnails: videoOwnerRenderer.thumbnail.thumbnails,
	};

	if(videoOwnerRenderer.subscriberCountText){
		data.subscribers = parseNumber(videoOwnerRenderer.subscriberCountText);
	}

	return data;
}

export function parsePlayerMicroformatRenderer({ playerMicroformatRenderer }: Types.PlayerMicroformatRenderer) {
	return {
		isFamilySafe: playerMicroformatRenderer.isFamilySafe ?? true,
		isUnlisted: playerMicroformatRenderer.isUnlisted ?? false,
		availableCountries: playerMicroformatRenderer.availableCountries ?? [],
		uploadDate: playerMicroformatRenderer.uploadDate ?? null,
		publishDate: playerMicroformatRenderer.publishDate ?? null,
	};
}

export function parsePlaylistVideo({ playlistVideoRenderer }: Types.PlaylistVideoRenderer) {
	return {
		title: parseText(playlistVideoRenderer.title),

		ID: playlistVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${playlistVideoRenderer.videoId}`,

		index: parseNumber(playlistVideoRenderer.index),

		thumbnails: playlistVideoRenderer.thumbnail.thumbnails,
		duration: playlistVideoRenderer.lengthText,

		owner: parseBylineText(playlistVideoRenderer.longBylineText || playlistVideoRenderer.shortBylineText),
	};
}