import React from "react";
import "./App.css";
import { version } from "../package.json";

function App() {
  const appVersion = `${version} ${process.env.NODE_ENV}`;
  return (
    <div className="App">
      <div className="greeting">
        <h1>Hello, World!</h1>
        <h3>This application version number is: v {appVersion}</h3>
      </div>
    </div>
  );
}

export default App;
