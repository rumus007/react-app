import React from "react";
import "./../style/ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  renderImageList = () => {
    return this.props.images.map((img) => {
      return <ImageCard image={img} key={img.id}></ImageCard>;
    });
  };

  render() {
    return (
      <div>
        <div> Found: {this.props.images.length} images</div>
        <div className="image-list">{this.renderImageList()}</div>
      </div>
    );
  }
}

export default ImageList;
