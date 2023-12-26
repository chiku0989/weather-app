document.querySelector(".search-button").addEventListener("click",()=>{

    console.log("detected");
    const city = document.querySelector(".search-box input").value;
    const apiKey = '5b5a20582ad08d12195889efe26507e4';
    console.log(city);

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey).then(
        response => response.json()).then(json=>{

                document.querySelector(".weather-info").classList.remove("not-active");
                document.querySelector(".code-404").classList.add("not-active");
            document.querySelector(".weather-box").style.height = '600px';

            console.log(json);
        

            if(json.cod == 404){
                
                console.log('city not found');
                document.querySelector(".code-404").classList.remove("not-active");
                document.querySelector(".weather-info").classList.add("not-active");
            }
            else{
                const tempKelvin = json.main.temp;
                const tempCelsiusValue = parseInt(tempKelvin - 273.15)+"°C";
                const humidityValue = json.main.humidity+"%";
                const windSpeedValue = parseInt(json.wind.speed)+" Km/h";
                const descriptionValue = json.weather[0].main;

                console.log("Temp : " + tempCelsiusValue);
                console.log("Humidity : "+humidityValue);
                console.log("Wind Speed : "+windSpeedValue);
                console.log("weather : "+ descriptionValue);

                let image = document.querySelector(" .weather-info img");
                let temperature = document.querySelector(".weather-info .temp");
                let description = document.querySelector(".weather-condition");
                let humidity = document.querySelector(".humidity-info span");
                let windSpeed = document.querySelector(".wind-info span");
                

                console.log("img tag: "+ image.src);
                console.log("temp tag: "+ temperature.innerHTML);
                console.log("humidity tag: "+ humidity.innerHTML);
                console.log("windspeed tag: "+ windSpeed.innerHTML);
                console.log("Description : "+description.innerHTML);


                switch (descriptionValue) {
                    case 'Clear':
                        image.src = 'images/clear.png';
                        break;

                    case 'Smoke'|| 'Fog':
                            image.src = 'images/cloud.png';
                            break;
                        
                    case 'Clouds':
                            image.src = 'images/cloud.png';
                            break;

                    case 'Haze' || 'mist':
                            image.src = 'images/mist.png';
                            break;  

                    case 'Haze':
                            image.src = 'images/mist.png';
                            break;        
                    
                    case 'Snow':
                            image.src = 'images/snow.png';
                            break;

                    case 'Rain':
                            image.src = 'images/rain.png'
                            break;
                    default:
                            console.log("image not found");
                        break;
                }

                temperature.innerHTML = tempCelsiusValue;
                description.innerHTML = descriptionValue;
                humidity.innerHTML = humidityValue;
                windSpeed.innerHTML = windSpeedValue;
                
    
            }
                  })

})