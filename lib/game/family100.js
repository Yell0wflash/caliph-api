const fetch = require("node-fetch")

_x5xh = async function() {
js = await (await fetch('https://raw.caliph.my.id/family100.json')).json()
random = js[Math.floor(Math.random() * js.length)]
return random 
}
module.exports = () => _x5xh()
