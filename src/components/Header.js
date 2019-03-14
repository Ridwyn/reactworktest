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
import partner from "../imgs/partner.png";
import city from "../imgs/city.png";
import closebtn from "../imgs/closebtn.png";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }

  toggle = e => {
    if (this.state.display == false) {
      this.setState({ display: true });
    } else if (this.state.display == true) {
      this.setState({ display: false });
    }
  };

  render() {
    let cityPop = "cityPopUp";
    if (this.state.display) {
      cityPop += " " + "open";
      console.log(cityPop);
    } else if (this.state.display == false) {
      cityPop = "cityPopUp close";
      console.log(cityPop);
    }
    return (
      <div className="header">
        <img className="polygon" src={polygon} alt="" />
        <img className="polygon2" src={polygon2} alt="" />
        <img className="offer" src={offer} alt="" />

        <div className="header-1">
          <div className="citysport">
            <img src={logo} alt="" />

            <a href="#">
              {" "}
              <img src={selectcity} onClick={this.toggle} alt="" />
            </a>
            <a href="#">
              {" "}
              <img src={selectsport} alt="" />
            </a>
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
              <img src={partner} alt="" />
            </Link>{" "}
            <Link className="club" to="#">
              {" "}
              <img src={club} alt="" />
            </Link>
          </div>
          <div className="user">
            <img src={login} alt="" />
            <img src={signup} alt="" />
          </div>
        </div>
        {/* Popups */}
        <div className={cityPop}>
          <div>
            <img src={city} alt="" />{" "}
            <a href="#">
              <img onClick={this.toggle} src={closebtn} alt="" />
            </a>
          </div>
          <div className="cityText">Select City</div>
          <div>
            <input className="citySelect" type="text" />
          </div>{" "}
          <div>
            <a href="" className="citySubmit">
              Submit
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
