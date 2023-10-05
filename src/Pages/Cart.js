import React from "react";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import cohibalighter from "../assets/images/cohibalighter.png";
function cart() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
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
                  <Link>Lighters</Link>
                </li>
                <li>
                  <Link>
                    {" "}
                    <i class="fa-solid fa-chevron-right"></i>{" "}
                  </Link>
                </li>
                <li>
                  <Link>Product Name</Link>
                </li>
                <li>
                  <Link>
                    {" "}
                    <i class="fa-solid fa-chevron-right"></i>{" "}
                  </Link>
                </li>
                <li>
                  <Link>Shopping Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="cartsection1">
          <span className="buyleftspan">
            {" "}
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            {" "}
            <img src={buyrightspan} />
          </span>
          <div className="container-1640">
            <h1 className="carttitle">
              <i class="fa-solid fa-cart-shopping"></i>Your Shopping Cart
            </h1>
            <div className="cartdiscription">
              <i class="fa-solid fa-circle-xmark"></i>
              <img src={cohibalighter} />
              <div className="prodetailcart">
                <h4>Cohiba Lighter</h4>
                <p>$26.00</p>
                <div class="addtocart">
                  <input type="number" />

                  <Link to="/checkout">Update</Link>
                </div>
              </div>
            </div>
            <div className="subtotal">
              <h6>Sub Total:</h6>
              <p>$26.00</p>
              <div className="subtotalbtn mt-4">
                <Link to="/checkout">
                  <i class="fa-solid fa-cart-shopping"></i> Checkout
                </Link>
                <Link to="/Shop">
                  <i class="fa-solid fa-chevron-left"></i> Continue Shopping
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

export default cart;
