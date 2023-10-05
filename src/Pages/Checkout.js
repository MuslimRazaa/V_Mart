import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import buyrightspan from "../assets/images/buyrightspan.png";
import buyleftspan from "../assets/images/buyleftspan.png";
function Checkout() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <div className="container-1640">
          <div className="toplinecon">
            <div className="hamicons">
              <ul style={{ opacity: "0" }}>
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

        <section className="checksection">
          <span className="buyleftspan">
            {" "}
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            {" "}
            <img src={buyrightspan} />
          </span>
          <div className="container-1640">
            <h1 class="carttitle">Welcome, how would you like to continue?</h1>
            <div className="row checkoutrow">
              <div className="col-lg-5 dp">
                <div>
                  <h1 class="carttitle">Create an account</h1>
                  <ul>
                    <li>
                      <i class="fa-solid fa-check"></i>Keep track of previous
                      orders.
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>Keep a Wish list.
                    </li>
                    <li>
                      <i class="fa-solid fa-check"></i>Write product reviews.
                    </li>
                  </ul>
                </div>
                <div className="signinbtn ">
                  <Link to="/signup">Continue</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <h1 class="carttitle">Returning Customer</h1>
                <label>Please log in below</label>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <Link>Password forgotten?</Link>
                <div className="signinbtn ">
                  <Link to="/cart">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
