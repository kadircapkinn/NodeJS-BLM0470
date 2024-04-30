const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { title } = require('process');
const app = express();
app.set('view engine','hbs');

const publicDirectoryPath = path.join(__dirname,'../public'); // Statik web sayfasını kullanmak
app.use(express.static(publicDirectoryPath)); // statik dosyalar 
//app.com: app.com,app.com/help, app.com/about

const viewsPath = path.join(__dirname,'../public/templates/views');
app.set('views',viewsPath);

const partialPath = path.join(__dirname,"../public/templates/partials");
hbs.registerPartials(partialPath);

app.get('/',(req,res)=>{
    res.render('index.hbs',{
        title: "Dinamik Web Sayfasi",
        name:"Kadir"
    })
});


console.log(__dirname);
console.log(path.join(__dirname,'../public'));

/*
app.get('/',(req,res)=>{
    res.send(`<div>
            <h1>Test</h1>
            <a href="/weather"><button>Click Weather</button><a/>
            </div>`);
})*/

app.get('/weather',(req,res)=>{
    res.send({
        forecast: "Hava yagisli",
        location: "Bursa"
    });
});
//Help error router
app.get("/help/*",(req,res)=>{
    res.render('404.hbs',{
        title:"404 Yardim Sayfasi",
        name:"Kadir Capkin",
        errorMessage:"Aradiginiz Yardim sayfa bulunamadi."
    });
})

app.get('/help',(req,res)=>{/*
    res.send([{name:"Kadir"},
                {name:"Kdr"}]); //Json formatında yolladik*/
    res.render('help.hbs',{
        title:"Yardim Sayfasi Dinamik Baslik",
        name:"Yardim sayfasi Kadir Capkin",
        helpText:"HelpText Test Dinamik Yazisidir."
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:"Dinamik About Sayfasi",
        name:"About sayfasi Kadir Capkin"
    });
});

app.get('test',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','index.html'));
})

// Error router
app.get("*",(req,res)=>{
    res.render('404.hbs',{
        title:"404 Sayfasi",
        name:"Kadir Capkin",
        errorMessage:"Aradiginiz sayfa bulunamadi."
    });
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})

//web sunucularına default olarak 80 portu uzerinden baglanir.