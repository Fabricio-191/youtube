interface title {
	runs: runs[];
	accessibility?: accessibility;
}

interface viewCount {
	simpleText?: string;
	videoViewCountRenderer?: {
		viewCount: viewCount;
		shortViewCount: viewCount;
	};
	accessibility?: accessibility;
}

interface navigationEndpoints {
	clickTrackingParams: string;
	commandMetadata: commandMetadata;
	watchEndpoint?: watchEndpoint;
	signInEndpoint?: signInEndpoint;
	modalEndpoint?: {
		modal: {
			modalWithTitleAndButtonRenderer: modalWithTitleAndButtonRenderer;
		};
	};
	shareEntityServiceEndpoint?: shareEntityServiceEndpoint;
	browseEndpoint?: {
		browseId: string;
		canonicalBaseUrl?: string;
	};
	urlEndpoint?: commonConfig | webCommandMetadata;
	continuationCommand?: {
		token: string;
		request: string;
	};
	createPlaylistServiceEndpoint?: serviceTrackingParams;
	signalServiceEndpoint?: signalServiceEndpoint;
	playlistEditEndpoint?: signalServiceEndpoint;
	watchPlaylistEndpoint?: watchEndpoint;
	feedbackEndpoint?: feedbackEndpoint;
	webPlayerShareEntityServiceEndpoint?: shareEntityServiceEndpoint;
	subscribeEndpoint?: serviceTrackingParams;
	unsubscribeEndpoint?: serviceTrackingParams;
	reelWatchEndpoint?: watchEndpoint;
}

interface button {
	buttonRenderer?: buttonRenderer;
	toggleButtonRenderer?: buttonRenderer;
}

interface buttonRenderer {
	style?: style | subscriptionButton | string;
	size?: string | {
		sizeType: string;
	};
	isDisabled?: boolean;
	text?: title | viewCount;
	navigationEndpoint?: navigationEndpoints;
	trackingParams: string;
	isToggled?: boolean;
	defaultIcon?: icon;
	defaultText?: title | viewCount;
	toggledText?: viewCount;
	accessibility?: accessibility;
	defaultTooltip?: string;
	toggledTooltip?: string;
	toggledStyle?: style;
	defaultNavigationEndpoint?: navigationEndpoints;
	accessibilityData?: accessibilityData;
	toggleButtonSupportedData?: {
		toggleButtonIdData: {
			id: string;
		};
	};
	targetId?: string;
	serviceEndpoint?: navigationEndpoints;
	icon?: icon;
	tooltip?: string;
	command?: commands | navigationEndpoints;
	defaultServiceEndpoint?: navigationEndpoints;
	toggledServiceEndpoint?: navigationEndpoints;
	toggledIcon?: icon;
	toggledAccessibilityData?: accessibilityData;
	promoConfig?: {
		promoId: string;
		impressionEndpoints: navigationEndpoints[];
		acceptCommand: navigationEndpoints;
		dismissCommand: navigationEndpoints;
	};
	detailsText?: title;
	dismissButton?: button;
	suggestedPosition?: subscriptionButton;
	dismissStrategy?: subscriptionButton;
	dwellTimeMs?: string;
	placeholderText?: title;
	config?: config;
	searchEndpoint?: searchEndpoint;
	clearButton?: button;
	menuRenderer?: menuRenderer;
	menuRequest?: navigationEndpoints;
	messageTexts?: title[];
	actionButton?: button;
	triggerCondition?: string;
	impressionEndpoints?: navigationEndpoints[];
	isVisible?: boolean;
	messageTitle?: title;
	selected?: boolean;
	ads?: {
		promotedVideoRenderer: compactVideoRenderer;
	}[];
	cards?: Array<{
		macroMarkersListItemRenderer: videoOwnerRenderer;
	} | {
		macroMarkersListItemRenderer: videoOwnerRenderer;
	} | {
		searchRefinementCardRenderer: videoOwnerRenderer;
	}>;
	previousButton?: button;
	nextButton?: button;
	title?: viewCount;
	header?: header;
	reelTitleText?: title;
	timestampText?: viewCount;
	channelNavigationEndpoint?: navigationEndpoints;
	channelTitleText?: title;
	channelThumbnail?: thumbnail;
	reelPlayerHeaderSupportedRenderers?: {
		reelPlayerHeaderRenderer: buttonRenderer;
	};
	nextItemButton?: button;
	prevItemButton?: button;
}

interface unifiedSharePanelRenderer {
	trackingParams: string;
	showLoadingSpinner?: boolean;
	contents?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}[];
	responseText?: title | viewCount;
	topLevelButtons?: {
		toggleButtonRenderer?: buttonRenderer;
		buttonRenderer?: buttonRenderer;
	}[];
	visibility?: {
		types: string;
	};
	items?: [
		{
			compactLinkRenderer: compactVideoRenderer;
		} | {
			menuNavigationItemRenderer: menuNavigationItemRenderer;
		} | {
			playlistSidebarPrimaryInfoRenderer: videoPrimaryInfoRenderer;
		},
		({
			compactLinkRenderer: compactVideoRenderer;
		} | {
			menuNavigationItemRenderer: menuNavigationItemRenderer;
		} | {
			playlistSidebarSecondaryInfoRenderer: {
				videoOwner: owner;
				button: button;
			};
		})?
	];
	channelId?: string;
	title?: viewCount;
	navigationEndpoint?: navigationEndpoints;
	thumbnail?: thumbnail;
	descriptionSnippet?: title;
	shortBylineText?: title;
	videoCountText?: title;
	subscriptionButton?: subscriptionButton;
	subscriberCountText?: viewCount;
	subscribeButton?: button;
	longBylineText?: title;
}

interface icon {
	iconType: string;
}

interface thumbnail {
	thumbnails: Array<commonConfig | webCommandMetadata | webCommandMetadata>;
	sampledThumbnailColor?: {
		red: number;
		green: number;
		blue: number;
	};
	isOriginalAspectRatio?: boolean;
}

interface accessibility {
	accessibilityData?: accessibilityData;
	label?: string;
}

interface accessibilityData {
	label?: title | string;
	accessibilityData?: accessibilityData;
	hotkey?: string;
	hotkeyAccessibilityLabel?: accessibilityData;
}

interface metadataBadgeRenderer {
	icon?: icon;
	style?: string;
	tooltip?: string;
	trackingParams?: string;
	accessibilityData?: accessibilityData;
	label?: viewCount | string;
	results?: {
		results?: unifiedSharePanelRenderer;
		compactVideoRenderer?: compactVideoRenderer;
		compactRadioRenderer?: compactVideoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		endScreenVideoRenderer?: compactVideoRenderer;
		endScreenPlaylistRenderer?: videoOwnerRenderer;
	}[];
	targetId?: string;
	sets?: {
		mode?: string;
		autoplayVideo: navigationEndpoints;
		nextButtonVideo: navigationEndpoints;
		previousButtonVideo?: navigationEndpoints;
	}[];
	modifiedSets?: {
		mode?: string;
		autoplayVideo: navigationEndpoints;
		nextButtonVideo: navigationEndpoints;
		previousButtonVideo?: navigationEndpoints;
	}[];
	title?: viewCount | string;
	visibilityButton?: button;
	selected?: boolean;
	content?: content;
	androidAppindexingLink?: string;
	iosAppindexingLink?: string;
	navigationEndpoint?: searchEndpoint;
	status?: string;
}

interface videostatsPlaybackUrl {
	baseUrl: string;
	elapsedMediaTimeSeconds?: number;
}

interface videoActions {
	menuRenderer: menuNavigationItemRenderer | menuRenderer | unifiedSharePanelRenderer;
}

interface WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH {
	transparentBackground?: boolean;
	showMiniplayerButton?: boolean;
	externalFullscreen?: boolean;
	showMiniplayerUiWhenMinimized?: boolean;
	rootElementId: string;
	jsUrl: string;
	cssUrl: string;
	contextId: string;
	eventLabel: string;
	contentRegion: string;
	hl: string;
	hostLanguage: string;
	playerStyle: string;
	innertubeApiKey: string;
	innertubeApiVersion: string;
	innertubeContextClientVersion: string;
	device: {
		brand: string;
		model: string;
		platform: string;
		interfaceName: string;
		interfaceVersion: string;
	};
	serializedExperimentIds: string;
	serializedExperimentFlags: string;
	cspNonce: string;
	canaryState: string;
	enableCsiLogging?: boolean;
	csiPageType?: string;
	datasyncId: string;
	allowWoffleManagement?: boolean;
	disableSharing?: boolean;
	hideInfo?: boolean;
	disableWatchLater?: boolean;
	controlsType?: number;
	disableRelatedVideos?: boolean;
	annotationsLoadPolicy?: number;
	startMuted?: boolean;
	enableMutedAutoplay?: boolean;
	disableKeyboardControls?: boolean;
	disableFullscreen?: boolean;
	storeUserVolume?: boolean;
	disableSeek?: boolean;
	disablePaidContentOverlay?: boolean;
	showInlinePreviewUi?: boolean;
}

