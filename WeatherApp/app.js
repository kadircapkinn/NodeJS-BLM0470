const request = require('request');
const geocode = require('./utils/geocode');
const weatherapi = require('./utils/weatherapi');

const address = process.argv[2]; // node app.js KonumBilgisi //Bu parametlere array şeklinde döndürür konum bilgisi bu yüzden 2.indexte bulunur.

geocode(address,(errGeoAPI,{enlem,boylam} = {})=>{ // Dogrudan nesne yerine istenilen property'leri yolladık. Eğer parametre hatalı girilirse err kosuluna girdiginde kod hata verir. Cünkü atama islemini yapmaya calisiyor. Bunun icin {enlem,boylam} = {} bu hale getirdik.
    if(errGeoAPI){
        console.log("Hata bulundu:",errGeoAPI);
        return
    }

    weatherapi(enlem,boylam,(errWeatherAPI,data)=>{ // datanın tamamamı yerine destructuring kullanabiliriz
        if(errWeatherAPI){
            console.log("Hata bulundu:",errWeatherAPI);
            return
        }
        console.log(data);
    })

})