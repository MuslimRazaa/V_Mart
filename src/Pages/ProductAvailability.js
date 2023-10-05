import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // Import GSAP library
import flower from "../assets/images/flower.png";
import bannersmoke from "../assets/video/bannersmoke.mp4";
import bannerpro from "../assets/images/bannerpro.png";

import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../Components/Banner";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import Partner from "../Components/Partner";
import headerlogo from "../assets/images/headerlogo.png";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import mission from "../assets/images/mission.png";
import seccoverline from "../assets/images/cover2.png";
import arrowul from "../assets/images/arrowul.png";

function ProductAvailability() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <section className="policiessection">
          <span className="buyleftspan">
            {" "}
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            {" "}
            <img src={buyrightspan} />
          </span>
          <div className="container-1640 pt-3">
            <div className="refundcontent border-top">
              <div className="imgrefund">
                {" "}
                <img src={headerlogo} />
              </div>
              <h1 class="carttitle">Product Availability</h1>

              <p className="paratitle">
                Not all items are available for Same Day Delivery.
                <br />
                If items in your cart are not offered the delivery option will
                not appear.
              </p>

              <p className="paratitle" style={{ marginBottom: "5px" }}>
                Current product ranges which are available for same day delivery
                include:
              </p>

              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Tobacco
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Papers & Filters
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Disposable Vape (excluding WA)
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default ProductAvailability;
