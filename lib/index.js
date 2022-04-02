const { defaultOptions } = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');

// types:
//	1 = video
//	2 = playlist
//	3 = search
//	4 = channel

module.exports = {
	getVideo,
	getPlaylist,
	search,
	setDefaultOptions(options){
		Object.assign(defaultOptions, options);

		return this;
	},
	defaultOptions,
};

// https://www.youtube.com/watch?v=Yoj-VLuCZvA