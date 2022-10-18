import type { Text, Thumbnail } from '../base/types';
export type { YTCFG, ContinuationItem, Text } from '../base/types';


interface VideoRenderer {
	videoRenderer: {
		videoId: string;
		title: Text.RunsAndAccesibility;
		thumbnail: {
			thumbnails: Thumbnail[];
		};
		lengthText?: Text.RunsAndAccesibility;
		publishedTimeText: Text.Simple;

	};
}

interface InitialData {
	estimatedResults: string;
	contents: {
		twoColumnSearchResultsRenderer: {
			primaryContents: {
				sectionListRenderer: {
					contents: [
						{
							itemSectionRenderer: {
								contents: [];
							};
						}
					];
				};
			};
		};
	};
}
