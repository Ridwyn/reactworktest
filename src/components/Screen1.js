import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Frame1 from "../imgs/Frame1.png";
import Frame2 from "../imgs/Frame2.png";

export class Screen1 extends Component {
  render() {
    return (
      <div>
        <Carousel showArrows={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={Frame1} />
          </div>
          <div>
            <img src={Frame2} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Screen1;
