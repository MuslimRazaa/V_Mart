import React, { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import { Link, useNavigate } from "react-router-dom";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../assets/utils/IP";

function Signup() {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    passportNumber: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsLetter: false,
  });

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let regex;

  const cleanedInput = (text) => {
    const cleanedInput = text.replace(/[^a-zA-Z\s]/g, "");

    return cleanedInput;
  };

  const handlePhone = (value) => {
    if (value.length < 16) {
      regex = new RegExp("^[0-9]*$");

      if (regex.test(value)) {
        setUser({ ...user, phone: value });
      }
    }
  };
  const handlePassport = (value) => {
    if (value.length < 15) {
      regex = new RegExp("^[a-zA-Z0-9]+$");

      if (regex.test(value)) {
        setUser({ ...user, passportNumber: value });
      }
    }
  };

  const handleCountry = (e) => {
    setState([]);
    setCities([]);
    const selectedCountry = e.target.value;

    setUser({ ...user, country: selectedCountry });

    console.log(countries);
    const filteredStates = data
      .filter((item) => item.country === selectedCountry)
      .map((item) => item.subcountry)
      .filter((subcountry, index, self) => self.indexOf(subcountry) === index)
      .sort();

    console.log(filteredStates);

    setState(filteredStates);
  };

  const handleState = (e) => {
    const selectedState = e.target.value;
    setUser({ ...user, state: selectedState });

    // Filter the cities based on the selected country and state
    const filteredCities = data.filter(
      (item) =>
        item.country === user.country && item.subcountry === selectedState
    );

    // Get unique cities by using a Set to eliminate duplicates
    const uniqueCities = Array.from(
      new Set(filteredCities.map((item) => item.name))
    );

    // Map the unique city names to objects containing the name property
    const uniqueCityObjects = uniqueCities.map((city) => ({ name: city }));

    console.log(uniqueCityObjects);

    // Update the 'cities' state with the unique city objects
    setCities(uniqueCityObjects);
  };

  const validatEmail = () => {
    regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    return regex.test(user.email);
  };

  const validatePassword = () => {
    regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$+!%*?&])[A-Za-z\\d@$+!%*?&]{8,}$"
    );

    return regex.test(user.password);
  };

  const validatePassport = () => {
    regex = new RegExp("^[a-zA-Z0-9]+$");

    return regex.test(user.passportNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.firstName ||
      !user.lastName ||
      !user.password ||
      !user.confirmPassword ||
      !user.email ||
      !user.streetAddress ||
      !user.phone ||
      !user.country ||
      !user.state ||
      !user.city ||
      !user.passportNumber
    ) {
      Swal.fire({
        icon: "error",
        title: "Empty Fields",
        text: "Kindly fill all the required fields",
      });
      return;
    } else if (user.password !== user.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password & Confirm Password are not matching",
      });
    } else if (!validatePassword()) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain 8 characters with the combination of letters, numbers and symbols.",
      });
    } else if (!validatEmail()) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain 8 characters with the combination of letters, numbers and symbols.",
      });
    } else if (!validatePassport()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Identifcation Number",
        text: "Identification number must be alphanumeric",
      });
    } else {
      try {
        const response = await axios.post(`${baseUrl}/register`, {
          firstname: user.firstName,
          lastname: user.lastName,
          email: user.email,
          password: user.password,
          contact: user.phone,
          country: user.country,
          city: user.city,
          state: user.state,
          streetaddress: user.streetAddress,
          passport: user.passportNumber,
        });

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You may proceed to the login screen",
          });
        }

        navigate("/login");
      } catch (err) {
        if (err?.response?.data.message == "Email already exist") {
          Swal.fire({
            icon: "error",
            title: "Registration Unsuccessful",
            text: "Email has already been registered",
          });
        } else if (
          err?.response?.data.message ==
          "Invalid Australian passport number format"
        ) {
          Swal.fire({
            icon: "error",
            title: "Invalid Passport Number",
            text: "Invalid format for australian passport number",
          });
        }
      }
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => {
        setData(res.data);
        const allCountries = res.data;
        let filteredCountries = [
          ...new Set(allCountries.map((item) => item.country)),
        ];

        filteredCountries = filteredCountries.sort();

        setCountries(filteredCountries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <section className="signupsection">
        <span className="buyleftspan">
          <img src={buyleftspan} alt="" />
        </span>
        <span className="buyrightspan">
          <img src={buyrightspan} alt="" />
        </span>
        <div className="heading mb-5">
          <h1 class="login-title text-white text-center">Register</h1>
        </div>
        <div className="container-1640 z-10 position-relative">
          <div className="row signrow border-top">
            <div className="col-lg-7">
              <h1 class="carttitle">Add your account information</h1>
              <form onSubmit={handleSubmit} className="form signupform">
                <div className="row">
                  <div className="col-lg-6">
                    <label>First Name*</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        const value = cleanedInput(e.target.value);

                        value.length <= 10
                          ? setUser({ ...user, firstName: value })
                          : setUser({ ...user });
                      }}
                      value={user.firstName}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        const value = cleanedInput(e.target.value);

                        value.length <= 10
                          ? setUser({ ...user, lastName: value })
                          : setUser({ ...user });
                      }}
                      value={user.lastName}
                      required
                    />
                  </div>

                  <div className="col-lg-6">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          email: e.target.value.toLowerCase(),
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Country*</label>
                    <select
                      className="poppins"
                      value={user.country}
                      onChange={handleCountry}
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      {countries?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-lg-6">
                    <label>Street Address*</label>
                    <textarea
                      value={user.streetAddress}
                      onChange={(e) => {
                        setUser({ ...user, streetAddress: e.target.value });
                      }}
                      name="streetaddress"
                    ></textarea>
                  </div>
                  <div className="col-lg-6">
                    <label>State*</label>
                    <select
                      className="poppins"
                      value={user.state}
                      onChange={handleState}
                    >
                      <option value="" disabled className="poppins">
                        State
                      </option>
                      {state?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>City*</label>
                    <select
                      value={user.city}
                      className="poppins"
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        City
                      </option>
                      {cities?.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <label>Contact Number*</label>
                    <input
                      type="text"
                      name="contactnumber"
                      className="poppins"
                      placeholder="1234-567-890"
                      value={user.phone}
                      onChange={(e) => {
                        handlePhone(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Passport Number / Identity Number*</label>
                    <input
                      type="text"
                      name="passportnumber"
                      value={user.passportNumber}
                      onChange={(e) => {
                        handlePassport(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <form className="form signupform">
                <h1 class="carttitle">Create Password</h1>
                <div className="row">
                  <div className="col-lg-12">
                    <label>Password*</label>
                    <input
                      type="password"
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      value={user.confirmPassword}
                      onChange={(e) => {
                        setUser({ ...user, confirmPassword: e.target.value });
                      }}
                      required
                    />
                    <p>
                      Password must contain 8 characters with the combination of
                      letters, numbers and symbols.
                    </p>
                    <p className="checknewslatter">
                      <input
                        type="checkbox"
                        id="html10"
                        onClick={(e) => {
                          setUser({ ...user, newsLetter: e.target.checked });
                        }}
                      />
                      Send newsletters and promotional emails.
                    </p>

                    <div className="cont">
                      <p>
                        By creating an account you agree to our
                        <span>
                          <Link>Terms & Conditions</Link>
                        </span>
                        and our
                        <span>
                          <Link>Privacy Policy.</Link>
                        </span>
                      </p>
                      <div class="signinbtn ">
                        {/* <Link onClick={handleSubmit}>Continue</Link> */}
                        <Link to="/shipping-cart">Continue</Link>
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

      <Modal className="accountcreated" show={show} onHide={handleClose}>
        <Modal.Header>
          <Button onClick={handleClose}>
            <i class="fa-solid fa-circle-xmark"></i>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <h2>
            <i class="fa-solid fa-check"></i> Your Account has been created !
          </h2>
          <p>
            An email sent to your registered Email Address with your login
            credentials
          </p>
          <div class="signinbtn ">
            <Link to="/Login">Continue</Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Signup;
