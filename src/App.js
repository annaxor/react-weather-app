import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://roxannaortega.com/" target="_blank" rel="noreferrer">
            Roxanna Ortega Valdivieso
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/annaxor/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
