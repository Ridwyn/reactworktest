import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/frame2.css";
import Picture from "../imgs/banner2img.png";
class Frame2 extends Component {
  render() {
    return (
      <div className="frame2">
        <div className="screen1">
          <div className="banner2">
            <img className="picture" src={Picture} alt="" />
          </div>

          <div className="feel-the-sport">
            <h2 className="feel-sport-head">FEEL THE SPORT</h2>
            <h6 className="feel-sport-text">
              You can chose a professional trainer or academy near by you to
              learn any sport
            </h6>
            <div className="book-now">
              <Link to="" className="book-now-btn">
                {" "}
                LEARN A SPORT
              </Link>
            </div>
          </div>
          <div className="rectangle-21" />
        </div>
      </div>
    );
  }
}

export default Frame2;
