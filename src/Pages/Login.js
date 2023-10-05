import React, { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link, useNavigate } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import flower from "../assets/images/flowercontact.png";
//import axios from "axios";
//import { useState } from "react";
//import { baseUrl } from "../assets/utils/IP";

function Login() {
  const Swal = require("sweetalert2");

  const navigate = useNavigate();
  //const [singinloader, setsinginloader] = useState(false)
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  useEffect(() => {
    const token = localStorage.getItem("root");

    if (token) {
      const values = JSON.parse(localStorage.getItem("current"));

      console.log(values);

      if (values.value2) {
        navigate("/DashboardAdmin");
      } else {
        navigate("/UserDashboard");
      }
    }
  }, [navigate]);

  let handleSubmit = async (e) => {
    e.preventDefault();

// JUST FOR FRONTEND PURPOSE. REMOVE THIS WHEN DOING INTEGRATION
navigate("/UserDashboard");




    //setsinginloader(true)

    // try {
    //   const email = user.email;
    //   const password = user.password;

    //   if (!email || !password) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Kindly fill all the fields",
    //     });
    //     return; // Stop execution if fields are missing
    //   }

    //   const res = await axios.post(`${baseUrl}/login`, {
    //     email,
    //     password,
    //   });

    //   console.log(res);

    //   if (res && res.status === 200) {
    //     const accessToken = res.data.token;

    //     localStorage.setItem("root", accessToken);

    //     const token = accessToken.split(".");

    //     const details = atob(token[1]);

    //     const isAdmin = JSON.parse(details);

    //     localStorage.setItem(
    //       "current",
    //       JSON.stringify({
    //         value: isAdmin.userId,
    //         value2: isAdmin.isAdmin,
    //       })
    //     );

    //     console.log(isAdmin);

    //     Swal.fire({
    //       icon: "success",
    //       title: "Login Successful",
    //     });

    //     if (isAdmin.isAdmin) {
    //       navigate("/DashboardAdmin");
    //     } else {
    //       navigate("/UserDashboard");
    //     }
    //   }
    // } catch (err) {
    //   if (err.response && err.response.status === 401) {
    //     console.log("Error!")
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Invalid credentials",
    //     });
    //   } else {

    //     setTimeout(() => {
    //       //setsinginloader(false)
    //       Swal.fire({
    //         icon: "warning",
    //         title: "Server Error!",
    //         text: "We are facing some issue connecting to server. Please try again",
    //       });
    //     }, 3000);



    //   }
    // }
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
                      //required
                      name="email"
                      placeholder="Email Address"
                      //value={user.email}
                      // onChange={(e) => {
                      //   setUser({
                      //     ...user,
                      //     email: e.target.value.toLowerCase(),
                      //   });
                      // }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="password"
                      className="border mb-2 poppins"
                      //required
                      placeholder="Password"
                      //value={user.password}
                      // onChange={(e) => {
                      //   setUser({ ...user, password: e.target.value });
                      // }}
                    />
                    <Link
                      to="/forgot-password"
                      className="text-white poppins text-decoration-none"
                    >
                      Password forgotten?
                    </Link>

                    <div className="cont">
                      <div class="signinbtn d-flex flex-wrap justify-content-center">
                        <button className="text-uppercase mx-4 border-0 w-auto" type="submit">

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

export default Login;
