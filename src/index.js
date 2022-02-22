//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
//create app component

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeStamp="Today at 6:00 am"
          comment="How artistic!!!"
          imgAvatar={faker.image.image()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeStamp="Today at 7:00 am"
          comment="WOWOWOWOWO!!!"
          imgAvatar={faker.image.image()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};
//display app component
ReactDOM.render(<App />, document.querySelector("#root"));
