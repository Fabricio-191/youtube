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

export interface Thumbnail {
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

declare namespace Playlist {
	interface PlaylistVideoRenderer {
		playlistVideoRenderer: {
			videoId: string;
			title: Text.RunsAndAccesibility;
			lengthText: Text.SimpleAndAccesibility;
			index: Text.Simple;
			thumbnail: {
				thumbnails: Thumbnail[];
			};
			shortBylineText: Text.RunsAndAccesibility;
			longBylineText: Text.RunsAndAccesibility;
		};
	}

	interface VideoOwnerRenderer {
		videoOwnerRenderer: {
			thumbnail: {
				thumbnails: Thumbnail[];
			};
			title: Text.Runs;
			navigationEndpoint: {
				commandMetadata: {
					webCommandMetadata: {
						url: string;
						webPageType: string;
						apiUrl: string;
					};
				};
				browseEndpoint: {
					browseId: string;
					canonicalBaseUrl: string;
				};
			};
			subscriberCountText?: Text.Any;
		};
	}

	interface PlayerMicroformatRenderer {
		playerMicroformatRenderer: {
			publishDate?: string;
			uploadDate?: string;
			isFamilySafe?: boolean;
			availableCountries?: string[];
			isUnlisted?: boolean;
		};
	}

	interface ContinuationResponse {
		onResponseReceivedActions: [
			{
				appendContinuationItemsAction: {
					continuationItems: Array<ContinuationItem | PlaylistVideoRenderer>;
				};
			}
		];
	}

	interface InitialData {
		microformat: PlayerMicroformatRenderer;
		contents: {
			twoColumnBrowseResultsRenderer: {
				tabs: [
					{
						tabRenderer: {
							content: {
								sectionListRenderer: {
									contents: [
										{
											itemSectionRenderer: {
												contents: [
													{
														playlistVideoListRenderer: {
															contents: Array<ContinuationItem | PlaylistVideoRenderer>;
														};
													}
												];
											};
										}
									];
								};
							};
						};
					}
				];
			};
		};
		sidebar: {
			playlistSidebarRenderer: {
				items: [
					{
						playlistSidebarPrimaryInfoRenderer: {
							title: Text.Runs;
							navigationEndpoint: {
								watchEndpoint: {
									playlistId: string;
								};
							};
							stats: [
								Text.Runs,
								Text.Simple,
								Text.Runs
							];
							description: Text.Runs;
							thumbnailRenderer: {
								playlistVideoThumbnailRenderer: {
									thumbnail: {
										thumbnails: Thumbnail[];
									};
								};
								playlistCustomThumbnailRenderer: {
									thumbnail: {
										thumbnails: Thumbnail[];
									};
								};
							};
						};
					},
					{
						playlistSidebarSecondaryInfoRenderer: {
							videoOwner: VideoOwnerRenderer;
						};
					}
				];
			};
		};
	}
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
			navigationEndpoint: {
				urlEndpoint: {
					url: string;
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
			shortBylineText: Text.Runs;
			longBylineText: Text.Runs;
			videos: ChildVideoRenderer[];
			videoCountText: Text.Runs;
			thumbnailRenderer: {
				playlistVideoThumbnailRenderer: {
					thumbnail: {
						thumbnails: Thumbnail[];
					};
				};
			};
			playlistCustomThumbnailRenderer?: {
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
		shelfRenderer: {
			title: Text.Simple;
			content: {
				verticalListRenderer: {
					items: VideoRenderer[];
					collapsedStateButtonText: Text.RunsAndAccesibility;
				};
			};
		};
	}

	interface RadioRenderer {
		radioRenderer: {
			playlistId: string;
			title: Text.Simple;
			thumbnail: {
				thumbnails: Thumbnail[];
			};

		};
	}

	interface HorizontalCardListRenderer {
		horizontalCardListRenderer: {
			header: {
				richListHeaderRenderer: {
					title: Text.Simple;
				};
			};
			cards: Array<{
				searchRefinementCardRenderer: {
					query: Text.Runs;
					thumbnail: {
						thumbnails: Thumbnail[];
					};
				};
			}>;
		};
	}

	interface ChannelRenderer {
		channelRenderer: {
			channelId: string;
			title: unknown;
			descriptionSnippet: unknown;
			thumbnail: unknown;
			subscriberCountText?: unknown;
			videoCountText?: unknown;
		};
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
