const request = require("request")

const geocode = (address, callback) => {
  // function body goes here
  const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(address) + ".json?access_token=pk.eyJ1Ijoia2FkaXIzMjMzIiwiYSI6ImNsdTM5cno3NjA4NnAybW5kZTN3dG9nbWMifQ._hU69OTmxDX6TQIiTd41-w"

  request({ url: geocodeURL, json: true }, (error, {body}) => {
    if (error) {
      callback("Geocoding servisine bağlanamadı", undefined)
    } else if (body.features.length == 0) {
      callback("Belirttiğiniz konum bulunamadı", undefined)
    } else {
      const boylam = body.features[0].center[0] // boylam bilgisini verir
      const enlem = body.features[0].center[1] // enlem bilgisini verir
      const konum = body.features[0].place_name

      callback(undefined, {
        boylam: boylam,
        enlem: enlem,
        konum: konum
      })
    }
  })
}


module.exports = geocode
