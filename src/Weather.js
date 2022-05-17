import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    date: "Tuesday 10:00",
    temp: "77",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    humidity: "30%",
    wind: "5",
    maxTemp: "80",
    minTemp: "64",
    feelsLike: "77",
  };

  return (
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
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.imgUrl} alt="Sunny" className="float-left" />
            <span className="float-left">
              <strong>{weatherData.temp}</strong>
            </span>
            <span className="units"> °F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind} mph</li>
            <li>Max Temp: {weatherData.maxTemp}°</li>
            <li>Min Temp: {weatherData.minTemp}°</li>
            <li>Feels Like: {weatherData.feelsLike}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
