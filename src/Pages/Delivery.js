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

function Delivery() {
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
              <h1 class="carttitle">Same Day Delivery</h1>

              <p className="paratitle bold" style={{ marginBottom: "10px" }}>
                Want your order straight away?
              </p>
              <p className="paratitle">
                With Tobacco Vapes Mart Same Day Delivery you can now get your
                order delivered to your door that very day. Place your order
                before 1pm and we guarantee your order will arrive by 7pm that
                evening
              </p>

              <p className="paratitle bold" style={{ marginBottom: "10px" }}>
                Passed 1pm but still want to order?
              </p>
              <p className="paratitle">
                Place your order and we will dispatch it the next day
                <br />
                <br />
                If your postcode and items are eligible, this delivery option
                will be made available at checkout. <br />
                <br />
                Some exclusions apply, please see full list below.
              </p>

              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} />
                Sydney
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Melbourne
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Gold Coas
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Brisbane
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Hobart & Perth
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Delivery;
