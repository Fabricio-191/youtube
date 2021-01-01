const Utils = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');

//types: 1 = video, 2 = playlist, 3 = search

module.exports = {
	getVideo(URLorID, options){
		if(!URLorID){
			throw new Error('You must introduce and URL or ID to a video in YouTube');
		}
		const ID = Utils.getID(URLorID, 1);
		options = Utils.parseOptions(options, 1);

		try{
			return getVideo(ID, options);
		}catch(e){
			throw Error('');
		}
	},
	getPlaylist(URLorID, options){
		if(!URLorID){
			throw new Error('You must introduce and URL or ID to a playlist or a video in a playlist in YouTube');
		}
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
		if(!searchQuery){
			throw new Error("You didn't introduced a search query");
		}else if(typeof searchQuery !== 'string'){
			throw new Error('Search query must be a string');
		}

		try{
			return search(searchQuery, options);
		}catch(e){
			throw Error('');
		}
	},
	setDefaulOptions(options){
		Object.assign(Utils.defaultOptions, options);

		return this;
	}
};