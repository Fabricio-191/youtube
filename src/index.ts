import { defaultOptions, type RawOptions } from './base/options';
import search from './search/search';
import getVideo from './video/video';
import getPlaylist from './playlist/playlist';

const EXPORTS = {
	setDefaultOptions,
	search,
	getVideo,
	getPlaylist,
};

function setDefaultOptions(options: RawOptions): typeof EXPORTS {
	Object.assign(defaultOptions, options);

	return EXPORTS;
}

export default EXPORTS;
export { search, getVideo, getPlaylist, setDefaultOptions };

// https://www.youtube.com/watch?v=Yoj-VLuCZvA