interface metadataRowHeaderRenderer {
	content?: title;
	hasDividerLine?: boolean;
	title?: title | viewCount;
	contents?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}[];
	trackingParams?: string;
	rows?: {
		metadataRowHeaderRenderer: metadataRowHeaderRenderer;
	}[];
	collapsedItemCount?: number;
	sectionIdentifier?: string;
	targetId?: string;
	sections?: {
		multiPageMenuSectionRenderer?: unifiedSharePanelRenderer;
		hotkeyDialogSectionRenderer?: playerOverlayVideoDetailsRenderer;
	}[];
	dismissButton?: button;
	subMenu?: {
		searchSubMenuRenderer: menuRenderer;
	};
	hideBottomSeparator?: boolean;
}

interface compactVideoRenderer {
	videoId?: string;
	thumbnail?: thumbnail;
	title: title | viewCount;
	longBylineText?: title | viewCount;
	publishedTimeText?: viewCount;
	viewCountText?: viewCount;
	lengthText?: viewCount;
	navigationEndpoint: navigationEndpoints;
	shortBylineText?: title | viewCount;
	channelThumbnail?: thumbnail;
	ownerBadges?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	}[];
	trackingParams?: string;
	shortViewCountText?: viewCount;
	menu?: videoActions;
	thumbnailOverlays?: {
		thumbnailOverlayTimeStatusRenderer?: runs;
		thumbnailOverlayToggleButtonRenderer?: {
			isToggled?: boolean;
			untoggledIcon: icon;
			toggledIcon: icon;
			untoggledTooltip: string;
			toggledTooltip: string;
			untoggledServiceEndpoint: navigationEndpoints;
			toggledServiceEndpoint?: navigationEndpoints;
			untoggledAccessibility: accessibilityData;
			toggledAccessibility: accessibilityData;
			trackingParams: string;
		};
		thumbnailOverlayNowPlayingRenderer?: runs;
		thumbnailOverlayBottomPanelRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlayHoverTextRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlaySidePanelRenderer?: thumbnailOverlayBottomPanelRenderer;
	}[];
	accessibility?: accessibility;
	playlistId?: string;
	videoCountText?: title;
	secondaryNavigationEndpoint?: navigationEndpoints;
	thumbnailText?: title;
	videoCountShortText?: title;
	shareUrl?: string;
	badges?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	}[];
	lengthInSeconds?: number;
	icon?: icon;
	description?: viewCount;
	impressionUrls?: string[];
	clickTrackingUrls?: string[];
	adPlaybackContextParams?: string;
	adBadge?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	};
}

interface playlistPanelVideoRenderer {
	title?: title | viewCount;
	longBylineText?: title | viewCount;
	thumbnail?: thumbnail;
	lengthText?: viewCount;
	indexText?: viewCount;
	selected?: boolean;
	navigationEndpoint?: navigationEndpoints;
	videoId?: string;
	shortBylineText?: title | viewCount;
	trackingParams?: string;
	thumbnailOverlays?: {
		thumbnailOverlayTimeStatusRenderer?: runs;
		thumbnailOverlayToggleButtonRenderer?: {
			isToggled?: boolean;
			untoggledIcon: icon;
			toggledIcon: icon;
			untoggledTooltip: string;
			toggledTooltip: string;
			untoggledServiceEndpoint: navigationEndpoints;
			toggledServiceEndpoint?: navigationEndpoints;
			untoggledAccessibility: accessibilityData;
			toggledAccessibility: accessibilityData;
			trackingParams: string;
		};
		thumbnailOverlayNowPlayingRenderer?: runs;
		thumbnailOverlayBottomPanelRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlayHoverTextRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlaySidePanelRenderer?: thumbnailOverlayBottomPanelRenderer;
	}[];
	playlistSetVideoId?: string;
	index?: viewCount;
	lengthSeconds?: string;
	isPlayable?: boolean;
	menu?: videoActions;
	contents?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}[];
	playlistId?: string;
	isEditable?: boolean;
	canReorder?: boolean;
	targetId?: string;
	thumbnails?: thumbnail[];
	videoCount?: string;
	viewPlaylistText?: title;
	videos?: {
		childVideoRenderer: compactVideoRenderer;
	}[];
	videoCountText?: title;
	thumbnailText?: title;
	thumbnailRenderer?: thumbnailRenderer;
	videoCountShortText?: title;
	ownerBadges?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	}[];
}

interface menuNavigationItemRenderer {
	text?: title | viewCount;
	icon?: icon;
	navigationEndpoint?: commands | navigationEndpoints;
	trackingParams?: string;
	items?: Array<{
		menuNavigationItemRenderer: menuNavigationItemRenderer;
	} | {
		menuServiceItemRenderer: menuNavigationItemRenderer;
	} | {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	} | {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}>;
	topLevelButtons?: {
		toggleButtonRenderer?: buttonRenderer;
		buttonRenderer?: buttonRenderer;
	}[];
	accessibility?: accessibility;
	serviceEndpoint?: navigationEndpoints;
	targetId?: string;
	thumbnail?: thumbnail;
	collapsedItemCount?: number;
	collapsedStateButtonText?: title;
}

interface subscriptionButton {
	type?: string;
	subscribed?: boolean;
}

interface videoOwnerRenderer {
	thumbnail: thumbnail;
	title?: title | viewCount;
	subscriptionButton?: subscriptionButton;
	navigationEndpoint?: navigationEndpoints;
	subscriberCountText?: viewCount;
	trackingParams: string;
	badges?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	}[];
	playlistId?: string;
	longBylineText?: title | viewCount;
	videoCountText?: title;
	videoId?: string;
	publishedTimeText?: viewCount;
	lengthText?: viewCount;
	viewCountText?: viewCount;
	ownerBadges?: {
		metadataBadgeRenderer: metadataBadgeRenderer;
	}[];
	ownerText?: title;
	shortBylineText?: title;
	showActionMenu?: boolean;
	shortViewCountText?: viewCount;
	menu?: videoActions;
	channelThumbnailSupportedRenderers?: {
		channelThumbnailWithLinkRenderer: menuNavigationItemRenderer;
	};
	thumbnailOverlays?: {
		thumbnailOverlayTimeStatusRenderer?: runs;
		thumbnailOverlayToggleButtonRenderer?: {
			isToggled?: boolean;
			untoggledIcon: icon;
			toggledIcon: icon;
			untoggledTooltip: string;
			toggledTooltip: string;
			untoggledServiceEndpoint: navigationEndpoints;
			toggledServiceEndpoint?: navigationEndpoints;
			untoggledAccessibility: accessibilityData;
			toggledAccessibility: accessibilityData;
			trackingParams: string;
		};
		thumbnailOverlayNowPlayingRenderer?: runs;
		thumbnailOverlayBottomPanelRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlayHoverTextRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlaySidePanelRenderer?: thumbnailOverlayBottomPanelRenderer;
	}[];
	detailedMetadataSnippets?: {
		snippetText: title;
		snippetHoverText: title;
		maxOneLine: boolean;
		snippetTimestamp?: viewCount;
		timestampEndpoint?: navigationEndpoints;
	}[];
	timeDescription?: viewCount;
	onTap?: navigationEndpoints;
	layout?: string;
	isHighlighted?: boolean;
	expandableMetadata?: {
		expandableMetadataRenderer: {
			header: header;
			expandedContent: {
				horizontalCardListRenderer: buttonRenderer;
			};
			expandButton: button;
			collapseButton: button;
			trackingParams: string;
			loggingDirectives: unifiedSharePanelRenderer;
		};
	};
	query?: title;
	searchEndpoint?: searchEndpoint;
}

interface menuRenderer {
	trackingParams?: string;
	sections?: {
		multiPageMenuSectionRenderer?: unifiedSharePanelRenderer;
		hotkeyDialogSectionRenderer?: playerOverlayVideoDetailsRenderer;
	}[];
	style?: string;
	multiPageMenuRenderer?: menuRenderer;
	showLoadingSpinner?: boolean;
	items?: {
		menuNavigationItemRenderer: menuNavigationItemRenderer;
	}[] | {
		menuServiceItemRenderer: menuNavigationItemRenderer;
	};
	accessibility?: accessibility;
	topLevelButtons?: {
		toggleButtonRenderer?: buttonRenderer;
		buttonRenderer?: buttonRenderer;
	}[];
	title?: title;
	groups?: {
		searchFilterGroupRenderer: modalWithTitleAndButtonRenderer;
	}[];
	button?: button;
}

interface webCommandMetadata {
	url?: interpreterSafeUrl | string;
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
}

interface commands {
	clickTrackingParams?: string;
	openPopupAction?: openPopupAction;
	changeEngagementPanelVisibilityAction?: changeEngagementPanelVisibilityAction;
	scrollToEngagementPanelCommand?: {
		targetId: string;
	};
	commandExecutorCommand?: {
		commands: commands[];
	};
	addToPlaylistCommand?: addToPlaylistCommand;
	commandMetadata?: commandMetadata;
	feedbackEndpoint?: feedbackEndpoint;
	updateToggleButtonStateCommand?: {
		toggled: boolean;
		buttonId: string;
	};
	urlEndpoint?: webCommandMetadata;
	appendContinuationItemsAction?: changeEngagementPanelVisibilityAction;
}

