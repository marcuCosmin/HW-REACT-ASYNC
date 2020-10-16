import React, { useEffect, useState } from 'react';

export default function Weather() {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(function() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
        .then(resUn => resUn.json())
        .then(res => setWeatherData(res));

    }, []);

    function kConversion(degrees) {
        return (degrees -273.15).toFixed(2);
    }

    return !weatherData ? <h1>Please wait! Loading...</h1> : 
    <div>

        <h3>The weather for {weatherData.name}</h3>

        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather"></img>

        <div>Temperature: {kConversion(weatherData.main.temp)} &#8451; </div>

        <div>Min: {kConversion(weatherData.main.temp_min)} &#8451; <span>|</span> Max: {kConversion(weatherData.main.temp_max)} &#8451;</div>

        <div>Feels like: {kConversion(weatherData.main.feels_like)} &#8451;</div>

    </div>;
}