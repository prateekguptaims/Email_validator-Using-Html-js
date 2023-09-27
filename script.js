
let submitBtn = document.getElementById("submitBtn");
let resultCont = document.querySelector("#resultCont")

let results = {

    "free": false,
    "role": false,
    "user": "prateekgupta2612",
    "email": "prateekgupta2612@gma.com",
    "score": 0.16,
    "domain": "gma.com",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "prateekgupta2612@gmail.com",
    "format_valid": true

}
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    resultCont.innerHTML = `  <img src="load.svg" alt="load" width="53px">`;
    let key = "ema_live_mxPsV9Ojc8NoXnaHoNbM1ZTTLLDglPxkMeg8pVmC"
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    console.log("first");
    let res = await fetch(url);
    let result =await res.json();

    let str = ""
    for (key of Object.keys(result)) {
        // console.log(key)
        if(result[key] !=="" && result[key] !==" "){
            
            str = str + `<div> ${key}:${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str;

})

