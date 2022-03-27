import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showToFahrenheit(event) {
    event.preventDefaul();
    setUnit("fahrenheit");
  }

  function showToCelsius(event) {
    event.preventDefaul();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={showToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showToCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}