/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as utils from '../base/utils';
import type { InitialData, video } from '../base/types';
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

function videoInfo(initialData: InitialData, playerResponse: video.InitialPlayerResponse){
	const data1 = initialData.contents.twoColumnWatchNextResults;
	const data2 = data1.results.results.contents;
	const videoPrimaryInfoRenderer = data2.find(x => 'videoPrimaryInfoRenderer' in x) as video.videoPrimaryInfoRenderer;
	const videoSecondaryInfoRenderer = data2.find(x => 'videoSecondaryInfoRenderer' in x) as video.videoSecondaryInfoRenderer;

	const info = {
		ID: playerResponse.videoDetails.videoId,
		URL: `https://www.youtube.com/watch?v=${playerResponse.videoDetails.videoId}`,
		name: utils.parseText(videoPrimaryInfoRenderer.title),

		likes: getLikes(videoPrimaryInfoRenderer),

		views: videoPrimaryInfoRenderer.viewCount,
		owner: parse(videoSecondaryInfoRenderer.owner),

		description: utils.parseText(videoSecondaryInfoRenderer.description),
		thumbnails: playerResponse.videoDetails.thumbnail,
		keywords: playerResponse.videoDetails.keywords || null,
		uploadDateLabel: utils.parseText(videoPrimaryInfoRenderer.dateText),
		isLive: playerResponse.videoDetails.isLiveContent,
		...parse(playerResponse.microformat),
		duration: playerResponse.videoDetails.lengthSeconds,
	};

	const endScreen = data1.playerOverlays.playerOverlayRenderer.endScren.watchNextEndScreenRenderer
	if(endScreen && endScreen.results) info.endScreen = {
		title: Utils.parseText(endScreen.title).toString(),
		items: endScreen.results.map(parse),
	};

	const secondaryResults = data1.secondaryResults.secondaryResults.results
	if(secondaryResults && secondaryResults.length > 1){
		if(secondaryResults[secondaryResults.length - 1].continuationItemRenderer){
			secondaryResults.pop();
		}

		info.related = secondaryResults.filter(a => !a.compactAutoplayRenderer).map(parse);
	}

	if(data.playlist) info.playlist = {
		ID: data.playlist.playlistId,
		title: Utils.parseText(data.playlist.titleText).toString(),
		owner: parsers.bylineText(data.playlist),
		videoQuantity: data.playlist.totalVideos,
		videos: data.playlist.videos.map(playlistVideo),
	};

	if(playerResponse.streamingData){
		Object.assign(info, parseStreamingData(playerResponse.streamingData));
	}

	return info;
}

function playlistVideo({ playlistPanelVideoRenderer }){
	return {
		name: Utils.parseText(playlistPanelVideoRenderer.title).toString(),
		ID: playlistPanelVideoRenderer.videoId,
		playlistID: playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint.playlistId,
		URL: `https://www.youtube.com${playlistPanelVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,

		duration: new Utils.Duration(playlistPanelVideoRenderer),
		views: new Utils.Views(playlistPanelVideoRenderer),
		thumbnails: new Utils.Thumbnails(playlistPanelVideoRenderer.thumbnail),

		publishedDate: Utils.parseText(playlistPanelVideoRenderer.publishedTimeText).toString(),

		owner: parsers.bylineText(playlistPanelVideoRenderer),
	};
}

function getLikes(videoPrimaryInfoRenderer){
	let likeButton = videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0]
	if(likeButton.segmentedLikeDislikeButtonRenderer){
		// eslint-disable-next-line prefer-destructuring
		likeButton = likeButton.segmentedLikeDislikeButtonRenderer.likeButton;
	}

	return Utils.extractInt(likeButton.toggleButtonRenderer.defaultText) || 0;
}