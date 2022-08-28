// Created by caliphdev (github.com/caliphdev);
// Please Don't Remove creator!
const dns = require("dns"),
  fetch = require("node-fetch"),
  ipRange = require("ip-range-check"),
  CF_RANGE = [
    "173.245.48.0/20",
    "103.21.244.0/22",
    "103.22.200.0/22",
    "103.31.4.0/22",
    "141.101.64.0/18",
    "108.162.192.0/18",
    "190.93.240.0/20",
    "188.114.96.0/20",
    "197.234.240.0/22",
    "198.41.128.0/17",
    "162.158.0.0/15",
    "104.16.0.0/13",
    "104.24.0.0/14",
    "172.64.0.0/13",
    "131.0.72.0/22",
  ];
module.exports = async (b) => {
  async function c(a) {
    console.log("Checking DNS: " + a);
    try {
      let b = await dns.promises.resolve4(a),
        c = ipRange(b[0], CF_RANGE);
      return (
        console.log(`${a}: ${b}`),
        console.log(`CloudFlare Proxy: ${c ? "Yes" : "No"}`),
        console.log(""),
        { domain: a, dns: b, cf_proxy: c }
      );
    } catch (d) {
      return (
        console.log(`DNS Inactive: ${a}`),
        console.log(""),
        { domain: a, dns: null }
      );
    }
  }
  let d = [],
    a = [];
  for (let e of await (
    await fetch(`https://crt.sh/?q=${b}&output=json`)
  ).json())
    e.name_value.split("\n").map((a) => d.push(a));
  for (let f of [...new Set(d.filter((a) => !a.startsWith("*")))])
    (respon = await c(f)), a.push(respon);
  return a;
};
