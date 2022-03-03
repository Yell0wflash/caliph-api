const { version, author } = require('./package.json');
const binary = require('./lib/binary');
const iplookup = require('./lib/iplook');
const artinama = require('./lib/artinama');
const stress = require('./lib/stress');
const cuaca = require('./lib/cuaca');
const youtube = require("./lib/youtube");
const fakeua = require("./lib/fakeua");
const tiktok2 = require('./lib/tiktok2');
const tiktok = require('./lib/tiktok2');
const igstalk = require('./lib/igstalk');
const carigrup = require("./lib/grupwa");
const happymod = require("./lib/happymod");
const kusonime = require("./lib/kusonime");
const emojimix = require("./lib/emojimix");
const translate = require("./lib/translate");
const rangkum = require("./lib/rangkum");
const film = require("./lib/film");
const wallpapercave = require("./lib/wallpapercave")


module.exports = { info : { 
                  version, 
                   author: author
                  },
                  encrypt: {
                   binary
                   },
                   stress, 
                   downloader: { 
                   youtube, 
                   tiktok,
                  tiktok2
                   }, 
                  search : {
                  happymod,
                  carigrup,
                  kusonime,
                 iplookup,
                  cuaca,
                  artinama,
                  igstalk,
                  cuaca,
                  film,
                 wallpapercave
                  },
                  random: {
                   fakeua
                   },
                  other: {
                   emojimix,
                   translate,
                   rangkum
                  }
                   }
