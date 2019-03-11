import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/frame21.css";
import Picture from "../imgs/picture.png";


class Frame2 extends Component {
  render() {
    return (
      <div className="frame21">
         <div className="screen1">
          <div className="banner2">
            <img className="picture" src={Picture} alt="" />
          </div>

          <div className="feel-the-sport">
            <h2 className="feel-sport-head">FEEL THE SPORT</h2>
            <h6 className="feel-sport-text">
              You can shoose a sports arena near by you ro play your favourite sport
            </h6>
            <div className="book-now">
              <Link to="" className="book-now-btn">
                {" "}
                BOOK N PLAY
              </Link>
            </div>
          </div>
          <div className="rectangle-22" />
        </div>
      </div>
    );
  }
}

export default Frame2;
