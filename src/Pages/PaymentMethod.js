import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import cohibalighter from "../assets/images/cohibalighter.png";
import paypal from "../assets/images/paypal.svg";
function PaymentMethod() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <div className="container-1640">
          <div className="toplinecon shiphum">
            <div className="hamicons">
              <ul>
                <li>
                  <Link>Home</Link>
                  <i class="fa-solid fa-chevron-right ms-3"></i>
                </li>

                <li>
                  <Link>Lighters</Link>
                  <i class="fa-solid fa-chevron-right ms-3"></i>
                </li>

                <li>
                  <Link>Product Name</Link>
                  <i class="fa-solid fa-chevron-right ms-3"></i>
                </li>
                <li>
                  <Link>Shopping Cart</Link>
                </li>
              </ul>
            </div>
          </div>

          <section className="shippingsection pay">
            <span className="buyleftspan">
              <img src={buyleftspan} />
            </span>
            <span className="buyrightspan">
              <img src={buyrightspan} />
            </span>
            <div className="row">
              <div className="col-lg-8">
                <h1 class="carttitle">
                  <i class="fa-solid fa-wallet"></i>Select Payment Method
                </h1>

                <div class="currency">
                  <Link to="">
                    <i class="fa-solid fa-credit-card"></i>
                    CREDIT CARD
                  </Link>
                  <Link to="">
                    <img src={paypal} />
                  </Link>
                </div>
                <div className="meancarddv">
                  <div className="carddetail ">
                    <label>Name on card*</label>
                    <input type="text" />
                    <label>Card Number*</label>
                    <input type="text" placeholder="**********" />
                    <div className="cardinerinput ">
                      <div className=" ">
                        <label>Expiry*</label>
                        <input type="text" placeholder="MM/YY" />
                      </div>
                      <div className=" ">
                        <label>CVV*</label>
                        <input type="text" placeholder="***" />
                      </div>
                    </div>
                  </div>
                  <div className="billingaddress">
                    <div>
                      <label>Billing Address*</label>

                      <div class="categoriesitem ">
                        <div class="form-group">
                          <input type="checkbox" id="html101" />
                          <label for="html101"></label>
                        </div>
                        <div class="catecon">
                          <p>Same as Shipping Address</p>
                        </div>
                      </div>
                    </div>
                    <textarea cols="30" rows="10">
                      {" "}
                    </textarea>
                  </div>
                </div>

                <div class="subtotalbtn shipbtn">
                  <Link to="/OrderComplete">Complete Order</Link>
                  <Link to="/shipping-cart">
                    <i class="fa-solid fa-chevron-left"></i> Back to shipping
                    details
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default PaymentMethod;
