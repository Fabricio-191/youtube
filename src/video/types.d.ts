/** Partial info from a video */
interface PartialVideo {
	/** Name/titles of the video */
	name: string;
	/** ID of the video */
	ID: string;
	/** ID of the playlist to which the video belongs */
	playlistID?: string;
	/** Direct URL to the video */
	URL: string;
	/** The type of this */
	type: 'video';
	/** Views of the video */
	views: Views;
	/** Thumbnails of the video */
	thumbnails: Thumbnails<Thumbnail>;
	/** A text indicating the date the video was published */
	publishedDate: string;
	/** Owner of this video */
	owner: Owner;
	/** Duration of this video */
	duration?: Duration;
}

/** Partial info from a playlist */
interface PartialPlaylist {
	/** Name of the playlist */
	name: string;
	/** ID of the playlist */
	ID: string;
	/** Direct URL to the playlist */
	URL: string;
	/** The type of this */
	type: 'playlist';
	/** Thumbnails of the playlist (normally thumbnails of the first video) */
	thumbnails: Thumbnails<Thumbnail>;
	/** Partial data of the owner of the playlist */
	owner: PartialOwner;
	/** The date when the playlist was uploaded */
	publishDate?: string;
	/** How many videos the playlist has */
	videoCount?: number;
}

/** A video from youtube */
interface Video {
	/** ID of the video */
	ID: string;
	/** Directly URL to the video */
	URL: string;
	/** Name/title of the video */
	name: string;

	/** Description of the video */
	description: Text;
	/** Likes of the video */
	likes: number;

	/** Views of the video */
	views: Views;
	/** Thumbnails of the video */
	thumbnails: Thumbnails<Thumbnail>;
	/** Keywords of the video */
	keywords: string[];

	/** Info of the owner of the video */
	owner: Owner;

	isLive?: boolean;
	isFamilySafe?: boolean;
	isUnlisted?: boolean;
	publishDate?: string;
	uploadDate?: string;
	uploadDateLabel: string;
	availableCountries: string[];

	/** The grid of videos/playlists that is displayed when a video is finished */
	endScreen?: {
		/** Text displayed in the end screen */
		title: string;
		/** videos/playlists in the end screen */
		items: Array<PartialPlaylist | PartialVideo>;
	};
	/** A list of related videos/playlist */
	related?: Array<PartialPlaylist | PartialVideo>;
	/** The playlist from where the video is being viewed */
	playlist?: {
		/** ID of the playlist */
		ID: string;
		/** Title of the playlist */
		title: string;
		/** Owner of the playlist */
		owner: PartialOwner;
		/** Number of videos in the complete playlist */
		videoQuantity: number;
		/** A portion of the videos in the playlist */
		videos: PartialVideo[];
	};
}