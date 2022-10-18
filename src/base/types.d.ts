interface navigationEndpoint {
	clickTrackingParams: string;
	commandMetadata: {
		webCommandMetadata: {
			url: string;
		};
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

	type RunsAndAccesibility = Accessibility & Runs;

	interface Simple {
		simpleText: string;
	}

	type Any = Accessibility | Runs | RunsAndAccesibility | Simple;
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
