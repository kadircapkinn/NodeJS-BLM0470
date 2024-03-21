const yargs = require("yargs"); 
const notes = require("./notes"); //nokta bulundugu konum demek oluyor 
//require içersinde obje geliyor bu yuzden gecer isim vermek gerekiyor 
yargs.version("1.1.0"); 
 
yargs.command({ 
  command: "add", 
  describe: "yeni not ekler", 
  builder: { 
    title: { 
      describe: "Not basligi", 
      demandOption: true, 
      type: "string", 
    }, 
  }, 
  body: { 
    describe: "Not icerigi", 
    demandOption: true, 
    type: "string", 
  }, 
  handler (argv) { 
    notes.addNote(argv.title, argv.body); 
  }, 
}); 
 
yargs.command({ 
  command: "remove", 
  describe: "secilen notu siler", 
  builder: { 
    title: { 
      describe: "Not basligi", 
      demandOption: true, 
      type: "string", 
    }, 
  }, 
  handler (argv) { 
    notes.removeNote(argv.title); 
  }, 
}); 
 
yargs.command({ 
  command: "list", 
  describe: "mevcut notu listeler", 
  handler () { 
    notes.listNotes()
  }, 
}); 
 
yargs.command({ 
  command: "read", 
  describe: "secilen notu gosterir", 
  builder: { 
    title: { 
      describe: "Not basligi", 
      demandOption: true, 
      type: "string", 
    }, 
  },
  handler (argv) { 
    notes.readNotes(argv.title)
  }, 
}); 
 
yargs.parse();