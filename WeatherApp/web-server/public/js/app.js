console.log("Bu bir js dosyasidir ve client tabanli calisir");


document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.querySelector("#weatherForm");
    const search = document.querySelector("input");
    const messageOne = document.querySelector("#message-1")
    const messageTwo = document.querySelector("#message-2")
    weatherForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Formun varsayılan davranışını engeller
        const location = search.value
        messageOne.textContent = "Loading";
        messageOne.textContent = "";
        fetch("http://localhost:3000/weather?address="+location).then((response)=>{
            response.json().then((data)=>{
                if(data.error){
                    messageOne.textContent = data.error;
                }else{
                    messageOne.textContent = data.konum;
                    messageTwo.textContent = data.forecast;
                }
            })
        })
    });
});
