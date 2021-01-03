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

		/*
		{
			//if returned number is less than zero, a will be in a lower index than b
			//if returned number is biffer than zero, b will be in a lower index than a
			//ir returned nuber is zero, there will be no change
			if(a.width > b.width && a.height > b.height){
				return -1;
			}else if(b.width > a.width && b.height > a.height){
				return 1;
			}else{
				let Apixels = b.width * b.height;
				let Bpixels = a.width * a.height;

				if(Bpixels > Apixels){
					return -1;
				}else if(Apixels > Bpixels){
					return 1;
				}else{
					if(a.width > b.width){
						return -1;
					}else{
						return 1;
					}
				}
			}
		}
		*/
	}

	static get [Symbol.species](){
		return Array;
	}

	/*
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
	*/

	toString(){
		let bigger = this[0];
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
				this.number = Number(data.lengthSeconds || data.lengthInSeconds);
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