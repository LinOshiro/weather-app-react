import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={props.data.iconUrl} alt={props.data.description} className="float-left" />
            <span className="float-left">
              <span className="temperature">{Math.round(props.data.temperature)}</span>
            </span>
            <span className="units"> °F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Max Temp: {Math.round(props.data.maxTemp)}°</li>
            <li>Min Temp: {Math.round(props.data.minTemp)}°</li>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°</li>
          </ul>
        </div>
            </div>
            </div>
    );
}