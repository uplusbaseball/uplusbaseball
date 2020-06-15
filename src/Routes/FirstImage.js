import React from "react";
import "../Routes/FirstImage.css";
import Image1 from "../google_lens.jpg";

function FirstImage() {
  function handleClick({ e }) {
    console.log("333");
  }

  return (
    <div className="FirstImage">
      <div className="FirstImage-header">
        <a href="https://uplusbaseball.page.link/kean">
          <img src={Image1} alt="no one"></img>
          {/* <button
            className="FirstImage-button"
            onClick={(e) => handleClick(e)}
          ></button> */}
        </a>
      </div>
    </div>
  );
}

export default FirstImage;
