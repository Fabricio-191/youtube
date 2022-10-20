import { fetch } from '../../base/utils';
import type { Video as Types } from '../../base/rawTypes';
import { PassThrough } from 'stream';

export default function(streamingData: Types.StreamingData){
	const expiresAt = Date.now() + parseInt(streamingData.expiresInSeconds) * 1000;

	const formats = streamingData.adaptiveFormats
		.concat(streamingData.formats)
		.map(format => parseFormat(format, expiresAt))
		.sort(sortFormats)
		.reduce((acc, format) => {
			if(format.video && format.audio) acc.videoAndAudio.push(format);
			else if(format.video) acc.video.push(format);
			else if(format.audio) acc.audio.push(format);

			return acc;
		}, { videoAndAudio: [], video: [], audio: [] });

	return {
		formats,
		download: formats.audio[0].download,
	};
}

function parseFormat(format: Types.AnyFormat, expiresAt: number){
	const meta = [
		'bitrate', 'averageBitrate', 'contentLength',
		'approxDurationMs', 'initRange', 'indexRange',
		'lastModified',
		'colorInfo', 'projectionType',
		'highReplication',
	].reduce((acc, key) => {
		if(format[key] !== undefined) acc[key] = format[key];
		return acc;
	}, {});

	if(!meta.contentLength && meta.bitrate && meta.approxDurationMs){
		meta.contentLength = Math.floor(
			meta.bitrate / 8 * (meta.approxDurationMs / 1000)
		);
	}

	const mimeType = parseMime(format.mimeType);
	const result = {
		itag: format.itag,
		type: mimeType.subtype,
		size: memory(meta.contentLength),
		byteLength: Math.floor(meta.contentLength / 8),
		quality: format.quality,
		download: download.bind(null, Object.fromEntries(
			new URLSearchParams(format.signatureCipher || format.cipher)
		), expiresAt),
		expiresAt,
		meta,
	};

	if(format.audioQuality){
		const codec = mimeType.codecs.pop();
		const simpleCodec = encodingRanks.find(encoding =>
			codec.toLowerCase().includes(encoding.toLowerCase())
		);
	
		result.audio = {
			codec, simpleCodec,
			channels: format.audioChannels,
			quality: format.audioQuality.slice(14),
			sampleRate: Number(format.audioSampleRate),
			// dB: format.loudnessDb
		};
	};
	if(format.qualityLabel){
		const codec = mimeType.codecs[0];
		const simpleCodec = encodingRanks.find(encoding =>
			codec.toLowerCase().includes(encoding.toLowerCase())
		);
	
		result.video = {
			codec, simpleCodec,
			width: format.width,
			height: format.height,
			label: format.qualityLabel,
			fps: format.fps,
		};
	};

	return result;
}

async function download({ url, sp, s }, expiresAt, asBuffer){
	if(Date.now() >= expiresAt){
		throw new Error('The download expired');
	}
	const signature = await decipher(s);

	url = new URL(url);
	url.searchParams.set(sp || 'signature', signature);
	url.searchParams.set('ratebypass', 'yes');

	const request = await fetch(url);
	if(asBuffer){
		const buffer = await request.buffer();
		if(buffer.length === 0){
			throw new Error('An error ocurred when trying to download the video');
		}

		return buffer;
	}

	const stream = new PassThrough();
	return request.pipe(stream);
}

// #region utils

const mimeRegex = /(audio|video)\/(.+); codecs="(.+)"/;
export function parseMime(string: string){
	const matches = mimeRegex.exec(string) as [string, 'audio' | 'video', string, string] | null;
	if(!matches) throw new Error(`Invalid mime type: ${string}`);
	const codecs = matches[3].split(', ');

	return {
		type: matches[1],
		subtype: matches[2],
		codecs,
	};
}

export function memory(bits = 0){
	const bytes = bits / 8;

	const gigaBytes = bytes / 1024 ** 3;
	if(gigaBytes > 1) return `${gigaBytes.toFixed(1)} GB`;

	const megaBytes = bytes / 1024 ** 2;
	if(megaBytes > 1){
		if(megaBytes < 10) return `${megaBytes.toFixed(2)} MB`;
		if(megaBytes < 100) return `${megaBytes.toFixed(1)} MB`;
		return `${Math.floor(megaBytes)} MB`;
	}

	const kiloBytes = bytes / 1024;
	if(kiloBytes < 100) return `${kiloBytes.toFixed(1)} KB`;
	return `${Math.floor(kiloBytes)} KB`;
}

const encodingRanks = [
	// video
	'AV01',
	'H.264',
	'VP9',
	'VP8',
	'MPEG-4',
	'H.283',
	'AVC1',
	'MP4v',

	// audio
	'FLAC',
	'Opus',
	'AAC',
	'Vorbis',
	'MP3',
	'MP4a',
];

export function sortFormats(a, b){
	// return < 0, 'a' will be in a lower index than 'b'
	// return > 0, 'b' will be in a lower index than 'a'
	// return = 0, no change
	if(a.video){
		if(!b.video) return -1;

		const heightDiff = b.video.height - a.video.height;
		if(heightDiff !== 0) return heightDiff;

		const fpsDiff = b.video.fps - a.video.fps;
		if(Math.abs(fpsDiff) > 10) return fpsDiff;

		const byteLengthDiff = b.byteLength - a.byteLength;
		if(byteLengthDiff !== 0) return -byteLengthDiff;

		const encodingRankDiff =
			encodingRanks.indexOf(b.video.simpleCodec) -
			encodingRanks.indexOf(b.video.simpleCodec);
		if(encodingRankDiff !== 0) return encodingRankDiff;

		return 0;
	}else if(a.audio){
		if(!b.audio) return 1;

		const bitrateDiff = b.meta.bitrate - a.meta.bitrate;
		if(bitrateDiff !== 0) return bitrateDiff;

		const encodingRankDiff =
			encodingRanks.indexOf(b.audio.simpleCodec) -
			encodingRanks.indexOf(b.audio.simpleCodec);
		if(encodingRankDiff !== 0) return encodingRankDiff;

		return 0;
	}
}
// #endregion