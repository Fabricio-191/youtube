[![Issues](https://img.shields.io/github/issues/Fabricio-191/youtube?style=for-the-badge)](https://github.com/Fabricio-191/youtube/issues)
[![Donate](https://img.shields.io/badge/donate-patreon-F96854.svg?style=for-the-badge)](https://www.patreon.com/fabricio_191)
[![Discord](https://img.shields.io/discord/555535212461948936?style=for-the-badge&color=7289da)](https://discord.gg/zrESMn6) 

You can see the changelog [here](https://github.com/Fabricio-191/youtube/blob/main/docs/changelog.md)

You have to bear in mind that this does not use an official youtube api, there is no documentation and a change could cause it to throw an error, besides that there are things that I do not know, such as different privacy settings or rendering 

## Use example:
```js
const { getVideo, getPlaylist, search } = require('@fabricio-191/youtube')
  .setDefaultOptions({
    location: 'AR',
    language: 'es-419'
  });
``` 

[here](https://github.com/Fabricio-191/youtube/blob/main/test/results.json) you can see a JSON that shows the information that each method gives (I do not put it here, because it is a lot)

# Methods:
### `getVideo(URLorID, options)`
  * returns a `Promise`
```js
getVideo('https://www.youtube.com/watch?v=H2wCwdHk-ao&list=PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
  .then(data => {
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
    const videos = data.results.filter(x => x.type === 'video');
    //do something...
  })  
  .catch(console.error);
```
### `setDefaultOptions(options)`
  * returns `this`

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
  * Some structures have a `toString()` method that returns the clear text in it, for others is an URL, like in an array of thumbnails
  
# To-do
  * A method to download videos
  * ~~Make typings and JSDoc~~
  * ~~Improve error handling~~
  * A method to get info and videos from a channel
  * Get comments from a video
    
# Credits
  * [ytpl](https://www.npmjs.com/package/ytpl) for the bases and the how-to
  * [This](https://stackoverflow.com/questions/6903823/regex-for-youtube-id) stack overflow post for the regex to get videos ID's from URL's