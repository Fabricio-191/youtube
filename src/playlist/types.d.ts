/** Info from a video in a playlist */
interface PlaylistVideo {
	/** Title/name of the video */
	title: string;
	/** ID of the video */
	ID: string;
	/** Direct URL to the video */
	URL: string;
	/** Index of the video in this his playlist */
	index: number;
	/** Thumbnails of the video */
	thumbnails: Thumbnails<Thumbnail>;
	/** Duration of the video */
	duration: Duration;
	/** Owner of the video */
	owner: PartialOwner;
}

/** Full info from a playlist */
interface Playlist {
	/** ID of the playlist */
	ID: string;
	/** Direct URL to the playlist */
	URL: string;
	/** Name of the playlist */
	name: string;
	/** The number of videos that were seen through the playlist */
	views: number;
	/** A text showing when was the last update of the playlist */
	lastUpdate: string;
	/** The description in the video */
	description: Text;
	/** Thumbnails of the playlist (normally thumbnails of the first video) */
	thumbnails?: Thumbnails<Thumbnail>;
	/** Data of the owner of the playlist */
	owner?: Owner;
	/** Whether the playlist is unlisted or not */
	isUnlisted: boolean;
	/** The number of total videos in the playlist */
	videoQuantity: number;
	/** A list of videos of the playlist */
	videos: PlaylistVideo[];
}

