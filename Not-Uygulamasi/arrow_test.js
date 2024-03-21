const tasks = {
    tasks : [
        {
            text : "Alışveriş",
            completed : true
        },
        {
            text : "Temizlik",
            completed : false
        },
        {
            text : "Ödev",
            completed : false
        }

    ],
    getTasksToDo : function (){
        return this.tasks.filter((tasks) => tasks.completed === false) // bu metod bize geriye bir array dondurur task arrayini taramaya baslar ve callback fonksiyonu içerisinde arrayin indexlerini tek tek tarar eger sonuc false ise geri dondurulecek arraye ekler.
    }
}



console.log(tasks.getTasksToDo())

