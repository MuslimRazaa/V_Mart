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

function DeliveryTime() {
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
          <div className="container-1640 pt-3 ">
            <div className="refundcontent border-top">
              <div className="imgrefund">
                {" "}
                <img src={headerlogo} />
              </div>
              <h1 class="carttitle">Delivery Times</h1>
              <p className="paratitle">
                Orders placed by 1pm will be processed and dispatched that day.{" "}
                <br />
                Whilst we guarantee that your order will arrive no later then
                7pm it will often arrive much earlier than this.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "10px" }}>
                Authority To Leave
              </p>
              <p className="paratitle">
                Unfortunately, we cannot offer authority to leave on same day
                delivery items as all deliveries must be signed for. <br />
                In the cases of orders containing tobacco and vape, a valid ID
                must be presented.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "10px" }}>
                Please note:
              </p>
              <p className="paratitle">
                if our drivers are unable to deliver a package or a recipient
                cannot produce a valid ID (tobacco & vape orders only) your
                items will be returned to our closest store.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default DeliveryTime;
