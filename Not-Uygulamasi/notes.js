const fs = require("fs"); 
const chalk = require("chalk"); 
 
const addNote = (title, body) => { 
  //notları dosyaya kaydedıcez 
  const notes = loadNotes(); //array dondurcek 
      //aynı baslık olma durumunda kosula sokmak ıcın bu fonk yazdık. 
    //note.title // notesin içindeki elemanlardan bır tanesi 
  //const duplicateNotes = notes.filter((note) =>note.title === title); 
  const duplicateNote = notes.find((note) => note.title === title);//eger notlar icerisinde bulunursa o not dondurulur
  //if (duplicateNotes.length === 0) { 

  console.log(duplicateNote) // eğer array içerisinde ayni baslik bulunduysa nesneyi donduruyor. eger bulunmadiysa undefined dondurur.
  //debbugger

  if (!duplicateNote) {
    //hiçbir eşleşme yok,yenı not eklenebılır 
    notes.push({ 
      title: title, 
      body: body, 
    }); //arraye eleman eklemek 
    saveNotes(notes); 
    console.log(chalk.green.inverse("yeni not eklendi")); // arrayin içindekileri consola yazdırma 

  } else { 
    //o baslık daha once alınmıs 
    console.log( 
      chalk.red.inverse("Bu başlık daha once kullanıldı.Not eklenemiyor!!!") 
    ); 
  } 
}; 

 
const removeNote = (title) =>{ 
  //baslık sılme fonks 
  const notes = loadNotes(); //notları aldık 
  //notları tespıt etmem gerekıyor ama fıltreleme ıle cunku not olmama ıhtımalı de var 
  const notesToKeep = notes.filter((note) => note.title !== title);
      //saklamak ıstenen notlar tıtle a esıt olmayan notlardır bunları tutar ve savenotes e parametre olarak atarız 
    //dizinin elemanları geriye donduruyor 
    //yanı esıt olmayan her eleman donmus olcak 
    //esit olan donmeyecegınden tekrar saveNotes ile nota kaydetme durumunda otomatıkmen sılme ıslemı yapmıs olucaz 
   
  if (notes.length > notesToKeep.length) { 
    //baslangıctakı not sayısı sonrakınden buyukse sılınmıstır aksı halde sılme yoktur 
    console.log(chalk.green.inverse("Note remove")); //inverse terse cekıyor renklerı ondekı ıle arkadakı 
    saveNotes(notesToKeep); 
  } else { 
    console.log(chalk.red.inverse("Silmek istediiginiz not bulunamamıstır.")); 
  } 
}; 
 
const loadNotes = ()=> { 
  try { 
    //dosya olmama durumunda hata almamak ıcın try catch bloguna alırız 
    // not bilgisi getirecek 
    // eski notlara bakıp ona gore ekleme yapıcaz 
    const dataBuffer = fs.readFileSync("notes.json"); //dosyadan okuma işlemi 
    const dataJSON = dataBuffer.toString(); //okudugu veriyi json formatına çeviriyor 
    //parse the string and return 
    return JSON.parse(dataJSON); //JSon formatına donusur 
  } catch (e) { 
    return []; 
  } 
}; 
 
const saveNotes =  (notes)=> { 
  //notes isminde array alıp dosyaya yazdıracak 
  const dataJSON = JSON.stringify(notes); //json formatı ama strınge cevrılmıs halı 
  fs.writeFileSync("notes.json", dataJSON); //notes.json dosyasına datajson gonderılcek 
}; 

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse('Kayıtlı Notlar'))
  notes.forEach((note) => {
      console.log(note.title)
  });
}

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title ===title)

  debugger
  
  if(note){
    //note varsa
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }
  else{
    //not yoksa
    console.log(chalk.red.inverse("Bu başlığa sahip bit not bulunamadı"))
  }
}
 
module.exports = { 
  addNote: addNote, 
  removeNote: removeNote, 
  listNotes : listNotes,
  readNotes : readNotes
};