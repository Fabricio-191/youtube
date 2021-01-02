function parseText(obj = ''){
	if(obj.simpleText){
		return obj.simpleText;
	}

	if(obj.accessibilityData){
		return obj.accessibilityData.label;
	}
	
	let str = '';
	if(obj.runs){
		obj.runs.map(t => str += t.text);
	}

	return str;
}

function extractInt(str){
	if(typeof str === 'object') {
		str = parseText(str);
	}

	return Number(
		str.match(/\d/g).join('')
	);
}

class Thumbnails extends Array{
	constructor({ thumbnails }){
		super(...thumbnails);

		this.sort((a, b) => b.width - a.width);
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
			this.long = parseText(data.lengthText.accessibility);

			if(data.lengthSeconds || data.lengthInSeconds){
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
		if(!this.normal && this.short){
			this.normal = this.short;
			delete this.number;
		}else{
			this.number = extractInt(this.normal);
		}
	}
	normal = null;
	short = null;

	number = 0;

	toString(){
		return this.short || this.normal;
	}
}

module.exports = {
	Thumbnails, Duration, Views,
	parseText, extractInt
};