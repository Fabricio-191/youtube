const { parseText, extractInt } = require('../utils.js');

class Thumbnails extends Array{
	constructor(data){
		if(data.thumbnail){
			super(...data.thumbnail.thumbnails);
		}else{
			super(...data.thumbnails[0].thumbnails);
		}

		this.sort((a, b) => b.width - a.width);
	}

	static get [Symbol.species](){
		return Array;
	}

	get bigger(){
		if(!this[0]) return null;
		let biggerW = this.reduce(
			(acc, value) => (value.width > acc.width) ? value : acc, 
			this[0]
		);

		let biggerH = this.reduce(
			(acc, value) => (value.height > acc.height) ? value : acc, 
			this[0]
		);

		if(biggerH === biggerW) return biggerW;
		let ratio = biggerH.width / biggerW.height;

		return ratio > 1 ? 
			biggerH : biggerW;
	}

	toString(){
		let bigger = this.bigger;
		return bigger ? bigger.url : '';
	}
}

class Duration{
	constructor(data){
		if(typeof data === 'string'){
			this.number = Number(data);
			delete this.long;

			let hours = Math.floor(this.number / 3600), 
				mins = Math.floor(this.number / 60) - hours * 60, 
				seconds = this.number - this.mins * 60 - this.hours * 3600;

			this.normal = 
				hours ? hours + ':' : '' + `${mins}:${seconds}`;
		}else{
			this.normal = parseText(data.lengthText);
			this.long = data.lengthText.accessibility
				.accessibilityData.label;
	
			if(data.lengthSeconds){
				this.number = Number(data.lengthSeconds);
			}else{
				let [
					seconds = 0, minutes = 0, hours = 0
				] = this.normal.split(':').reverse().map(Number);
	
				this.number = hours * 3600 + minutes * 60 + seconds;
			}
		}
	}
	normal = null;
	long = null;

	number = 0;

	toString(){
		return this.normal;
	}
}

class Views{
	constructor(data){
		if(data.videoViewCountRenderer){ //video
			let { viewCount, shortViewCount } = data.videoViewCountRenderer;
			this.normal = parseText(viewCount);
			this.short = parseText(shortViewCount);
		}else{ //search, playlist
			this.normal = parseText(data.viewCountText);
			this.short = parseText(data.shortViewCountText);
		}
		if(this.normal === this.short){
			delete this.short;
		}

		this.number = extractInt(this.normal);
	}
	normal = null;
	short = null;

	number = 0;

	toString(){
		return this.short || this.normal;
	}
}

class Subscribers{
	constructor(data){
		this.normal = parseText(data.subscriberCountText);
		this.number = extractInt(this.normal);
	}
	normal = null;
	number = null;

	toString(){
		return this.normal;
	}
}

class Channel{
	
}

function Owner(data){
	let obj = {
		name: parseText(data.title),
		ID: data.navigationEndpoint.browseEndpoint.browseId,
		URL: 'https://www.youtube.com' + data.navigationEndpoint
			.browseEndpoint.canonicalBaseUrl,

		thumbnails: new Thumbnails(data),
	};

	if(data.subscriberCountText){
		obj.subscribers = new Subscribers(data);
	}

	return obj;
}

module.exports = {
	Thumbnails, Duration, Views, Owner
};