export interface Views{
	normal: string;
	short?: string;
	number: number;

	toString(): string;
}

export interface Duration{
	normal: string;
	long?: string;
	number: number;

	toString(): string;
}

export interface Thumbnail {
	url: string;
	width: number;
	height: number;
}
 
export class Thumbnails<Thumbnail> extends Array<Thumbnail>{
	[index: number]: Thumbnail | undefined;
	bigger: Thumbnail | null;
		
	/**
	 * Returns the URL of the biggest thumbnail
	 */
	toString(): string;
}

export interface Owner{
	
}