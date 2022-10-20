/* eslint-disable */
import { fetch } from '../../base/utils';
import { getVideo } from '../../raw';
let playerURL: string | null = null;
let tokens: Promise<string[]>;

async function getPLAYER_JS_URL(): Promise<string> {
	const { ytcfg } = await getVideo('https://www.youtube.com/watch?v=-a3llUvstRQ');
	return 'https://www.youtube.com' + ytcfg.PLAYER_JS_URL;
}

async function updateTokens(): Promise<void> {
	const url = await getPLAYER_JS_URL();

	if(url === playerURL) return;
	playerURL = url;

	tokens = new Promise(res => {
		fetch(playerURL as string, {})
			.then(body => {
				const actions = extractActions(body);

				res(actions);
			})
			.catch(err => {
				console.error(err);
			});
	});
}

updateTokens();
setInterval(updateTokens, 10000).unref();

const actions = {
	r(sig: string[]){ return sig.reverse() },
	s(sig: string[], pos: number){ return sig.slice(pos) },
	p(sig: string[], pos: number){ return sig.splice(0, pos) },
	w(sig: string[], pos: number){
		const first = sig[0] as string;
		sig[0] = sig[pos % sig.length] as string;
		sig[pos] = first;

		return sig;
	}
}

export default async function decypher(signature: string): Promise<string> {
	let sig = signature.split('');

	for(let token of (await tokens)){
		const pos = ~~token.slice(1);
		sig = actions[token[0] as string](sig, pos);
	}

	return sig.join('');
}

// this is from https://www.npmjs.com/package/ytdl-core
// #region regex
const jsVarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
const jsSingleQuoteStr = '\'[^\'\\\\]*(:?\\\\[\\s\\S][^\'\\\\]*)*\'';
const jsDoubleQuoteStr = '"[^"\\\\]*(:?\\\\[\\s\\S][^"\\\\]*)*"';
const jsQuoteStr = `(?:${jsSingleQuoteStr}|${jsDoubleQuoteStr})`;
const jsKeyStr = `(?:${jsVarStr}|${jsQuoteStr})`;
const jsPropStr = `(?:\\.${jsVarStr}|\\[${jsQuoteStr}\\])`;
const jsEmptyStr = '(?:\'\'|"")';
const reverseStr = ':function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}';
const sliceStr = ':function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}';
const spliceStr = ':function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}';
const swapStr = ':function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?\\}';
const actionsObjRegexp = new RegExp(`var (${jsVarStr})=\\{((?:(?:${jsKeyStr}${reverseStr}|${jsKeyStr}${sliceStr}|${jsKeyStr}${spliceStr}|${jsKeyStr}${swapStr}),?\\r?\\n?)+)\\};`);
const actionsFuncRegexp = new RegExp(`function(?: ${jsVarStr})?\\(a\\)\\{a=a\\.split\\(${jsEmptyStr}\\);\\s*((?:(?:a=)?${jsVarStr}${jsPropStr}\\(a,\\d+\\);)+)return a\\.join\\(${jsEmptyStr}\\)\\}`);
const reverseRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${reverseStr}`, 'm');
const sliceRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${sliceStr}`, 'm');
const spliceRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${spliceStr}`, 'm');
const swapRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${swapStr}`, 'm');
// #endregion

function extractActions(body: string): string[] {
	const objResult = actionsObjRegexp.exec(body) as [string, string, string] | null;
	const funcResult = actionsFuncRegexp.exec(body) as [string, string] | null;
	if(!objResult || !funcResult){
		throw new Error('Could not extract signature deciphering actions');
	}

	const obj = objResult[1].replace(/\$/g, '\\$');
	const objBody = objResult[2].replace(/\$/g, '\\$');
	const funcBody = funcResult[1].replace(/\$/g, '\\$');

	let result = reverseRegexp.exec(objBody) as [string, string] | null;
	const reverseKey = result && result[1].replace(/\$/g, '\\$').replace(/\$|^'|^"|'$|"$/g, '');
	result = sliceRegexp.exec(objBody) as [string, string] | null;;
	const sliceKey = result && result[1].replace(/\$/g, '\\$').replace(/\$|^'|^"|'$|"$/g, '');
	result = spliceRegexp.exec(objBody) as [string, string] | null;;
	const spliceKey = result && result[1].replace(/\$/g, '\\$').replace(/\$|^'|^"|'$|"$/g, '');
	result = swapRegexp.exec(objBody) as [string, string] | null;;
	const swapKey = result && result[1].replace(/\$/g, '\\$').replace(/\$|^'|^"|'$|"$/g, '');

	const keys = `(${[reverseKey, sliceKey, spliceKey, swapKey].join('|')})`;
	const tokenizeRegexp = new RegExp(`(?:a=)?${obj}(?:\\.${keys}|\\['${keys}'\\]|\\["${keys}"\\])\\(a,(\\d+)\\)`, 'g');
	const tokens = [];

	let result2 = tokenizeRegexp.exec(funcBody) as [string, string | null, string | null, string | null, string | null, string, string] | null;
	while(result2 !== null){
		switch(result2[1] || result2[2] || result2[3]){
			case swapKey:
				tokens.push(`w${result2[4]}`);
				break;
			case reverseKey:
				tokens.push('r');
				break;
			case sliceKey:
				tokens.push(`s${result2[4]}`);
				break;
			case spliceKey:
				tokens.push(`p${result2[4]}`);
				break;
			default:
				throw new Error('Unknown action');
		}

	  
		result2 = tokenizeRegexp.exec(funcBody) as [string, string | null, string | null, string | null, string | null, string, string] | null;
	}

	return tokens;
}
