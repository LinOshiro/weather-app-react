import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        console.log(props);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {

        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">Thu</div>
                        <WeatherIcon code="01d" size={32} />
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">19°</span>
                            <span className="WeatherForecast-temperature-min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "358bb59892afa5069bcb43f658651551";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}