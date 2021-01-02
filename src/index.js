const Utils = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');

//types: 1 = video, 2 = playlist, 3 = search

module.exports = {
	getVideo,
	getPlaylist,
	search,
	setDefaultOptions(options){
		Object.assign(Utils.defaultOptions, options);

		return this;
	},
	defaultOptions: Utils.defaultOptions,
};