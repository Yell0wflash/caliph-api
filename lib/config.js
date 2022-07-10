const axios = require("axios");

module.exports = async function () {
  let { data } = await axios.get("https://caliph.my.id/config/data.json");
  return data;
}.bind();
