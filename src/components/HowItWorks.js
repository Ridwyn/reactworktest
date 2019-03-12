import React from "react";
import picture from "../imgs/picture.png";
import { Link } from "react-router-dom";
import "../css/howitworks.css";

export default function HowItWorks() {
  return (
    <div className="howitworks">
      <h3>HOW IT WORKS</h3>
      <img src={picture} alt="" />
      <div className="bottom">
        <div className="link1">
          <p>Want to play a sport</p>
          <Link to="#"> BOOK N PLAY</Link>
        </div>
        <div className="link2">
          <p>Looking for a sports trainer</p>
          <Link to="#"> LEARN A SPORT</Link>
        </div>
      </div>
    </div>
  );
}
