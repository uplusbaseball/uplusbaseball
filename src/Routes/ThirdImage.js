import React from "react";
import "../Routes/ThirdImage.css";
import Image3 from "../challenge999.jpg";

function ThirdImage() {
  return (
    <div className="ThirdImage">
      <header className="ThirdImage-header">
        <img src={Image3} alt="no one" />
      </header>
    </div>
  );
}

export default ThirdImage;
