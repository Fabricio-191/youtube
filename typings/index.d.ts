/*eslint no-unused-vars: "off"*/
interface Video{
	title: string;
		
	views: Views;
	duration: Duration;
	thumbnails: Thumbnails<Thumbnail>;

	channel: Channel;
}

interface Channel{

}

interface Views{
	normal: string;
	short?: string;
	number: number;

	toString(): string;
}

interface Duration{
	normal: string;
	long?: string;
	number: number;

	toString(): string;
}

interface Thumbnail {
	url: string;
	width: number;
	height: number;
}
 
interface Thumbnails<Thumbnail> extends Array<Thumbnail>{
	[index: number]: Thumbnail | undefined;
	bigger: Thumbnail | null;
		
	/**
	 * Returns the URL of the biggest thumbnail
	 */
	toString(): string;
}




declare function getVideo(url: string, options: Options): Video;
declare function getPlaylist(url: string, options: Options): Playlist;
declare function search(search_query: string, options: Options): Search;

interface Options{
	language?: string,
	location?: string,
	quantity?: number
}

declare function setDefaulOptions(options: Options): void;