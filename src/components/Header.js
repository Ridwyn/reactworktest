import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logofts.png";
import "../css/header.css";
import polygon from "../imgs/polygon.png";
import polygon2 from "../imgs/polygon2.png";
import offer from "../imgs/offer.png";

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
          <div>
            <img src={logo} alt="" />

            <a className="city" onClick={this.togglepop1} href="#">
              Select City
            </a>
            {"  "}
            <Link className="sport" to="#">
              Select Sport
            </Link>
          </div>
          <ul className="social-links">
            <li>
              <i className="fab fa-facebook" />
            </li>
            <li>
              <i className="fab fa-instagram" />
            </li>
            <li>
              <i className="fab fa-twitter" />
            </li>
            <li>
              <i className="fab fa-linkedin" />
            </li>
          </ul>
        </div>
        <div className="header-2">
          <div>
            <Link className="partner" to="#">
              Partner With Us
            </Link>{" "}
            <Link className="clubs" to="#">
              Clubs
            </Link>
          </div>
          <div className="user">
            <i className="fas fa-user fa-2x" /> <span>Hi,Emily</span>
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