interface playlist {
	title?: string;
	contents?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}[];
	currentIndex?: number;
	playlistId?: string;
	totalVideos?: number;
	ownerName?: viewCount;
	isInfinite?: boolean;
	playlistShareUrl?: string;
	shortBylineText?: title;
	longBylineText?: title;
	totalVideosText?: title;
	trackingParams?: string;
	titleText?: title;
	endpoint?: navigationEndpoints;
	localCurrentIndex?: number;
	playlistButtons?: videoActions;
	saveButton?: {
		toggleButtonRenderer?: buttonRenderer;
		buttonRenderer?: buttonRenderer;
	};
	videoCountText?: title;
	isCourse?: boolean;
	playlist?: playlist;
	initialData?: initialData;
	ytcfg?: {
		CLIENT_CANARY_STATE: string;
		DEVICE: string;
		DISABLE_YT_IMG_DELAY_LOADING: boolean;
		ELEMENT_POOL_DEFAULT_CAP: number;
		EVENT_ID: string;
		EXPERIMENT_FLAGS: {
			allow_https_streaming_for_all: boolean;
			allow_music_base_url: boolean;
			allow_skip_networkless: boolean;
			autoescape_tempdata_url: boolean;
			botguard_periodic_refresh: boolean;
			browse_next_continuations_migration_playlist: boolean;
			cache_utc_offset_minutes_in_pref_cookie: boolean;
			cancel_pending_navs: boolean;
			check_user_lact_at_prompt_shown_time_on_web: boolean;
			clear_user_partitioned_ls: boolean;
			client_respect_autoplay_switch_button_renderer: boolean;
			clips_1k_rollout_enable_creation: boolean;
			cold_missing_history: boolean;
			config_age_report_killswitch: boolean;
			csi_on_gel: boolean;
			decorate_autoplay_renderer: boolean;
			defer_menus: boolean;
			defer_overlays: boolean;
			defer_rendering_outside_visible_area: boolean;
			dependenciesmanager_to_wugdm_killswitch: boolean;
			deprecate_pair_servlet_enabled: boolean;
			deprecate_two_way_binding_child: boolean;
			deprecate_two_way_binding_parent: boolean;
			desktop_add_to_playlist_renderer_dialog_popup: boolean;
			desktop_adjust_touch_target: boolean;
			desktop_animate_miniplayer: boolean;
			desktop_client_release: boolean;
			desktop_fix_carousel_video_timeout: boolean;
			desktop_image_cta_no_background: boolean;
			desktop_keyboard_capture_keydown_killswitch: boolean;
			desktop_mix_use_sampled_color_for_bottom_bar: boolean;
			desktop_mix_use_sampled_color_for_bottom_bar_search: boolean;
			desktop_mix_use_sampled_color_for_bottom_bar_watch_next: boolean;
			desktop_notification_high_priority_ignore_push: boolean;
			desktop_notification_set_title_bar: boolean;
			desktop_persistent_menu: boolean;
			desktop_player_touch_gestures: boolean;
			desktop_search_image_hover_state: boolean;
			desktop_search_image_no_cta: boolean;
			desktop_search_prominent_thumbs: boolean;
			desktop_sparkles_light_cta_button: boolean;
			desktop_swipeable_guide: boolean;
			desktop_text_ads_gray_visurl: boolean;
			desktop_themeable_vulcan: boolean;
			desktop_touch_gestures_usage_log: boolean;
			desktop_use_new_history_manager: boolean;
			disable_child_node_auto_formatted_strings: boolean;
			disable_dependency_injection: boolean;
			disable_features_for_supex: boolean;
			disable_legacy_desktop_remote_queue: boolean;
			disable_simple_mixed_direction_formatted_strings: boolean;
			disable_thumbnail_preloading: boolean;
			element_pool_populator_auto_abort: boolean;
			embeds_web_enable_replace_unload_w_pagehide: boolean;
			enable_business_email_reveal_servlet_migration: boolean;
			enable_button_behavior_reuse: boolean;
			enable_call_to_action_clarification_renderer_bottom_section_conditions: boolean;
			enable_channel_creation_avatar_editing: boolean;
			enable_client_sli_logging: boolean;
			enable_client_streamz_web: boolean;
			enable_comments_continuation_command_for_web: boolean;
			enable_docked_chat_messages: boolean;
			enable_gel_log_commands: boolean;
			enable_get_account_switcher_endpoint_on_webfe: boolean;
			enable_gray_visurl: boolean;
			enable_main_app_client_sli_logging: boolean;
			enable_masthead_quartile_ping_fix: boolean;
			enable_memberships_and_purchases: boolean;
			enable_mentions_in_reposts: boolean;
			enable_microformat_data: boolean;
			enable_mixed_direction_formatted_strings: boolean;
			enable_multi_image_post_creation: boolean;
			enable_names_handles_account_switcher: boolean;
			enable_offer_suppression: boolean;
			enable_poll_choice_border_on_web: boolean;
			enable_polymer_resin: boolean;
			enable_polymer_resin_migration: boolean;
			enable_post_cct_links: boolean;
			enable_post_scheduling: boolean;
			enable_premium_voluntary_pause: boolean;
			enable_programmed_playlist_color_sample: boolean;
			enable_programmed_playlist_redesign: boolean;
			enable_purchase_activity_in_paid_memberships: boolean;
			enable_reel_watch_sequence: boolean;
			enable_sasde_for_html: boolean;
			enable_server_stitched_dai: boolean;
			enable_service_ajax_csn: boolean;
			enable_servlet_errors_streamz: boolean;
			enable_servlet_streamz: boolean;
			enable_shorts_singleton_channel_web: boolean;
			enable_shorts_ux_improvement_web: boolean;
			enable_signals: boolean;
			enable_sli_flush: boolean;
			enable_streamline_repost_flow: boolean;
			enable_tectonic_ad_ux_for_halftime: boolean;
			enable_topsoil_wta_for_halftime_live_infra: boolean;
			enable_unavailable_videos_watch_page: boolean;
			enable_unified_show_page_web_client: boolean;
			enable_watch_next_pause_autoplay_lact: boolean;
			enable_web_eom_visitor_data: boolean;
			enable_web_ketchup_hero_animation: boolean;
			enable_web_poster_hover_animation: boolean;
			enable_yoodle: boolean;
			enable_ypc_spinners: boolean;
			enable_ytc_refunds_submit_form_signal_action: boolean;
			enable_ytc_self_serve_refunds: boolean;
			endpoint_handler_logging_cleanup_killswitch: boolean;
			export_networkless_options: boolean;
			external_fullscreen: boolean;
			external_fullscreen_with_edu: boolean;
			fill_web_player_context_config: boolean;
			flush_gel_on_teardown: boolean;
			forward_domain_admin_state_on_embeds: boolean;
			gfeedback_for_signed_out_users_enabled: boolean;
			global_spacebar_pause: boolean;
			h5_companion_enable_adcpn_macro_substitution_for_click_pings?: boolean;
			h5_inplayer_enable_adcpn_macro_substitution_for_click_pings?: boolean;
			html5_control_flow_include_trigger_logging_in_tmp_logs: boolean;
			html5_enable_ads_client_monitoring_log_web: boolean;
			html5_enable_single_video_vod_ivar_on_pacf: boolean;
			html5_enable_video_overlay_on_inplayer_slot_for_tv: boolean;
			html5_pacf_enable_dai: boolean;
			html5_recognize_predict_start_cue_point: boolean;
			html5_server_stitched_dai_group: boolean;
			html5_user_partitioned_ls: boolean;
			html5_user_partitioned_ls_cold_load: boolean;
			il_via_jspb?: boolean;
			include_autoplay_count_in_playlists: boolean;
			inline_playback_disable_ensure_hover: boolean;
			is_part_of_any_user_engagement_experiment: boolean;
			json_condensed_response: boolean;
			kevlar_add_to_button_command: boolean;
			kevlar_allow_playlist_reorder: boolean;
			kevlar_allow_queue_reorder: boolean;
			kevlar_app_initializer_cleanup: boolean;
			kevlar_app_shortcuts: boolean;
			kevlar_autofocus_menu_on_keyboard_nav: boolean;
			kevlar_autonav_miniplayer_fix: boolean;
			kevlar_autonav_popup_filtering: boolean;
			kevlar_av_eliminate_polling: boolean;
			kevlar_background_color_update: boolean;
			kevlar_cache_cold_load_response: boolean;
			kevlar_cache_initial_data: boolean;
			kevlar_cache_on_ttl_browse: boolean;
			kevlar_cache_on_ttl_player: boolean;
			kevlar_cache_on_ttl_search: boolean;
			kevlar_calculate_grid_collapsible: boolean;
			kevlar_cancel_scheduled_comment_jobs_on_navigate: boolean;
			kevlar_center_search_results: boolean;
			kevlar_channel_trailer_multi_attach: boolean;
			kevlar_channels_player_handle_missing_swfconfig: boolean;
			kevlar_chapters_list_view_seek_by_chapter: boolean;
			kevlar_clean_up: boolean;
			kevlar_clear_duplicate_pref_cookie: boolean;
			kevlar_clear_non_displayable_url_params: boolean;
			kevlar_client_save_subs_preferences: boolean;
			kevlar_client_side_filler_data: boolean;
			kevlar_client_side_screens: boolean;
			kevlar_collect_battery_network_status: boolean;
			kevlar_collect_hover_touch_support: boolean;
			kevlar_command_handler: boolean;
			kevlar_command_handler_clicks: boolean;
			kevlar_command_handler_init_plugin: boolean;
			kevlar_command_handler_toggle_buttons: boolean;
			kevlar_command_url: boolean;
			kevlar_continue_playback_without_player_response: boolean;
			kevlar_copy_playlist: boolean;
			kevlar_ctrl_tap_fix: boolean;
			kevlar_decorate_endpoint_with_onesie_config: boolean;
			kevlar_delay_watch_initial_data: boolean;
			kevlar_disable_background_prefetch: boolean;
			kevlar_disable_html_imports: boolean;
			kevlar_downloaded_badge_color: boolean;
			kevlar_downloading_count_fix: boolean;
			kevlar_dragdrop_fast_scroll: boolean;
			kevlar_dropdown_fix: boolean;
			kevlar_droppable_prefetchable_requests: boolean;
			kevlar_eager_shell_boot_via_one_platform: boolean;
			kevlar_enable_editable_playlists: boolean;
			kevlar_enable_loading_shorts_buttons: boolean;
			kevlar_enable_reorderable_playlists: boolean;
			kevlar_enable_shorts_prefetch_in_sequence: boolean;
			kevlar_enable_shorts_response_chunking: boolean;
			kevlar_enable_slis: boolean;
			kevlar_enable_up_arrow: boolean;
			kevlar_enable_ybp_op_for_shoptube: boolean;
			kevlar_entities_processor: boolean;
			kevlar_exit_fullscreen_leaving_watch: boolean;
			kevlar_fallback_to_page_data_root_ve: boolean;
			kevlar_fetch_networkless_support: boolean;
			kevlar_fix_miniplayer_logging: boolean;
			kevlar_fix_playlist_continuation: boolean;
			kevlar_fluid_touch_scroll: boolean;
			kevlar_frontend_queue_recover: boolean;
			kevlar_frontend_video_list_actions: boolean;
			kevlar_gel_error_routing: boolean;
			kevlar_guide_ajax_migration: boolean;
			kevlar_guide_refresh: boolean;
			kevlar_guide_store: boolean;
			kevlar_help_use_locale: boolean;
			kevlar_hide_playlist_playback_status: boolean;
			kevlar_hide_pp_url_param: boolean;
			kevlar_hide_time_continue_url_param: boolean;
			kevlar_hide_toast_paused_downloads: boolean;
			kevlar_home_skeleton: boolean;
			kevlar_home_skeleton_hide_later: boolean;
			kevlar_include_query_in_search_endpoint: boolean;
			kevlar_injector: boolean;
			kevlar_inlined_html_templates_polymer_flags: boolean;
			kevlar_js_fixes: boolean;
			kevlar_keyboard_button_focus: boolean;
			kevlar_larger_three_dot_tap: boolean;
			kevlar_lazy_list_resume_for_autofill: boolean;
			kevlar_legacy_browsers: boolean;
			kevlar_local_innertube_response: boolean;
			kevlar_log_initial_screen: boolean;
			kevlar_logged_out_topbar_menu_migration: boolean;
			kevlar_macro_markers_keyboard_shortcut: boolean;
			kevlar_masthead_store: boolean;
			kevlar_mealbar_above_player: boolean;
			kevlar_miniplayer: boolean;
			kevlar_miniplayer_expand_top: boolean;
			kevlar_miniplayer_no_update_on_deactivate: boolean;
			kevlar_miniplayer_play_pause_on_scrim: boolean;
			kevlar_miniplayer_queue_user_activation: boolean;
			kevlar_miniplayer_set_element_early: boolean;
			kevlar_miniplayer_set_watch_next: boolean;
			kevlar_mix_handle_first_endpoint_different: boolean;
			kevlar_new_orchestration_api: boolean;
			kevlar_next_cold_on_auth_change_detected: boolean;
			kevlar_nitrate_driven_tooltips: boolean;
			kevlar_no_autoscroll_on_playlist_hover: boolean;
			kevlar_no_disconnect_observer_when_ignore_navigation: boolean;
			kevlar_no_url_params: boolean;
			kevlar_one_pick_add_video_to_playlist: boolean;
			kevlar_op_infra: boolean;
			kevlar_op_warm_pages: boolean;
			kevlar_page_manager_remove_ytrendererbehavior: boolean;
			kevlar_pandown_polyfill: boolean;
			kevlar_panels_api_client: boolean;
			kevlar_passive_event_listeners: boolean;
			kevlar_persistent_response_store: boolean;
			kevlar_picker_ajax_migration: boolean;
			kevlar_playback_associated_queue: boolean;
			kevlar_player_cached_load_config: boolean;
			kevlar_player_check_ad_state_on_stop: boolean;
			kevlar_player_disable_rvs_update: boolean;
			kevlar_player_load_player_no_op: boolean;
			kevlar_player_migrate_asset_loading: boolean;
			kevlar_player_new_bootstrap_adoption: boolean;
			kevlar_player_playlist_use_local_index: boolean;
			kevlar_player_response_swf_config_wrapper_killswitch: boolean;
			kevlar_player_watch_endpoint_navigation: boolean;
			kevlar_playlist_autonav_loop_fix: boolean;
			kevlar_playlist_drag_handles: boolean;
			kevlar_playlist_responsive: boolean;
			kevlar_prefetch: boolean;
			kevlar_prepare_player_on_miniplayer_activation: boolean;
			kevlar_prevent_polymer_dynamic_font_load: boolean;
			kevlar_queue_use_dedicated_list_type: boolean;
			kevlar_queue_use_update_api: boolean;
			kevlar_refresh_gesture: boolean;
			kevlar_remove_prepopulator: boolean;
			kevlar_rendererstamper_event_listener: boolean;
			kevlar_resolve_command_for_confirm_dialog: boolean;
			kevlar_resolve_playlist_endpoint_as_watch_endpoint: boolean;
			kevlar_save_queue: boolean;
			kevlar_scroll_chips_on_touch: boolean;
			kevlar_scrollbar_rework: boolean;
			kevlar_service_command_check: boolean;
			kevlar_set_internal_player_size: boolean;
			kevlar_shell_for_downloads_page: boolean;
			kevlar_should_maintain_stable_list: boolean;
			kevlar_snap_state_refresh: boolean;
			kevlar_standard_scrollbar_color: boolean;
			kevlar_startup_lifecycle: boolean;
			kevlar_structured_description_content_inline: boolean;
			kevlar_system_icons: boolean;
			kevlar_tabs_gesture: boolean;
			kevlar_text_inline_expander_formatted_snippet: boolean;
			kevlar_themed_standardized_scrollbar: boolean;
			kevlar_three_dot_ink: boolean;
			kevlar_thumbnail_fluid: boolean;
			kevlar_toast_manager: boolean;
			kevlar_too_many_devices_outcome: boolean;
			kevlar_topbar_logo_fallback_home: boolean;
			kevlar_touch_feedback: boolean;
			kevlar_touch_feedback_lockups: boolean;
			kevlar_touch_gesture_ves: boolean;
			kevlar_transcript_engagement_panel: boolean;
			kevlar_transcript_panel_refreshed_styles: boolean;
			kevlar_tuner_run_default_comments_delay: boolean;
			kevlar_tuner_should_defer_detach: boolean;
			kevlar_typography_spacing_update: boolean;
			kevlar_typography_update: boolean;
			kevlar_unavailable_video_error_ui_client: boolean;
			kevlar_unified_errors_init: boolean;
			kevlar_unified_server_contract_client: boolean;
			kevlar_update_youtube_sans: boolean;
			kevlar_updated_logo_icons: boolean;
			kevlar_use_endpoint_for_channel_creation_form: boolean;
			kevlar_use_one_platform_for_queue_refresh: boolean;
			kevlar_use_page_command_url: boolean;
			kevlar_use_page_data_will_update: boolean;
			kevlar_use_player_response_for_updates: boolean;
			kevlar_use_response_ttl_to_invalidate_cache: boolean;
			kevlar_use_vimio_behavior: boolean;
			kevlar_use_ytd_player: boolean;
			kevlar_variable_youtube_sans: boolean;
			kevlar_vimio_use_per_page_observer: boolean;
			kevlar_voice_logging_fix: boolean;
			kevlar_voice_search: boolean;
			kevlar_watch_color_update: boolean;
			kevlar_watch_drag_handles: boolean;
			kevlar_watch_focus_on_engagement_panels: boolean;
			kevlar_watch_gesture_pandown: boolean;
			kevlar_watch_increased_width_threshold: boolean;
			kevlar_watch_js_panel_height: boolean;
			kevlar_watch_metadata_refresh_description_inline_expander: boolean;
			kevlar_watch_metadata_refresh_for_live_killswitch: boolean;
			kevlar_watch_metadata_refresh_left_aligned_video_actions: boolean;
			kevlar_watch_metadata_refresh_lower_case_video_actions: boolean;
			kevlar_watch_metadata_refresh_narrower_item_wrap: boolean;
			kevlar_watch_metadata_refresh_normal_description_preamble: boolean;
			kevlar_watch_navigation_clear_autoplay_count_session_data: boolean;
			kevlar_watch_next_chips_continuations_migration: boolean;
			kevlar_watch_panel_height_matches_player: boolean;
			kevlar_watch_skeleton: boolean;
			kevlar_web_response_context_yt_config_deprecation: boolean;
			kevlar_woffle_dl_manager: boolean;
			kevlar_woffle_fallback_image: boolean;
			kevlar_woffle_settings: boolean;
			live_chat_increased_min_height: boolean;
			live_chat_over_playlist: boolean;
			log_heartbeat_with_lifecycles: boolean;
			log_vis_on_tab_change: boolean;
			log_web_endpoint_to_layer: boolean;
			mdx_enable_privacy_disclosure_ui: boolean;
			mdx_load_cast_api_bootstrap_script: boolean;
			mweb_command_handler: boolean;
			mweb_deprecate_webfe_service_request: boolean;
			mweb_enable_consistency_service: boolean;
			mweb_navigate_to_watch_with_op: boolean;
			mweb_navigate_with_op: boolean;
			networkless_gel: boolean;
			networkless_logging: boolean;
			no_sub_count_on_sub_button: boolean;
			nwl_send_fast_on_unload: boolean;
			offline_error_handling: boolean;
			pageid_as_header_web: boolean;
			pdg_desktop_super_thanks_header_update: boolean;
			pdg_disable_web_super_vod_explicit_click_logging: boolean;
			pes_aes_all: boolean;
			pes_migrate_association_data: boolean;
			player_allow_autonav_after_playlist: boolean;
			player_bootstrap_method: boolean;
			player_doubletap_to_seek: boolean;
			player_enable_playback_playlist_change: boolean;
			player_endscreen_ellipsis_fix: boolean;
			polymer2_element_pool_properties: boolean;
			polymer2_not_shady_build: boolean;
			polymer2_polyfill_manual_flush: boolean;
			polymer_bad_build_labels: boolean;
			polymer_task_manager_proxied_promise: boolean;
			polymer_verifiy_app_state: boolean;
			polymer_video_renderer_defer_menu: boolean;
			polymer_warm_thumbnail_preload: boolean;
			qoe_send_and_write: boolean;
			record_app_crashed_web: boolean;
			reload_without_polymer_innertube: boolean;
			remove_yt_simple_endpoint_from_desktop_display_ad_title: boolean;
			rich_grid_content_visibility_optimization: boolean;
			rich_grid_enable_edge_to_edge: boolean;
			rich_grid_mini_mode: boolean;
			search_image_menu_alignment: boolean;
			search_ui_enable_pve_buy_button: boolean;
			search_ui_official_cards_enable_paid_virtual_event_buy_button: boolean;
			searchbox_reporting: boolean;
			serve_pdp_at_canonical_url: boolean;
			service_worker_enabled: boolean;
			service_worker_push_enabled: boolean;
			service_worker_push_home_page_prompt: boolean;
			service_worker_push_watch_page_prompt: boolean;
			service_worker_subscribe_with_vapid_key: boolean;
			should_clear_video_data_on_player_cued_unstarted: boolean;
			show_civ_reminder_on_web: boolean;
			skip_endpoint_param_comparison: boolean;
			skip_ls_gel_retry: boolean;
			spf_kevlar_assume_chunked: boolean;
			sponsorships_gifting_enable_announcements: boolean;
			sponsorships_gifting_enable_opt_in: boolean;
			sponsorships_gifting_enable_purchase: boolean;
			sponsorships_gifting_enable_purchase_frontend: boolean;
			suppress_error_204_logging: boolean;
			topbar_persistent_store_fallback: boolean;
			track_webfe_innertube_auth_mismatch: boolean;
			use_ads_engagement_panel_desktop_footer_cta: boolean;
			use_better_post_dismissals: boolean;
			use_bg_facade: boolean;
			use_document_lifecycles: boolean;
			use_on_click_for_desktop_companion: boolean;
			use_source_element_if_present_for_actions: boolean;
			use_updated_video_masthead_player_logic: boolean;
			use_watch_fragments2: boolean;
			vss_final_ping_send_and_write: boolean;
			vss_playback_use_send_and_write: boolean;
			warm_load_nav_start_web: boolean;
			warm_op_csn_cleanup: boolean;
			web_always_load_chat_support: boolean;
			web_api_url: boolean;
			web_autonav_allow_off_by_default: boolean;
			web_click_command_fallback: boolean;
			web_compact_video_single_line: boolean;
			web_dedupe_ve_grafting: boolean;
			web_deprecate_service_ajax_map_dependency: boolean;
			web_dont_cancel_pending_navigation_same_url: boolean;
			web_enable_ad_signals_in_it_context: boolean;
			web_enable_history_cache_map: boolean;
			web_enable_voz_audio_feedback: boolean;
			web_engagement_panel_show_description: boolean;
			web_ep_chevron_tap_target_size: boolean;
			web_favicon_image_update: boolean;
			web_forward_command_on_pbj: boolean;
			web_fp_via_jspb?: boolean;
			web_fp_via_jspb_and_json?: boolean;
			web_gel_timeout_cap: boolean;
			web_hide_autonav_headline: boolean;
			web_hide_autonav_keyline: boolean;
			web_inject_fetch_manager: boolean;
			web_inline_player_enabled: boolean;
			web_log_memory_total_kbytes: boolean;
			web_log_player_watch_next_ticks: boolean;
			web_log_push_impressions_after_show: boolean;
			web_log_reels_ticks: boolean;
			web_memoize_inflight_requests: boolean;
			web_move_autoplay_video_under_chip: boolean;
			web_notification_button_shape: boolean;
			web_open_guide_items_in_new_tab: boolean;
			web_ordered_response_processors: boolean;
			web_player_autonav_toggle_always_listen: boolean;
			web_player_enable_ipp: boolean;
			web_player_move_autonav_toggle: boolean;
			web_player_mutable_event_label: boolean;
			web_player_touch_mode_improvements: boolean;
			web_player_watch_next_response: boolean;
			web_playlist_watch_panel_overflow_with_add_to: boolean;
			web_prefetch_preload_video: boolean;
			web_prs_testing_mode_killswitch: boolean;
			web_response_processor_support: boolean;
			web_snackbar_ui_refresh: boolean;
			web_structured_description_show_more: boolean;
			web_use_cache_for_image_fallback: boolean;
			web_use_overflow_menu_for_playlist_watch_panel: boolean;
			web_use_url_api_to_add_params: boolean;
			web_yt_config_context: boolean;
			woffle_entity_migration: boolean;
			woffle_pause_video_download: boolean;
			your_data_entrypoint: boolean;
			ytidb_clear_embedded_player: boolean;
			ytidb_fetch_datasync_ids_for_data_cleanup: boolean;
			addto_ajax_log_warning_fraction: number;
			autoplay_pause_by_lact_sampling_fraction: number;
			browse_ajax_log_warning_fraction: number;
			kevlar_async_stamp_probability: number;
			kevlar_tuner_clamp_device_pixel_ratio: number;
			kevlar_tuner_thumbnail_factor: number;
			kevlar_unified_player_logging_threshold: number;
			log_window_onerror_fraction: number;
			polymer_report_client_url_requested_rate: number;
			polymer_report_missing_web_navigation_endpoint_rate: number;
			web_system_health_fraction: number;
			ytidb_transaction_ended_event_rate_limit: number;
			autoplay_pause_by_lact_sec: number;
			autoplay_time: number;
			autoplay_time_for_fullscreen: number;
			autoplay_time_for_music_content: number;
			autoplay_time_for_music_content_after_autoplayed_video: number;
			botguard_async_snapshot_timeout_ms: number;
			check_navigator_accuracy_timeout_ms: number;
			client_streamz_web_flush_count: number;
			client_streamz_web_flush_interval_seconds: number;
			desktop_search_suggestion_tap_target: number;
			external_fullscreen_button_click_threshold: number;
			external_fullscreen_button_shown_threshold: number;
			get_async_timeout_ms: number;
			high_priority_flyout_frequency: number;
			initial_gel_batch_timeout: number;
			kevlar_async_stamp_delay: number;
			kevlar_mini_guide_width_threshold: number;
			kevlar_persistent_guide_width_threshold: number;
			kevlar_time_caching_end_threshold: number;
			kevlar_time_caching_start_threshold: number;
			kevlar_tooltip_impression_cap: number;
			kevlar_tuner_default_comments_delay: number;
			kevlar_tuner_scheduler_soft_state_timer_ms: number;
			kevlar_tuner_visibility_time_between_jobs_ms: number;
			kevlar_watch_flexy_metadata_height: number;
			kevlar_watch_metadata_refresh_description_lines: number;
			log_web_meta_interval_ms: number;
			max_duration_to_consider_mouseover_as_hover: number;
			min_mouse_still_duration: number;
			minimum_duration_to_consider_mouseover_as_hover: number;
			network_polling_interval: number;
			pbj_navigate_limit: number;
			polymer_log_prop_change_observer_percent: number;
			post_type_icons_rearrange: number;
			prefetch_comments_ms_after_video: number;
			rich_grid_watch_close_animation_duration: number;
			rich_grid_watch_open_animation_duration: number;
			service_worker_push_logged_out_prompt_watches: number;
			service_worker_push_prompt_cap: number;
			service_worker_push_prompt_delay_microseconds: number;
			user_engagement_experiments_rate_limit_ms: number;
			user_mention_suggestions_edu_impression_cap: number;
			viewport_load_collection_wait_time: number;
			visibility_time_between_jobs_ms: number;
			watch_next_pause_autoplay_lact_sec: number;
			web_emulated_idle_callback_delay: number;
			web_foreground_heartbeat_interval_ms: number;
			web_gel_debounce_ms: number;
			web_inline_player_triggering_delay: number;
			web_logging_max_batch: number;
			yoodle_end_time_utc: number;
			yoodle_start_time_utc: number;
			ytidb_remake_db_retries: number;
			ytidb_reopen_db_retries: number;
			WebClientReleaseProcessCritical__youtube_web_client_version_override: string;
			cb_v2_uxe: string;
			debug_forced_internalcountrycode: string;
			desktop_sbox_icon: string;
			desktop_search_prominent_thumbs_style: string;
			desktop_searchbar_style: string;
			desktop_suggestion_box_style: string;
			desktop_web_client_version_override: string;
			embeds_web_synth_ch_headers_banned_urls_regex: string;
			kevlar_duplicate_pref_cookie_domain_override: string;
			kevlar_link_capturing_mode: string;
			kevlar_next_up_next_edu_emoji: string;
			live_chat_unicode_emoji_json_url: string;
			polymer_task_manager_status: string;
			service_worker_push_force_notification_prompt_tag: string;
			service_worker_scope: string;
			web_client_version_override: string;
			web_image_selection_algorithm: string;
			yoodle_base_url: string;
			yoodle_webp_base_url: string;
			conditional_lab_ids: [];
			guide_business_info_countries: string[];
			guide_legal_footer_enabled_countries: string[];
			kevlar_command_handler_command_banlist: [];
			kevlar_op_browse_sampled_prefix_ids: [];
			kevlar_page_service_url_prefix_carveouts: [];
			ten_video_reordering: number[];
			twelve_video_reordering: number[];
			web_op_continuation_type_banlist: [];
			web_op_endpoint_banlist: [];
			web_op_signal_type_banlist: [];
			gpa_sparkles_ten_percent_layer?: boolean;
			kevlar_enable_ybp_op?: boolean;
			render_unicode_emojis_as_images?: boolean;
			sponsorships_emojis_in_picker_loading_lazy?: boolean;
			sponsorships_global_emojis_in_comments_web?: boolean;
			sponsorships_upsell_in_picker?: boolean;
			sponsorships_use_png_for_emoji_rendering?: boolean;
			unicode_emojis_in_picker_in_comments?: boolean;
		};
		GAPI_HINT_PARAMS: string;
		GAPI_HOST: string;
		GAPI_LOCALE: string;
		GL: string;
		GOOGLE_FEEDBACK_PRODUCT_ID: string;
		GOOGLE_FEEDBACK_PRODUCT_DATA: {
			polymer: string;
			polymer2: string;
			accept_language: string;
		};
		HL: string;
		HTML_DIR: string;
		HTML_LANG: string;
		INNERTUBE_API_KEY: string;
		INNERTUBE_API_VERSION: string;
		INNERTUBE_CLIENT_NAME: string;
		INNERTUBE_CLIENT_VERSION: string;
		INNERTUBE_CONTEXT: {
			client: {
				hl: string;
				gl: string;
				remoteHost: string;
				deviceMake: string;
				deviceModel: string;
				visitorData: string;
				userAgent: string;
				clientName: string;
				clientVersion: string;
				osName: string;
				osVersion: string;
				originalUrl: string;
				platform: string;
				clientFormFactor: string;
				configInfo: {
					appInstallData: string;
				};
			};
			user: {
				lockedSafetyMode: boolean;
			};
			request: {
				useSsl: boolean;
			};
			clickTracking: clickTracking;
		};
		INNERTUBE_CONTEXT_CLIENT_NAME: number;
		INNERTUBE_CONTEXT_CLIENT_VERSION: string;
		INNERTUBE_CONTEXT_GL: string;
		INNERTUBE_CONTEXT_HL: string;
		LATEST_ECATCHER_SERVICE_TRACKING_PARAMS: {
			'client.name': string;
		};
		LOGGED_IN: boolean;
		PAGE_BUILD_LABEL: string;
		PAGE_CL: number;
		scheduler: {
			useRaf: boolean;
			timeout: number;
		};
		SERVER_NAME: string;
		SESSION_INDEX: string;
		SIGNIN_URL: string;
		VISITOR_DATA: string;
		WEB_PLAYER_CONTEXT_CONFIGS: {
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_CHANNEL_TRAILER: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_PLAYLIST_OVERVIEW: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_VERTICAL_LANDING_PAGE_PROMO: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_SHORTS: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_SPONSORSHIPS_OFFER: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
			WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_INLINE_PREVIEW: WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH;
		};
		XSRF_FIELD_NAME: string;
		XSRF_TOKEN: string;
		YPC_MB_URL: string;
		YTR_FAMILY_CREATION_URL: string;
		SERVER_VERSION: string;
		REUSE_COMPONENTS: boolean;
		STAMPER_STABLE_LIST: boolean;
		DATASYNC_ID: string;
		SERIALIZED_CLIENT_CONFIG_DATA: string;
		LIVE_CHAT_BASE_TANGO_CONFIG: {
			apiKey: string;
			channelUri: string;
			clientName: string;
			requiresAuthToken: boolean;
			senderUri: string;
			useNewTango: boolean;
		};
		FEXP_EXPERIMENTS: number[];
		LIVE_CHAT_SEND_MESSAGE_ACTION: string;
		ROOT_VE_TYPE: number;
		CLIENT_PROTOCOL: string;
		CLIENT_TRANSPORT: string;
		TIME_CREATED_MS: number;
		VISIBILITY_TIME_BETWEEN_JOBS_MS: number;
		START_IN_THEATER_MODE: boolean;
		START_IN_FULL_WINDOW_MODE: boolean;
		SERVICE_WORKER_PROMPT_NOTIFICATIONS: boolean;
		SBOX_LABELS: {
			SUGGESTION_DISMISS_LABEL: string;
			SUGGESTION_DISMISSED_LABEL: string;
		};
		ONE_PICK_URL: string;
		NO_EMPTY_DATA_IMG: boolean;
		MENTIONS_EDU_HELP_LINK: string;
		DEFERRED_DETACH: boolean;
		ZWIEBACK_PING_URLS: string[];
		VOZ_API_KEY: string;
		STS: number;
		SBOX_SETTINGS: {
			HAS_ON_SCREEN_KEYBOARD: boolean;
			IS_FUSION: boolean;
			IS_POLYMER: boolean;
			REQUEST_DOMAIN: string;
			REQUEST_LANGUAGE: string;
			SEND_VISITOR_DATA: boolean;
			SEARCHBOX_BEHAVIOR_EXPERIMENT: string;
			SEARCHBOX_ENABLE_REFINEMENT_SUGGEST: boolean;
			SEARCHBOX_TAP_TARGET_EXPERIMENT: number;
			SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST: string;
			SUGG_EXP_ID: string;
			VISITOR_DATA: string;
			SEARCHBOX_HOST_OVERRIDE: string;
			HIDE_REMOVE_LINK: boolean;
		};
		SBOX_JS_URL: string;
		RECAPTCHA_V3_SITEKEY: string;
		PLAYER_JS_URL: string;
		PLAYER_CSS_URL: string;
		LINK_GAL_DOMAIN: string;
		LINK_OIS_DOMAIN: string;
		IS_TABLET: boolean;
		LINK_API_KEY: string;
		DISABLE_WARM_LOADS: boolean;
		IS_RESULTS_PAGE_COLD?: boolean;
	};
	continuations?: initialData[];
}

