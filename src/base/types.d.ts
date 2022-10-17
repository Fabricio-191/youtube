interface navigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: {
		webCommandMetadata: {
			url: string;
		};
	};
}

export type Text = {
	accessibilityData: {
		label: string;
	};
} | {
	runs: {
		text: string;
		bold?: boolean;
		navigationEndpoint?: navigationEndpoint;
	}[];
} | {
	simpleText: string;
};

interface Thumbnail {
	url: string;
	width: number;
	height: number;
}

declare namespace video {
	interface videoPrimaryInfoRenderer {
		title: Text;
		owner: {
			videoOwnerRenderer: {
				title: Text;
			};
		};
		uploadDate: string;
		viewCount: {
			videoViewCountRenderer: {
				viewCount: Text;
			};
		};
	}

	interface videoSecondaryInfoRenderer {
		owner: {
			videoOwnerRenderer: {
				title: Text;
			};
		};
		uploadDate: string;
		viewCount: {
			videoViewCountRenderer: {
				viewCount: Text;
			};
		};
	}


	interface InitialData {
		contents: {
			twoColumnWatchNextResults: {
				results: {
					results: {
						contents: Array<videoPrimaryInfoRenderer | videoSecondaryInfoRenderer>;
					};
				};
			};
		};
	}

	interface InitialPlayerResponse {
		videoDetails: {
			videoId: string;
			title: string;
			lengthSeconds: string;
			keywords: string[];
			channelId: string;
			shortDescription: string;
			thumbnail: {
				thumbnails: Thumbnail[];
			};
			allowRatings: boolean;
			viewCount: string;
			author: string;
			isPrivate: boolean;
			isLiveContent: boolean;
		};
		microformat: {
			playerMicroformatRenderer: {
				thumbnail: {
					thumbnails: Thumbnail[];
				};
				embed: {
					iframeUrl: string;
					flashUrl: string;
					width: number;
					height: number;
					flashSecureUrl: string;
				};
				title: Text;
				description: Text;
				lengthSeconds: string;
				ownerProfileUrl: string;
				externalChannelId: string;
				isFamilySafe: boolean;
				availableCountries: string[];
				isUnlisted: boolean;
				viewCount: string;
				category: string;
				publishDate: string;
				ownerChannelName: string;
				uploadDate: string;
			};
		};
		streamingData: {
			expiresInSeconds: string;
			formats: unknown[];
			adaptiveFormats: unknown[];
		};
	}
}

export interface ContinuationItem {
	continuationItemRenderer: {
		trigger: string;
		continuationEndpoint: {
			clickTrackingParams: string;
			commandMetadata: {
				webCommandMetadata: {
					sendPost: boolean;
					apiUrl: string;
				};
			};
			continuationCommand: {
				token: string;
				request: string;
			};
		};
	};
}

export interface YTCFG {
	INNERTUBE_API_KEY: string;
	INNERTUBE_CONTEXT: unknown;
}

declare namespace playlist {

}

declare namespace search {

}