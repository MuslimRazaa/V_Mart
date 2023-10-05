import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import cohibalighter from "../assets/images/cohibalighter.png";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
function ShippingCart() {
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

          <section className="shippingsection">
            <span className="buyleftspan">
              {" "}
              <img src={buyleftspan} />
            </span>
            <span className="buyrightspan">
              {" "}
              <img src={buyrightspan} />
            </span>
            <div className="row">
              <div className="col-lg-4">
                <h1 class="carttitle">
                  <i class="fa-solid fa-truck"></i>Your Shopping Cart
                </h1>

                <div class="categoriesitem frequent">
                  <div class="form-group">
                    <input type="checkbox" id="html101" />
                    <label for="html101"></label>
                  </div>
                  <div class="catecon">
                    <p>Worldwide Shipping</p>
                  </div>
                </div>
                <div class="categoriesitem frequent">
                  <div class="form-group">
                    <input type="checkbox" id="html1011" />
                    <label for="html1011"></label>
                  </div>
                  <div class="catecon">
                    <p>Nationwide Shipping</p>
                  </div>
                </div>

                <div className="shipaddress">
                  <label>Shipping Address</label>
                  <textarea> </textarea>
                </div>

                <div className="togglebtn">
                  <input type="checkbox" id="switch" />
                  <label for="switch">
                    Toggle <textarea id="add"> </textarea>
                  </label>
                  <p>Add other Shipping Address</p>
                </div>

                <div class="subtotalbtn shipbtn">
                  <Link to="/PaymentMethod">Next</Link>
                  <Link to="/signup">
                    <i class="fa-solid fa-chevron-left"></i> Edit your details
                  </Link>
                </div>
              </div>
              <div className="col-lg-2"> </div>

              <div className="col-lg-6">
                <h1 class="carttitle">Order Summary</h1>

                <div className="cartdiscription">
                  <i class="fa-solid fa-circle-xmark"></i>
                  <img src={cohibalighter} />
                  <div className="prodetailcart">
                    <h4>Cohiba Lighter</h4>
                    <p>$26.00</p>
                    <div class="addtocart">
                      <Link to="/checkout" style={{ marginRight: "30px" }}>
                        Update
                      </Link>
                      <input type="number" min={1}/>
                    </div>
                  </div>
                </div>
                <div className="subtotal">
                  <h6>Sub Total:</h6>
                  <p>$26.00</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ShippingCart;
