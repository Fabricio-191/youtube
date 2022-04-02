/* eslint-disable no-shadow */
import { RequestOptions } from 'http';

// #region Structures

/** A line of text */
interface TextLine {
	/** The raw text in this line*/
	text: string;
	/** The url embedded in this line of text */
	url?: string;
	/** Whether this line is bold or not */
	bold?: boolean;
}

/** A youtube text in the form of the array */
declare class TextArray<TextLine> extends Array<TextLine>{
	/**
	 * Returns a string with all the text from all the lines.
	 * Ignoring URL's and bold text
	 */
	toString(): string;
}

/** An string or a interface that represent a text from youtube */
type Text = string | TextArray<TextLine>;

/** An image, that is a thumbnail to a video/channel/playlist, whatever */
interface Thumbnail {
	/** Width of this image */
	width: number;
	/** Heigth of this image */
	heigth: number;
	/** URL to this image */
	url: string;
}

/** Remember: the first thumnbail is always the best */
declare class Thumbnails<Thumbnail> extends Array<Thumbnail>{
	/** URL of the best image */
	toString(): string;
}

/** Partial info from the owner of a video/playlist/whatever */
type PartialOwner = 'YouTube' | string | {
	/** Name of the user/channel */
	name: Text,
	/** ID of the user/channel */
	ID: string,
	/** URL of the user/channel */
	URL: string,
	/** URL to the user/owner of the channel also a URL to the channel, that never changes */
	canonicalURL?: string
};

/** An object representing a channel/user, owner of a playlist or video */
interface Owner {
	/** Name of the channel/user */
	name: string;
	/** ID of the channel/user */
	ID: string;
	/** Direct URL to the channel/user */
	URL: string;
	/** URL to the user, owner of the channel also a URL to the channel, that never changes */
	canonicalURL: string;
	/** Thumbnails of the channel/user */
	thumbnails?: Thumbnails<Thumbnail>;

	/** Subscribers of the channel/user */
	subscribers?: {
		/**
		 * An string showing the subscribers, like:
		 * 414,000 subscribers
		 * 2.2 M subscribers
		 */
		normal: string,
		/**
		 * An number showing the subscribers, like:
		 * 414000
		 * 22 (i am working on this)
		 */
		number: number,
		/** This will return the normal form */
		toString(): string
	};
}

/** Interface showing the views from a video */
interface Views {
	/**
	 * An string showing the views, like:
	 * 2,200,000 views
	 */
	normal: string;
	/**
	 * An string showing the views in a short form, like:
	 * 2.2 M views
	 */
	short: string;
	/**
	 * An number showing the views, like:
	 * 2200000
	 */
	number?: number;
	/** This will return the short form */
	toString(): string;
}

/** Interface showing the duration from a video */
interface Duration {
	/** An string showing the duration, like: `3:16` */
	normal: string;
	/**
	 * An string showing the duration in a short form, like:
	 * `3 minutes and 16 seconds`
	 */
	long?: string;
	/** An number that is the length of the video in seconds, like: `196` */
	number: number;
	/** This will return the normal form */
	toString(): string;
}
// #endregion

// #region Video
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
		items: Array<PartialVideo | PartialPlaylist>;
	};
	/** A list of related videos/playlist */
	related?: Array<PartialVideo | PartialPlaylist>;
	/** The playlist from where the video is being viewed */
	playlist?: {
		/** ID of the playlist */
		ID: string,
		/** Title of the playlist */
		title: string,
		/** Owner of the playlist */
		owner: PartialOwner,
		/** Number of videos in the complete playlist */
		videoQuantity: number,
		/** A portion of the videos in the playlist */
		videos: PartialVideo[];
	};
}
// #endregion

// #region Playlist
/** Info from a video in a playlist */
interface PlaylistVideo {
	/** Title/name of the video */
	title: string;
	/** ID of the video */
	ID: string;
	/** Direct URL to the video */
	URL: string;
	/** Index of the video in this his playlist */
	index: number;
	/** Thumbnails of the video */
	thumbnails: Thumbnails<Thumbnail>;
	/** Duration of the video */
	duration: Duration;
	/** Owner of the video */
	owner: PartialOwner;
}

