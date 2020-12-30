const { parseText, extractInt } = require('../../utils/utils.js');

class Thumbnails extends Array{
	constructor({ thumbnails }){
		super(...thumbnails);
		
		this.sort((a, b) => {
			return b.width - a.width + b.height - a.height;
		});
	}

	static get [Symbol.species](){
		return Array;
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

function Owner(data){
	let obj = {
		name: parseText(data.title),
		ID: data.navigationEndpoint.browseEndpoint.browseId,
		URL: 'https://www.youtube.com' + data.navigationEndpoint
			.browseEndpoint.canonicalBaseUrl,

		thumbnails: new Thumbnails(data),
	};

	if(data.subscriberCountText){
		obj.subscribers = {
			normal: parseText(data.subscriberCountText),
			number: extractInt(this.normal),
			toString(){
				return this.normal;
			}
		};
	}

	return obj;
}

module.exports = {
	Thumbnails, Duration, Views, Owner
};