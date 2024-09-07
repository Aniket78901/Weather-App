`/Here I've used the API of Open Weather Map
Sign up and fetch your API key to use it here  
/`
const apiKey= "f8f926b08a0ec595d40ce3f0c850d97c"; //<------ API Key
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //<------ API Url 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) 
{
     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);  
     if(response.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
      // document.querySelector(".card").style.background= linear-gradient(135deg, #00feba, #5b548a);
     } 
     else{
      var data = await response.json();

         console.log(data);
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

         if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
         }
         else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
         }
         else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
         }
         else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
         }
         else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
         }
         else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
         }
         
         document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display = "none";
     }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
