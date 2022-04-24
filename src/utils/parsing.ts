function parseText(obj = {}){
	if(obj.simpleText) return obj.simpleText;
	if(obj.accessibilityData) return obj.accessibilityData.label;
	if(obj.runs){
		const runs = obj.runs.map(x => {
			const data = { text: x.text };

			if(x.bold) data.bold = true;
			if(x.navigationEndpoint){
				if(x.navigationEndpoint.commandMetadata){
					x.url = `https://www.youtube.com${
						x.navigationEndpoint.commandMetadata.webCommandMetadata.url
					}`;
				}
			}

			return data;
		});

		runs.toString = function(md){
			return runs.reduce((acc, run) => {
				let{ text } = run;
				if(md){
					if(run.bold) text = `**${text}**`;
					if(run.url) text = `[${text}](${run.url})`;
				}

				return acc + text;
			}, '');
		};

		return runs;
	}

	return '';
}

function extractInt(str){
	if(typeof str === 'object' && !Array.isArray(str)){
		str = parseText(str);
	}
	if(!str || typeof str !== 'string' && !str.toString){
		return null;
	}

	str = str.toString();

	const result = str.match(/\d/g);
	if(result === null) return str;

	return Number(result.join(''));
}

class Thumbnails extends Array<Thumbnail>{
	constructor({ thumbnails }){
		super(...thumbnails.map(img => {
			if(!img.url.startsWith('http')){
				img.url = `https:${img.url}`;
			}

			return img;
		}));

		this.sort((a, b) => b.width - a.width);
		/*
		{
			//if returned number is less than zero, a will be in a lower index than b
			//if returned number is bigger than zero, b will be in a lower index than a
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

	public static get [Symbol.species](): Array {
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
		const [bigger] = this;
		return bigger ? bigger.url : '';
	}
}

const pad2Digits = (n: number): string => `${n < 10 ? '0' : ''}${n}`;

class Duration{
	constructor(data){
		if(typeof data === 'string'){
			this.number = Number(data);
			delete this.long;

			const hours = Math.floor(this.number / 3600),
				mins = Math.floor(this.number / 60) - hours * 60,
				seconds = this.number - mins * 60 - hours * 3600;

			this.normal = `${hours ? `${pad2Digits(hours)}:` : ''}${pad2Digits(mins)}:${pad2Digits(seconds)}`;
		}else{
			this.normal = parseText(data.lengthText);
			this.long = parseText(data.lengthText.accessibility);

			if(data.lengthSeconds || data.lengthInSeconds){
				this.number = Number(data.lengthSeconds || data.lengthInSeconds);
			}else{
				const [
					seconds = 0, minutes = 0, hours = 0,
				] = this.normal.split(':').reverse().map(Number);

				this.number = hours * 3600 + minutes * 60 + seconds;
			}
		}
	}
	public normal: string;
	public long?: string;

	public number = 0;

	public toString(): string {
		return this.normal;
	}
}

class Views{
	constructor(data){
		if(data.videoViewCountRenderer){ // video
			const { viewCount, shortViewCount } = data.videoViewCountRenderer;
			this.normal = parseText(viewCount);
			this.short = parseText(shortViewCount);
		}else{ // search, playlist
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

/** A line of text */
interface TextLine {
	/** The raw text in this line*/
	text: string;
	/** The url embedded in this line of text */
	url?: string;
	/** Whether this line is bold or not */
	bold?: boolean;
}

/** An string or a interface that represent a text from youtube */
type Text = TextArray<TextLine> | string;

/** An image, that is a thumbnail to a video/channel/playlist, whatever */
interface Thumbnail {
	/** Width of this image */
	width: number;
	/** Heigth of this image */
	heigth: number;
	/** URL to this image */
	url: string;
}

/** Partial info from the owner of a video/playlist/whatever */
type PartialOwner = string | 'YouTube' | {
	/** Name of the user/channel */
	name: Text;
	/** ID of the user/channel */
	ID: string;
	/** URL of the user/channel */
	URL: string;
	/** URL to the user/owner of the channel also a URL to the channel, that never changes */
	canonicalURL?: string;
};

/** An object representing a channel/user, owner of a playlist or video */
interface Owner {
	/** Name of the channel/user */
	name: string;
	/** ID of the channel/user */
	ID: string;
	/** Direct URL to the channel/user */
	URL: string;
	/** URL to the user, owner of the channel also a URL to the channel, that never changes */
	canonicalURL: string;
	/** Thumbnails of the channel/user */
	thumbnails?: Thumbnails<Thumbnail>;

	/** Subscribers of the channel/user */
	subscribers?: {
		/**
		 * An string showing the subscribers, like:
		 * 414,000 subscribers
		 * 2.2 M subscribers
		 */
		normal: string;
		/**
		 * An number showing the subscribers, like:
		 * 414000
		 * 22 (i am working on this)
		 */
		number: number;
		/** This will return the normal form */
		toString(): string;
	};
}

/** Interface showing the views from a video */
interface Views {
	/**
	 * An string showing the views, like:
	 * 2,200,000 views
	 */
	normal: string;
	/**
	 * An string showing the views in a short form, like:
	 * 2.2 M views
	 */
	short: string;
	/**
	 * An number showing the views, like:
	 * 2200000
	 */
	number?: number;
	/** This will return the short form */
	toString(): string;
}