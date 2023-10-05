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

function About() {
  return (
    <div className="font-bebas">
      <Warning />
      <div className="overlayabout">
        <div className="about-hover">
          <Header />
        </div>
        <section className="bannersec aboutus">
          <div class="bg-video-wrap">
            <video src={bannersmoke} loop muted autoPlay></video>
            <div class="overlay"></div>
            <div className="row">
              <div className="col-lg-6 m-auto">
                <h1>
                  About Us
                  <span>
                    <img alt="" src={flower} />
                  </span>
                </h1>

                <p>
                  A specialty outlet aims to provide <br />
                  a premium, next-generation experience
                  <br />
                  at Chatswood place.
                </p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>
        <section className="miss-goal">
          <span class="seccoverline"></span>
          <span className="buyleftspan">
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            <img src={buyrightspan} />
          </span>
          <div className="container-1640">
            <div className="mission">
              <img src={headerlogo} />
              <h2>
                Mission
                <span>
                  <img src={mission} />
                </span>
              </h2>
              <p>
                A specialty outlet aims to provide a premium, next - generation
                experience at Chatswood place. <br />
                This acquisition will be employed by industry experience and the
                transfer of knowledge with a concept store
                <br /> inside a specialty focused shopping precint. This model
                is based off international markets that have developed
                <br /> ( Australia ) along with concept stores that are endorsed
                and developed by industry leaders. This will be a<br /> launch
                pad for Vape Partners and also see the continuation of concept
                stores being rolled out across the state.
              </p>
            </div>
            <div className="row">
              <div className="mission">
                <h2>
                  GOALS
                  <span>
                    <img src={mission} />
                  </span>
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="mission">
                  <h2 style={{ color: "#7998EA" }}>Specific</h2>
                  <p>
                    Category focused approach, will differentiate from the over
                    <br />
                    saturated market on the Victoria Avenue precint. This
                    approach
                    <br />
                    via unique offerings from premium aspiration product range,
                    <br />
                    consumer focused (needs analysis), retail education programs
                    <br />
                    and local area marketing.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission">
                  <h2 style={{ color: "#7998EA" }}>Measurable</h2>
                  <p>
                    Through enhanched offers on premium <br /> cigar range and
                    in-store education for <br />
                    next generation products (Vaporized <br />
                    product range).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Partner />

        <Footer />
      </div>
    </div>
  );
}

export default About;
