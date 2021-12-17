# caliph-api

# Installation

## Latest
`npm i github:caliph91/caliph-api`

## Npm 
`npm i caliph-api`

# require
```js
const caliph_api = require('caliph-api')
```


# Binary

## Encrypt
```js
var result = caliph_api.binary.enc('hello world')
console.log(result)
```
### Result 
```1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100```


## Decrypt 
```js
var result = caliph_api.binary.dec('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100')
console.log(result)
```

### result 
```hello world```

# Downloader

## YouTube

### Yt Play
```js
(async () => {
var result = await caliph_api.downloader.youtube.ytplay('gustixa')
console.log(result)
})()
```

### result
```js
{
  title: 'heat waves (Gustixa Remix)',
  result: 'https://tinyurl.com/y4lxxzxf',
  size: '2.8 MB',
  thumb: 'https://i.ytimg.com/vi/nhf9fe6Atq8/maxresdefault.jpg',
  views: '72216',
  likes: 9053,
  dislike: null,
  channel: 'Gustixa',
  uploadDate: '2021-12-15',
  desc: 'The picture was edited by\n' +
    'https://instagram.com/syariepfr_\n' +
    '\n' +
    'Gustixa\n' +
    'https://open.spotify.com/artist/5dLfd...\n' +
    'https://www.soundcloud.com/gustixa\n' +
    'https://www.instagram.com/gustixa\n' +
    'https://www.twitter.com/gustixa'
}
```

### Yt Play Vid
```js
(async () => {
var result = caliph_api.downloader.youtube.ytplayvid('never gonna give you up')
console.log(result)
})()
```

### result
```js
{
  title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
  result: 'https://tinyurl.com/yxdwuuc5',
  quality: '360p',
  size: '15.9 MB',
  thumb: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  views: '1113732978',
  likes: 12926498,
  dislike: null,
  channel: 'Rick Astley',
  uploadDate: '2009-10-24',
  desc: 'The official video for “Never Gonna Give You Up” by Rick Astley\n' +
    ' \n' +
    '“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.\n' +
    '\n' +
    'The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.\n' +
    '\n' +
    'Subscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/YTSubID\n' +
    '\n' +
    'Follow Rick Astley:\n' +
    'Facebook: https://RickAstley.lnk.to/FBFollowID \n' +
    'Twitter: https://RickAstley.lnk.to/TwitterID \n' +
    'Instagram: https://RickAstley.lnk.to/InstagramID \n' +
    'Website: https://RickAstley.lnk.to/storeID \n' +
    'TikTok: https://RickAstley.lnk.to/TikTokID\n' +
    '\n' +
    'Listen to Rick Astley:\n' +
    'Spotify: https://RickAstley.lnk.to/SpotifyID \n' +
    'Apple Music: https://RickAstley.lnk.to/AppleMusicID \n' +
    'Amazon Music: https://RickAstley.lnk.to/AmazonMusicID \n' +
    'Deezer: https://RickAstley.lnk.to/DeezerID \n' +
    '\n' +
    'Lyrics:\n' +
    'We’re no strangers to love\n' +
    'You know the rules and so do I\n' +
    'A full commitment’s what I’m thinking of\n' +
    'You wouldn’t get this from any other guy\n' +
    '\n' +
    'I just wanna tell you how I’m feeling\n' +
    'Gotta make you understand\n' +
    '\n' +
    'Never gonna give you up\n' +
    'Never gonna let you down\n' +
    'Never gonna run around and desert you\n' +
    'Never gonna make you cry\n' +
    'Never gonna say goodbye\n' +
    'Never gonna tell a lie and hurt you\n' +
    '\n' +
    'We’ve known each other for so long\n' +
    'Your heart’s been aching but you’re too shy to say it\n' +
    'Inside we both know what’s been going on\n' +
    'We know the game and we’re gonna play it\n' +
    '\n' +
    'And if you ask me how I’m feeling\n' +
    'Don’t tell me you’re too blind to see\n' +
    '\n' +
    'Never gonna give you up\n' +
    'Never gonna let you down\n' +
    'Never gonna run around and desert you\n' +
    'Never gonna make you cry\n' +
    'Never gonna say goodbye\n' +
    'Never gonna tell a lie and hurt you\n' +
    '\n' +
    '#RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo'
}
```


# Ip Lookup
```js
(async () => {
var result = await caliph_api.iplookup('1.1.1.1')
console.log(result)
})()
```
### result
```js
{
  "status": 200,
  "continent": "Oceania",
  "continentCode": "OC",
  "country": "Australia",
  "countryCode": "AU",
  "region": "QLD",
  "regionName": "Queensland",
  "city": "South Brisbane",
  "district": "",
  "zip": "4101",
  "lat": -27.4766,
  "lon": 153.0166,
  "timezone": "Australia/Brisbane",
  "offset": 36000,
  "currency": "AUD",
  "isp": "Cloudflare, Inc",
  "org": "APNIC and Cloudflare DNS Resolver project",
  "as": "AS13335 Cloudflare, Inc.",
  "asname": "CLOUDFLARENET",
  "reverse": "one.one.one.one",
  "mobile": false,
  "proxy": false,
  "hosting": true,
  "query": "1.1.1.1"
}
```

# Arti Nama

```js
(async () => {
var result = await caliph_api.artinama('Caliph')
console.log(result)
})()
```

### Result
```js
{
  "status": 200,
  "result": "ARTI NAMA\nNama caliph, memiliki arti: Mengutamakan prinsip, keteraturan, pelayanan, sulit menerima batasan dan perkembangan yang mapan.\n\nAnda mempunyai karakter yang unik dan kuat. Tanpa anda sadari, banyak orang akan merasa sopan dan tampil apa adanya. Kegigihan anda dalam meraih kesuksesan karir tidak perlu diragukan lagi. Anda orang yang sangat berambisi untuk maju. Biasanya orang yang berkarakter nama ini adalah orang-orang yang menuju sukses dengan jerih payah mereka sendiri meski tidak ada orang yang membantu dalam perjalanan karir mereka. Akan tetapi, anda tetap menyenangi pekerjaan yang sifatnya rutinitas. Anda orang yang tidak pandai dalam bersosialisasi. Anda orang yang cukup puas dengan kehidupan yang serba menyendiri karena anda ingin mendapatkan keseimbngan antara keramaian dan ketenangan."
}
```


# Cuaca

```js
(async () => {
var result = await caliph_api.cuaca('Sragen')
console.log(result)
})()
```

### Result
```js
{
  status: 200,
  data: {
    Nama: 'Jakarta,ID',
    Longitude: 106.8451,
    Latitude: -6.2146,
    Suhu: '31.08 C',
    Angin: '5.14 m/s',
    Kelembaban: '66%',
    Cuaca: 'Clouds',
    Keterangan: 'scattered clouds',
    Udara: '1011 HPa'
  }
}
```
