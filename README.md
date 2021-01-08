![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?color=white&style=for-the-badge)

## **This module is still under strong changes, development, features not implemented, which can make it difficult to use.**
## **It's not intended for use in production, at the moment.**

You can see the changelog [here](https://github.com/Fabricio-191/youtube/blob/main/docs/changelog.md)

## Use example:
```js
const { getVideo, getPlaylist, search } = require('@fabricio-191/youtube')
  .setDefaultOptions({
    location: 'AR',
    language: 'es-419'
  });
``` 

# Methods:
[here](https://github.com/Fabricio-191/youtube/blob/main/test/results.json) you can see a JSON that shows the information that each method gives (I do not put it here, because it is a lot)
### `getVideo(URLorID, options)`
  * returns a `Promise`
```js
getVideo('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
  .then(data => {
    if(data.error) console.log(data.error.message.toString());
    console.log(data);
    //do something...
  })  
  .catch(console.error);
```
### `getPlaylist(URLorID, options)`
  * returns a `Promise`
```js
getPlaylist('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
  .then(data => {
    console.log(data);
    //do something...
  })  
  .catch(console.error);
```
### `search(searchString, options)`
  * returns a `Promise`
```js
search('Node.js', { quantity: 40 })
  .then(data => {
    let videos = data.results.filter(x => x.type === 'video');
    //do something...
  })  
  .catch(console.error);
```
### `setDefaultOptions(options)`
  * returns `this` (the same as doing `require('@fabricio-191/youtube')`)

# Options:
The default options are: 
```js
{
  language: 'en',
  location: 'US',
  quantity: 'all',
  requestsOptions: {}
}
```
The default `quantity` for a search is 20

The `requestsOptions` are passed directly to the `http.request()` (or https) method  
[here](https://nodejs.org/api/http.html#http_http_request_options_callback) you can see which can be
  
And [here](https://github.com/Fabricio-191/youtube/blob/main/docs/list.md) you can see a list of valid `locations` and `languages`

When you pass options to a method, the options without value, will be taken from the default values

# Notes:
  * In an array of Thumbnails, the first will always be the bigger
  
# To-do
  * A method to download videos
  * Make typings and JSDoc
  * Improve error handling
  * A method to get info and videos from a channel
  * Get comments from a video
    
# Credits
  * [ytpl](https://www.npmjs.com/package/ytpl) for the bases and the how-to
  * [This](https://stackoverflow.com/questions/6903823/regex-for-youtube-id) stack overflow post for the regex to get videos ID's from URL's
  * [This](https://stackoverflow.com/questions/16868181/how-to-retrieve-a-youtube-playlist-id-using-regex-and-js) stack overflow post for the regex to get playlists ID's from URL's