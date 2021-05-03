## 0.0.2-3
* Solved [this](https://github.com/Fabricio-191/youtube/issues/3) issue
* Now when playlist (`getPlaylist` and `search`) have custom thumbnails renderer it will not throw an error
* Solved `null` values in `getVideo` related videos (added support for `compactPlaylistRenderer`)

## 0.0.2-2
* Solved [this](https://github.com/Fabricio-191/youtube/issues/1) issue
* Added more rules to ESLint
* Some minor changes to the code

## 0.0.2-0
* Added typings
* Changed half of the parsing system
* Improved error handling a little
* the `getVideo`, `getPlaylist` and `search` methods will resolve as `null` when there is no results or the item does not exist

## 0.0.1-5  
* Improved text parsing to show URL's and bold text in some cases
* `getVideo()`
    * Now when trying to access private or non-existent videos it shows the youtube message
    * `uploadDate` property was changed to `uploadDateLabel`
    * The `isLive`, `isUnlisted`, `isFamilySafe`, `availableCountries`, `category`, `uploadDate`, `publishDate` properties were added
* `getPlaylist()`
    * Now when trying to access private or non-existent playlist it shows the youtube message
    * The `isUnlisted` was added

## 0.0.1-2
* Changed `secondaryResults` for `relatedVideos` in `getVideo()` result
* The link to the repository and the issues was fixed
* Fixed bugs when trying to get age restricted videos

## 0.0.1-0
* Module deployed