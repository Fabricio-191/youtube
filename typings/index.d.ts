/*eslint no-unused-vars: "off"*/
import { 
	Views, Duration, Thumbnails, Thumbnail, Owner 
} from './structures/structures';

interface Video{
	title: string;
		
	views: Views;
	duration: Duration;
	thumbnails: Thumbnails<Thumbnail>;

	channel: Channel;
}

interface Playlist{

}

interface Search{

}

export function getVideo(url: string, options: Options): Video;
export function getPlaylist(url: string, options: Options): Playlist;
export function search(search_query: string, options: Options): Search;

interface Options{
	language?: string,
	location?: string,
	quantity?: number
}

export function setDefaultOptions(options: Options): void;