import React, { useEffect, useState } from 'react';

export default function Weather() {

    const [data, setData] = useState(null);

    useEffect(function() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
        .then(res => res.json())
        .then(res => setData(res));
    }, []);


    return (

        <div>

            <h1>The weather for Brasov</h1>

            <div>Temperature: </div>

        </div>

    );
}