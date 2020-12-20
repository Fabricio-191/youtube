const { defaultOptions } = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');


module.exports = {
	getPlaylist,
	getVideo,
	search,
	setDefaulOptions(options){
		Object.assign(defaultOptions, options);
	}
};