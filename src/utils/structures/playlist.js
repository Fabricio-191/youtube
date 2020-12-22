function PlaylistVideo({ playlistVideoRenderer }){
	return {
		title: Utils.parseText(playlistVideoRenderer.title),

		ID: playlistVideoRenderer.videoId,
		URL: `https://www.youtube.com/watch?v=${playlistVideoRenderer.ID}`,
		
		index: Utils.extractInt(playlistVideoRenderer.index),

		thumbnails: new Structures.Thumbnails(playlistVideoRenderer),
		duration: new Structures.Duration(playlistVideoRenderer),
	};
}