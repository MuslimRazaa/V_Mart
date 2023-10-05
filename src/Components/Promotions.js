import React from "react";
import promotionimg from "../assets/images/promotionimg.png";
import promotionpro1 from "../assets/images/promotionpro1.png";
import flower from "../assets/images/flower.png";
import smokepromotionspan from "../assets/images/smoke-promotion-span.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import smoke1 from "../assets/images/smoke1.png";

function Promotions() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 19000 // Set the time interval in milliseconds (e.g., 2000ms = 2 seconds)
  };
  return (
   
      <section className="sec-Promotions bg-black">
      <span className="seccoverline"></span>
      
        <div className="container-1640 z-10">
          <h1 className="title-mean">
            
            OUR <span>Promotions</span>
          </h1>

          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-5 d-flex align-items-center">
              <img alt="" src={promotionimg} className="w-100" />
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-7 p-0">
            <Slider {...settings}>
            <div>
              <div className="proslider">
                <span> <img alt="" src={smokepromotionspan} /></span>
                <img alt="" src={promotionpro1} className="pro-slider-img" />
                <div className="procontent">
                <img alt="" src={flower} />
                  <h1>Lorem Ipsum</h1>
                  <p>
                    All-in-one system <br/>
                    MESH COIL <br/>
                    Up to 5500 Puffs <br/>
                    15ml E-Liquid Capacity
                  </p>
                  <div className="align-items-center d-flex flex-column pe-5 pro-text w-100"><h6 className="mb-0 mt-4">$25</h6>
                  <span>incl. Tax</span>
                  <a href="/" class="probtn px-3 py-1">
                    Buy Now
                  </a></div>
                </div>
              </div>
              </div>
              <div>
              <div className="proslider">
                <span> <img alt="" src={smokepromotionspan} /></span>
                <img alt="" src={promotionpro1} className="pro-slider-img" />
                <div className="procontent">
                <img alt="" src={flower} />
                  <h1>Lorem Ipsum</h1>
                  <p>
                    All-in-one system <br/>
                    MESH COIL <br/>
                    Up to 5500 Puffs <br/>
                    15ml E-Liquid Capacity
                  </p>
                  <div className="align-items-center d-flex flex-column pe-5 pro-text w-100"><h6 className="mb-0 mt-4">$25</h6>
                  <span>incl. Tax</span>
                  <a href="/" class="probtn px-3 py-1">
                    Buy Now
                  </a></div>
                </div>
              </div>
              </div>
              </Slider>

            </div>
          </div>
        </div>
        <div class="smoke-section-parent">
          <div class="ag-smoke-block">
            <div>
              <img class="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-2" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-3" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-4" src={smoke1} alt="Smoke" />
            </div>
          </div>
        </div>
      </section>

  );
}

export default Promotions;
