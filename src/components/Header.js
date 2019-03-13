import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logofts.png";
import "../css/header.css";
import polygon from "../imgs/polygon.png";
import polygon2 from "../imgs/polygon2.png";
import offer from "../imgs/offer.png";
import selectcity from "../imgs/selectcity.png";
import selectsport from "../imgs/selectsport.png";
import email from "../imgs/email.png";
import phone from "../imgs/phone.png";
import twitter from "../imgs/twitter.png";
import fb from "../imgs/fb.png";
import insta from "../imgs/insta.png";
import linkdean from "../imgs/linkdean.png";
import login from "../imgs/login.png";
import signup from "../imgs/signup.png";
import club from "../imgs/club.png";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }

  render() {
    return (
      <div className="header">
        <img className="polygon" src={polygon} alt="" />
        <img className="polygon2" src={polygon2} alt="" />
        <img className="offer" src={offer} alt="" />
        <div className="header-1">
          <div className="citysport">
            <img src={logo} alt="" />

            <img src={selectcity} alt="" />
            <img src={selectsport} alt="" />
          </div>
          <div className="socialcontact">
            <ul className="social-links">
              <li>
                <img src={fb} alt="" />
              </li>
              <li>
                <img src={insta} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={linkdean} alt="" />
              </li>
            </ul>
            <ul className="email-tel">
              <li>
                <img src={phone} alt="" />
              </li>
              <li>
                <img src={email} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="header-2">
          <div>
            <Link className="partner" to="#">
              Partner With Us
            </Link>{" "}
            <img src={club} alt="" />
          </div>
          <div className="user">
            <img src={login} alt="" />
            <img src={signup} alt="" />
          </div>
        </div>
        {/* <div className="citypopup" refs={this.cityPop}>
          Select city
        </div>
        <div className="sportspopup" /> */}
      </div>
    );
  }
}

export default Header;
