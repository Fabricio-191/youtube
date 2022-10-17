import type * as Types from './types';

export function parseText(thing: Types.Text): string {
	if(!thing) throw new Error('Could not parse text');

	if('simpleText' in thing) return thing.simpleText;
	if('accessibilityData' in thing) return thing.accessibilityData.label;
	if('runs' in thing){
		return thing.runs.map(run => run.text).join('');
	}

	throw new Error('Unknown text type');
}

export function parseNumber(str: string): number | null {
	const result = str.match(/K|M|\.|,|\d/g);
	if(result === null){
		throw new Error("Couldn't parse number");
	}

	return Number(result.join(''));
}

function bylineText({ longBylineText, shortBylineText }){// channel/owner
	const obj = longBylineText || shortBylineText;

	const text = Utils.parseText(obj);
	if(!obj.runs) return text;
	let endpoint = obj.runs.find(obj => obj.navigationEndpoint);

	if(!endpoint) return text.toString();
	endpoint = endpoint.navigationEndpoint.browseEndpoint;

	const data = {
		name: text.toString(),
		ID: endpoint.browseId,
		URL: `https://www.youtube.com/channel/${endpoint.browseId}`,
	};

	if(endpoint.canonicalBaseUrl){
		data.canonicalURL = `https://www.youtube.com${endpoint.canonicalBaseUrl}`;
	}

	return data;
}