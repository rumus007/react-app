//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
//create app component

class App extends React.Component {
  constructor(props) {
    //intialize super
    super(props);
    //setup initial state
    this.state = { lat: null, test: "yeet", errorMessage: "" };
    //geolocation api
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //called set state
        //set state will call the rerender the component
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        //handling errors
        console.error(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading......</div>;
  }
}
//display app component
ReactDOM.render(<App />, document.querySelector("#root"));
