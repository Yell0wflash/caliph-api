const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (async function(kata) {
html = (await axios.get('https://www.singkatankata.com/search.php?q=NASA' ));
$ = require('cheerio').load(html.data);
 h = [];
$('h3').each(function(b, c) {
h.push($(c).text())
});
return { status: h.length != 0 ? 200 : 404, creator: 'Caliph', link: html.request.res.responseUrl, result: h }
}).bind()