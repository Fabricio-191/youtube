declare module '@Fabricio-191/youtube' {
	interface Options{
		location: 'US',
		language: 'en',
		quantity: 20
	}

	interface Owner{
		name: string,
	}

	interface Video{
		ID: string,
		URL: string,
	}

	interface Playlist{
		ID: string,
		URL: string,
	}

	interface Search{
		searchQuery: string,
	}
	
	export function getVideo(URLorID, options): Video;
	export function getPlaylist(URLorID, options): Playlist;
	export function search(searchQuery, options): Search;
	export function setDefaultOptions(options): void;
}