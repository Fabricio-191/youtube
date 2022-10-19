import { parseOptions, type RawOptions } from '../base/options';
import { fetch, getData } from '../base/utils';
import type { Video as Types } from '../base/rawTypes';
import { parseText, parseNumber, parseBylineText, type Channel } from '../base/parsing';
import { compactRadioRenderer, compactPlaylistRenderer, compactVideoRenderer, playlistVideo } from './parsers';
import parseStreamingData from './download/formats';

export default async function getVideo(URLorID: string, options: RawOptions){
	const body = await fetch(
		`https://www.youtube.com/watch?v=${getID(URLorID, 'video')}`,
		parseOptions(options, 'video')
	);
	const initialData = getData(body, 'initialData') as InitialData,
		playerResponse = getData(body, 'initialPlayerResponse') as video.InitialPlayerResponse;

	if(!playerResponse.videoDetails) return null;

	return videoInfo(initialData, playerResponse);
}

function videoInfo(initialData: Types.InitialData, playerResponse: Types.InitialPlayerResponse){
	const data1 = initialData.contents.twoColumnWatchNextResults;
	const data2 = data1.results.results.contents;
	const videoPrimaryInfoRenderer = data2.find(x => 'videoPrimaryInfoRenderer' in x) as Types.videoPrimaryInfoRenderer;
	const videoSecondaryInfoRenderer = data2.find(x => 'videoSecondaryInfoRenderer' in x) as Types.videoSecondaryInfoRenderer;

	const microformat = playerResponse.microformat.playerMicroformatRenderer;

	const info = {
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${playerResponse.videoDetails.videoId}`,
		name: parseText(videoPrimaryInfoRenderer.title),

		likes: getLikes(videoPrimaryInfoRenderer),

		views: videoPrimaryInfoRenderer.viewCount,
		owner: parse(videoSecondaryInfoRenderer.owner),

		description: parseText(videoSecondaryInfoRenderer.description),
		thumbnails: playerResponse.videoDetails.thumbnail,
		keywords: playerResponse.videoDetails.keywords || null,
		uploadDateLabel: parseText(videoPrimaryInfoRenderer.dateText),
		isLive: playerResponse.videoDetails.isLiveContent,
		isFamilySafe: microformat.isFamilySafe ?? true,
		isUnlisted: microformat.isUnlisted ?? false,
		availableCountries: microformat.availableCountries ?? [],
		uploadDate: microformat.uploadDate ?? null,
		publishDate: microformat.publishDate ?? null,
		duration: playerResponse.videoDetails.lengthSeconds,
	};

	const endScreen = data1.playerOverlays.playerOverlayRenderer.endScren.watchNextEndScreenRenderer;
	if(endScreen && endScreen.results) info.endScreen = {
		title: parseText(endScreen.title).toString(),
		items: endScreen.results.map(parse),
	};

	const secondaryResults = data1.secondaryResults.secondaryResults.results;
	if(secondaryResults && secondaryResults.length > 1){
		if(secondaryResults[secondaryResults.length - 1].continuationItemRenderer){
			secondaryResults.pop();
		}

		info.related = secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse);
	}

	if(data.playlist) info.playlist = {
		ID: data.playlist.playlistId,
		title: parseText(data.playlist.titleText).toString(),
		owner: parsers.bylineText(data.playlist),
		videoQuantity: data.playlist.totalVideos,
		videos: data.playlist.videos.map(playlistVideo),
	};

	if(playerResponse.streamingData){
		Object.assign(info, parseStreamingData(playerResponse.streamingData));
	}

	return info;
}

function getLikes(videoPrimaryInfoRenderer){
	let likeButton = videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0];
	if(likeButton.segmentedLikeDislikeButtonRenderer){
		// eslint-disable-next-line prefer-destructuring
		likeButton = likeButton.segmentedLikeDislikeButtonRenderer.likeButton;
	}

	return parseNumber(likeButton.toggleButtonRenderer.defaultText) || 0;
}