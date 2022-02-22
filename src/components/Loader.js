import React from "react";

const Loader = (props) => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui text loader">{props.msg}</div>
      </div>
      <p></p>
    </div>
  );
};

Loader.defaultProps = {
  msg: "Loading....",
};

export default Loader;
