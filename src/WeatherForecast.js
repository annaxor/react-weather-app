import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "251603b3b44255d6a7ae3a0215435b62";
  let longitude = props.coordinates.lon;
  let latidute = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latidute}&lat=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">19º</span>
            <span className="WeatherForecast-temperatures-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
