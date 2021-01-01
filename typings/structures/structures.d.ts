interface Views{
	normal: string;
	short?: string;
	number: number;

	toString(): string;
}

interface Duration{
	normal: string;
	long?: string;
	number: number;

	toString(): string;
}

interface Thumbnail {
	url: string;
	width: number;
	height: number;
}
 
declare class Thumbnails<Thumbnail> extends Array<Thumbnail>{
	bigger: Thumbnail | null;
		
	/**	
	 * Returns the URL of the biggest thumbnail
	 */
	toString(): string;
}

interface Owner{
	
}

export {
	Views,
	Duration,
	Thumbnails,
	Thumbnail,
	Owner
};