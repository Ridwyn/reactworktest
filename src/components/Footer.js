import React from "react";
import logo from "../imgs/logofts.png";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <img src={logo} alt="" />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <ul className="about">
          <li> About Us</li>
          <li> Partner With Us</li>
          <li> Reward Points</li>
          <li> Contact Us</li>
          <li> Terms and Conditions</li>
          <li> Policy</li>
        </ul>
      </div>
      <div>
        <ul className="contact">
          <li> ftsupport@gmail.com</li>
          <li> 855334123</li>
          <li> Reward Points</li>
        </ul>
      </div>
    </div>
  );
}
