import React  from "react";
import smoke1 from "../assets/images/smoke1.png";
import lighter1 from "../assets/images/lighter1.png";
import lighter2 from "../assets/images/lighter2.png";
import { Link } from "react-router-dom";
function Lighter() {
  return (
   
      <section className="sec-Promotions Lighter bg-black">
      <span className="seccoverline"></span>
       
        <div className="container-1640 z-10">
          <div className="row lighter">
            <div className="col-lg-6 p-0">
            <Link to="https://www.youtube.com/watch?v=zjtegz4JwMY" target="_blank"> <img src={lighter1} alt="" className="w-100" /></Link>
            </div>
            <div className="col-lg-6 p-0">
            <Link to="https://www.youtube.com/watch?v=zjtegz4JwMY" target="_blank"> <img src={lighter2} alt="" className="w-100" /></Link>
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

export default Lighter;
