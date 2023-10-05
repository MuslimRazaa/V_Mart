import React, { useState } from "react";
import flower from "../assets/images/flower.png";
import bannersmoke from "../assets/video/bannersmoke.mp4";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import tiktok from "../assets/images/tiktok.png";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import seccoverline from "../assets/images/cover2.png";
import flowercontact from "../assets/images/flowercontact.png";
import axios from "axios";
import { baseUrl } from "../assets/utils/IP";
function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/contact`, {
        name: contact.name,
        email: contact.email,
        message: contact.message,
      });

      console.log(response);

      if (response.status === 200) {
        setContact({
          ...contact,
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="font-bebas">
      <Warning />
      <div className="overlayabout">
        <div className="contact-hover">
          <Header />
        </div>
        <section className="bannersec aboutus contact">
          <div class="bg-video-wrap">
            <video src={bannersmoke} loop muted autoPlay></video>
            <div class="overlay"></div>
            <div className="row">
              <div className="col-lg-6 m-auto">
                <h1>
                  Contact Us
                  <span>
                    <img src={flower} alt="" />
                  </span>
                </h1>

                <p>
                  Do you have any query? <br />
                  Do let us know!
                </p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>

        <section class="sec-5">
          <span class="seccoverline">
            <img src={seccoverline} alt="" />
          </span>
          <span className="buyleftspan">
            <img src={buyleftspan} alt="" />
          </span>
          <span className="buyrightspan">
            <img src={buyrightspan} alt="" />
          </span>
          <div className="container-1640 z-10 position-relative">
            <div class="row">
              <span className="flowercontact">
                <img src={flowercontact} alt="" />
              </span>
              <div class="col-lg-7  m-auto cont-detail">
                <div class="secives-title">
                  <h1>Contact Us</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) => {
                      setContact({ ...contact, name: e.target.value });
                    }}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    inputMode="email"
                    required
                    value={contact.email}
                    onChange={(e) => {
                      setContact({ ...contact, email: e.target.value });
                    }}
                    placeholder="Email Address"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={contact.message}
                    onChange={(e) => {
                      setContact({ ...contact, message: e.target.value });
                    }}
                    placeholder="Message"
                  ></textarea>
                  <div class="btn-web">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div class="col-lg-5 info-bg" data-aos-offset="300">
                <div class="info">
                  <h2>GET IN TOUCH</h2>
                  <div class="flex-box-cust">
                    <span>
                      <i class="fa-solid fa-location-dot fa-bounce"></i>
                    </span>
                    <span>
                      <Link>Lorem ipsum dolor sit</Link>
                    </span>
                  </div>
                  <div class="flex-box-cust">
                    <span>
                      <i class="fa-solid fa-envelope fa-shake"></i>
                    </span>
                    <span>
                      <Link>info@loremipsum.com.au</Link>
                    </span>
                  </div>
                  <div class="flex-box-cust">
                    <span>
                      <i class="fa-solid fa-phone fa-bounce"></i>
                    </span>
                    <span>
                      <a href="tel:0428 576 756"> 123 456 7890</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="social-icons">
                <Link href="">
                  <img src={facebook} alt="" />
                </Link>
                <Link href="">
                  <img src={insta} alt="" />
                </Link>
                <Link href="">
                  <img src={tiktok} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
