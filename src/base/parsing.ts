import type { Text, Thumbnail } from './rawTypes';
export * from './rawTypes';

export function parseText(thing: Text.Any): string {
	if(!thing) throw new Error('Could not parse text');

	if('simpleText' in thing) return thing.simpleText;
	if('accessibilityData' in thing) return thing.accessibilityData.label;
	if('runs' in thing){
		return thing.runs.map(run => run.text).join('');
	}

	throw new Error('Unknown text type');
}

export function parseNumber(str: Text.Any | string): number {
	if(typeof str !== 'string') str = parseText(str);

	const result = str.match(/K|M|\.|,|\d/g);
	if(result === null){
		throw new Error("Couldn't parse number");
	}

	return Number(result.join(''));
}

// eslint-disable-next-line @typescript-eslint/sort-type-union-intersection-members
export type Channel = ({ name: string } | { name: string; ID: string; URL: string }) & {
	canonicalURL?: string;
	thumbnails?: Thumbnail[];
};

export function parseBylineText(byLineText: Text.Runs): Channel {
	const text = parseText(byLineText);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const endpoint = byLineText.runs.find(obj => 'navigationEndpoint' in obj)?.navigationEndpoint?.browseEndpoint;
	if(!endpoint) return { name: text };

	const data: Channel = {
		name: text,
		ID: endpoint.browseId,
		URL: `https://www.youtube.com/channel/${endpoint.browseId}`,
	};

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = `https://www.youtube.com${endpoint.canonicalBaseUrl}`;
	}

	return data;
}