# caliph-api

# Note
ID
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/Caliph91/caliph-api/issues/new)

EN
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
      title: 'PUBG MOBILE: Aftermath Mod Apk 1.5.0 [Unlimited money] ',
      link: 'https://happymod.com/pubg-mobile-apk-mod/com.tencent.ig/',
      thumb: 'https://i.git99.com/app_img/20210629/66/48/82/1624950173.jpg'
    },
    {
      title: 'PUBG: NEW STATE Mod Apk 0.9.16.125 [Unlimited money] ',
      link: 'https://happymod.com/pubg-new-state-mod/com.pubg.newstate/',
      thumb: 'https://i.git99.com/app_img/20211116/37/10/99/1636993277.jpg'
    },
    {
      title: 'PUBG MOBILE LITE Mod Apk 0.21.0  ',
      link: 'https://happymod.com/pubg-mobile-lite-mod/com.tencent.iglite/',
      thumb: 'https://i.git99.com/app_img/20210630/94/16/75/1625044894.jpg'
    },
    {
      title: 'GFX Tool for PUBG Mod Apk 10.1.0  ',
      link: 'https://happymod.com/gfx-tool-no-ban-no-lag-mod/eu.tsoml.graphicssettings/',
      thumb: 'https://i.git99.com/app_img/20220122/91/21/93/1642833294.jpg'
    },
    {
      title: 'PUBG Mobile Mod Apk 1.1.0 [Unlimited money] ',
      link: 'https://happymod.com/pubg-mobile-mod/com.pubg.krmobile/',
      thumb: 'https://i.git99.com/app_img/20220117/36/28/15/1642402939.jpg'
    },
    {
      title: 'Knives Out Mod Apk 1.271.479300  ',
      link: 'https://happymod.com/knives-out-no-rules-just-fight-mod/com.netease.ko/',
      thumb: 'https://i.git99.com/app_img/20210817/43/99/20/1629209344.jpg'
    },
    {
      title: 'PUBG Mobile VN ',
      link: 'https://happymod.com/pubg-mobile-vn-2getherweplay-mod/com.vng.pubgmobile/',
      thumb: 'https://i.git99.com/app_img/20210630/68/28/40/1625047919.jpg'
    },
    {
      title: 'Battlegrounds Mobile India ',
      link: 'https://happymod.com/battlegrounds-mobile-india-mod/com.pubg.imobile/',
      thumb: 'https://i.git99.com/app_img/20210718/12/89/84/1626609053.jpg'
    },
    {
      title: 'Call of Duty Mobile Season 2 ',
      link: 'https://happymod.com/call-of-duty-legends-of-war-mod/com.activision.callofduty.shooter/',
      thumb: 'https://i.git99.com/app_img/20211116/31/17/69/1637066284.jpg'
    },
    {
      title: 'Grand Battle Royale: Pixel FPS Mod Apk 3.5.1  ',
      link: 'https://happymod.com/grand-battle-royale-mod/com.onetongames.kingofthehill/',
      thumb: 'https://i.git99.com/app_img/20210709/66/85/72/1625845927.jpg'
    },
    {
      title: "PIXEL'S UNKNOWN BATTLE GROUND Mod Apk 1.53.00 [Unlimited money][Free purchase][Unlocked] ",
      link: 'https://happymod.com/battleground-royale-unreleased-mod/com.azurgames.BattleGroundRoyale/',
      thumb: 'https://i.git99.com/app_img/20211027/12/1/23/1635331063.jpg'
    },
    {
      title: 'Arena of Valor Mod Apk 1.41.1.10  ',
      link: 'https://happymod.com/realm-of-valor-beta-mod/com.ngame.allstar.eu/',
      thumb: 'https://i.git99.com/app_img/20220110/84/25/54/1641799256.jpg'
    },
    {
      title: 'Modern Strike Online: PvP FPS Mod Apk 1.49.0 [Endless] ',
      link: 'https://happymod.com/modern-strike-online-mod/com.gamedevltd.modernstrike/',
      thumb: 'https://i.git99.com/app_img/20210702/82/78/65/1625197521.jpg'
    },
    {
      title: 'Twitch: Live Game Streaming Mod Apk 12.1.2 [Remove ads] ',
      link: 'https://happymod.com/twitch-mod/tv.twitch.android.app/',
      thumb: 'https://i.git99.com/app_img/20210709/9/56/40/1625788355.jpg'
    },
    {
      title: 'Garena Free Fire MAX ',
      link: 'https://happymod.com/garena-free-fire-max-mod/com.dts.freefiremax/',
      thumb: 'https://i.git99.com/app_img/20220119/16/74/66/1642595754.jpg'
    },
    {
      title: '1v1.LOL - Third Person Shooter Mod Apk 4.17  ',
      link: 'https://happymod.com/1v1-lol-online-building-shooting-simulator-app-mod/lol.onevone/',
      thumb: 'https://i.git99.com/app_img/20220207/20/63/8/1644217813.jpg'
    },
    {
      title: 'Tap Booster - Gaming VPN ',
      link: 'https://happymod.com/tap-booster-gaming-vpn-mod/com.xindong.rocket.gp.new/',
      thumb: 'https://i.git99.com/app_img/20211202/56/63/18/1638446647.jpg'
    },
    {
      title: 'Creative Destruction Advance ',
      link: 'https://happymod.com/creative-destruction-advance-mod/com.titan.cda.gb/',
      thumb: 'https://i.git99.com/app_img/20210702/85/62/59/1625197536.jpg'
    },
    {
      title: 'Modern Combat 5: mobile FPS Mod Apk 5.8.7  ',
      link: 'https://happymod.com/modern-combat-5-esports-fps-mod/com.gameloft.android.ANMP.GloftM5HM/',
      thumb: 'https://i.git99.com/app_img/20210710/95/38/82/1625887860.jpg'
    },
    {
      title: 'Name creator for pubg ',
      link: 'https://happymod.com/name-creator-for-pubg-mod/com.moonlandtech.pubgrenametool/',
      thumb: 'https://i.git99.com/app_img/20220126/1/26/65/1643135849.jpg'
    },
    {
      title: 'GFX Tool PUBG Pro (Advance FPS Settings + No Ban) ',
      link: 'https://happymod.com/gfx-tool-pubg-pro-advance-fps-settings-no-ban-mod/sintum.gfxtools.pubgpro/',
      thumb: 'https://i.git99.com/app_img/20211209/3/15/46/1638980060.jpg'
    },
    {
      title: 'Crate Simulator for PUBGM Mod Apk 1.0.30  ',
      link: 'https://happymod.com/crate-simulator-for-pubgm-mod/me.theoneint.pubgcrate/',
      thumb: 'https://i.git99.com/app_img/20211207/79/49/83/1638835020.jpg'
    },
    {
      title: 'Cyber Hunter Mod Apk 0.100.48  ',
      link: 'https://happymod.com/project-battle-mod/com.netease.lztgglobal/',
      thumb: 'https://i.git99.com/app_img/20210710/51/14/53/1625849034.jpg'
    },
    {
      title: 'Badlanders ',
      link: 'https://happymod.com/badlanders-mod/com.netease.sheltergp/',
      thumb: 'https://i.git99.com/app_img/20210710/78/37/94/1625849085.jpg'
    },
    {
      title: 'Modern Ops: Gun Shooting Games Mod Apk 7.11  ',
      link: 'https://happymod.com/modern-ops-online-pvp-shooter-mod/com.edkongames.mobs/',
      thumb: 'https://i.git99.com/app_img/20220131/42/85/18/1643612723.jpg'
    },
    {
      title: 'Cover Fire: Offline Shooting Mod Apk 1.21.26 [Unlimited money][VIP] ',
      link: 'https://happymod.com/cover-fire-mod/com.generagames.resistance/',
      thumb: 'https://i.git99.com/app_img/20210920/96/94/88/1632121923.jpg'
    },
    {
      title: 'OVERDOX Mod Apk 2.1.0  ',
      link: 'https://happymod.com/overdox-mod/com.haegin.overdox/',
      thumb: 'https://i.git99.com/app_img/20210825/14/62/88/1629849222.jpg'
    },
    {
      title: 'Trooper Shooter: 5v5 Co-op TPS Mod Apk 2.9 [Free purchase] ',
      link: 'https://happymod.com/trooper-shooter-critical-assault-fps-mod/com.pocket.shooter/',
      thumb: 'https://i.git99.com/app_img/20210925/32/94/75/1632527072.jpg'
    },
    {
      title: 'ScarFall : The Royale Combat Mod Apk 1.6.82020  ',
      link: 'https://happymod.com/scarfall-the-royale-combat-mod/com.phoenix.scarfall.free.fps.tps.battle.royale.combat.survival.shooting.battleground.war/',
      thumb: 'https://i.git99.com/app_img/20211023/36/24/3/1634961399.jpg'
    },
    {
      title: 'Hello Neighbor Mod Apk 1.0  ',
      link: 'https://happymod.com/hello-neighbor-mod/com.tinybuildgames.helloneighbor/',
      thumb: 'https://i.git99.com/app_img/20210630/85/13/91/1625045394.jpg'
    },
    {
      title: 'GFX Tool for PUBG & Optimizer ',
      link: 'https://happymod.com/gfx-tool-for-pubg-game-launcher-optimizer-mod/gfxtool.gamebooster.gfx/',
      thumb: 'https://i.git99.com/app_img/20211129/78/80/4/1638174356.jpg'
    },
    {
      title: 'Gun Fire: Fun Shooting Games Mod Apk 1.0.0  ',
      link: 'https://happymod.com/grand-battle-island-pixel-multiplayer-shooter-3d-mod/com.pixel.grandbattle.multiplayer.fps/',
      thumb: 'https://i.git99.com/app_img/20211004/28/99/53/1633333113.jpg'
    },
    {
      title: 'Survival: Fire Battlegrounds Mod Apk 11.1  ',
      link: 'https://happymod.com/free-survival-fire-battlegrounds-battle-royale-mod/com.c17h21no4.freesurvival.firebattlegrounds/',
      thumb: 'https://i.git99.com/app_img/20210705/79/33/93/1625440292.jpg'
    },
    {
      title: 'Gamehag ',
      link: 'https://happymod.com/gamehag-mod/com.gamehag.app/',
      thumb: 'https://i.git99.com/app_img/20210710/87/94/67/1625888064.jpg'
    },
    {
      title: 'Winner Camp Mod Apk 3.2.5  ',
      link: 'https://happymod.com/winner-camp-mod/com.neverlate.royale/',
      thumb: 'https://i.git99.com/app_img/20210818/30/29/81/1629259570.jpg'
    },
    {
      title: 'GFX TOOL 90 FPS for PUBG ',
      link: 'https://happymod.com/gfx-tool-90-fps-for-pubg-mod/com.middroid.gfxtooll/',
      thumb: 'https://i.git99.com/app_img/20211217/95/27/1/1639676272.jpg'
    },
    {
      title: 'PGT: GFX, Launcher & Optimizer ',
      link: 'https://happymod.com/pub-gfx-tool-free-1080p-hdr-120fps-4xmsaa-mod/inc.trilokia.pubgfxtool.free/',
      thumb: 'https://i.git99.com/app_img/20220124/41/6/45/1643037259.jpg'
    },
    {
      title: 'Gun Strike 2 : Commando Secret Mission-FPS Game Mod Apk 1.1.1.7 [Unlocked] ',
      link: 'https://happymod.com/commando-strike-2021-multiplayer-fps-cover-strike-mod/com.fun.secretmission.commando.ops/',
      thumb: 'https://i.git99.com/app_img/20210710/91/49/29/1625889427.jpg'
    },
    {
      title: 'Cover Strike - 3D Team Shooter Mod Apk 1.7.02  ',
      link: 'https://happymod.com/cover-strike-3d-team-shooter-mod/com.gun.black.ops/',
      thumb: 'https://i.git99.com/app_img/20220226/27/77/46/1645831632.jpg'
    },
    {
      title: 'BattleOps | Gun Shoot Game Mod Apk 1.4.0  ',
      link: 'https://happymod.com/battleops-mod/com.thg.battleops.shooting.game/',
      thumb: 'https://i.git99.com/app_img/20211124/51/32/82/1637762280.jpg'
    }
  ]
}  
```


# Kusonime Search
```js
(async () => {
var result = await caliph_api.search.kusonime('eromanga sensei')
console.log(result)
})()
```

### Result
```js
{
  "status": 200,
  "creator": "Caliph",
  "result": {
    "judul": "Eromanga-sensei BD Batch Subtitle Indonesia",
    "thumb": "https://kusonime.com/wp-content/uploads/2017/06/Eromanga-sensei-604x340.jpg",
    "desk": "Eromanga-sensei bercerita tentang Masamune Izumi seorang siswa SMA biasa yang juga merupakan penulis LN (Light Novel) yang sedang berkembang . Dan beberapa tahun yang lalu Sang Ayah yang duda menikahi seorang Janda satu anak dan karena itu diri nya mempunyai seorang Adek Tiri bernama Sagiri .",
    "genre": "Comedy, Drama, Romance",
    "status": "Completed",
    "produser": "Aniplex, Movic, ASCII Media Works, BS11, Kinoshita Group Holdings",
    "rate": "7.18",
    "type": "BD",
    "link": "https://kusonime.com/eromanga-batch-sub-indonesia/",
    "total_eps": "12+2 OVA",
    "durasi": "24 min. per ep.",
    "tgl_rilis": "Apr 09, 2017",
    "result": {
      "360": [
        "https://acefile.co/f/9926049/kusonime-tidak-mungkin-adekku-semesum-ini-ova-bedeh-480p-rar",
        "https://drive.google.com/uc?export=download&id=1HxO0NU4G6nOxuWzPQLyib5zM61Pbu8dd",
        "https://drive.google.com/uc?export=download&id=1HT-PKFEqeAp73bz37ONGj8I9yV0aSo7I",
        "https://mega.nz/#!8U0VFAqI!6kDBnGgohF31Hb0WhvSbBnWkjqHhDQTOC936EJ2QqHA",
        "https://uptobox.com/k2cqpfzljohd",
        "https://mirrorace.com/m/2awrz",
        "https://acefile.co/f/9926115/kusonime-tidak-mungkin-adekku-semesum-ini-ova-bedeh-720p-rar",
        "https://drive.google.com/uc?export=download&id=1U_kFrS28W99_-PuY7nYULzU52JXSSLuO",
        "https://drive.google.com/uc?export=download&id=12lg3e_BbBsPi5Avexi1BFwk1TX2h8t32",
        "https://mega.nz/#!Mc1XyaZR!v8nk_y14MyCuxAqDThuvqF8B1VE_sO4kAUQKehuDlp8",
        "https://uptobox.com/t1fqibtn9p8q",
        "https://mirrorace.com/m/2QtTW"
      ],
      "480": [
        "https://acefile.co/f/9926115/kusonime-tidak-mungkin-adekku-semesum-ini-ova-bedeh-720p-rar",
        "https://drive.google.com/uc?export=download&id=1U_kFrS28W99_-PuY7nYULzU52JXSSLuO",
        "https://drive.google.com/uc?export=download&id=12lg3e_BbBsPi5Avexi1BFwk1TX2h8t32",
        "https://mega.nz/#!Mc1XyaZR!v8nk_y14MyCuxAqDThuvqF8B1VE_sO4kAUQKehuDlp8",
        "https://uptobox.com/t1fqibtn9p8q",
        "https://mirrorace.com/m/2QtTW"
      ],
      "720": [
        ""
      ],
      "1080": [
        ""
      ]
    }
  }
}
```

# Cari Grup Wa
```js
(async () => {
var result = await caliph_api.search.carigrup('anime')
console.log(result)
})()
```

### Result
```js
{
  "status": 200,
  "creator": "Caliph",
  "result": [
    {
      "nama": ".*",
      "link": "https://chat.whatsapp.com/GPdo2vPf5aa08D3GEh8TMr"
    },
    {
      "nama": "~OPPAI~*",
      "link": "https://chat.whatsapp.com/J2Qi9XAT7MmJmhCjLjx0dZ"
    },
    {
      "nama": "★アキバZERO [Line,Telegram,FB,Discord]*",
      "link": "https://chat.whatsapp.com/JuliA3ioe0eKZLbtRTvaDb"
    },
    {
      "nama": "✎ᴼᵗᵃᵏᵘ ⁱˢ ᵐʸ ˡⁱᶠᵉ♪♪♪..*",
      "link": "https://chat.whatsapp.com/Jbggip4YL24DVZ8UYqsGE3"
    },
    {
      "nama": "〰️ANIME& GAMERS〰️*",
      "link": "https://chat.whatsapp.com/HAE4Sk2Dr3oAzNV8uD8s3k"
    },
    {
      "nama": "🇷🇺Лравда/Pravda🇯🇵*",
      "link": "https://chat.whatsapp.com/KfMCmNMVMzjAcwqp0XBT2c"
    },
    {
      "nama": "anime*",
      "link": "https://chat.whatsapp.com/6DtEEOOA6cT43gsew90Wcm"
    },
    {
      "nama": "Anime*",
      "link": "https://chat.whatsapp.com/LktAhJPl6cUEffFXQkgt16"
    },
    {
      "nama": "Anime Couple*",
      "link": "https://chat.whatsapp.com/FJtYaLdI9oa8BOUgr4sIjk"
    },
    {
      "nama": "Anime For Indonesia*",
      "link": "https://chat.whatsapp.com/As2QkHxhqANKORK6K64dwH"
    },
    {
      "nama": "Anime L❤️vers Indonesia😚*",
      "link": "https://chat.whatsapp.com/Fn2vm7UnnG3CLOdOvyzWUq"
    },
    {
      "nama": "Anime lovers ID*",
      "link": "https://chat.whatsapp.com/Dw6GJAhZcgW5Cvh4ySthSu"
    },
    {
      "nama": "Anime lovers:v🇲🇨*",
      "link": "https://chat.whatsapp.com/IET5JbrZOkZ5A3ZHKFWbSn"
    },
    {
      "nama": "Anime Lovers⚡*",
      "link": "https://chat.whatsapp.com/C2dHfIvn95tAvdLdkMdo11"
    },
    {
      "nama": "🇯🇵Anime Lovers🇲🇨*",
      "link": "https://chat.whatsapp.com/FvmoLbfH1MqH6Dq0DOPCAs"
    },
    {
      "nama": "Anime lovress*",
      "link": "https://chat.whatsapp.com/55LcWVTJBJU3FTj2A8uwis"
    },
    {
      "nama": "Anime Otaku Indonesia*",
      "link": "https://chat.whatsapp.com/EC62mQ665yU3Y30dAToYSr"
    },
    {
      "nama": "_..Anime wibu.._–*",
      "link": "https://chat.whatsapp.com/BrtyrNpsw3rBfpJ2MFJffs"
    },
    {
      "nama": "Animee📽💻*",
      "link": "https://chat.whatsapp.com/JvDXDJKFpTADJzVS89FsWp"
    },
    {
      "nama": "Animelovers*",
      "link": "https://chat.whatsapp.com/D7ttM85AXsBKIbHDH9AfXN"
    },
    {
      "nama": "BLINKs Global FanClub🇰🇷*",
      "link": "https://chat.whatsapp.com/JlEgCtyK8xUJMSDIVwZB2e"
    },
    {
      "nama": "Dakwah islami*",
      "link": "https://chat.whatsapp.com/CKjHD5QQSkYJJD8kfelvT9"
    },
    {
      "nama": "Do do do sol la la sol*",
      "link": "https://chat.whatsapp.com/0PdBqRveEGj1c4cTgV2itI"
    },
    {
      "nama": "EDITOR•BERKELAS😎*",
      "link": "https://chat.whatsapp.com/CJX91Rirhp7Cd5P6038eSZ"
    }
  ]
}
```

# Binary

## Encrypt
```js
var result = caliph_api.encrypt.binary.enc('hello world');
console.log(result);
```
### Result 
```1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100```


## Decrypt 
```js
var result = caliph_api.encrypt.binary.dec('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100');
console.log(result);
```

### result 
```hello world```

# Downloader

## SoundCloud 
```js
(async () => {
var result = await caliph_api.downloader.soundcloud('https://soundcloud.com/user-502292867/belum-siap-kehilangan?ref=clipboard&p=a&c=0&si=0e3f2d7e5e6f4d07973cd4b1b9150de1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
console.log(result)
})
```

### Result
```js
{ 
  status: 200,
  creator: 'Caliph',
  result: {
  thumb: 'https://i1.sndcdn.com/artworks-0lHPJ1QUQ9g378EK-WpNcIg-large.jpg',
  title: 'Steven Pasaribu - Belum Siap Kehilangan',
  duration: '04:48',
  quality: '320 Kbps',
  url: 'https://dl4.soundcloudmp3.org/api/download/eyJpdiI6InRhY2s3WVwvaWRhb1BONTN4SXJhSmFBPT0iLCJ2YWx1ZSI6ImNFQlFNREZ6cHNDVzMraTlmTTNQamRHVWtZXC9QcnVWcm5SeUg5am5kYUExajBndHlvYm1QOHZSRVU3a1Qxd2VPZ0srWGF3blFNd25JRzJqYUhtVFBkbVBQT1hHeEhPV0hMODgyeGdZK0FHK0RJWFl1YmxsMWNudUFPMGRzcnpSZUo5ZGhpS0xGQ01Sb0RrUGNWa1F2V1E9PSIsIm1hYyI6ImZiZjg3ZDJiYzAwNDhiYzM3NmNiOWJiNjk0ODI3ZWZkMjg5MjczN2U4YTA1ZmMxNGNhYTIzYmM2YTRhNDRmN2IifQ=='
}
 
}
```



## TikTok
```js
(async () => {
var result = await caliph_api.downloader.tiktok('https://vt.tiktok.com/ZSe4Evewq/');
console.log(result);
})()
```

### result
```js
{
  "title": "kok diulang ulang\" bro🗿📸#ANlofi #ElvinzEZ #muridlofi #gemsergemser #xybca #fypシ",
  "author": "@luckyx_ez LuckyEz",
  "nowm": "https://clph.pw/5vH4",
  "watermark": "https://clph.pw/Nta7",
  "audio": "https://clph.pw/7YyS",
  "thumbnail": "https://clph.pw/Dr37"
}
```


## TikTok 2
```js
(async () => {
var result = await caliph_api.downloader.tiktok2('https://vt.tiktok.com/ZSe4Evewq/');
console.log(result);
})()
```

### result
```js
{
  creator: 'Caliph',
  video_title: 'Check out anichal88’s video! #TikTok >',
  audio_title: 'still with you',
  video: 'http://clph.pw/DzsY',
  audio_original: 'http://clph.pw/JnxT',
  nowm: 'http://clph.pw/CTtT',
  video_original: 'http://clph.pw/ughD',
  audio: 'http://clph.pw/2j6H',
  preview: 'http://clph.pw/hODe'
}
```


## YouTube

### Yt Play
```js
(async () => {
var result = await caliph_api.downloader.youtube.ytplay('gustixa');
console.log(result);
})()
```

### result
```js
{
  "title": "heat waves (Gustixa Remix)",
  "result": "https://tinyurl.com/y36pcqnr",
  "size": "2.8 MB", 
  "thumb": "https://i.ytimg.com/vi/nhf9fe6Atq8/maxresdefault.jpg",
  "views": "72404",
  "likes": 9077,
  "dislike": null,
  "channel": "Gustixa",
  "uploadDate": "2021-12-15",
  "desc": "The picture was edited by\nhttps://instagram.com/syariepfr_\n\nGustixa\nhttps://open.spotify.com/artist/5dLfd...\nhttps://www.soundcloud.com/gustixa\nhttps://www.instagram.com/gustixa\nhttps://www.twitter.com/gustixa"
}
```

### Yt Play Vid
```js
(async () => {
var result = caliph_api.downloader.youtube.ytplayvid('never gonna give you up');
console.log(result);
})()
```

### result
```js
{
  "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
  "result": "https://tinyurl.com/yyc4fjv8",
  "quality": "360p",
  "size": "15.9 MB",
  "thumb": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  "views": "1113735218",
  "likes": 12926541,
  "dislike": null,
  "channel": "Rick Astley",
  "uploadDate": "2009-10-24",
  "desc": "The official video for “Never Gonna Give You Up” by Rick Astley\n \n“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.\n\nThe legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.\n\nSubscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/YTSubID\n\nFollow Rick Astley:\nFacebook: https://RickAstley.lnk.to/FBFollowID \nTwitter: https://RickAstley.lnk.to/TwitterID \nInstagram: https://RickAstley.lnk.to/InstagramID \nWebsite: https://RickAstley.lnk.to/storeID \nTikTok: https://RickAstley.lnk.to/TikTokID\n\nListen to Rick Astley:\nSpotify: https://RickAstley.lnk.to/SpotifyID \nApple Music: https://RickAstley.lnk.to/AppleMusicID \nAmazon Music: https://RickAstley.lnk.to/AmazonMusicID \nDeezer: https://RickAstley.lnk.to/DeezerID \n\nLyrics:\nWe’re no strangers to love\nYou know the rules and so do I\nA full commitment’s what I’m thinking of\nYou wouldn’t get this from any other guy\n\nI just wanna tell you how I’m feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nWe’ve known each other for so long\nYour heart’s been aching but you’re too shy to say it\nInside we both know what’s been going on\nWe know the game and we’re gonna play it\n\nAnd if you ask me how I’m feeling\nDon’t tell me you’re too blind to see\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\n#RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo"
}
```


# Ip Lookup
```js
(async () => {
var result = await caliph_api.search.iplookup('1.1.1.1');
console.log(result);
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
# ig stalk 
```js
(async () => {
var result = await caliph_api.search.igstalk('caliph91_');
console.log(result)
})()
```

### result
```js
{
  "status": 200,
  "profile": {
    "low": "https://tinyurl.com/yb6nsvgj",
    "high": "https://tinyurl.com/ycqt3ern"
  },
  "result": {
    "url": "https://caliph.my.id/",
    "fullname": "I`am Caliph",
    "private": false,
    "verified": false,
    "bio": "Just for fun\nFollback? Dm me",
    "follower": 516,
    "following": 100,
    "conneted_fb": null,
    "videotimeline": 0,
    "timeline": 2,
    "savedmedia": 3,
    "collections": 0
  }
}
```


# Arti Nama

```js
(async () => {
var result = await caliph_api.search.artinama('Caliph');
console.log(result);
})()
```

### Result
```js
{
  "status": 200,
  "result": "ARTI NAMA\nNama caliph, memiliki arti: Mengutamakan prinsip, keteraturan, pelayanan, sulit menerima batasan dan perkembangan yang mapan.\n\nAnda mempunyai karakter yang unik dan kuat. Tanpa anda sadari, banyak orang akan merasa sopan dan tampil apa adanya. Kegigihan anda dalam meraih kesuksesan karir tidak perlu diragukan lagi. Anda orang yang sangat berambisi untuk maju. Biasanya orang yang berkarakter nama ini adalah orang-orang yang menuju sukses dengan jerih payah mereka sendiri meski tidak ada orang yang membantu dalam perjalanan karir mereka. Akan tetapi, anda tetap menyenangi pekerjaan yang sifatnya rutinitas. Anda orang yang tidak pandai dalam bersosialisasi. Anda orang yang cukup puas dengan kehidupan yang serba menyendiri karena anda ingin mendapatkan keseimbngan antara keramaian dan ketenangan."
}
```


# Fake User-Agent
`Get Random User-agent`
```js
var result = caliph_api.random.fakeua();
console.log(result);
```

### Result
`magpie-crawler/1.1 (U; Linux amd64; en-GB; +http://www.brandwatch.net)`


# Cuaca

```js
(async () => {
var result = await caliph_api.search.cuaca('Jakarta');
console.log(result);
})()
```

### Result
```js
{
    "status": 200,
    "data": {
        "Nama": "Jakarta,ID",
        "Longitude": 106.8451,
        "Latitude": -6.2146,
        "Suhu": "31.08 C",
        "Angin": "5.14 m\/s",
        "Kelembaban": "66%",
        "Cuaca": "Clouds",
        "Keterangan": "scattered clouds",
        "Udara": "1011 HPa"
    }
}
```
