import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import header from "../assets/images/headerlogo.png";
import cohibalighter from "../assets/images/cohibalighter.png";
import thnnkssmoke from "../assets/images/thnnkssmoke.svg";

function OrderComplete() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <div className="container-1640 pt-5">
          <div className="thanksmoke">
            <span className="buyleftspan">
              <img src={thnnkssmoke} />
            </span>
            <span className="buyrightspan">
              <img src={thnnkssmoke} />
            </span>
          </div>
          <section className="completeordersec border-top">
            <div className="thankyou">
              <img src={header} alt="" />
              <h1 class="carttitle mt-3">Thank you for your purchase!</h1>
              <p>Please find your order confirmation below</p>

              <h1 class="carttitle" style={{ marginTop: "100px" }}>
                Hello, Gary Kouyoumjian
              </h1>
              <p>
                Ordering with Tobacco Vapes Mart leaves you safe in the
                knowledge,
                <br />
                that not only are you dealing with the best cigar merchant in
                Australia, but that you
                <br />
                are dealing with a company that prides itself on ensuring each
                and every
                <br />
                customer receives the best customer service.
              </p>

              <div className="row">
                <h1
                  class="carttitle"
                  style={{ marginBottom: "0px", marginTop: "50px" }}
                >
                  Order #794
                </h1>
                <p className="mb-5">Placed on Saturday 08 July, 2023</p>
                <div className="col-lg-6">
                  <div>
                    <h1 class="carttitle">Billing Information</h1>
                    <p>
                      Gary Kouyoumjian <br /> Unit 609 178 Geoge Street <br />
                      Parramatta <br /> Sydney, 2150 <br /> New South Wales,
                      Australia <br />
                    </p>
                    <h1 class="carttitle" style={{ marginTop: "50px" }}>
                      Payment Method
                    </h1>
                    <p>Credit Card or Bank Card</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div>
                    <h1 class="carttitle">Shipping Information</h1>
                    <p>
                      Gary Kouyoumjian <br /> Unit 609 178 Geoge Street <br />
                      Parramatta <br /> Sydney, 2150 <br /> New South Wales,
                      Australia <br />
                      0404884338
                    </p>
                    <h1 class="carttitle">Shipping Method</h1>
                    <p>
                      Worldwide Shipping ( Standard Post - <br />
                      estimated delivery and dispatch 7 - 10 <br />
                      working days )
                    </p>
                  </div>
                </div>
              </div>
              <div className="passnum">
                <h1 class="carttitle">
                  Passport Number or Identity Number 15293824
                </h1>
              </div>
            </div>
            <div className="cartdiscription">
              <img src={cohibalighter} alt="" />
              <div className="prodetailcart">
                <h4>Cohiba Lighter</h4>
                <p>$26.00</p>
                <div class="addtocart poppins text-white py-2 px-4 border w-25">
                  1
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-lg-6">
                <div class="subtotal my-1">
                  <h6>Sub Total:</h6>
                  <p>$26.00</p>
                </div>
                <div class="subtotal pb-3 mb-3 border-bottom">
                  <h6>Shipping:</h6>
                  <p>$0.00</p>
                </div>
                <div class="subtotal">
                  <p className="fs-1">Total</p>
                  <p className="fs-1 text-color-blue">$26.00</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="note">
                  <h1 class="carttitle">Please note:</h1>
                  <p>
                    our daily cut off time for all orders requested for next day
                    delivery is 2PM. Any order received after the cut off time
                    off 2PM on Friday will not be dispatched until the following
                    Monday, which is the next available Postal and Courier
                    Service day.
                  </p>
                </div>
              </div>
            </div>
            <div className="wishes">
              <h1 class="carttitle">Warmest wishes</h1>
              <p>
                The Sales Team at <br />
                Tobacco Vapes Mart
              </p>
              <p style={{ margin: "0" }}>
                <Link to="/">https://www.tobaccovapesmart.com</Link>
              </p>
            </div>
          </section>
        </div>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default OrderComplete;
