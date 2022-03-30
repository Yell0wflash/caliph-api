const axios = require("axios");
const cheerio = require("cheerio")

module.exports = (async function(kata) {
html = (await axios.get('https://m.persamaankata.com/search.php?q=Haus' ));
$ = require('cheerio').load(html.data);
h = [];
$('div.word_thesaurus > a').each(function(b, c) {
h.push($(c).text())
});
image = $('img#visual_synonym_img').attr('src');
return { status: h.length != 0 ? 200 : 404 , link: html.request.res.responseUrl, image, result: h }
}).bind()