import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import flower from "../assets/images/flowercontact.png";
import { useState } from "react";
function AdminLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let handleSubmit = () => {
    console.log("handle Clicked");
  };
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <section className="loginsection position-relative">
        <span className="buyleftspan">
          {" "}
          <img src={buyleftspan} alt="" />
        </span>
        <span className="buyrightspan">
          {" "}
          <img src={buyrightspan} alt="" />
        </span>
        <div className="container-1640 z-10 position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form
                className="form signupform loginform rounded-5 position-relative"
                onSubmit={handleSubmit}
              >
                <h1 class="login-title text-white text-center">Welcome</h1>
                <p className="text-center">Please login below</p>
                <img
                  src={flower}
                  alt="Flower"
                  className="position-absolute flower-login"
                />
                <div className="row">
                  <div className="col-lg-12">
                    <input
                      type="email"
                      className="border poppins"
                      required
                      name="email"
                      placeholder="Email Address"
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="password"
                      className="border mb-2 poppins"
                      required
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                    <Link
                      to="/forgot-password"
                      className="text-white poppins text-decoration-none"
                    >
                      Password forgotten?
                    </Link>

                    <div className="cont">
                      <div class="signinbtn d-flex flex-wrap justify-content-center">
                        <button className="text-uppercase mx-4" type="submit">
                          {" "}
                          Sign In
                        </button>

                        <Link to="/signup" className="text-uppercase mx-4">
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AdminLogin;
