let result= document.querySelector("#result");
let searchBtn= document.querySelector("#search");
let input=document.querySelector("#loc");
let Apikey='0279d9b025e5197c650c7f3ea6024d7a';

let userInput= document.getElementById("loc").value;
fetchApiData(userInput);
function Click(userInput){
    userInput= document.getElementById("loc").value;
    console.log(userInput);
    fetchApiData(userInput);
}

function fetchApiData(userInput){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ userInput +"&appid=" + Apikey + "&units=metric")
    .then((response) => response.json())
    .then((data) => {
        for (let i in data){
            if (userInput === data.name){
            temp.innerHTML = "Temperature: " + Math.round(data.main.temp) + "°C";
            feels_like.innerHTML = "Feels like: " + Math.round(data.main.feels_like) +"°C";
            pressure.innerHTML = "Pressure: " + data.main.pressure;
            humidity.innerHTML = "Humidity: " + data.main.humidity;
           }
           else
           alert("City not found!!!");
        }
        }
)
}


