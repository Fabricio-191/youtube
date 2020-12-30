const Utils = require('../utils/utils.js');
const Structures = require('../utils/structures/structures.js');

async function getVideo(url, options){
	options = Utils.parseOptions(options, 1);
	let ID = Utils.getID(url);

	let body = await Utils.fetch('https://www.youtube.com/watch?v=' + ID, options);
	let data = Utils.getData(body, 1), { videoDetails } = Utils.getData(body, 2);

	return Video(data, videoDetails);
}

module.exports = getVideo;

function Video(data, videoDetails){
	let [
		{ videoPrimaryInfoRenderer }, { videoSecondaryInfoRenderer }
	] = data.contents.twoColumnWatchNextResults.results.results.contents;

	let [likes, dislikes] = videoPrimaryInfoRenderer.sentimentBar
		.sentimentBarRenderer.tooltip.split(' / ').map(Number);

	return {
		ID: videoDetails.videoID,
		URL: 'https://www.youtube.com/watch?v=' + videoDetails.videoID,
		title: Utils.parseText(videoPrimaryInfoRenderer.title),
		views: new Structures.Views(videoPrimaryInfoRenderer.viewCount),

		likes, dislikes,
		
		description: Utils.parseText(videoSecondaryInfoRenderer.description),
		keywords: videoDetails.keywords,
		owner: Structures.Owner(videoSecondaryInfoRenderer.owner.videoOwnerRenderer),

		thumbnails: new Structures.Thumbnails(videoDetails),

		uploadDate: videoPrimaryInfoRenderer.dateText.simpleText
	};
}