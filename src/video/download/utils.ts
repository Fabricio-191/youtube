/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export function parseMime(string: string){
	let [content, codecs] = string.split('; ');
	const [type, subtype] = content.split('/');

	codecs = codecs.slice(8, -1).split(', ');

	return { type, subtype, codecs };
}

export function parseAudio(format){
	const codec = format.mimeType.codecs.pop();
	const simpleCodec = encodingRanks.find(encoding =>
		codec.toLowerCase().includes(encoding.toLowerCase())
	);

	return {
		codec, simpleCodec,
		channels: format.audioChannels,
		quality: format.audioQuality.slice(14),
		sampleRate: Number(format.audioSampleRate),
		// dB: format.loudnessDb
	};
}

export function parseVideo(format){
	const codec = format.mimeType.codecs[0];
	const simpleCodec = encodingRanks.find(encoding =>
		codec.toLowerCase().includes(encoding.toLowerCase())
	);

	return {
		codec, simpleCodec,
		width: format.width,
		height: format.height,
		label: format.qualityLabel,
		fps: format.fps,
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