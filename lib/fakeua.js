const fs = require("fs")
module.exports = () => {
let ua = fs.readFileSync(process.cwd()+'/lib/useragent.txt', 'utf-8').split('\n')
return ua[Math.floor(Math.random() * ua.length - 1)]
}
