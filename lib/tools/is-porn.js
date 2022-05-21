const { Resolver } = require("dns");
const resolver = new Resolver();
resolver.setServers(["208.67.222.123"]);

const OPENDNS_IPS = [/67\.215\.65.\d{3}/gi, /146\.112\.61\.\d{3}/gi];

var isOpenDNS = function (ip) {
  return OPENDNS_IPS.some(function (regexp) {
    return regexp.test(ip);
  });
};

var isPorn = function (domain) {
  result = {}
  resolver.resolve4(domain, (err, res) => {
    if (err) throw err;
     result = {
      creator: "Caliph",
      result: { host: domain, isporn: isOpenDNS(res[0]) },
    };
  });
  return result
};

module.exports = isPorn.bind();
