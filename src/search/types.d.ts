/** Data of a video, result of a search */
interface Video {
	/** ID of the video */
	ID: string;
	/** Directly URL to the video */
	URL: string;
	/** Type of this */
	type: 'video';
	/** Title/name of the video */
	title: string;
	description: Text;
	/** Thumbnails of the video */
	thumbnails: Thumbnails<Thumbnail>;
	/** Views of the video */
	views: Views;
	/** Owner of this video */
	owner: Owner;
	/** A text indicating the date the video was published */
	publishedTime: string;
	/** Duration of this video */
	duration?: Duration;
	/** If the video is from a search ADS, this will be the URL to the ad */
	AD?: string;
}

/** A playlist video with a little of info */
interface ChildVideo {
	/** Title/name of this video */
	title: string;
	/** ID of the video */
	ID: string;
	/** Direct URL to the video */
	URL: string;
	/** Duration of the video */
	duration: Duration;
}

/** A playlist, result of a search */
interface Playlist {
	/** ID of the playlist */
	ID: string;
	/** URL to the playlist */
	URL: string;
	/** Title/name of the playlist */
	title: string;
	/** Type of this */
	type: 'playlist';
	/** Number of all the videos in the playlist */
	videoCount: number;
	/** A portion of videos in the playlist */
	showedVideos: ChildVideo[];
	/** Data of the owner of the playlist */
	owner: Owner;
	/** Thumbnails of the playlist (usually the thumbnails of the first video) */
	thumbnails?: Thumbnails<Thumbnail>;
}

/** Data of a channel, result of a search */
interface Channel {
	/** ID of the channel */
	ID: string;
	/** URL to the channel */
	URL: string;
	/** Type of this */
	type: 'channel';
	/** Name of the channel */
	name: string;
	/** Description of the channel */
	description: Text;
	/** Thumbnails of the channel */
	thumbnails: Thumbnails<Thumbnail>;
	/** Quantity of all videos in the channel */
	videoCount?: number;
	/** Number of subscribers that the channel has */
	subscribers?: number;
}

/** Data of a shelf (mix), result of a search */
interface Shelf {
	title: string;
	label: string;
	type: 'shelf';
	items: Video[];
}

/** An horizontal card list (usually things relationed to the searched thing) */
interface HorizontalCardList {
	/** Title of the card list, usually: "Other people also search" */
	title: string;
	/** Type of this */
	type: 'horizontalCardList';
	/** Array of items relationed to the search */
	items: Array<{
		/** Title of the item */
		title: Text;
		/** Thumbnails of the items */
		thumbnails: Thumbnails<Thumbnail>;
	}>;
}

/** An item that has the ads showed in the search */
interface SearchAds {
	/** Type of this */
	type: 'searchAds';
	/** An array of the promoted videos */
	items: Video[];
}

/** An object with the data of the search */
interface Result {
	/** The search query */
	searchQuery: string;
	/** A number of total results that youtube has to show */
	estimatedResults: number;
	/** An array with the results */
	results: Array<
	Channel | HorizontalCardList | Playlist | SearchAds | Shelf | Video
	>;
}