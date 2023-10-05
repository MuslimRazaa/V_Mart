import React from "react";
import footerlogo from "../../assets/images/footerlogo.png";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import tiktok from "../../assets/images/tiktok.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
   
      <footer className="footer-mean">
        <div className="container-1640">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="footer-contact px-4">
                <span className="foot-bg"></span>
                <h4>Get in touch</h4>
                <div class="ul-fo">
                  <ul>
                    <li class="footer-flex">
                      <span>
                        <i class="fa-solid fa-envelope fa-shake"></i>
                      </span>

                      <a href="mailto:info@loremipsum.com.au">
                        info@loremipsum.com.au
                      </a>
                      <a></a>
                    </li>

                    <li>
                      <span>
                        <i class="fa-solid fa-phone fa-bounce"></i>
                      </span>
                      <a href="tel:1234 567 890" target="_blank">
                        1234 567 890
                      </a>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-location-dot fa-bounce"></i>
                      </span>

                      <a
                        href="https://goo.gl/maps/dLubk24PmPaWmQjU9"
                        target="_blank" rel="noreferrer"
                      >
                        Lorem Ipsum dolor sit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-log">
                <span>
                  
                  <img src={footerlogo} alt=""  />
                </span>
              </div>
            </div>
            <div className="col-lg-4 m-auto">
              <div className="footer-social">
              <span className="foot-bg"></span>
                <h4 className="mb-4">Quick Links</h4>
                <ul>
                  <li class="">
                    <Link to="/shop"> Shop</Link>
                  </li>
                  <li class="">
                    <Link to="/sales">Sale</Link>
                  </li>
                  <li class="">
                    <Link to="/Promotions">This Week's Promotion</Link>
                  </li>
                  <li class="">
                    <Link to="">Order Status</Link>
                  </li>
                  <li class="">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li class="">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                <h4 className="mb-4 mt-4">Follow us</h4>
                <ul className="socialicons">
                    <li><Link> <img src={facebook} alt="" /></Link></li>
                    <li><Link> <img src={insta} alt=""  /></Link></li>
                    <li><Link> <img src={tiktok} alt=""  /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="warning copyright" style={{justifyContent:"center"}}><p>© 2023 TobaccoVapesMart. | All Rights Reserved</p></div>
      </footer>
  
  );
}

export default Footer;
