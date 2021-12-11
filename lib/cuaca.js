const request = require('node-fetch');
const APIKey = '18d044eb8e1c06eaf7c5a27bb138694c';
const units = 'metric';

const Cuaca = (kota) => {
  return new Promise((resolve, reject) => {
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&units=${units}&appid=${APIKey}`;
   let { status, json, text } = await request(url)
   if (status !== 200) return reject({ status, data: await text() })
    cuaca = await json()
    result = {
				status,
				data: {
					Nama: cuaca.name+','+cuaca.sys.country,
					Longitude : cuaca.coord.lon,
					Latitude: cuaca.coord.lat,
					Suhu: cuaca.main.temp+" C",
					Angin: cuaca.wind.speed+" m/s",
					Kelembaban: cuaca.main.humidity+"%",
					Cuaca: cuaca.weather[0].main,
					Keterangan: cuaca.weather[0].description,
					Udara: cuaca.main.pressure+" HPa"
				}
			}
   resolve(result)

  })
}

module.exports = Cuaca;