/** Full info from a playlist */
interface Playlist {
	/** ID of the playlist */
	ID: string;
	/** Direct URL to the playlist */
	URL: string;
	/** Name of the playlist */
	name: string;
	/** The number of videos that were seen through the playlist */
	views: number;
	/** A text showing when was the last update of the playlist */
	lastUpdate: string;
	/** The description in the video */
	description: Text;
	/** Thumbnails of the playlist (normally thumbnails of the first video) */
	thumbnails?: Thumbnails<Thumbnail>;
	/** Data of the owner of the playlist */
	owner?: Owner;
	/** Whether the playlist is unlisted or not */
	isUnlisted: boolean;
	/** The number of total videos in the playlist */
	videoQuantity: number;
	/** A list of videos of the playlist */
	videos: PlaylistVideo[];
}
// #endregion

declare namespace Search {
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
			title: Text,
			/** Thumbnails of the items */
            thumbnails: Thumbnails<Thumbnail>
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
			Video | Playlist | Channel |
			Shelf | HorizontalCardList | SearchAds
		>;
	}
}

// #region options
/** URL to a video/playlist on youtube or directly the ID */
type URLorID = string;

/** Valids languages for the "language" option */
type Language = 'af' | 'am' | 'ar' | 'as' | 'az' | 'be' | 'bg' | 'bn' | 'bs' | 'ca' | 'cs' | 'da' | 'de' |
	'el' | 'en' | 'en-GB' | 'en-IN' | 'es' | 'es-419' | 'es-US' | 'et' | 'eu' | 'fa' | 'fi' | 'fil' | 'fr' | 'fr-CA' |
	'gl' | 'gu' | 'hi' | 'hr' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'iw' | 'ja' | 'ka' | 'kk' | 'km' | 'kn' | 'ko' |
	'ky' | 'lo' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'ne' | 'nl' | 'no' | 'or' | 'pa' | 'pl' |
	'pt' | 'pt-PT' | 'ro' | 'ru' | 'si' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-Latn' | 'sv' | 'sw' | 'ta' | 'te' | 'th' |
	'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'zu';

/** Valids locations for the "location" option */
type Location = 'AE' | 'AR' | 'AT' | 'AU' | 'AZ' | 'BA' | 'BD' | 'BE' | 'BG' | 'BH' | 'BO' | 'BR' | 'BY' | 'CA' |
	'CH' | 'CL' | 'CO' | 'CR' | 'CY' | 'CZ' | 'DE' | 'DK' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'ES' | 'FI' | 'FR' |
	'GB' | 'GE' | 'GH' | 'GR' | 'GT' | 'HK' | 'HN' | 'HR' | 'HU' | 'ID' | 'IE' | 'IL' | 'IN' | 'IQ' | 'IS' | 'IT' |
	'JM' | 'JO' | 'JP' | 'KE' | 'KR' | 'KW' | 'KZ' | 'LB' | 'LI' | 'LK' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'ME' |
	'MK' | 'MT' | 'MX' | 'MY' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PG' | 'PH' | 'PK' |
	'PL' | 'PR' | 'PT' | 'PY' | 'QA' | 'RO' | 'RS' | 'RU' | 'SA' | 'SE' | 'SG' | 'SI' | 'SK' | 'SN' | 'SV' | 'TH' |
	'TN' | 'TR' | 'TW' | 'TZ' | 'UA' | 'UG' | 'US' | 'UY' | 'VE' | 'VN' | 'YE' | 'ZA' | 'ZW';

/** Options to the methods */
interface Options {
	/** The language to use when obtaining the information */
	language?: Language;
	/** The location to use when obtaining the information */
	location?: Location;
	/** Of videos/results to get from a playlist/search */
	quantity?: number | 'all';
	/** http/https options to use in each request */
	requestsOptions?: RequestOptions;
}
// #endregion

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

export = Exports;