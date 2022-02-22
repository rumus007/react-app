//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";
//create app component

class App extends React.Component {
  state = { lat: null, test: "yeet", errorMessage: "" };

  componentDidMount() {
    console.log("component did mount");
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

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    return <Loader msg="Allow to read your location"></Loader>;
  }
}
//display app component
ReactDOM.render(<App />, document.querySelector("#root"));
