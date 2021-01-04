![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?color=white&style=for-the-badge)

## Use example:
```js
const { getVideo, getPlaylist, search } = require('@fabricio-191/youtube')
  .setDefaultConfig({
    location: 'AR',
    language: 'es-419'
  });

getVideo('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
  .then(data => {
    console.log(data);
    //do something...
  })  
  .catch(console.error);

getPlaylist('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg', { quantity: 'all' })
  .then(data => {
    console.log(data);
    //do something...
  })  
  .catch(console.error);

search('Node.js', { quantity: 40 })
  .then(data => {
    let videos = data.results.filter(x => x.type === 'video');
    //do something...
  })  
  .catch(console.error);
``` 

[here](https://github.com/Fabricio-191/youtube/blob/main/test/results.json) you can see a JSON that shows the information that each method gives (I do not put it here, because it is a lot)

# Methods:

### `getVideo(URLorID, options)`
  * returns a `Promise`
### `getPlaylist(URLorID, options)`
  * returns a `Promise`
### `search(searchString, options)`
  * returns a `Promise`
### `setDefaultConfig(options)`
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
You can also set the default values

# Structures:
  * Thumbnails  
    An array of thumbnails, the first will always be the bigger  
    The method `toString()` will return the URL of the bigger thumbnail
  * Views
  * Duration
  * Subscribers

All these structures are something like this (except Thumbnails)

```js
{
  normal: '...',
  short: '...',
  number: 0,
  toString: [Function: toString]
}
```

The method `toString` first it will try to return the `short` form if it is available, if not the `normal` one
  
# To-do
  * A method to download videos
  * Make typings and JSDoc
  * A method to get info and videos from channel
  * Get comments from a video
    
# Credits
  * [ytpl](https://www.npmjs.com/package/ytpl) for the bases and the how-to
  * [This](https://stackoverflow.com/questions/6903823/regex-for-youtube-id) stack overflow post for the regex to get videos ID's from URL's
  * [This](https://stackoverflow.com/questions/16868181/how-to-retrieve-a-youtube-playlist-id-using-regex-and-js) for the regex to get playlists ID's from URL's