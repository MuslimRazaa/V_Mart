import React from 'react'
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import brand5 from "../assets/images/brand5.png";
import brandhover from "../assets/images/brandhover.png";
import featurebuttonhover from "../assets/images/featurebuttonhover.png";
import smokering1 from "../assets/images/smokering1.png";
import product1 from "../assets/images/product1.png";
import scrollerimg1 from "../assets/images/scrollerimg1.png";
import scrollerimg2 from "../assets/images/scrollerimg2.png";
import scrollerimg3 from "../assets/images/scrollerimg3.png";
import arrows from "../assets/images/arrows.png";
import smoke1 from "../assets/images/smoke1.png";








function Partner() {
  return (
   
            <section className="sec-partner bg-black">
            <span className="seccoverline"></span>

              
    <div class="smoke-section-parent">
                    <div class="ag-smoke-block">
                        <div>
                            <img class="ag-smoke-1" src={smoke1} alt="Smoke"/>
                            <img class="ag-smoke-2" src={smoke1} alt="Smoke"/>
                            <img class="ag-smoke-3" src={smoke1} alt="Smoke"/>
                            <img class="ag-smoke-4" src={smoke1} alt="Smoke"/>
                        </div>
                    </div>
                </div>
        <div className="container-1640">
          <h1 className="title-mean">
            {" "}
            OUR <span>PARTNERS</span>{" "}
          </h1>
          <div className="hoverul">
            <span>
              {" "}
              <img src={brandhover} alt=''/> <img src={brand1} alt=''/>
            </span>
            <span>
              {" "}
              <img src={brandhover} alt=''/> <img src={brand2} alt='' />
            </span>
            <span>
              {" "}
              <img src={brandhover} alt=''/> <img src={brand3} alt=''/>
            </span>
            <span>
              {" "}
              <img src={brandhover} alt=''/> <img src={brand4} alt=''/>
            </span>
            <span>
              {" "}
              <img src={brandhover} alt=''/> <img src={brand5} alt=''/>
            </span>
          </div>
        </div>
      </section>
 
  )
}

export default Partner
