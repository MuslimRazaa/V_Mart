import React, { useEffect, useRef, useState } from "react";
import Warning from "../Components/Warning";
import Banner from "../Components/Banner";
import Header from "../Components/Header/Header";
import brandhover from "../assets/images/brandhover.png";

import shoptria from "../assets/images/shoptria.png";
import shoptria2 from "../assets/images/shoptria2.png";
import line from "../assets/images/pathline.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

import brandvideo from "../assets/video/brandvideo.mp4";
// import bannerpro from "../assets/images/bannerpro.png";
// import smoke1 from "../assets/images/smoke1.png";
import smokepromotionspan from "../assets/images/smoke-promotion-span.png";

// import span1 from "../assets/images/span1.png";
// import span2 from "../assets/images/span2.png";
import brand1 from "../assets/images/brand1.svg";
import brand2 from "../assets/images/brand2.svg";
import brand3 from "../assets/images/brand3.svg";
import brand4 from "../assets/images/brand4.svg";
import brand5 from "../assets/images/brand5.svg";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import smokeExquisite from "../assets/images/smokeExquisite.png";

import Footer from "../Components/Footer/Footer";

function Brand() {
  return (
    <div className="av font-bebas">
      <Warning />
      <div className="brand-hover">
        <Header />
      </div>

      <section className="bannersec brandnamepages">
        <section className="secshop">
          <span className="buyleftspan">
            {" "}
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            {" "}
            <img src={buyrightspan} />
          </span>
          {/* <span className="EXQUISITE-span1">
          <img src={span1} />
        </span>
        <span className="EXQUISITE-span2">
          <img src={span2} />
        </span> */}

          <div className="container-1640">
            <div className="toplinecon">
              <div className="hamicons">
                <ul>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>
                      {" "}
                      <i class="fa-solid fa-chevron-right"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link>Shop</Link>
                  </li>
                </ul>
              </div>
              <div className="pagin">
                <div className="bx">
                  <img src={shoptria} />
                  <img src={line} />
                  <img src={shoptria2} />
                </div>
                <div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>12</option>
                    <option value="1">13</option>
                    <option value="2">14</option>
                    <option value="3">15</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-video-wrap">
          <video src={brandvideo} loop muted autoPlay></video>
          <div class="overlay"></div>
          <div className="row">
            <h1 class="title-mean">
              {" "}
              <span>All </span> Brands
              <img src={smokeExquisite} />
            </h1>
            <div className="col-lg-12">
              <div className="brandname">
                <div className="brandiamges">
                  <Link to="/shop">
                    {" "}
                    <img src={brand1} /> <img src={smokepromotionspan} />{" "}
                  </Link>
                  <Link to="/shop">
                    {" "}
                    <img src={brand2} />
                    <img src={smokepromotionspan} />
                  </Link>
                  <Link to="/shop">
                    <img src={brand3} />
                    <img src={smokepromotionspan} />
                  </Link>
                </div>
                <div className="brandiamges">
                  <Link to="/shop">
                    {" "}
                    <img src={brand4} />
                    <img src={smokepromotionspan} />
                  </Link>
                  <Link to="/shop">
                    <img src={brand5} />
                    <img src={smokepromotionspan} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Brand;
