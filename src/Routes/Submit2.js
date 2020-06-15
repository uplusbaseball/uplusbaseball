import React from "react";
import Modal from "react-responsive-modal";
import "./Submit.css";
import Image2 from "../baseball_2020new.jpg";

function Submit() {
  return (
    <div className="submit">
      <img src={Image2} alt="no one" />
      {alert(`참여해주셔서 감사합니다.`)}
      <div className="confirmBox">
        <div className="textBox">참여해주셔서 감사합니다!</div>
        <div className="buttonBox">
          <button className="button">U+프로야구로 가기</button>
          <button className="button">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Submit;
