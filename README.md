# caliph-api

# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/Caliph91/caliph-api/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/Caliph91/caliph-api/issues/new)


# Installation

## Latest
`npm i github:caliph91/caliph-api`

## Npm 
`npm i caliph-api`

# Require
```js
const api = require("caliph-api")

# Docs

## Encrypt
```js

// Binary (Encrypt) 
const result = api.encrypt.binary.enc('hello world');
console.log(result); // 1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100

// Binary (Decrypt)
const result = api.encrypt.binary.dec('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100');
console.log(result); // Hello World


```


## Wibu Stress
```js
// Wangy 
const result = api.stress.wangy(String);
console.log(result);

// Nenen
const result = api.stress.nenen(String);
console.log(result);

// Simp
const result = api.stress.simp(String);
console.log(result);

// Sherk 
const result = api.stress.sherk(String);
console.log(result);
```

## Downloader 
```js
// YouTube Music
api.downloader.youtube.ytmp3(url)
.then(console.log);

// Youtube Video 
api.downloader.youtube.ytmp4(url)
.then(console.log);

// Youtube Play Music
api.downloader.youtube.ytplay(query)
.then(console.log);

// YouTube Play Video
api.downloader.youtube.ytplayvid(query)
.then(console.log)

// Tiktok
api.downloader.tiktok(url)
.then(console.log)

// Tiktok 2 
api.downloader.tiktok2(url)
.then(console.log)

// SoundCloud 
api.downloader.soundcloud(url)
.then(console.log)
```