interface content {
	adsEngagementPanelContentRenderer?: signInEndpoint;
	structuredDescriptionContentRenderer?: {
		items: {
			menuNavigationItemRenderer: menuNavigationItemRenderer;
		}[];
	};
	sectionListRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
	simpleText?: string;
	verticalListRenderer?: menuNavigationItemRenderer;
}

interface searchEndpoint {
	query?: string;
	clickTrackingParams?: string;
	commandMetadata?: commandMetadata;
	searchEndpoint?: searchEndpoint;
	params?: string;
}

interface serviceTrackingParams {
	service?: string;
	params: {
		key: string;
		value?: string;
		addToOfflineButtonState?: string;
	}[] | string;
	videoIds?: string[];
	channelIds?: string[];
}

interface commandMetadata {
	webCommandMetadata: webCommandMetadata;
}

interface watchEndpoint {
	videoId?: string;
	playlistId?: string;
	index?: number;
	params?: string;
	playerParams?: string;
	loggingContext?: {
		vssLoggingContext: {
			serializedContextData: string;
		};
	};
	watchEndpointSupportedPrefetchConfig?: {
		prefetchHintConfig: {
			prefetchPriority: number;
			playbackRelativeSecondsPrefetchCondition: number;
		};
	};
	watchEndpointSupportedOnesieConfig?: {
		html5PlaybackOnesieConfig: {
			commonConfig: commonConfig;
		};
	};
	nofollow?: boolean;
	continuePlayback?: boolean;
	startTimeSeconds?: number;
	thumbnail?: thumbnail;
	overlay?: overlay;
	sequenceProvider?: string;
	sequenceParams?: string;
}

