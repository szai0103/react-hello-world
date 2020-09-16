import React from "react";
import "./App.css";
import { version } from "../package.json";

function App() {
  const appVersion = `${version}-${process.env.NODE_ENV}`;
  return (
    <div className="App">
      <h1 className="greeting">Hello, World!</h1>
      <h3>This application version number is: v{appVersion}</h3>
    </div>
  );
}

export default App;
