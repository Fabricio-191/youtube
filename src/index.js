const Utils = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');

//types: 1 = video, 2 = playlist, 3 = search

module.exports = {
	getVideo(URLorID, options){
		const ID = Utils.getID(URLorID, 1);
		options = Utils.parseOptions(options, 1);

		try{
			return getVideo(ID, options);
		}catch(e){
			throw Error('');
		}
	},
	getPlaylist(URLorID, options){
		const ID = Utils.getID(URLorID, 2);
		options = Utils.parseOptions(options, 2);

		try{
			return getPlaylist(ID, options);
		}catch(e){
			throw Error('');
		}
	},
	search(searchQuery, options){
		options = Utils.parseOptions(options, 3);

		try{
			return search(searchQuery, options);
		}catch(e){
			throw Error('');
		}
	},
	setDefaulOptions(options){
		Object.assign(Utils.defaultOptions, options);
	}
};