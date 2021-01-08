## 0.0.1-5  
* Improved text parsing to show URL's and bold text
* `getVideo()`
    * Now when trying to access private or non-existent videos it shows the youtube message
    * `uploadDate` property was changed to `uploadDateLabel`
    * The `isLive`, `isUnlisted`, `isFamilySafe`, `availableCountries`, `category`, `uploadDate`, `publishDate` properties were added
* `getPlaylist()`
    * Now when trying to access private or non-existent playlist it shows the youtube message

## 0.0.1-2
* Changed `secondaryResults` for `relatedVideos` in `getVideo()` result
* The link to the repository and the issues was fixed
* Fixed bugs when trying to get age restricted videos

## 0.0.1-0
* Module deployed