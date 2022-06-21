import React from "react";
import { Avatar } from "@material-ui/core";
import "../CSS/Story.css";

function Story({ image, titleText, profileSrc }) {
  return (
    <div className="story">
      <Avatar src={profileSrc} />
      <h4>{titleText}</h4>
    </div>
  );
}

export default Story;
