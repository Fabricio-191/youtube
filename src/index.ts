import getPlaylist from "./playlist/playlist";

const { defaultOptions } = require('./utils/utils.js');
export search from './search/search';
export getVideo from './video/video';
export getPlaylist from './playlist/playlist';
// types:
//	1 = video
//	2 = playlist
//	3 = search
//	4 = channel

export function setDefaultOptions(options){
	Object.assign(defaultOptions, options);

	return exports;
}

// https://www.youtube.com/watch?v=Yoj-VLuCZvA

interface Exports {
	/**
	 * Function to get info from a video in youtube
	 * @param URLorID The URL or ID of the video.
	 * @param options Options to use while going to get the info
	 */
	 getVideo(URLorID: URLorID, options?: Options): Promise<Video>;
	 /**
	  * Function to get info from a playlist in youtube
	  * @param URLorID The URL or ID of the playlist
	  * @param options Options to use while going to get the info
	  */
	 getPlaylist(URLorID: URLorID, options?: Options): Promise<Playlist>;
	 /**
	  * Function to search whatever on youtube
	  * @param searchString The string to search
	  * @param options Options to use while going to get the info
	  */
	 search(searchString: string, options?: Options): Promise<Search.Result>;
	 /** Function to set default options to all methods */
	 setDefaultOptions(options?: Options): this;
	 defaultOptions: Options;
 }