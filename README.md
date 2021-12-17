# caliph-api


# require
```js
const caliph_api = require('caliph-api')
```

# Installation

## Latest
```sh
npm i github:caliph91/caliph-api
```

## Npm 
```sh 
npm i caliph-api
```



# Binary

## Encrypt
```js
var result = caliph_api.binary.enc('hello world')
console.log(result)
```
### Result 
```1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100```


## Decrypt 
```js
var result = caliph_api.binary.dec('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100')
console.log(result)
```

### result 
```hello world```



# Ip Lookup
```js
(async () => {
var result = await caliph_api.iplookup('1.1.1.1')
console.log(result)
})()
```
### result
```js
{
  "status": 200,
  "continent": "Oceania",
  "continentCode": "OC",
  "country": "Australia",
  "countryCode": "AU",
  "region": "QLD",
  "regionName": "Queensland",
  "city": "South Brisbane",
  "district": "",
  "zip": "4101",
  "lat": -27.4766,
  "lon": 153.0166,
  "timezone": "Australia/Brisbane",
  "offset": 36000,
  "currency": "AUD",
  "isp": "Cloudflare, Inc",
  "org": "APNIC and Cloudflare DNS Resolver project",
  "as": "AS13335 Cloudflare, Inc.",
  "asname": "CLOUDFLARENET",
  "reverse": "one.one.one.one",
  "mobile": false,
  "proxy": false,
  "hosting": true,
  "query": "1.1.1.1"
}
```

# Arti Nama

```js
(async () => {
var result = await caliph_api.artinama('Caliph')
console.log(result)
})()
```

### Result
```js
{
  "status": 200,
  "result": "ARTI NAMA\nNama caliph, memiliki arti: Mengutamakan prinsip, keteraturan, pelayanan, sulit menerima batasan dan perkembangan yang mapan.\n\nAnda mempunyai karakter yang unik dan kuat. Tanpa anda sadari, banyak orang akan merasa sopan dan tampil apa adanya. Kegigihan anda dalam meraih kesuksesan karir tidak perlu diragukan lagi. Anda orang yang sangat berambisi untuk maju. Biasanya orang yang berkarakter nama ini adalah orang-orang yang menuju sukses dengan jerih payah mereka sendiri meski tidak ada orang yang membantu dalam perjalanan karir mereka. Akan tetapi, anda tetap menyenangi pekerjaan yang sifatnya rutinitas. Anda orang yang tidak pandai dalam bersosialisasi. Anda orang yang cukup puas dengan kehidupan yang serba menyendiri karena anda ingin mendapatkan keseimbngan antara keramaian dan ketenangan."
}
```


# Cuaca

```js
(async () => {
var result = await caliph_api.cuaca('Sragen')
console.log(result)
})()
```

### Result
```js
{
  status: 200,
  data: {
    Nama: 'Jakarta,ID',
    Longitude: 106.8451,
    Latitude: -6.2146,
    Suhu: '31.08 C',
    Angin: '5.14 m/s',
    Kelembaban: '66%',
    Cuaca: 'Clouds',
    Keterangan: 'scattered clouds',
    Udara: '1011 HPa'
  }
}
```
