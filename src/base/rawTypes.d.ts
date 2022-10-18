interface navigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: {
		webCommandMetadata: {
			url?: string | {
				privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
			};
			webPageType?: string;
			rootVe?: number;
			ignoreNavigation?: boolean;
			sendPost?: boolean;
			apiUrl?: string;
			width?: number;
			height?: number;
			target?: string;
			nofollow?: boolean;
			trackingParams?: string;
		};
	};
	browseEndpoint?: {
		browseId: string;
		canonicalBaseUrl?: string;
	};
}

declare namespace Text {
	interface Accessibility {
		accessibilityData: {
			label: string;
		};
	}

	interface Runs {
		runs: {
			text: string;
			bold?: boolean;
			navigationEndpoint?: navigationEndpoint;
		}[];
	}

	interface Simple {
		simpleText: string;
	}

	type RunsAndAccesibility = Accessibility & Runs;
	type SimpleAndAccesibility = Accessibility & Runs;
	type Any = Accessibility | Runs | RunsAndAccesibility | Simple | SimpleAndAccesibility;
}

interface Thumbnail {
	url: string;
	width: number;
	height: number;
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

declare namespace Search {
	interface VideoRenderer {
		videoRenderer: {
			videoId: string;
			title: Text.RunsAndAccesibility;
			thumbnail: {
				thumbnails: Thumbnail[];
			};
			lengthText?: Text.RunsAndAccesibility;
			publishedTimeText: Text.Simple;
			descriptionSnippet: Text.Runs;
			longBylineText: Text.Runs;
			viewCountText: Text.Simple;
			channelThumbnailSupportedRenderers?: {
				channelThumbnailWithLinkRenderer: {
					thumbnail: {
						thumbnails: Thumbnail[];
					};
				};
			};
		};
	}

	interface PromotedVideoRenderer {
		promotedVideoRenderer: VideoRenderer['videoRenderer'];
	}

	interface ChildVideoRenderer {
		childVideoRenderer: {
			title: Text.Simple;
			videoId: string;
			lengthText: Text.SimpleAndAccesibility;
			navigationEndpoint: navigationEndpoint;
		};
	}

	interface PlaylistRenderer {
		playlistRenderer: {
			playlistId: string;
			title: Text.Simple;
			thumbnails: Thumbnail[];
			videoCount: string;
			navigationEndpoint: navigationEndpoint;
			viewPlaylistText: Text.Runs;
			shortBylineText: unknown;
			longBylineText: unknown;
			videos: ChildVideoRenderer[];
			videoCountText: Text.Runs;
			thumbnailRenderer: {
				playlistVideoThumbnailRenderer: {
					thumbnail: {
						thumbnails: Thumbnail[];
					};
				};
			};
		};
	}

	interface SearchPyvRenderer {
		searchPyvRenderer: {
			ads: VideoRenderer[];
		};
	}

	interface ShelfRenderer {
		shelfRenderer: {};
	}

	interface RadioRenderer {
		radioRenderer: {};
	}

	interface HorizontalCardListRenderer {
		horizontalCardListRenderer: {};
	}

	interface ChannelRenderer {
		channelRenderer: {};
	}

	type AnySearchResult = ChannelRenderer | HorizontalCardListRenderer | PlaylistRenderer | RadioRenderer | SearchPyvRenderer | ShelfRenderer | VideoRenderer;

	interface ItemSectionRenderer {
		itemSectionRenderer: {
			contents: Array<AnySearchResult>;
		};
	}

	interface ContinuationResponse {
		onResponseReceivedCommands: [
			{
				appendContinuationItemsAction: {
					continuationItems: [
						ItemSectionRenderer,
						ContinuationItem
					];
				};
			}
		];
	}

	interface InitialData {
		estimatedResults: string;
		refinements?: unknown[];
		contents: {
			twoColumnSearchResultsRenderer: {
				primaryContents: {
					sectionListRenderer: {
						contents: Array<ContinuationItem | ItemSectionRenderer>;
					};
				};
			};
		};
	}
}

declare namespace Video {
	interface videoPrimaryInfoRenderer {
		title: Text.Any;
		owner: {
			videoOwnerRenderer: {
				title: Text.Any;
			};
		};
		uploadDate: string;
		viewCount: {
			videoViewCountRenderer: {
				viewCount: Text.Any;
			};
		};
	}

	interface videoSecondaryInfoRenderer {
		owner: {
			videoOwnerRenderer: {
				title: Text.Any;
			};
		};
		uploadDate: string;
		viewCount: {
			videoViewCountRenderer: {
				viewCount: Text.Any;
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

	interface BaseFormat {
		itag: number;
		mimeType: string;
		bitrate: number;
		initRange: {
			start: string;
			end: string;
		};
		indexRange: {
			start: string;
			end: string;
		};
		lastModified: string;
		contentLength: string;
		quality: string;
		projectionType: string;
		averageBitrate: number;
		signatureCipher: string;
	}

	interface VideoFormat extends BaseFormat {
		width: number;
		height: number;
		fps: number;
		qualityLabel: string;
		colorInfo: {
			primaries: string;
			transferCharacteristics: string;
			matrixCoefficients: string;
		};
		signatureCipher: string;
	}

	interface AudioFormat extends BaseFormat {
		audioQuality: string;
		approxDurationMs: string;
		audioSampleRate: string;
		audioChannels: number;
		loudnessDb: number;
	}

	type VideoAndAudioFormat = AudioFormat & VideoFormat;

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
				title: Text.Any;
				description: Text.Any;
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
			formats: VideoAndAudioFormat[];
			adaptiveFormats: Array<AudioFormat | VideoAndAudioFormat | VideoFormat>;
		};
	}
}