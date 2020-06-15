import React from "react";
import "../Routes/FourthImage.css";
import Image4 from "../chat_event.jpg";

function FourthImage() {
  return (
    <div className="FourthImage">
      <header className="FourthImage-header">
        <img src={Image4} alt="no one" />
      </header>
    </div>
  );
}

export default FourthImage;
