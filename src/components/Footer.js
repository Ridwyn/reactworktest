import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import footerlogo from "../imgs/footerlogo.png";
import footeremail from "../imgs/footeremail.png";
import footerphone from "../imgs/footerphone.png";
import footerfb from "../imgs/footerfb.png";
import footerinsta from "../imgs/footerinsta.png";
import footertwitter from "../imgs/footertwitter.png";
import footerlinkedin from "../imgs/footerlinkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <img src={footerlogo} alt="" />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <ul className="about">
          <Link to="">
            {" "}
            <li> About Us</li>{" "}
          </Link>
          <Link to="">
            {" "}
            <li> Partner With Us</li>{" "}
          </Link>
          <Link to="">
            {" "}
            <li> Reward Points</li>{" "}
          </Link>
          <Link to="">
            {" "}
            <li> Contact Us</li>{" "}
          </Link>
          <Link to="">
            {" "}
            <li> Terms and Conditions</li>{" "}
          </Link>
          <Link to="">
            {" "}
            <li> Policy</li>{" "}
          </Link>
        </ul>
      </div>
      <div>
        <ul className="contact">
          <li>
            {" "}
            <img src={footeremail} alt="" />
          </li>
          <li>
            {" "}
            <img src={footerphone} alt="" />
          </li>
          <li className="footersocials">
            {" "}
            <img src={footerfb} alt="" /> <img src={footerinsta} alt="" />{" "}
            <img src={footertwitter} alt="" />{" "}
            <img src={footerlinkedin} alt="" />
          </li>
          <li className="footersubscribe"><input type="text" className="subscribetxt"/> <a href="">SUBSCRIBE</a></li>
        </ul>
      </div>
    </div>
  );
}