interface modalWithTitleAndButtonRenderer {
	title: title | viewCount;
	content?: content | title | viewCount;
	button?: button;
	trackingParams?: string;
	filters?: {
		searchFilterRenderer: metadataBadgeRenderer;
	}[];
}

interface videoPrimaryInfoRenderer {
	title?: title;
	viewCount?: viewCount;
	videoActions?: videoActions;
	trackingParams?: string;
	dateText?: viewCount;
	owner?: owner;
	description?: title;
	subscribeButton?: button;
	metadataRowContainer?: {
		metadataRowContainerRenderer: metadataRowHeaderRenderer;
	};
	showMoreText?: title | viewCount;
	showLessText?: viewCount;
	defaultExpanded?: boolean;
	descriptionCollapsedLines?: number;
	showMoreCommand?: commands;
	showLessCommand?: commands;
	thumbnailRenderer?: thumbnailRenderer;
	stats?: [
		title,
		viewCount,
		title
	];
	menu?: videoActions;
	thumbnailOverlays?: {
		thumbnailOverlayTimeStatusRenderer?: runs;
		thumbnailOverlayToggleButtonRenderer?: {
			isToggled?: boolean;
			untoggledIcon: icon;
			toggledIcon: icon;
			untoggledTooltip: string;
			toggledTooltip: string;
			untoggledServiceEndpoint: navigationEndpoints;
			toggledServiceEndpoint?: navigationEndpoints;
			untoggledAccessibility: accessibilityData;
			toggledAccessibility: accessibilityData;
			trackingParams: string;
		};
		thumbnailOverlayNowPlayingRenderer?: runs;
		thumbnailOverlayBottomPanelRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlayHoverTextRenderer?: thumbnailOverlayBottomPanelRenderer;
		thumbnailOverlaySidePanelRenderer?: thumbnailOverlayBottomPanelRenderer;
	}[];
	navigationEndpoint?: navigationEndpoints;
}

