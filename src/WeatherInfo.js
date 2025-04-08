import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
          <div className="text-capitalize ps-2">{props.data.description}</div>
        </li>
        <li>
          Humidity: {props.data.humidity}% Wind: {props.data.wind} mph{" "}
        </li>
      </ul>
      <div className="row">
        <div className="col-4">
          <div>
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="weather-icon"
            />
          </div>
        </div>
        <div className="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
