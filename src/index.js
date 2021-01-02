const Utils = require('./utils/utils.js');
const search = require('./methods/search.js'),
	getPlaylist = require('./methods/playlist.js'),
	getVideo = require('./methods/video.js');

//types: 1 = video, 2 = playlist, 3 = search

module.exports = {
	getVideo(URLorID, options){
		try{
			return getVideo(
				Utils.getID(URLorID, 1), 
				Utils.parseOptions(options, 1)
			);
		}catch(e){
			if(global['@Fabricio-191/debugging']){
				return console.error(e);
			}
			throw Error('');
		}
	},
	getPlaylist(URLorID, options){
		try{
			return getPlaylist(
				Utils.getID(URLorID, 2), 
				Utils.parseOptions(options, 2)
			);
		}catch(e){
			if(global['@Fabricio-191/debugging']){
				return console.error(e);
			}
			throw Error('');
		}
	},
	search(searchQuery, options){
		if(!searchQuery){
			throw new Error("You didn't introduced a search query");
		}else if(typeof searchQuery !== 'string'){
			throw new Error('Search query must be a string');
		}

		try{
			return search(
				searchQuery, 
				Utils.parseOptions(options, 3)
			);
		}catch(e){
			if(global['@Fabricio-191/debugging']){
				return console.error(e);
			}
			throw Error('');
		}
	},
	setDefaulOptions(options){
		Object.assign(Utils.defaultOptions, options);

		return this;
	},
	defaultOptions: Utils.defaultOptions,
};