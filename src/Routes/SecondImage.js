import React from "react";
import "../Routes/SecondImage.css";
import Image2 from "../baseball_2020new.jpg";

function SecondImage() {
  return (
    <div className="SecondImage">
      <header className="SecondImage-header">
        <img src={Image2} alt="no one" />
      </header>
    </div>
  );
}

export default SecondImage;
