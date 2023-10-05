import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../Components/Banner";
import Exquisite from "../Components/Exquisite";
import FeatureProduct from "../Components/FeatureProduct";
import Partner from "../Components/Partner";
import Promotions from "../Components/Promotions";
import PopularProduct from "../Components/PopularProduct";
import Lighter from "../Components/Lighter";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import RestrictionModal from "../Components/RestrictionModal";




function Homepage() {
  const [showModal, setshowModal] = useState(true)
  
  const handleEnterButtonClick = () => {
    setshowModal(false)
  };


  return (
    <div className="font-bebas">
      {/* <Warning /> */}

      {showModal && <RestrictionModal onEnterButtonClick={handleEnterButtonClick} />}

      <Banner />
      <Header />

      <Exquisite />

      <FeatureProduct />

      <Partner />
      <Promotions />

      <PopularProduct />
      <Lighter />

      <Footer />
    </div>
  );
}

export default Homepage;
