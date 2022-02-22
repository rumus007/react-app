//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
//create app component
const getButtonText = () => {
  return { text: "Click me" };
};

const App = () => {
  let style = { backgroundColor: "blue", color: "white", borderRadius: "25px" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter your name:
      </label>
      <input id="name" type="text"></input>
      <button type="submit" style={style}>
        {getButtonText().text}
      </button>
    </div>
  );
};
//display app component
ReactDOM.render(<App />, document.querySelector("#root"));