interface changeEngagementPanelVisibilityAction {
	targetId: string;
	visibility?: string;
	content?: content;
	loggingDirectives?: unifiedSharePanelRenderer;
	panelIdentifier?: string;
	header?: header;
	veType?: number;
	continuationItems?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	}[];
}

interface thumbnailOverlayBottomPanelRenderer {
	icon: icon;
	text?: title | viewCount;
}

interface header {
	engagementPanelTitleHeaderRenderer?: metadataBadgeRenderer;
	collapsedTitle?: viewCount;
	collapsedThumbnail?: thumbnail;
	collapsedLabel?: title;
	expandedTitle?: title;
	richListHeaderRenderer?: buttonRenderer;
}

interface clickTracking {
	clickTrackingParams: string;
}

interface responseContext {
	serviceTrackingParams: serviceTrackingParams[];
	mainAppWebResponseContext: {
		loggedOut: boolean;
	};
	webResponseContextExtensionData: {
		ytConfigData?: {
			visitorData: string;
			rootVisualElementType: number;
		};
		webPrefetchData?: {
			navigationEndpoints: navigationEndpoints[];
		};
		hasDecorated: boolean;
	};
}

interface runs {
	text: title | viewCount | string;
	navigationEndpoint?: clickTracking | navigationEndpoints;
	style?: string;
	bold?: boolean;
	loggingDirectives?: unifiedSharePanelRenderer;
	icon?: icon;
}

