/*setTimeout(() => {
    console.log("İki saniye bekleniyor...");
}, 2000);


const names = ["Kadir","Ayse","Bayram","Halil"];

const findName = names.find((name)=>{
    return name.endsWith('r');
})

console.log(findName);*/
/*
const geocode = (address,callback) =>{
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data);
    }, 2000);
}

const data = geocode("Bursa",(data)=>{
    console.log(data);
});*/


const addNumbers = (a,b,c,callback) => {
    setTimeout(() => {
        callback(a+b+c);
    },3000);
}

addNumbers(2,5,3,(result)=>{
    console.log(result);
})



