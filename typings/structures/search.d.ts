import { 
	Views, Duration, Thumbnails, Thumbnail, Owner 
} from './structures';

interface Video{
	ID: string;
	URL: string;

	title: string;
	description: string;

	thumbnails: Thumbnails<Thumbnail>;

	duration: Duration;
	views: Views;

	channel: {
		ID: string,
		URL: string;
		name: string;

		thumbnails: Thumbnails<Thumbnail>;
	};

	publishedTime: string;
}

interface Playlist{
	ID: string;
	title: string;
	videoCount: number;

	showedVideos: Array<{
		title: string;
		ID: string;
		URL: string;

		duration: Duration,
	}>;

	owner: {
		name: string;
		ID: string;
		URL: string;
	},

	thumbnails: Thumbnails<Thumbnail>;
}

interface Channel{
	ID: string;
	name: string;

	description: string;

	thumbnails: Thumbnails<Thumbnail>;
	videos: number;
	subscribers: number;
}

interface Shelf{
	title: string;
	label: string;
	items: Array<Video>;
}

export {
	Video,
	Playlist,
	Shelf,
	Channel
};