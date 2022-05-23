import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });


  function handleResponse(response) {
    setWeatherData = ({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon:response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a location..."
              className="form-control shadow-sm"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-warning btn-current w-100"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.icon} alt={weatherData.description} className="float-left" />
            <span className="float-left">
              <span className="temperature">{Math.round(weatherData.temp)}</span>
            </span>
            <span className="units"> °F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
            <li>Max Temp: {Math.round(weatherData.maxTemp)}°</li>
            <li>Min Temp: {Math.round(weatherData.minTemp)}°</li>
            <li>Feels Like: {Math.round(weatherData.feelsLike)}°</li>
          </ul>
        </div>
      </div>
    </div>
  
  } else {
    const apiKey = "358bb59892afa5069bcb43f658651551";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  
    return "Loading...";
  }
}