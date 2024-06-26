const request = require("request")
const weatherapi = (enlem, boylam, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2a7c2b083d9ceb97b1c8f7dbe738de81&query=" + enlem + "," + boylam

  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback("Hava durumu servisine bağlantı kurulamadı", undefined)
    } else if (body.error) {
      callback("Girilen konum bilgisi bulunamadı", undefined)
    } else {
      callback(undefined,
        "Konum Bilgisi:" + body.location.name + " Hava sicakliği : " + body.current.temperature + " Hissedilen : " + body.current.feelslike
      )
    }
  })
}

module.exports = weatherapi
