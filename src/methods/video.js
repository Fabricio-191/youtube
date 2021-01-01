const Utils = require('../utils/utils.js');
const Structures = require('./structures/structures.js');

async function getVideo(url, options){
	options = Utils.parseOptions(options, 1);
	let ID = Utils.getID(url, 1);
	let body = await Utils.fetch('https://www.youtube.com/watch?v=' + ID, options);
	let data = Utils.getData(body, 1), { videoDetails } = Utils.getData(body, 2);
	
	if(!videoDetails) return null;

	return new Video(
		Utils.getData(body, 1), 
		videoDetails
	);
}

module.exports = getVideo;