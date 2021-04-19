import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./App";

import "./App";

function SearchEngine() {
  return (
    <div className="App">
      <div>
        <SearchEngine />
        <h1 id="city"></h1>
      </div>
      <p>
        <a href="https://github.com/carolinasagravr/weatherappREACT.git">
          {" "}
          Open-source Code
        </a>{" "}
        by Carolina Vargas
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
