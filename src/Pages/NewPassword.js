import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link, useLocation, useNavigate } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import flower from "../assets/images/flowercontact.png";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { baseUrl } from "../assets/utils/IP";
import { useEffect } from "react";
import axios from "axios";

function NewPassword() {
  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validatePassword = () => {
    let regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$+!%*?&])[A-Za-z\\d@$+!%*?&]{8,}$"
    );

    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Empty Fields",
        text: "Kindly fill all the fields",
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Unmatched Passwords",
        text: "Password & Confirm Password are not matching",
      });
    } else if (!validatePassword()) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain 8 characters with the combination of letters, numbers and symbols.",
      });
    } else {
      console.log(location);
      try {
        const response = await axios.post(`${baseUrl}/new-password`, {
          email: location.state,
          newPassword: password,
        });
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Password Changed",
            text: "Your password has been changed",
          });
        }

        navigate("/login");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Your password has not been changed due to some error",
        });
      }
    }
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/forgot-password");
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
                <h1 class="login-title text-white text-center">
                  Reset Password
                </h1>
                <p className="text-center">Enter new password to continue</p>
                <img
                  src={flower}
                  alt="Flower"
                  className="position-absolute flower-login"
                />
                <div className="row">
                  <div className="col-lg-12">
                    <input
                      type="password"
                      autoComplete="off"
                      className="border poppins"
                      required
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="password"
                      autoComplete="off"
                      className="border poppins"
                      required
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div class="signinbtn d-flex flex-wrap justify-content-center">
                      <button
                        onClick={handleSubmit}
                        className="text-uppercase mx-4"
                      >
                        Reset Password
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

      <Modal className="accountcreated newpasswordset" show={show}>
        <Modal.Body className="py-4">
          <h2>
            <i class="fa-solid fa-check"></i> Password Reset Succesfully!
          </h2>
          <p>
            Your Password has been changed successfully. Click on Continue to go
            to login page
          </p>
          <div class="signinbtn ">
            <Link to="/Login">Continue</Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewPassword;
