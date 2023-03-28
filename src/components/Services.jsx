import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "../assets/3.jpg";
// import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          {/* <img src={img1} alt="Item1" /> */}
          <img src={"https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg"} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          {/* <img src={img2} alt="Item3" /> */}
          <img src={"https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_960_720.jpg"} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
