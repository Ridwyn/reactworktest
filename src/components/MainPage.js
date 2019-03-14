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
import ftsplaypoints from "../imgs/ftsplaypoints.png";
import handshake from "../imgs/handshake.png";
import running from "../imgs/running.png";
import partnerbtn from "../imgs/partnerbtn.png";
import ice from "../imgs/ice.png";
import baseball from "../imgs/baseball.png";
import booknplay from "../imgs/booknplay.png";
import learnasport from "../imgs/learnasport.png";
import card1 from "../imgs/card1.png";
import card2 from "../imgs/card2.png";
import card3 from "../imgs/card3.png";
import eventselect from "../imgs/eventselect.png";
import eventview from "../imgs/eventview.png";
import bestview from "../imgs/bestview.png";
import ftsknowmore from "../imgs/ftsknowmore.png";

export class MainPage extends Component {
  ConponentWillMount() {}
  render() {
    // var settings = {
    //   container: ".my-slider",
    //   items: 3,
    //   slideBy: "page",
    //   autoplay: true
    // }

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
              Wining isn't everything, it's the <span>only</span> thing
            </h2>
          </div>
        </div>

        {/* HowItWorks */}
        <div className="howitworks">
          <div className="div1">
            <h3>HOW IT WORKS</h3>
            <img src={picture} alt="" />
          </div>
          <div className="bottom">
            <div className="link1">
              <p>Want to play a sport</p>
              <Link to="">
                {" "}
                <img src={booknplay} />
              </Link>
            </div>
            <div className="link2">
              <p>Looking for a sports trainer</p>
              <Link to="">
                {" "}
                <img src={learnasport} />
              </Link>
            </div>
          </div>
        </div>

        {/* EVENTS */}
        <div className="events">
          <div className="events-head">
            <h2>EVENTS</h2>{" "}
            <span>
              <Link to="#">
                {" "}
                <img src={eventselect} alt="" />
              </Link>
            </span>
          </div>
          <p className="event-p">
            Look for the coming eventsto choose the best for you
          </p>
            {/* USE CAROUSEL 2 HERE */}
            
          <div className="slider1">
            <div className="card">
              <img src={card1} alt="" />
            </div>

            {/* card2 */}
            <div className="card">
              <img src={card2} alt="" />
            </div>
            {/* card3 */}
            <div className="card">
              <img src={card3} alt="" />
            </div>
          </div>
        
          <div className="view">
            <Link className="viewall" to="#">
              <img src={eventview} alt="" />
            </Link>
          </div>
        </div>

        {/* Best Offer */}
        <div className="bestoffers">
          <div className="bestoffers-h3">
            {" "}
            <h3>BEST OFFERS</h3>
          </div>
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
              <div className="viewall">
                {" "}
                <img src={bestview} alt="" />
              </div>
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
              {" "}
              <img src={ftsknowmore} />
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
