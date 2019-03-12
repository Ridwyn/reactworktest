import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logofts.png";
import "../css/header.css";

export default function Navigation() {
  return (
    <div className="header">
      <div className="header-1">
        <div>
          <img src={logo} alt="" />

          <Link className="city" to="#">
            Select City
          </Link>
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
    </div>
  );
}
