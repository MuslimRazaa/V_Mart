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

function HowOrder() {
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
              <h1 class="carttitle">How To Order</h1>

              <p className="paratitle " style={{ margin: "30px 0" }}>
                <img src={arrowul} style={{ marginRight: "5px" }} alt="" />
                Log in or create your Tobacco Vapes Mart account.
              </p>

              <p className="paratitle " style={{ margin: "30px 0" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />
                Add your items to the cart.
              </p>

              <p className="paratitle " style={{ margin: "30px 0" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />
                Enter your delivery details, if your address is within our
                delivery radius Same Day Delivery will appear as a shipping
                option.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                Delivery Areas
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                Same day delivery is currently offered in the following areas.
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />
                Sydney
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />{" "}
                Melbourne
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />{" "}
                Hobart
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />{" "}
                Brisbane
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} /> Gold
                Coast
              </p>
              <p className="paratitle " style={{ marginBottom: "0px" }}>
                <img src={arrowul} alt="" style={{ marginRight: "5px" }} />{" "}
                Perth
              </p>

              <p className="paratitle" style={{ margin: "30px 0" }}>
                for a full list of suburbs we deliver to click here.
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default HowOrder;
