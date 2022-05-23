import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";

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
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} /> 
              </div>
                <span className="temperature">
                  {Math.round(props.data.temperature)}
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