import React from "react";

const CommentDetail = (props) => {
  //   console.log(props);
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.imgAvatar}></img>
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeStamp}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
