const { version, author } = require('./package.json')
const binary = require('./lib/binary')
const iplookup = require('./lib/iplook')
const artinama = require('./lib/artinama')
const stress = require('./lib/stress')

module.exports = { version, author: author.name, binary, iplookup, artinama, stress }
