const request = require('request');
const geocode = require('./utils/geocode');
const weatherapi = require('./utils/weatherapi');

const address = process.argv[2]; // node app.js KonumBilgisi //Bu parametlere array şeklinde döndürür konum bilgisi bu yüzden 2.indexte bulunur.

geocode(address,(errGeoAPI,data)=>{
    if(errGeoAPI){
        console.log("Hata bulundu:",errGeoAPI);
        return
    }

    weatherapi(data.enlem,data.boylam,(errWeatherAPI,data)=>{
        if(errWeatherAPI){
            console.log("Hata bulundu:",errWeatherAPI);
            return
        }
        console.log(data);
    })

})