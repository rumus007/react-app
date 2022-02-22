//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
//create app component
const App = () => {
    return <div>Hello world</div>;
};
//display app component
ReactDOM.render(<App />, document.querySelector("#root"));
