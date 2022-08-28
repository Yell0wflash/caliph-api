const fetch = require("node-fetch");
const cheerio = require("cheerio");

igdown = async (url) => {
  html = await fetch("https://flashsave.net/id/").then((a) => a.text());
  $ = cheerio.load(html);
  token = $('input[name="token"]').attr("value");
  postdata = new URLSearchParams();
  postdata.append("url", url);
  postdata.append("token", token);
  dts = await fetch("https://flashsave.net/wp-json/aio-dl/video-data/", {
    method: "POST",
    body: postdata,
  });
  if (dts.status !== 200)
    return { status: dts.status, creator: "Caliph", result: null };
  data_url = await dts.json();
  result = { status: dts.status, creator: "Caliph", result: data_url };
  return result;
};

module.exports = igdown.bind();
