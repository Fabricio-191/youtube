import { 
	Thumbnails, Thumbnail, Views, Duration 
} from './structures/structures';

	interface Options{
		location?: string;
		language?: string;
		quantity?: number | 'all';
	}

	interface Owner{
		name: string;
		ID?: string;
		URL?: string;
		canonicalURL?: string;

		thumbnails: Thumbnails<Thumbnail>;
		channel?: {
			ID: string,
			URL: string
		};
		user?: {
			originalName: string,
			URL: string
		};
		subscribers?: {
			normal: string,
			number: number
		}
	}

	interface Video{
		name: string;
		ID: string;
		URL: string;

		likes: number;
		dislikes: number;

		uploadDate: string;

		owner: Owner;

		description: string;
		ketwords: string[];

		secondaryResults: Array<Video | Playlist>;

		endScreen: {
			title: string,
			items: Array<Video | Playlist>
		}

		duration: Duration;
		views: Views;
		thumbnails: Thumbnails<Thumbnail>;
	}

	interface Playlist{
		ID: string;
		URL: string;
		name: string;
		videoQuantity?: number;
		views?: number;
		lastUpdate?: string;
		description?: string;
		thumbnails: Thumbnails<Thumbnail>;
		owner: Owner;
		videos: Video[];
	}

	interface Search{
		searchQuery: string;
		estimatedResults: number;
		results: {
			videos: Video[];
			playlists: Playlist[];
			channels: [],
			shelfs: [],
		}
	}

declare module '@Fabricio-191/youtube' {
	export function getVideo(URLorID, options: Options): Video;
	export function getPlaylist(URLorID, options: Options): Playlist;
	export function search(searchQuery, options: Options): Search;
	export const defaultOptions = {
		location: 'US',
		language: 'en',
		quantity: 20 | 'all'
	};
	export function setDefaultOptions(options: Options): void;
}