![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?color=white&style=for-the-badge)

## Use example:
```js
const YT = require('@fabricio-191/youtube');

YT.setDefaultConfig({
  location: 'AR',
  language: 'es'
})


YT.getPlaylist('PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
  .then(data => {
    //do something...
  })  
  .catch(console.error);
``` 

___

## `getVideo()`  
```js
{
}
```