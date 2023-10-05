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

function PrivacyCookies() {
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
              <h1 class="carttitle">Privacy, Security and Cookie Policy</h1>
              <p className="paratitle">
                This sets out how Tobacco Vapes Mart uses and protects any
                information that you give us while using this website. Tobacco
                Vapes Mart is committed to ensuring that your privacy is
                protected. Should we ask you to provide certain information by
                which you can be identified when using this website, then you
                can be assured that it will only be used in accordance with this
                privacy statement.
              </p>
              <p className="paratitle bold" style={{ marginBottom: "0" }}>
                What we collect
              </p>
              <p className="paratitle">
                We may collect the following information
              </p>

              <p className="paratitle mb-0">
                <img src={arrowul} /> Name
              </p>
              <p className="paratitle mb-0">
                <img src={arrowul} /> Contact information including email
                address
              </p>
              <p className="paratitle mb-0">
                <img src={arrowul} /> Demographic information such as postcode,
                preferences and interests
              </p>
              <p className="paratitle mb-0">
                <img src={arrowul} /> Other information relevant to customer
                surveys and/or offers
              </p>

              <p className="paratitle" style={{ margin: "20px 0" }}>
                For the exhaustive list of cookies we collect see the List of
                cookies we collect section.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0" }}>
                What we do with the information we gather
              </p>
              <p className="paratitle">
                We require this information to understand your needs and provide
                you with a better service, and in particular for the following
                reasons
              </p>

              <p className="paratitle" style={{ marginBottom: "0" }}>
                <img src={arrowul} /> Internal record keeping.
              </p>
              <p className="paratitle" style={{ marginBottom: "0" }}>
                <img src={arrowul} /> We may use the information to improve our
                products and services.
              </p>
              <p className="paratitle" style={{ marginBottom: "0" }}>
                <img src={arrowul} /> We may periodically send promotional
                emails about new products, special offers or other information
                which we think you may find interesting using the email address
                which you have provided.
              </p>
              <p className="paratitle" style={{ marginBottom: "0" }}>
                <img src={arrowul} /> From time to time, we may also use your
                information to contact you for market research purposes. We may
                contact you by email, phone, fax or mail. We may use the
                information to customise the website according to your
                interests.
              </p>

              <p
                className="paratitle bold"
                style={{ marginBottom: "0", marginTop: "20px" }}
              >
                Security
              </p>
              <p className="paratitle">
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorised access or disclosure, we have put
                in place suitable physical, electronic and managerial procedures
                to safeguard and secure the information we collect online.
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default PrivacyCookies;
