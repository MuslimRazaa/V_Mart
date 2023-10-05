import React from 'react'
import smokeExquisite from "../assets/images/smokeExquisite.png";
import Apperance1 from "../assets/images/Apperance1.png";
import Apperance2 from "../assets/images/Apperance2.png";
import Apperance3 from "../assets/images/Apperance3.png";
import span1 from "../assets/images/span1.png";
import span2 from "../assets/images/span2.png";
import smoke1 from "../assets/images/smoke1.png";


function Exquisite() {
  return (
    
         <section className="EXQUISITE bg-black">
         {/* <span className="seccoverline"> </span> */}
         <div className="container-1640 position-relative z-2">
          <h1 className="title-mean mb-5">
            <span>EXQUISITE APPEARaNCE,</span> INGENUITY, EXCELLENCE
             <img src={smokeExquisite} alt='' />
          </h1>

          <div className="row show-pro">
            <div className="col-lg-4 show-pro-in">
             <a href='/'> <img src={Apperance3} alt='' /></a>
            </div>
            <div className="col-lg-4 show-pro-in">
            <a href='/'> <img src={Apperance1} alt='' /></a>
            </div>
            <div className="col-lg-4 show-pro-in">
            <a href='/'> <img src={Apperance2} alt='' /></a>
            </div>
          </div>
        </div>
         {/* <div className="smoke-section-parent">
          <div className="ag-smoke-block">
            <div>
              <img className="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img className="ag-smoke-2" src={smoke1} alt="Smoke" />
              <img className="ag-smoke-4" src={smoke1} alt="Smoke" />
            </div>
          </div>
        </div> */}
        <span className="EXQUISITE-span1">
          <img src={span1} alt="" className='h-100'/>
        </span>
        <span className="EXQUISITE-span2">
          <img src={span2} alt='' className='h-100'/>
        </span>
       
      </section>
  
  )
}

export default Exquisite
