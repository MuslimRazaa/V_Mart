import React from "react";
import promotionimg from "../assets/images/promotionimg.png";
import promotionpro1 from "../assets/images/promotionpro1.png";
import flower from "../assets/images/flower.png";
import smokepromotionspan from "../assets/images/smoke-promotion-span.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popularpro1 from "../assets/images/popularpro1.png";
import popularpro3 from "../assets/images/popularpro3.png";
import smoke1 from "../assets/images/smoke1.png";

function PopularProduct() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 5000 // Set the time interval in milliseconds (e.g., 2000ms = 2 seconds)
      };
  return (
   
    <section className="sec-Promotions popularproduct bg-black">
    <span className="seccoverline"></span>
      <div className="container-1640 z-10">
        <h1 className="title-mean">
          
          POPULAR <span>Products</span>
        </h1> 

        <div className="row">

          <div className="col-lg-12">
          <Slider {...settings}>
          <div>
            <div className="proslider">
              <span> <img src={smokepromotionspan} alt="" /></span>
              <img src={popularpro1} className="pro-slider-img" alt=""/>
              <div className="procontent">
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
              <span> <img src={smokepromotionspan} alt="" /></span>
              <img src={promotionpro1} className="pro-slider-img" alt="" />
              <div className="procontent">
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
              <span> <img src={smokepromotionspan} alt="" /></span>
              <img src={popularpro3} className="pro-slider-img" alt="" />
              <div className="procontent">
              
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
              <span> <img src={smokepromotionspan} alt="" /></span>
              <img src={promotionpro1} className="pro-slider-img" alt="" />
              <div className="procontent">
              
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
  )
}

export default PopularProduct
