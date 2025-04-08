import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/je5513" target="_blank" rel="noreferrer">
            {" "}
            Jessica Shore{" "}
          </a>{" "}
          , open sourced on
          <a
            href="https://github.com/je5513/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://gorgeous-raindrop-c985ef.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