export interface InitialData {
	responseContext: {
		serviceTrackingParams: [
			{
				service: string;
				params: [
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					}
				];
			},
			{
				service: string;
				params: [
					{
						key: string;
						value: string;
					}
				];
			},
			{
				service: string;
				params: [
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					}
				];
			},
			{
				service: string;
				params: [
					{
						key: string;
						value: string;
					}
				];
			},
			{
				service: string;
				params: [
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					},
					{
						key: string;
						value: string;
					}
				];
			}
		];
		mainAppWebResponseContext: {
			loggedOut: boolean;
		};
		webResponseContextExtensionData: {
			ytConfigData: {
				visitorData: string;
				rootVisualElementType: number;
			};
			hasDecorated: boolean;
		};
	};
	contents: {
		twoColumnBrowseResultsRenderer: {
			tabs: [
				{
					tabRenderer: {
						selected: boolean;
						content: {
							sectionListRenderer: {
								contents: [
									{
										itemSectionRenderer: {
											contents: [
												{
													playlistVideoListRenderer: {
														contents: [
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															},
															{
																playlistVideoRenderer: {
																	videoId: string;
																	thumbnail: {
																		thumbnails: [
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			},
																			{
																				url: string;
																				width: number;
																				height: number;
																			}
																		];
																	};
																	title: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																	};
																	index: {
																		simpleText: string;
																	};
																	shortBylineText: {
																		runs: [
																			{
																				text: string;
																				navigationEndpoint: {
																					clickTrackingParams: string;
																					commandMetadata: {
																						webCommandMetadata: {
																							url: string;
																							webPageType: string;
																							rootVe: number;
																							apiUrl: string;
																						};
																					};
																					browseEndpoint: {
																						browseId: string;
																						canonicalBaseUrl: string;
																					};
																				};
																			}
																		];
																	};
																	lengthText: {
																		accessibility: {
																			accessibilityData: {
																				label: string;
																			};
																		};
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		watchEndpoint: {
																			videoId: string;
																			playlistId: string;
																			index: number;
																			params: string;
																			loggingContext: {
																				vssLoggingContext: {
																					serializedContextData: string;
																				};
																			};
																			watchEndpointSupportedOnesieConfig: {
																				html5PlaybackOnesieConfig: {
																					commonConfig: {
																						url: string;
																					};
																				};
																			};
																		};
																	};
																	lengthSeconds: string;
																	trackingParams: string;
																	isPlayable: boolean;
																	menu: {
																		menuRenderer: {
																			items: [
																				{
																					menuServiceItemRenderer: {
																						text: {
																							runs: [
																								{
																									text: string;
																								}
																							];
																						};
																						icon: {
																							iconType: string;
																						};
																						serviceEndpoint: {
																							clickTrackingParams: string;
																							commandMetadata: {
																								webCommandMetadata: {
																									sendPost: boolean;
																								};
																							};
																							signalServiceEndpoint: {
																								signal: string;
																								actions: [
																									{
																										clickTrackingParams: string;
																										addToPlaylistCommand: {
																											openMiniplayer: boolean;
																											videoId: string;
																											listType: string;
																											onCreateListCommand: {
																												clickTrackingParams: string;
																												commandMetadata: {
																													webCommandMetadata: {
																														sendPost: boolean;
																														apiUrl: string;
																													};
																												};
																												createPlaylistServiceEndpoint: {
																													videoIds: [
																														string
																													];
																													params: string;
																												};
																											};
																											videoIds: [
																												string
																											];
																										};
																									}
																								];
																							};
																						};
																						trackingParams: string;
																					};
																				}
																			];
																			trackingParams: string;
																			accessibility: {
																				accessibilityData: {
																					label: string;
																				};
																			};
																		};
																	};
																	thumbnailOverlays: [
																		{
																			thumbnailOverlayTimeStatusRenderer: {
																				text: {
																					accessibility: {
																						accessibilityData: {
																							label: string;
																						};
																					};
																					simpleText: string;
																				};
																				style: string;
																			};
																		},
																		{
																			thumbnailOverlayNowPlayingRenderer: {
																				text: {
																					runs: [
																						{
																							text: string;
																						}
																					];
																				};
																			};
																		}
																	];
																};
															}
														];
														playlistId: string;
														isEditable: boolean;
														canReorder: boolean;
														trackingParams: string;
														targetId: string;
													};
												}
											];
											trackingParams: string;
										};
									}
								];
								trackingParams: string;
							};
						};
						trackingParams: string;
					};
				}
			];
		};
	};
	alerts: [
		{
			alertWithButtonRenderer: {
				type: string;
				text: {
					simpleText: string;
				};
				dismissButton: {
					buttonRenderer: {
						style: string;
						size: string;
						isDisabled: boolean;
						icon: {
							iconType: string;
						};
						trackingParams: string;
						accessibilityData: {
							accessibilityData: {
								label: string;
							};
						};
					};
				};
			};
		}
	];
	metadata: {
		playlistMetadataRenderer: {
			title: string;
			androidAppindexingLink: string;
			iosAppindexingLink: string;
		};
	};
	trackingParams: string;
	topbar: {
		desktopTopbarRenderer: {
			logo: {
				topbarLogoRenderer: {
					iconImage: {
						iconType: string;
					};
					tooltipText: {
						runs: [
							{
								text: string;
							}
						];
					};
					endpoint: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								url: string;
								webPageType: string;
								rootVe: number;
								apiUrl: string;
							};
						};
						browseEndpoint: {
							browseId: string;
						};
					};
					trackingParams: string;
					overrideEntityKey: string;
				};
			};
			searchbox: {
				fusionSearchboxRenderer: {
					icon: {
						iconType: string;
					};
					placeholderText: {
						runs: [
							{
								text: string;
							}
						];
					};
					config: {
						webSearchboxConfig: {
							requestLanguage: string;
							requestDomain: string;
							hasOnscreenKeyboard: boolean;
							focusSearchbox: boolean;
						};
					};
					trackingParams: string;
					searchEndpoint: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								url: string;
								webPageType: string;
								rootVe: number;
							};
						};
						searchEndpoint: {
							query: string;
						};
					};
					clearButton: {
						buttonRenderer: {
							style: string;
							size: string;
							isDisabled: boolean;
							icon: {
								iconType: string;
							};
							trackingParams: string;
							accessibilityData: {
								accessibilityData: {
									label: string;
								};
							};
						};
					};
				};
			};
			trackingParams: string;
			topbarButtons: [
				{
					topbarMenuButtonRenderer: {
						icon: {
							iconType: string;
						};
						menuRenderer: {
							multiPageMenuRenderer: {
								sections: [
									{
										multiPageMenuSectionRenderer: {
											items: [
												{
													compactLinkRenderer: {
														icon: {
															iconType: string;
														};
														title: {
															runs: [
																{
																	text: string;
																}
															];
														};
														navigationEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	url: string;
																	webPageType: string;
																	rootVe: number;
																};
															};
															urlEndpoint: {
																url: string;
																target: string;
															};
														};
														trackingParams: string;
													};
												}
											];
											trackingParams: string;
										};
									},
									{
										multiPageMenuSectionRenderer: {
											items: [
												{
													compactLinkRenderer: {
														icon: {
															iconType: string;
														};
														title: {
															runs: [
																{
																	text: string;
																}
															];
														};
														navigationEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	url: string;
																	webPageType: string;
																	rootVe: number;
																};
															};
															urlEndpoint: {
																url: string;
																target: string;
															};
														};
														trackingParams: string;
													};
												},
												{
													compactLinkRenderer: {
														icon: {
															iconType: string;
														};
														title: {
															runs: [
																{
																	text: string;
																}
															];
														};
														navigationEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	url: string;
																	webPageType: string;
																	rootVe: number;
																};
															};
															urlEndpoint: {
																url: string;
																target: string;
															};
														};
														trackingParams: string;
													};
												}
											];
											trackingParams: string;
										};
									},
									{
										multiPageMenuSectionRenderer: {
											items: [
												{
													compactLinkRenderer: {
														icon: {
															iconType: string;
														};
														title: {
															runs: [
																{
																	text: string;
																}
															];
														};
														navigationEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	url: string;
																	webPageType: string;
																	rootVe: number;
																};
															};
															urlEndpoint: {
																url: string;
																target: string;
															};
														};
														trackingParams: string;
													};
												}
											];
											trackingParams: string;
										};
									}
								];
								trackingParams: string;
								style: string;
							};
						};
						trackingParams: string;
						accessibility: {
							accessibilityData: {
								label: string;
							};
						};
						tooltip: string;
						style: string;
						targetId: string;
					};
				},
				{
					topbarMenuButtonRenderer: {
						icon: {
							iconType: string;
						};
						menuRequest: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									sendPost: boolean;
									apiUrl: string;
								};
							};
							signalServiceEndpoint: {
								signal: string;
								actions: [
									{
										clickTrackingParams: string;
										openPopupAction: {
											popup: {
												multiPageMenuRenderer: {
													trackingParams: string;
													style: string;
													showLoadingSpinner: boolean;
												};
											};
											popupType: string;
											beReused: boolean;
										};
									}
								];
							};
						};
						trackingParams: string;
						accessibility: {
							accessibilityData: {
								label: string;
							};
						};
						tooltip: string;
						style: string;
					};
				},
				{
					buttonRenderer: {
						style: string;
						size: string;
						text: {
							runs: [
								{
									text: string;
								}
							];
						};
						icon: {
							iconType: string;
						};
						navigationEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									url: string;
									webPageType: string;
									rootVe: number;
								};
							};
							signInEndpoint: {
								idamTag: string;
							};
						};
						trackingParams: string;
						targetId: string;
					};
				}
			];
			hotkeyDialog: {
				hotkeyDialogRenderer: {
					title: {
						runs: [
							{
								text: string;
							}
						];
					};
					sections: [
						{
							hotkeyDialogSectionRenderer: {
								title: {
									runs: [
										{
											text: string;
										}
									];
								};
								options: [
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									}
								];
							};
						},
						{
							hotkeyDialogSectionRenderer: {
								title: {
									runs: [
										{
											text: string;
										}
									];
								};
								options: [
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									}
								];
							};
						},
						{
							hotkeyDialogSectionRenderer: {
								title: {
									runs: [
										{
											text: string;
										}
									];
								};
								options: [
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									}
								];
							};
						},
						{
							hotkeyDialogSectionRenderer: {
								title: {
									runs: [
										{
											text: string;
										}
									];
								};
								options: [
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										hotkeyDialogSectionOptionRenderer: {
											label: {
												runs: [
													{
														text: string;
													}
												];
											};
											hotkey: string;
											hotkeyAccessibilityLabel: {
												accessibilityData: {
													label: string;
												};
											};
										};
									}
								];
							};
						}
					];
					dismissButton: {
						buttonRenderer: {
							style: string;
							size: string;
							isDisabled: boolean;
							text: {
								runs: [
									{
										text: string;
									}
								];
							};
							trackingParams: string;
						};
					};
					trackingParams: string;
				};
			};
			backButton: {
				buttonRenderer: {
					trackingParams: string;
					command: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
							};
						};
						signalServiceEndpoint: {
							signal: string;
							actions: [
								{
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}
							];
						};
					};
				};
			};
			forwardButton: {
				buttonRenderer: {
					trackingParams: string;
					command: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
							};
						};
						signalServiceEndpoint: {
							signal: string;
							actions: [
								{
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}
							];
						};
					};
				};
			};
			a11ySkipNavigationButton: {
				buttonRenderer: {
					style: string;
					size: string;
					isDisabled: boolean;
					text: {
						runs: [
							{
								text: string;
							}
						];
					};
					trackingParams: string;
					command: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
							};
						};
						signalServiceEndpoint: {
							signal: string;
							actions: [
								{
									clickTrackingParams: string;
									signalAction: {
										signal: string;
									};
								}
							];
						};
					};
				};
			};
			voiceSearchButton: {
				buttonRenderer: {
					style: string;
					size: string;
					isDisabled: boolean;
					serviceEndpoint: {
						clickTrackingParams: string;
						commandMetadata: {
							webCommandMetadata: {
								sendPost: boolean;
							};
						};
						signalServiceEndpoint: {
							signal: string;
							actions: [
								{
									clickTrackingParams: string;
									openPopupAction: {
										popup: {
											voiceSearchDialogRenderer: {
												placeholderHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												promptHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												exampleQuery1: {
													runs: [
														{
															text: string;
														}
													];
												};
												exampleQuery2: {
													runs: [
														{
															text: string;
														}
													];
												};
												promptMicrophoneLabel: {
													runs: [
														{
															text: string;
														}
													];
												};
												loadingHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												connectionErrorHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												connectionErrorMicrophoneLabel: {
													runs: [
														{
															text: string;
														}
													];
												};
												permissionsHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												permissionsSubtext: {
													runs: [
														{
															text: string;
														}
													];
												};
												disabledHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
												disabledSubtext: {
													runs: [
														{
															text: string;
														}
													];
												};
												microphoneButtonAriaLabel: {
													runs: [
														{
															text: string;
														}
													];
												};
												exitButton: {
													buttonRenderer: {
														style: string;
														size: string;
														isDisabled: boolean;
														icon: {
															iconType: string;
														};
														trackingParams: string;
														accessibilityData: {
															accessibilityData: {
																label: string;
															};
														};
													};
												};
												trackingParams: string;
												microphoneOffPromptHeader: {
													runs: [
														{
															text: string;
														}
													];
												};
											};
										};
										popupType: string;
									};
								}
							];
						};
					};
					icon: {
						iconType: string;
					};
					tooltip: string;
					trackingParams: string;
					accessibilityData: {
						accessibilityData: {
							label: string;
						};
					};
				};
			};
		};
	};
	microformat: {
		microformatDataRenderer: {
			urlCanonical: string;
			title: string;
			description: string;
			thumbnail: {
				thumbnails: [
					{
						url: string;
						width: number;
						height: number;
					},
					{
						url: string;
						width: number;
						height: number;
					},
					{
						url: string;
						width: number;
						height: number;
					},
					{
						url: string;
						width: number;
						height: number;
					}
				];
			};
			siteName: string;
			appName: string;
			androidPackage: string;
			iosAppStoreId: string;
			iosAppArguments: string;
			ogType: string;
			urlApplinksWeb: string;
			urlApplinksIos: string;
			urlApplinksAndroid: string;
			urlTwitterIos: string;
			urlTwitterAndroid: string;
			twitterCardType: string;
			twitterSiteHandle: string;
			schemaDotOrgType: string;
			noindex: boolean;
			unlisted: boolean;
			linkAlternates: [
				{
					hrefUrl: string;
				},
				{
					hrefUrl: string;
				},
				{
					hrefUrl: string;
				}
			];
		};
	};
	sidebar: {
		playlistSidebarRenderer: {
			items: [
				{
					playlistSidebarPrimaryInfoRenderer: {
						thumbnailRenderer: {
							playlistVideoThumbnailRenderer: {
								thumbnail: {
									thumbnails: [
										{
											url: string;
											width: number;
											height: number;
										},
										{
											url: string;
											width: number;
											height: number;
										},
										{
											url: string;
											width: number;
											height: number;
										},
										{
											url: string;
											width: number;
											height: number;
										}
									];
								};
							};
						};
						title: {
							runs: [
								{
									text: string;
									navigationEndpoint: {
										clickTrackingParams: string;
										commandMetadata: {
											webCommandMetadata: {
												url: string;
												webPageType: string;
												rootVe: number;
											};
										};
										watchEndpoint: {
											videoId: string;
											playlistId: string;
											loggingContext: {
												vssLoggingContext: {
													serializedContextData: string;
												};
											};
											watchEndpointSupportedOnesieConfig: {
												html5PlaybackOnesieConfig: {
													commonConfig: {
														url: string;
													};
												};
											};
										};
									};
								}
							];
						};
						stats: [
							{
								runs: [
									{
										text: string;
									},
									{
										text: string;
									}
								];
							},
							{
								simpleText: string;
							},
							{
								runs: [
									{
										text: string;
									},
									{
										text: string;
									}
								];
							}
						];
						menu: {
							menuRenderer: {
								items: [
									{
										menuNavigationItemRenderer: {
											text: {
												simpleText: string;
											};
											icon: {
												iconType: string;
											};
											navigationEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														url: string;
														webPageType: string;
														rootVe: number;
														apiUrl: string;
													};
												};
												browseEndpoint: {
													browseId: string;
													params: string;
													nofollow: boolean;
													navigationType: string;
												};
											};
											trackingParams: string;
										};
									},
									{
										menuNavigationItemRenderer: {
											text: {
												simpleText: string;
											};
											icon: {
												iconType: string;
											};
											navigationEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														ignoreNavigation: boolean;
													};
												};
												modalEndpoint: {
													modal: {
														modalWithTitleAndButtonRenderer: {
															title: {
																simpleText: string;
															};
															content: {
																simpleText: string;
															};
															button: {
																buttonRenderer: {
																	style: string;
																	size: string;
																	isDisabled: boolean;
																	text: {
																		runs: [
																			{
																				text: string;
																			}
																		];
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		signInEndpoint: {
																			nextEndpoint: {
																				clickTrackingParams: string;
																				commandMetadata: {
																					webCommandMetadata: {
																						url: string;
																						webPageType: string;
																						rootVe: number;
																						apiUrl: string;
																					};
																				};
																				browseEndpoint: {
																					browseId: string;
																				};
																			};
																		};
																	};
																	trackingParams: string;
																};
															};
														};
													};
												};
											};
											trackingParams: string;
										};
									}
								];
								trackingParams: string;
								topLevelButtons: [
									{
										toggleButtonRenderer: {
											style: {
												styleType: string;
											};
											size: {
												sizeType: string;
											};
											isToggled: boolean;
											isDisabled: boolean;
											defaultIcon: {
												iconType: string;
											};
											toggledIcon: {
												iconType: string;
											};
											trackingParams: string;
											defaultTooltip: string;
											toggledTooltip: string;
											defaultNavigationEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														ignoreNavigation: boolean;
													};
												};
												modalEndpoint: {
													modal: {
														modalWithTitleAndButtonRenderer: {
															title: {
																simpleText: string;
															};
															content: {
																simpleText: string;
															};
															button: {
																buttonRenderer: {
																	style: string;
																	size: string;
																	isDisabled: boolean;
																	text: {
																		simpleText: string;
																	};
																	navigationEndpoint: {
																		clickTrackingParams: string;
																		commandMetadata: {
																			webCommandMetadata: {
																				url: string;
																				webPageType: string;
																				rootVe: number;
																			};
																		};
																		signInEndpoint: {
																			nextEndpoint: {
																				clickTrackingParams: string;
																				commandMetadata: {
																					webCommandMetadata: {
																						url: string;
																						webPageType: string;
																						rootVe: number;
																						apiUrl: string;
																					};
																				};
																				browseEndpoint: {
																					browseId: string;
																				};
																			};
																			idamTag: string;
																		};
																	};
																	trackingParams: string;
																};
															};
														};
													};
												};
											};
											accessibilityData: {
												accessibilityData: {
													label: string;
												};
											};
											toggledAccessibilityData: {
												accessibilityData: {
													label: string;
												};
											};
										};
									},
									{
										buttonRenderer: {
											style: string;
											size: string;
											isDisabled: boolean;
											icon: {
												iconType: string;
											};
											navigationEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														url: string;
														webPageType: string;
														rootVe: number;
													};
												};
												watchEndpoint: {
													videoId: string;
													playlistId: string;
													params: string;
													loggingContext: {
														vssLoggingContext: {
															serializedContextData: string;
														};
													};
													watchEndpointSupportedOnesieConfig: {
														html5PlaybackOnesieConfig: {
															commonConfig: {
																url: string;
															};
														};
													};
												};
											};
											accessibility: {
												label: string;
											};
											tooltip: string;
											trackingParams: string;
										};
									},
									{
										buttonRenderer: {
											style: string;
											size: string;
											isDisabled: boolean;
											serviceEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														sendPost: boolean;
														apiUrl: string;
													};
												};
												shareEntityServiceEndpoint: {
													serializedShareEntity: string;
													commands: [
														{
															clickTrackingParams: string;
															openPopupAction: {
																popup: {
																	unifiedSharePanelRenderer: {
																		trackingParams: string;
																		showLoadingSpinner: boolean;
																	};
																};
																popupType: string;
																beReused: boolean;
															};
														}
													];
												};
											};
											icon: {
												iconType: string;
											};
											accessibility: {
												label: string;
											};
											tooltip: string;
											trackingParams: string;
										};
									}
								];
								accessibility: {
									accessibilityData: {
										label: string;
									};
								};
								targetId: string;
							};
						};
						thumbnailOverlays: [
							{
								thumbnailOverlaySidePanelRenderer: {
									text: {
										simpleText: string;
									};
									icon: {
										iconType: string;
									};
								};
							}
						];
						navigationEndpoint: {
							clickTrackingParams: string;
							commandMetadata: {
								webCommandMetadata: {
									url: string;
									webPageType: string;
									rootVe: number;
								};
							};
							watchEndpoint: {
								videoId: string;
								playlistId: string;
								loggingContext: {
									vssLoggingContext: {
										serializedContextData: string;
									};
								};
								watchEndpointSupportedOnesieConfig: {
									html5PlaybackOnesieConfig: {
										commonConfig: {
											url: string;
										};
									};
								};
							};
						};
						description: {

						};
						showMoreText: {
							runs: [
								{
									text: string;
								}
							];
						};
					};
				},
				{
					playlistSidebarSecondaryInfoRenderer: {
						videoOwner: {
							videoOwnerRenderer: {
								thumbnail: {
									thumbnails: [
										{
											url: string;
											width: number;
											height: number;
										},
										{
											url: string;
											width: number;
											height: number;
										},
										{
											url: string;
											width: number;
											height: number;
										}
									];
								};
								title: {
									runs: [
										{
											text: string;
											navigationEndpoint: {
												clickTrackingParams: string;
												commandMetadata: {
													webCommandMetadata: {
														url: string;
														webPageType: string;
														rootVe: number;
														apiUrl: string;
													};
												};
												browseEndpoint: {
													browseId: string;
													canonicalBaseUrl: string;
												};
											};
										}
									];
								};
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											url: string;
											webPageType: string;
											rootVe: number;
											apiUrl: string;
										};
									};
									browseEndpoint: {
										browseId: string;
										canonicalBaseUrl: string;
									};
								};
								trackingParams: string;
							};
						};
						button: {
							buttonRenderer: {
								style: string;
								size: string;
								isDisabled: boolean;
								text: {
									runs: [
										{
											text: string;
										}
									];
								};
								navigationEndpoint: {
									clickTrackingParams: string;
									commandMetadata: {
										webCommandMetadata: {
											ignoreNavigation: boolean;
										};
									};
									modalEndpoint: {
										modal: {
											modalWithTitleAndButtonRenderer: {
												title: {
													simpleText: string;
												};
												content: {
													simpleText: string;
												};
												button: {
													buttonRenderer: {
														style: string;
														size: string;
														isDisabled: boolean;
														text: {
															simpleText: string;
														};
														navigationEndpoint: {
															clickTrackingParams: string;
															commandMetadata: {
																webCommandMetadata: {
																	url: string;
																	webPageType: string;
																	rootVe: number;
																};
															};
															signInEndpoint: {
																nextEndpoint: {
																	clickTrackingParams: string;
																	commandMetadata: {
																		webCommandMetadata: {
																			url: string;
																			webPageType: string;
																			rootVe: number;
																			apiUrl: string;
																		};
																	};
																	browseEndpoint: {
																		browseId: string;
																	};
																};
																continueAction: string;
																idamTag: string;
															};
														};
														trackingParams: string;
													};
												};
											};
										};
									};
								};
								trackingParams: string;
							};
						};
					};
				}
			];
			trackingParams: string;
		};
	};
}