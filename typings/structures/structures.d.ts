interface Thumbnail{
    url: string,
    width: number,
    heigth: number
}

export class Thumbnails<Thumbnail> extends Array<Thumbnail>{
	toString(): string;
}

export class Duration{
	normal: string;
	long?: string;

	number: number;

	toString(): string;
}

export class Views{
	normal: string;
	short: string;

	number?: number;

	toString(): string;
}