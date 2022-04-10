# caliph-api

# Note
ID</br>
Jika Ada Bug,</br>
Silahkan Buat [Issues](https://github.com/Caliph91/caliph-api/issues/new)

EN</br>
If there are bugs,</br>
please create [Issues](https://github.com/Caliph91/caliph-api/issues/new)


# Installation

## Latest
`npm i github:caliph91/caliph-api`

## Npm 
`npm i caliph-api`

# Require
```js
const api = require("caliph-api")
```

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

// Instagram (Post)
api.downloader.instagram.post(URL)
.then(console.log)

// Instagram (Story)
api.downloader.instagram.story(Username_IG)
.then(console.log)

// MediaFire
api.downloader.mediafire(URL)
.then(console.log)
```

## Search 
```js
// Happymod
api.search.happymod(query)
.then(console.log)

// Cari Grup Wa
api.search.carigrup(query)
.then(console.log)

// Kusonime
api.search.kusonime(query)
.then(console.log)

// IP Lookup
api.search.iplookup(domain/ip)
.then(console.log)

// Cuaca
api.search.cuaca(kota/city)
.then(console.log)

// Artinama
api.search.artinama(String)
.then(console.log)

// IG Stalk
api.search.igstalk(user)
.then(console.log)

// Film
api.search.film(query)
.then(console.log)

// Wallpaper Cave
api.search.wallpapercave(query)
.then(console.log)

// Singkatan Kata
api.search.singkatankata(Kata)
.then(console.log)

// Persamaan Kata (Sinomin)
api.search.persamaankata(Kata)
.then(console.log)

// Al Quran
api.search.quran(Surah)
.then(console.log)

// Free Fire ID
api.search.freefireid(ID)
.then(console.log)

// Wall Alphacoders
api.search.wall_alphacoders(Query) 
.then(console.log)
```

## Random
```js
// Fake UserAgent
const result = api.random.fakeua()
console.log(result)

// Quotes Anime
api.random.quotesanime()
.then(console.log)
```

## Other
```js
// Emojimix
api.other.emojimix(Emoji1, Emoji2)
.then(console.log)

// Translate
api.other.translate(String, lang)
.then(console.log) // Lang (Optional, Default: id)

// Rangkum (summarize)
api.other.rangkum(String)
.then(console.log)
```

## Tools
```js
// Whois
api.tools.whois(domain)
.then(console.log)

// getHeaders 
api.tools.getHeaders(url)
.then(console.log)

// Shortlink
api.tools.shortlink(url, custom)
.then(console.log) // custom (optional, default: random)

// Upload File
api.tools.uploadFile(Buffer)
.then(console.log) // upload file to https://uploader.caliph.my.id

// Minifyjs
api.tools.minifyjs(Code_javascript)

// Encrypt HTML
api.tools.EncryptHTML(Code_html)
```

## Game
```js
// Family100
api.game.family100()
.then(console.log)

// Siapakah Aku
api.game.siapakahaku()
.then(console.log)
```