interface signInEndpoint {
	hack?: boolean;
	nextEndpoint?: clickTracking | navigationEndpoints;
	idamTag?: string;
	continueAction?: string;
}

interface style {
	styleType: string;
}

interface commonConfig {
	url: string;
}

interface openPopupAction {
	popup: menuRenderer | {
		notificationActionRenderer: unifiedSharePanelRenderer;
	} | {
		unifiedSharePanelRenderer: unifiedSharePanelRenderer;
	} | {
		voiceSearchDialogRenderer: {
			placeholderHeader: title;
			promptHeader: title;
			exampleQuery1: title;
			exampleQuery2: title;
			promptMicrophoneLabel: title;
			loadingHeader: title;
			connectionErrorHeader: title;
			connectionErrorMicrophoneLabel: title;
			permissionsHeader: title;
			permissionsSubtext: title;
			disabledHeader: title;
			disabledSubtext: title;
			microphoneButtonAriaLabel: title;
			exitButton: button;
			trackingParams: string;
			microphoneOffPromptHeader: title;
		};
	};
	popupType: string;
	beReused?: boolean;
}

interface shareEntityServiceEndpoint {
	serializedShareEntity: string;
	commands?: commands[];
}

interface owner {
	videoOwnerRenderer: videoOwnerRenderer;
}

interface continuationItemRenderer {
	trigger: string;
	continuationEndpoint: navigationEndpoints;
	button?: button;
}

interface addToPlaylistCommand {
	openMiniplayer: boolean;
	openListPanel?: boolean;
	videoId: string;
	listType: string;
	onCreateListCommand: navigationEndpoints;
	videoIds: string[];
}

interface signalServiceEndpoint {
	signal?: string;
	actions: {
		addedVideoId?: string;
		action?: string;
		removedVideoId?: string;
		clickTrackingParams?: string;
		addToPlaylistCommand?: addToPlaylistCommand;
		openPopupAction?: openPopupAction;
		signalAction?: {
			signal: string;
		};
	}[] | commands;
	playlistId?: string;
}

interface playerOverlayVideoDetailsRenderer {
	title: title | viewCount;
	subtitle?: title;
	options?: {
		hotkeyDialogSectionOptionRenderer?: accessibilityData;
		persistenceOption?: string;
	}[];
}

interface videoDetails {
	playerOverlayVideoDetailsRenderer?: playerOverlayVideoDetailsRenderer;
	videoId?: string;
	title?: string;
	lengthSeconds?: string;
	keywords?: string[];
	channelId?: string;
	isOwnerViewing?: boolean;
	shortDescription?: string;
	isCrawlable?: boolean;
	thumbnail?: thumbnail;
	allowRatings?: boolean;
	viewCount?: string;
	author?: string;
	isPrivate?: boolean;
	isUnpluggedCorpus?: boolean;
	isLiveContent?: boolean;
}

interface feedbackEndpoint {
	feedbackToken: string;
	uiActions: {
		hideEnclosingContainer: boolean;
	};
}

interface overlay {
	tooltipRenderer?: buttonRenderer;
	reelPlayerOverlayRenderer?: buttonRenderer;
}

interface topbarLogoRenderer {
	iconImage?: icon;
	tooltipText?: title;
	endpoint?: navigationEndpoints;
	trackingParams: string;
	overrideEntityKey?: string;
	logo?: {
		topbarLogoRenderer: topbarLogoRenderer;
	};
	searchbox?: {
		fusionSearchboxRenderer: buttonRenderer;
	};
	topbarButtons?: {
		topbarMenuButtonRenderer?: buttonRenderer;
		buttonRenderer?: buttonRenderer;
	}[];
	hotkeyDialog?: {
		hotkeyDialogRenderer: metadataRowHeaderRenderer;
	};
	backButton?: button;
	forwardButton?: button;
	a11ySkipNavigationButton?: button;
	voiceSearchButton?: button;
}

interface config {
	webSearchboxConfig?: {
		requestLanguage: string;
		requestDomain: string;
		hasOnscreenKeyboard: boolean;
		focusSearchbox: boolean;
	};
	adPlacementConfig?: {
		kind: string;
		adTimeOffset: {
			offsetStartMilliseconds: string;
			offsetEndMilliseconds: string;
		};
		hideCueRangeMarker: boolean;
	};
}

