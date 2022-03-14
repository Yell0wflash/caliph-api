const fetch = require("node-fetch")

async function create(url, custom = '') {
obj = Object.entries({ url, costum: custom })
urls = new URLSearchParams(obj)
let fetch = await fetch('https://clp.pw/api/v1/create?'+urls)
if (fetch.status !== 200) throw await fetch.json()
let result = await fetch.json()
return { status: fetch.status, craator: "Caliph", result:result.result }
}

module.exports = (url, custom) => create(url, custom)
