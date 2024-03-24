const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=2as7c2b083d9ceb97b1c8f7dbe738de81&query=37.8267,-122.4233"


request({url:url,json:true},(error,response) =>{
    /*
    console.log("hava sicakligi" + response.body.current.temperature
    + "Hissedilen:"+ response.body.current.feelslike);*/

    if(error){
        console.log("servise baglanamadi");
    } else if(response.body.error){
        console.log("bulunamadi");
    }
})







/*
*/