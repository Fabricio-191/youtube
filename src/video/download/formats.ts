import { fetch } from '../../base/utils';
import { PassThrough } from 'stream';

import * as utils from './utils';

export default function(streamingData){
	const expiresAt = Date.now() + streamingData.expiresInSeconds * 1000;

	const formats = streamingData.adaptiveFormats
		.concat(streamingData.formats)
		.map(format => utils.parseFormat(format, expiresAt))
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

function parseFormat(format, expiresAt){
	format.mimeType = utils.parseMime(format.mimeType);

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

	const result = {
		itag: format.itag,
		type: format.mimeType.subtype,
		size: utils.memory(meta.contentLength),
		byteLength: Math.floor(meta.contentLength / 8),
		quality: format.quality,
		download: download.bind(null, Object.fromEntries(
			new URLSearchParams(format.signatureCipher || format.cipher)
		), expiresAt),
		expiresAt,
		meta,
	};

	if(format.audioQuality) result.audio = utils.parseAudio(format);
	if(format.qualityLabel) result.video = utils.parseVideo(format);

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
