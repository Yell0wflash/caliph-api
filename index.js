const { version, author } = require('./package.json')
const binary = require('./lib/binary')
const iplookup = require('/lib/iplook')

module.exports = { version, author: author.name, binary, iplookup }
