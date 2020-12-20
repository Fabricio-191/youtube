/*eslint no-unused-vars: "off"*/
interface Video{
    

    channel: Channel;
}

interface Channel{

}

interface Views{

}

interface Thumbnails extends Array{
    
}

declare function getVideoInfo(url: string): Video;
declare function getPlaylist(url: string): Playlist;
declare function search(search_query: string): Search;

export = {
    getVideoInfo,
    getPlaylist,
    search
};