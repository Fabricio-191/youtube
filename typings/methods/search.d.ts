interface Video{

}

interface Playlist{

}

interface Channel{

}

interface Shelf{

}

export interface Search{
	searchQuery: string,
	encodedSearchQuery: string,
	estimatedResults: number,
	results: {
		videos: Video[],
		playlists: Playlist[],
		channels: Channel[],
		shelfs: Shelf[],
		others: Object[]
	}
}
