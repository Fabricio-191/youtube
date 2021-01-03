![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?color=white&style=for-the-badge)

## Use example:
```js
const { getVideo, getPlaylist, search } = require('@fabricio-191/youtube')
  .setDefaultConfig({
    location: 'AR',
    language: 'es'
  });


getPlaylist('PLDS0dpumEOi0pu_0pCGqvcaRkxg-o1gqg')
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