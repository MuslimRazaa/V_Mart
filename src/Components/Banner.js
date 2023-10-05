import React, { useEffect, useState } from "react";
import bannersmoke from "../assets/video/bannersmoke.mp4";
import bannerpro from "../assets/images/bannerpro.png";
import { Link } from "react-router-dom";
function Banner() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const startVideoPlayback = () => {
    setIsVideoPlaying(true);
    const video = document.getElementById("myVideo");
    if (video) {
      video.play();
    }
  };
  
  useEffect(() => {
    // Add a click event listener to the document body
    document.body.addEventListener("click", startVideoPlayback);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", startVideoPlayback);
    };
  }, []);

  return (
    <>
        <div className="top-banner w-100">
       <div className="war-policies">
            <div className="warning">
        <p>
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.
        </p>
        <p>|</p>
        <p>This week's promotion </p>
        <p>|</p>
        <p>50% Off on Cohiba Cigars</p>
      </div>

      <div className="Refundpolicy">
        <ul>
          <li>
            
            <Link to="/Refund">Refund Policy</Link>
          </li>
          <li>
            
            <span>|</span>  <Link to="/privacy">Privacy, Security and Cookie Policy</Link>
           
          </li>
          <li>
            
            <Link to="/Privacy-Policy">
            <span>|</span> Privacy Policy</Link>
          </li>
          <li>
            
            <Link to="/Delivery">
            <span>|</span> Same Day Delivery</Link>
          </li>
          <li>
            
            <Link to="/How-Order">
            <span>|</span>How To Order</Link>
          </li>
          <li>
            
            <Link to="/Delivery-Time">
            <span>|</span>Delivery Times</Link>
          </li>
          <li>
            
            <Link to="/Track-Order">
            <span>|</span> Track Your Order</Link>
          </li>
          <li>
            
            <Link to="/Product-Availability">
            <span>|</span> Product Availability</Link>
          </li>
          <li>
            
            <Link to="/FAQ">
            <span>|</span> FAQ</Link>
          </li>
        </ul>
      </div>
    </div>


    <section className="bannersec">
        <div class="bg-video-wrap">
        <video
        id="myVideo"
        loop
        autoPlay={isVideoPlaying}
        type="video/mp4"
      >
        <source src={bannersmoke} type="video/mp4" />
      </video>
          <div class="overlay"></div>
          <div className="row">
            <div className="col-lg-6 m-auto">
              <h1>Smoother than ever</h1>
              <h4>Engineered with accuracy</h4>
            </div>
            <div className="col-lg-6">
              <img src={bannerpro} alt="Banner Pro"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  <div className="spacer"></div>
  </>
  );
}

export default Banner;
