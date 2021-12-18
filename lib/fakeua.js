const fs = require("fs")
module.exports = () => {
let ua = fs.readFileSync('./lib/useragent.txt', 'utf-8').split('\n')
return ua[Math.floor(Math.random() * ua.length - 1)]
}
