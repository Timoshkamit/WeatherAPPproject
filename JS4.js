let poluch = document.querySelector(".Polev");
let button = document.querySelector(".bt");
let lbvivod = document.querySelector(".vivodt");
let lbvivodv = document.querySelector(".vivdodt3");
let vspomogc = document.querySelectorAll(".container2");
let WeatherPicture = document.querySelector(".kartinka");

function provweather(){
    let pic = "img/rain.png";
    switch(MyUrl.weather[0]["main"]){
        case "Drizzle":
            Pic = "img/rain.png";
        break;
        case "Rain":
            pic = "img/rainy.png";
        break;
        case "Snow":
            pic = "img/winter.png";
        break;
        case "Thunderstorm":
            pic = "img/strom.png";
        break;
        case "Clear":
            pic = "img/sun.png";
        break;
        case "Clouds":
            pic = "img/cloud.png";
        break;
        default:
            pic = "frog.png";
        break;

    }
    return pic;
}

async function GetINFO(){
    MyUrl = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + poluch.value + "&appid=f19076d7c03a5433a373cc53fdd35c09");
    if(MyUrl.ok){
        MyUrl = await MyUrl.text();
        MyUrl = await JSON.parse(MyUrl);
        lbvivod.innerHTML = (Math.round(MyUrl.main["temp"]-273) + "°C");
        lbvivodv.innerHTML = (Math.round(MyUrl.wind["speed"]) + "м/с");
        for(let i = 0; i<vspomogc.length; i++){
            vspomogc[i].style.opacity = "100";        
        }
        console.log(MyUrl.weather[0]["main"]);
        WeatherPicture.src = provweather();
    }
    else{
        for(let i = 0; i<vspomogc.length; i++){
            vspomogc[i].style.opacity = "0";        
        }
        WeatherPicture.src = "img/question.png";
        alert("Такой город не существует");
    }

}


button.onclick = GetINFO;
button.touch = GetINFO;

