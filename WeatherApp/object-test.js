/*object property shorthand
object destructuring*/

//Object property shorthand
const userName = "Kadir";
const userAge = 25;

const user = {
    //userName: userName, Eğer property ve değişken adı aynıysa dogrudan kullanılabiliriz. (shorthand)
    userName,
    age: userAge,
    location: 'Bursa'
}

console.log(user);


// Object destructuring
const product = {
    label: "Laptop",
    price: 300,
    stock: 20,
    salePrice: undefined,
    testString: "TestString",
    testNumber: 13,
}

/*Standart
const label = product.label;
const stock = product.stock;*/

const{label,stock,rating,testString:test,testNumber=5} = product; // Object destructuring (Mevcut degiskeni propertylerle eslestirir ve olusturur.)
console.log("label:",label);
console.log("stock:",stock);
console.log("rating:",rating); // product nesnesi icerisinde rating bilgisi olmadigi icin eslesmedi.
console.log("test:",test); // Mevcut eslesmeyi yaptı ve degisken ismi degistirdik.
console.log("testNumber:",testNumber); // Atama yapsakta nesnenin icindekini aldi.


// Fonksiyonda kullanımı: istenilen parametreyi yollama
const transaction = (type,{label,stock}) => {
    //const {label} = myProduct;
    console.log(type,label,stock);
}

transaction('order',product);