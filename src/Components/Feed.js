import React from "react";
import "../CSS/Feed.css";
import MessageSender from "./MessageSender.js";
import StoryReel from "./StoryReel.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={"profilePic"}
        message={"message"}
        timestamp={"timestamp"}
        username={"username"}
        image={"image"}
      />
    </div>
  );
}

export default Feed;