interface frameworkUpdates {
	entityBatchUpdate: {
		mutations: {
			entityKey: string;
			type: string;
			options?: {
				hotkeyDialogSectionOptionRenderer?: accessibilityData;
				persistenceOption?: string;
			};
			payload?: {
				offlineabilityEntity: {
					key: string;
					value?: string;
					addToOfflineButtonState?: string;
				};
			};
		}[];
		timestamp: {
			seconds: string;
			nanos: number;
		};
	};
}

interface initialData {
	responseContext: responseContext;
	contents?: {
		videoPrimaryInfoRenderer?: videoPrimaryInfoRenderer;
		simpleText?: string;
		videoSecondaryInfoRenderer?: videoPrimaryInfoRenderer;
		continuationItemRenderer?: continuationItemRenderer;
		itemSectionRenderer?: metadataRowHeaderRenderer | unifiedSharePanelRenderer;
		playlistPanelVideoRenderer?: playlistPanelVideoRenderer;
		twoColumnWatchNextResults?: {
			results: {
				results?: unifiedSharePanelRenderer;
				compactVideoRenderer?: compactVideoRenderer;
				compactRadioRenderer?: compactVideoRenderer;
				continuationItemRenderer?: continuationItemRenderer;
				endScreenVideoRenderer?: compactVideoRenderer;
				endScreenPlaylistRenderer?: videoOwnerRenderer;
			};
			secondaryResults: {
				secondaryResults: metadataBadgeRenderer;
			};
			playlist: playlist;
			autoplay: {
				autoplay: metadataBadgeRenderer;
			};
		};
		playlistVideoRenderer?: playlistPanelVideoRenderer;
		playlistVideoListRenderer?: playlistPanelVideoRenderer;
		twoColumnBrowseResultsRenderer?: {
			tabs: {
				tabRenderer: buttonRenderer | metadataBadgeRenderer;
			}[];
		};
		searchPyvRenderer?: buttonRenderer;
		videoRenderer?: videoOwnerRenderer;
		playlistRenderer?: playlistPanelVideoRenderer;
		shelfRenderer?: modalWithTitleAndButtonRenderer;
		radioRenderer?: playlistPanelVideoRenderer;
		horizontalCardListRenderer?: buttonRenderer;
		channelRenderer?: unifiedSharePanelRenderer;
		twoColumnSearchResultsRenderer?: {
			primaryContents: content;
		};
	};
	currentVideoEndpoint?: navigationEndpoints;
	trackingParams: string;
	playerOverlays?: {
		playerOverlayRenderer: {
			endScreen: {
				watchNextEndScreenRenderer: metadataBadgeRenderer;
			};
			shareButton: button;
			addToMenu: videoActions;
			videoDetails: videoDetails;
		};
	};
	overlay?: overlay;
	onResponseReceivedEndpoints?: navigationEndpoints[];
	engagementPanels?: {
		engagementPanelSectionListRenderer: changeEngagementPanelVisibilityAction;
	}[];
	topbar?: {
		desktopTopbarRenderer: topbarLogoRenderer;
	};
	frameworkUpdates?: frameworkUpdates;
	metadata?: {
		playlistMetadataRenderer: metadataBadgeRenderer;
	};
	microformat?: microformat;
	sidebar?: {
		playlistSidebarRenderer: unifiedSharePanelRenderer;
	};
	onResponseReceivedActions?: commands[];
	estimatedResults?: string;
	onResponseReceivedCommands?: commands[];
}

interface initRange {
	start: string;
	end: string;
}

interface playerMicroformatRenderer {
	thumbnail: thumbnail;
	embed?: {
		iframeUrl: string;
		flashUrl: string;
		width: number;
		height: number;
		flashSecureUrl: string;
	};
	title: viewCount | string;
	description: viewCount | string;
	lengthSeconds?: string;
	ownerProfileUrl?: string;
	externalChannelId?: string;
	isFamilySafe?: boolean;
	availableCountries?: string[];
	isUnlisted?: boolean;
	hasYpcMetadata?: boolean;
	viewCount?: string;
	category?: string;
	publishDate?: string;
	ownerChannelName?: string;
	uploadDate?: string;
	urlCanonical?: string;
	siteName?: string;
	appName?: string;
	androidPackage?: string;
	iosAppStoreId?: string;
	iosAppArguments?: string;
	ogType?: string;
	urlApplinksWeb?: string;
	urlApplinksIos?: string;
	urlApplinksAndroid?: string;
	urlTwitterIos?: string;
	urlTwitterAndroid?: string;
	twitterCardType?: string;
	twitterSiteHandle?: string;
	schemaDotOrgType?: string;
	noindex?: boolean;
	unlisted?: boolean;
	linkAlternates?: {
		hrefUrl: string;
	}[];
}

interface microformat {
	playerMicroformatRenderer?: playerMicroformatRenderer;
	microformatDataRenderer?: playerMicroformatRenderer;
}

interface interpreterSafeUrl {
	privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

interface thumbnailRenderer {
	playlistVideoThumbnailRenderer: playlistPanelVideoRenderer;
}

interface FinalData {
	video: {
		initialData: initialData;
		initialPlayerResponse: {
			responseContext: responseContext;
			playabilityStatus: {
				status: string;
				playableInEmbed: boolean;
				miniplayer: {
					miniplayerRenderer: {
						playbackMode: string;
					};
				};
				contextParams: string;
			};
			streamingData: {
				expiresInSeconds: string;
				formats: {
					itag: number;
					mimeType: string;
					bitrate: number;
					width?: number;
					height?: number;
					lastModified: string;
					contentLength: string;
					quality: string;
					fps?: number;
					qualityLabel?: string;
					projectionType: string;
					averageBitrate: number;
					audioQuality?: string;
					approxDurationMs: string;
					audioSampleRate?: string;
					audioChannels?: number;
					signatureCipher: string;
					initRange?: initRange;
					indexRange?: initRange;
					colorInfo?: {
						primaries: string;
						transferCharacteristics: string;
						matrixCoefficients: string;
					};
					highReplication?: boolean;
					loudnessDb?: number;
				}[];
				adaptiveFormats: {
					itag: number;
					mimeType: string;
					bitrate: number;
					width?: number;
					height?: number;
					lastModified: string;
					contentLength: string;
					quality: string;
					fps?: number;
					qualityLabel?: string;
					projectionType: string;
					averageBitrate: number;
					audioQuality?: string;
					approxDurationMs: string;
					audioSampleRate?: string;
					audioChannels?: number;
					signatureCipher: string;
					initRange?: initRange;
					indexRange?: initRange;
					colorInfo?: {
						primaries: string;
						transferCharacteristics: string;
						matrixCoefficients: string;
					};
					highReplication?: boolean;
					loudnessDb?: number;
				}[];
				probeUrl: string;
			};
			playerAds: {
				playerLegacyDesktopWatchAdsRenderer: {
					playerAdParams: {
						enabledEngageTypes: string;
					};
				};
			}[];
			playbackTracking: {
				videostatsPlaybackUrl: videostatsPlaybackUrl;
				videostatsDelayplayUrl: videostatsPlaybackUrl;
				videostatsWatchtimeUrl: videostatsPlaybackUrl;
				ptrackingUrl: videostatsPlaybackUrl;
				qoeUrl: videostatsPlaybackUrl;
				atrUrl: videostatsPlaybackUrl;
				videostatsScheduledFlushWalltimeSeconds: number[];
				videostatsDefaultFlushIntervalSeconds: number;
				youtubeRemarketingUrl: videostatsPlaybackUrl;
				googleRemarketingUrl: videostatsPlaybackUrl;
			};
			videoDetails: videoDetails;
			playerConfig: {
				audioConfig: {
					loudnessDb: number;
					perceptualLoudnessDb: number;
					enablePerFormatLoudness: boolean;
				};
				streamSelectionConfig: {
					maxBitrate: string;
				};
				mediaCommonConfig: {
					dynamicReadaheadConfig: {
						maxReadAheadMediaTimeMs: number;
						minReadAheadMediaTimeMs: number;
						readAheadGrowthRateMs: number;
					};
				};
				webPlayerConfig: {
					webPlayerActionsPorting: {
						getSharePanelCommand: navigationEndpoints;
						subscribeCommand: navigationEndpoints;
						unsubscribeCommand: navigationEndpoints;
						addToWatchLaterCommand: navigationEndpoints;
						removeFromWatchLaterCommand: navigationEndpoints;
					};
				};
			};
			storyboards: {
				playerStoryboardSpecRenderer: {
					spec: string;
				};
			};
			microformat: microformat;
			trackingParams: string;
			attestation: {
				playerAttestationRenderer: {
					challenge: string;
					botguardData: {
						program: string;
						interpreterSafeUrl: interpreterSafeUrl;
						serverEnvironment: number;
					};
				};
			};
			messages: {
				mealbarPromoRenderer: buttonRenderer;
			}[];
			adPlacements: {
				adPlacementRenderer: {
					config: config;
					renderer: {
						adBreakServiceRenderer: {
							prefetchMilliseconds: string;
							getAdBreakUrl: string;
						};
					};
				};
			}[];
			frameworkUpdates: frameworkUpdates;
		};
	};
	playlist: playlist;
	search: playlist;
}

export default FinalData;