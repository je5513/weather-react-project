import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Jessica Shore and is
          <a
            href="https://github.com/je5513/weather-react-project"
            target="_blank"
          >
            {" "}
            open sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
