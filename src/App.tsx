import React from "react";
import "./style.css";
const enviroment: string = process.env.NODE_ENV;
const endPointName: string = process.env.name;
const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <p>{`Mode:${enviroment} ${endPointName}`}</p>
    </div>
  );
};

export default App;
