import React from "react";
import "./Mypage.css";
import Mypage from "./Mypage";

function cs() {
  return (
    <>
      <Mypage />
      <div className="cs_all">
        <div className="cs_h1">고객센터</div>
        <div className="cs_contents">
          <label>대표번호</label>
          <span>1566-6575</span>
        </div>
        <div className="cs_contents">
          <label>영업시간</label>
          <span>AM 10:00 ~ PM 17:00</span>
        </div>
        <div className="cs_contents">
          <label>점심시간</label>
          <span> PM 12:30 ~ PM 13:30</span>
        </div>
      </div>
    </>
  );
}

export default cs;
