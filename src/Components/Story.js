import React from "react";
import { Avatar } from "@material-ui/core";
import "../CSS/Story.css";

function Story({ image, title, profilePic }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profilePic} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
