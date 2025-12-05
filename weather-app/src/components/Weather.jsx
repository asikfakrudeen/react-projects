import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import searchIcon from '../assets/search.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

const Weather = () => {

        const [weatherData, setWeatherData] = useState("Chennai");

        const cityRef = useRef();

        const allIcons = {
            "01d": clearIcon,
            "01n": clearIcon,
            "02d": cloudIcon,
            "02n": cloudIcon,
            "03d": cloudIcon,
            "03n": cloudIcon,
            "04d": drizzleIcon,
            "04n": drizzleIcon,
            "09d": rainIcon,
            "09n": rainIcon,
            "11d": rainIcon,
            "11n": rainIcon,
            "13d": snowIcon,
            "13n": snowIcon,   
        }

        const search = async (city) => {

            if (city === ""){
                alert("Enter a city name");
                return;
            } 

            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                if (!response.ok){
                    alert(data.message);
                    return
                }

                const icon = allIcons[data.weather[0].icon] || clearIcon;
                setWeatherData({
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    temperature : Math.floor(data.main.temp),
                    location : data.name,
                    icon : icon
                });
            } catch (error) {
                setWeatherData(false);
                console.error("Error fetching weather data: ", error);
            }
        }

    useEffect(() => {
        search("Chennai");
        cityRef.current.focus();
    }, []);

  return (
    <div className = 'weather'>
        <div className = 'search-bar'>
            <input type = "text" placeholder = 'Enter city name' ref = {cityRef}/>
            <img src = {searchIcon} alt = "search" onClick={() => search(cityRef.current.value)} />
        </div>

        {weatherData? <>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
            <div className='col'>
                <img src={humidityIcon} alt="humidity" />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='col'>
                <img src={windIcon} alt="wind" />
                <div>
                    <p>{weatherData.windSpeed} km/hr</p>
                    <span>Wind speed</span>
                </div>
            </div>
        </div>
        </> : <></>}
    </div>
  )
}

export default Weather