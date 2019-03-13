import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tns } from "tiny-slider";
import "../css/mainpage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Frame1 from "../imgs/Frame1.png";
import Frame2 from "../imgs/Frame2.png";
import picture from "../imgs/picture.png";
import bkquotation from "../imgs/markus-spiske.png";
import event1 from "../imgs/event1.png";
import event2 from "../imgs/event2.png";
import event3 from "../imgs/event3.png";
import ftsplaypoints from "../imgs/ftsplaypoints.png";
import handshake from "../imgs/handshake.png";
import running from "../imgs/running.png";
import partnerbtn from "../imgs/partnerbtn.png";
import ice from "../imgs/ice.png";
import baseball from "../imgs/baseball.png";

export class MainPage extends Component {
  ConponentWillMount() {}
  render() {
    return (
      <div className="mainpage">
        <div className="screen1">
          <Carousel showArrows={true} showThumbs={false} showStatus={false}>
            <div>
              <img src={Frame1} />
            </div>
            <div>
              <img src={Frame2} />
            </div>
          </Carousel>
        </div>
        {/* Quotation */}
        <div className="quotation">
          <div className="bgquotation">
            <img src={bkquotation} alt />
          </div>
          <div className="quoteback" />
          <div className="text">
            <h1>“</h1>
            <h2>
              Wining isn't everything it's the <span>only</span> thing
            </h2>
          </div>
        </div>

        {/* HowItWorks */}
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

        {/* EVENTS */}
        <div className="events">
          <div className="events-head">
            <h2>EVENTS</h2>{" "}
            <span>
              <Link to="#"> Select Sport</Link>
            </span>
          </div>
          <p className="event-p">
            Look for the coming eventsto choose the best for you
          </p>

          <div className="slider1">
            <div className="card">
              <img src={event1} alt="" />
              <div className="card-contents">
                <h6>NAME OF THE EVENT</h6>
                <p> Organize by Sport Club</p>
                <div className="card-info">
                  <ul>
                    <li>13-Jan-2019</li>
                    <li>17:00-19:00</li>
                    <li>SP Stadium</li>
                  </ul>
                  <ul>
                    <li>Age 18-21</li>
                    <li>15%</li>
                  </ul>
                </div>
                <div className="card-details">
                  {" "}
                  <Link to="#">Details</Link>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="card">
              <img src={event2} alt="" />
              <div className="card-contents">
                <h6>NAME OF THE EVENT</h6>
                <p> Organize by Sport Club</p>
                <div className="card-info">
                  <ul>
                    <li>13-Jan-2019</li>
                    <li>17:00-19:00</li>
                    <li>SP Stadium</li>
                  </ul>
                  <ul>
                    <li>Age 18-21</li>
                    <li>15%</li>
                  </ul>
                </div>
                <div className="card-details">
                  {" "}
                  <Link to="#">Details</Link>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="card">
              <img src={event3} alt="" />
              <div className="card-contents">
                <h6>NAME OF THE EVENT</h6>
                <p> Organize by Sport Club</p>
                <div className="card-info">
                  <ul>
                    <li>13-Jan-2019</li>
                    <li>17:00-19:00</li>
                    <li>SP Stadium</li>
                  </ul>
                  <ul>
                    <li>Age 18-21</li>
                    <li>15%</li>
                  </ul>
                </div>
                <div className="card-details">
                  {" "}
                  <Link to="#">Details</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="view">
            <Link className="viewall" to="#">
              View All
            </Link>
          </div>
        </div>

        {/* Best Offer */}
        <div className="bestoffers">
          <h3>BEST OFFERS</h3>
          <div className="slider2">
            <div className="offerimg">
              <img src={ice} alt="" />
            </div>
            <div className="offerimg">
              <img src={baseball} alt="" />
            </div>
          </div>

          <Link className="linktoview" to="#">
            <div className="view">
              <h6>View All</h6>
              <div className="viewall" />
            </div>
          </Link>
        </div>
        {/* FTS Play points */}
        <div className="ftspoints">
          <div className="ftpointsimg">
            <img src={ftsplaypoints} alt="" />
          </div>
          <Link className="linktoview" to="#">
            <div className="know">
              <h6>Know More</h6>
              <div className="knowmore" />
            </div>
          </Link>
        </div>

        {/* WHY PARTNER WITH US */}
        <div className="partnerwithus">
          <img className="handshake" src={handshake} alt="" />
          <div className="partnertext">
            <h3>WHY PARTNER WITH US ?</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
            </p>
            <img className="partnerbtn" src={partnerbtn} alt="" />
          </div>
          <img className="running" src={running} alt="" />
        </div>
      </div>
    );
  }
}

export default MainPage;
