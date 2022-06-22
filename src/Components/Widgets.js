import React from "react";
import "../CSS/Widgets.css";

export default function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="my fb-clone"
        src="https://www.glassdoor.ca/Reviews/Nityo-Infotech-Reviews-E232694.html"
        width="340"
        height="100%"
        frameborder="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </div>
  );
}
