apiKey = "81c16a14c7eb40cd813113425211709";
// cityName = document.querySelector("search")
let search=document.querySelector("#search")

const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date()






async function getApi(city)
{
    let http = await fetch("https://api.weatherapi.com/v1/forecast.json?key="+apiKey+"&q="+city+"&days=7")
    http = await http.json()
    
    console.log(http)
    document.querySelector(".main").innerHTML = http.location.name;
    document.querySelector(".temp").innerHTML = http.current.temp_c+"°C";
    document.querySelector(".satutes").innerHTML = http.current.condition.text;
    document.querySelector(".icon").setAttribute("src", "https:"+http.current.condition.icon);
    document.querySelector(".humidity").innerHTML="humidity: "+http.current.humidity+"%";
    document.querySelector(".speed").innerHTML= "speed: "+http.current.wind_kph+"kpH";
    document.querySelector(".direc").innerHTML = "direction: " + http.current.wind_dir;
    document.querySelector(".ourDay").innerHTML = weekday[http.current.is_day];
    document.querySelector(".ourMonth").innerHTML = date.getDate() + "" + monthNames[date.getMonth()];
    document.querySelector(".nextDay").innerHTML = weekday[http.current.is_day + 1];
    document.querySelector(".nextMonth").innerHTML = date.getDate() + 1 + "" + monthNames[date.getMonth()];
    document.querySelector(".nextmain").innerHTML = http.location.name;
    document.querySelector(".nextTemp").innerHTML = http.forecast.forecastday[1].day.maxtemp_c;
    document.querySelector(".nextSatutes").innerHTML = http.forecast.forecastday[1].day.condition.text;
    document.querySelector(".nexticon").setAttribute("src", "https:"+http.forecast.forecastday[1].day.condition.icon);
    document.querySelector(".nexthumidity").innerHTML="humidity: "+ http.forecast.forecastday[1].day.avghumidity+"%";
    document.querySelector(".nextspeed").innerHTML= "speed: "+http.forecast.forecastday[1].day.maxwind_kph+"kpH";
    document.querySelector(".nextdirec").innerHTML = "direction: " + http.forecast.forecastday[1].hour[0].wind_dir;

    document.querySelector(".lastDay").innerHTML = weekday[http.current.is_day + 2];
    document.querySelector(".lastMonth").innerHTML = date.getDate() + 2 + "" + monthNames[date.getMonth()];
    document.querySelector(".lastmain").innerHTML = http.location.name;
    document.querySelector(".lastTemp").innerHTML = http.forecast.forecastday[2].day.maxtemp_c;
    document.querySelector(".lastSatutes").innerHTML = http.forecast.forecastday[2].day.condition.text;
    document.querySelector(".lasticon").setAttribute("src", "https:"+http.forecast.forecastday[2].day.condition.icon);
    document.querySelector(".lasthumidity").innerHTML="humidity: "+ http.forecast.forecastday[2].day.avghumidity+"%";
    document.querySelector(".lastspeed").innerHTML= "speed: "+http.forecast.forecastday[2].day.maxwind_kph+"kpH";
    document.querySelector(".lastdirec").innerHTML = "direction: " + http.forecast.forecastday[2].hour[0].wind_dir;
}

search.addEventListener("keyup", function () {
    getApi(this.value)
})

function displayData() {
    
}