const axios = require("axios");

module.exports = async function () {
  let { data } = await axios.get("https://m.caliph.my.id/config/data-api.php");
  return data;
}.bind();
