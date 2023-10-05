import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link, useNavigate } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import flower from "../assets/images/flowercontact.png";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../assets/utils/IP";
import Swal from "sweetalert2";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Kindly fill all the fields",
      });
    }
    try {
      const response = await axios.post(`${baseUrl}/forgot-password`, {
        email,
      });

      if (response.status == 200) {
        Swal.fire({
          icon: "success",
          title: "OTP Sent",
          text: `E-Mail sent to ${email}, kindly check your email`,
        });

        navigate("/otp-verification", {
          state: email,
        });
      }
    } catch (err) {
      if (err?.response?.status == 404) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: `${email} does not exist in our database`,
        });
      }
    }
  };

  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <section className="loginsection position-relative">
        <span className="buyleftspan">
          <img src={buyleftspan} alt="" />
        </span>
        <span className="buyrightspan">
          <img src={buyrightspan} alt="" />
        </span>
        <div className="container-1640 z-10 position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form
                onSubmit={handleSubmit}
                className="form signupform loginform rounded-5 position-relative"
              >
                <h1 class="login-title text-white text-center">
                  Password Reset
                </h1>
                <p className="text-center">
                  Enter your email address and we will send you an OTP
                </p>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div class="signinbtn d-flex flex-wrap justify-content-center">
                      <input
                        className="border-0 bg-theme-gradient m-0 fs-4 text-uppercase mx-4"
                        type="submit"
                        value="Send"
                      />
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

export default ForgotPassword;
