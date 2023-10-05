import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link, useLocation, useNavigate } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import flower from "../assets/images/flowercontact.png";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../assets/utils/IP";

function OTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState();

  const handleOTP = (value) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 4) {
      setOtp(numericValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp < 4) {
      Swal.fire({
        icon: "error",
        title: "OTP should be 4 a digit number",
        text: "Kindly enter valid otp",
      });
    } else {
      try {
        const response = await axios.post(`${baseUrl}/otp-verify`, {
          otp: otp,
          email: location?.state,
        });

        console.log(response);

        if (response.status == 200) {
          setOtp(null);
          Swal.fire({
            icon: "success",
            title: "OTP Verified",
            text: "",
          });
          navigate("/new-password", {
            state: location.state,
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Kindly enter valid OTP",
        });
      }
    }
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/forgot-password");
    } else {
      console.log(location.state);
    }
  }, []);

  return (
    <div>
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
                <h1 class="login-title text-white text-center">Enter OTP</h1>
                <p className="text-center">
                  Please enter the 4 Digit OTP we have sent to your email
                  address
                </p>
                <img
                  src={flower}
                  alt="Flower"
                  className="position-absolute flower-login"
                />
                <div className="row">
                  <div className="col-lg-6 m-auto enterotp">
                    <input
                      type="text"
                      autoComplete="off"
                      className="border poppins"
                      required
                      name="otp"
                      placeholder="Enter 4 Digit OTP"
                      value={otp}
                      onChange={(e) => {
                        handleOTP(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div class="signinbtn d-flex flex-wrap justify-content-center">
                      <button type="submit" className="text-uppercase mx-4">
                        Verify
                      </button>
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

export default OTP;
