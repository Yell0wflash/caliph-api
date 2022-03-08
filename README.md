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

# require
```js
const caliph_api = require('caliph-api')
```

# Emoji Mix
```js
(async () => {
var result = await caliph_api.other.emojimix("😭", "🥺")
console.log(result)
})()
```

### Result
`Buffer`
<p align="left">
<img src="https://telegra.ph/file/fa9a20e2de68ec5bfdfc3.png" weight="50" height="50">
</p>



# Game family100
```js
(async () => {
var result = await caliph_api.game.family100()
console.log(result)
})()
```


### Result
```js
{
  status: 200,
  creator: 'Caliph',
  result: {
    pertanyaan: 'Hewan Pemakan Daging',
    jawaban: [ 'Harimau', 'Singa', 'Buaya', 'Serigala' ]
  }
}
```



# Wallpaper Cave
```js
(async () => {
var result = await caliph_api.search.wallpapercave("anime")
console.log(result)
})()
```

### Result
```js
{
  status: 200,
  creator: 'Caliph',
  result: [
    'https://wallpapercave.com/wp/wp1818245.png',
    'https://wallpapercave.com/wp/wp3400420.jpg',
    'https://wallpapercave.com/wp/wp2490593.jpg',
    'https://wallpapercave.com/wp/wp2422887.png',
    'https://wallpapercave.com/wp/wp2490700.jpg',
    'https://wallpapercave.com/wp/wp3400426.png',
    'https://wallpapercave.com/wp/wp2422913.jpg',
    'https://wallpapercave.com/wp/wp2490646.jpg',
    'https://wallpapercave.com/wp/wp3400429.jpg',
    'https://wallpapercave.com/wp/wp3400432.jpg',
    'https://wallpapercave.com/wp/wp3400433.jpg',
    'https://wallpapercave.com/wp/wp1818242.png',
    'https://wallpapercave.com/wp/wp3400438.png',
    'https://wallpapercave.com/wp/wp3400439.png',
    'https://wallpapercave.com/wp/wp3400440.jpg',
    'https://wallpapercave.com/wp/wp3400447.jpg',
    'https://wallpapercave.com/wp/wp3400448.jpg',
    'https://wallpapercave.com/wp/wp3400452.jpg',
    'https://wallpapercave.com/wp/wp3400453.jpg',
    'https://wallpapercave.com/wp/wp3400456.png',
    'https://wallpapercave.com/wp/wp3400457.jpg',
    'https://wallpapercave.com/wp/wp3400464.png',
    'https://wallpapercave.com/wp/wp2490681.jpg',
    'https://wallpapercave.com/wp/wp3400466.jpg',
    'https://wallpapercave.com/wp/wp3400467.jpg',
    'https://wallpapercave.com/wp/wp3400468.jpg',
    'https://wallpapercave.com/wp/wp3400470.jpg',
    'https://wallpapercave.com/wp/wp3400477.jpg',
    'https://wallpapercave.com/wp/wp3400481.jpg',
    'https://wallpapercave.com/wp/wp3400485.jpg',
    'https://wallpapercave.com/wp/wp3400487.jpg',
    'https://wallpapercave.com/wp/wp3400488.jpg',
    'https://wallpapercave.com/wp/wp2490698.jpg',
    'https://wallpapercave.com/wp/wp3276893.png',
    'https://wallpapercave.com/wp/wp3400491.jpg',
    'https://wallpapercave.com/wp/wp3400495.jpg',
    'https://wallpapercave.com/wp/wp3276766.jpg',
    'https://wallpapercave.com/wp/wp3400499.jpg',
    'https://wallpapercave.com/wp/wp3400501.jpg',
    'https://wallpapercave.com/wp/wp3400502.jpg',
    'https://wallpapercave.com/wp/wp3400503.jpg',
    'https://wallpapercave.com/wp/wp3400504.jpg',
    'https://wallpapercave.com/wp/wp2490677.png',
    'https://wallpapercave.com/wp/wp2490627.jpg',
    'https://wallpapercave.com/wp/wp3400508.jpg',
    'https://wallpapercave.com/wp/wp3400511.jpg',
    'https://wallpapercave.com/wp/wp3400514.png',
    'https://wallpapercave.com/wp/wp3400517.jpg',
    'https://wallpapercave.com/wp/wp3400530.jpg',
    'https://wallpapercave.com/wp/wp3400532.png',
    'https://wallpapercave.com/wp/wp2490651.jpg',
    'https://wallpapercave.com/wp/wp3400541.png',
    'https://wallpapercave.com/wp/wp3400554.png',
    'https://wallpapercave.com/wp/wp3400556.jpg',
    'https://wallpapercave.com/wp/wp3400567.png',
    'https://wallpapercave.com/wp/wp3276890.jpg',
    'https://wallpapercave.com/wp/wp2490709.jpg'
  ]
}
```

