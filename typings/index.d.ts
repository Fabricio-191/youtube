/*eslint no-unused-vars: "off"*/
import { 
	Views, Duration, Thumbnails, Thumbnail, Owner 
} from './structures/structures';

interface Video{
	title: string;
		
	views: Views;
	duration: Duration;
	thumbnails: Thumbnails<Thumbnail>;

	channel: Owner;
}

interface Playlist{

}

interface Search{

}

interface Options{
	language?: string | 'en',
	location?: string | 'US',
	quantity?: number | 20
}

declare function getVideo(url: string, options: Options): Video;
declare function getPlaylist(url: string, options: Options): Playlist;
declare function search(search_query: string, options: Options): Search;
declare function setDefaultOptions(options: Options): void;
