const { requests } = require('../utils/utils.js');
const parse = require('../parse/main.js');

async function getVideo(ID, options){
	let body = await requests.fetch('https://www.youtube.com/watch?v=' + ID, options);
	let data = requests.getData(body, 1), { videoDetails } = requests.getData(body, 2);
	
	if(!videoDetails) return null;


}

module.exports = getVideo;