# Film
```js
(async () => {
var result = await caliph_api.search.film("no way home")
console.log(result)
})()
```

### Result
```js
{
  status: 200,
  creator: 'Caliph',
  result: [
    {
      judul: 'Spider-Man: No Way Home (2021)',
      link: 'https://149.56.24.226/spider-man-no-way-home-2021/',
      thumb: 'https://s3.indexmovies.xyz/wp-content/uploads/2021/12/film-spider-man-no-way-home-2021-lk21-d21.jpg',
      genre: 'Action, Adventure, Fantasy, United States, HDCAM, 2021, 1080',
      sutradara: 'Jon Watts'
    },
    {
      judul: "A Dog's Way Home (2019)",
      link: 'https://149.56.24.226/a-dogs-way-home-2019/',
      thumb: 'https://s6.indexmovies.xyz/wp-content/uploads/2019/03/film-a-dogs-way-home-2019-lk21.jpg',
      genre: 'Adventure, Drama, Family, Usa, BluRay, 2019, 1080',
      sutradara: "A Dog\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s Way Home"
    },
    {
      judul: 'No Way Out (2020)',
      link: 'https://149.56.24.226/no-way-out-2020/',
      thumb: 'https://s1.indexmovies.xyz/wp-content/uploads/2021/04/film-no-way-out-2020-lk21.jpg',
      genre: 'Horror, Thriller, Usa, WEBDL, 2021, 1080',
      sutradara: 'No Way Out'
    },
    {
      judul: 'Way Back Home (Jibeuro ganeun gil) (2013)',
      link: 'https://149.56.24.226/way-back-home-2013/',
      thumb: 'https://s7.indexmovies.xyz/wp-content/uploads/2016/09/film-way-back-home-2013.jpg',
      genre: 'Drama, France, South Korea, BluRay, 2013, 1080',
      sutradara: 'Eun-jin Pang'
    },
    {
      judul: 'The Way Home (Jibeuro) (2002)',
      link: 'https://149.56.24.226/way-home-2002/',
      thumb: 'https://s5.indexmovies.xyz/wp-content/uploads/2016/11/film-the-way-home-2002.jpg',
      genre: 'Drama, South Korea, BluRay, 2002, 480',
      sutradara: 'Jeong-hyang Lee'
    },
    {
      judul: 'No Way Back (1995)',
      link: 'https://149.56.24.226/no-way-back-1995/',
      thumb: 'https://s5.indexmovies.xyz/wp-content/uploads/2017/03/film-no-way-back-1995.jpg',
      genre: 'Action, Crime, Drama, Usa, BluRay, 1995, 720',
      sutradara: 'Frank A. Cappello'
    },
    {
      judul: 'No Way Out (1987)',
      link: 'https://149.56.24.226/no-way-1987/',
      thumb: 'https://s3.indexmovies.xyz/wp-content/uploads/2016/09/film-no-way-out-1987.jpg',
      genre: 'Action, Crime, Drama, Usa, BluRay, 1987, 1080',
      sutradara: 'Roger Donaldson'
    },
    {
      judul: 'WWE NXT 22.03 (2017)',
      link: 'https://149.56.24.226/wwe-nxt-22-03-2017/',
      thumb: 'https://s2.indexmovies.xyz/wp-content/uploads/2017/04/film-wwe-nxt-22-03-2017.jpg',
      genre: 'Wrestling, Usa, WEBRip, 2017, 480',
      sutradara: 'Sanity, Tye Dillinger, Roderick Strong, No Way Jose'
    },
    {
      judul: 'The Long Way Home (Seoboojeonsun) (2015)',
      link: 'https://149.56.24.226/long-way-home-2015/',
      thumb: 'https://s3.indexmovies.xyz/wp-content/uploads/2017/03/film-the-long-way-home-2015.jpg',
      genre: 'Action, Comedy, Drama, South Korea, HDRip, 2015, 720',
      sutradara: 'Seong-il Cheon'
    },
    {
      judul: 'No Way to Live (2016)',
      link: 'https://149.56.24.226/no-way-live-2016/',
      thumb: 'https://s4.indexmovies.xyz/wp-content/uploads/2017/11/film-no-way-to-live-2016.jpg',
      genre: 'Crime, Drama, Thriller, Usa, WEBRip, 2016, 360',
      sutradara: 'Nick Chakwin, David Guglielmo'
    }
  ]
}
```


# Happymod
```js
(async () => {
var result = await caliph_api.search.happymod("pubg")
console.log(result)
})()
```

### Result
```js
{
  status: 200,
  creator: 'Caliph',
  result: [
    {
      title: 'PUBG MOBILE: Aftermath Mod Apk 1.5.0 [Unlimit
