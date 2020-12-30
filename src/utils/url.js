const REGEX = [
	{
		URL: /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i,
		ID: /^[A-Za-z0-9-_]{9,11}$/,
	}, {
		URL: /[?&]list=([^#&?]+)/,
		ID: /^(PL|UU|LL|RD)[A-Za-z0-9-_]{16,41}$/,
	}
];

/*
const PLAYLIST_REGEX = /^(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}$/;
const ALBUM_REGEX = /^OLAK5uy_[a-zA-Z0-9-_]{33}$/;
const CHANNEL_REGEX = /^UC[a-zA-Z0-9-_]{22,32}$/;
*/

function getID(string, type){
	let { ID, URL } = REGEX[type];

	if(isURL(string)){
		let matches = string.match(URL);
		string = matches[1] || matches[0];
		
		if(!ID.test(string)){
			throw new Error("Canno't get a valid ID from the URL");
		}
	}else if(!ID.test(string)){
		throw new Error('Introduced ID is not valid');
	}

	return string;
}

module.exports = getID;

function isURL(string){
	try{
		new URL(string);
		return true;
	}catch(e){
		return false;
	}
}