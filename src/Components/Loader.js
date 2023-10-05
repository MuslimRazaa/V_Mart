import React from 'react'
import smoke1 from "../assets/images/smoke1.png";
import logo from "../assets/images/headerlogo.png"
export default function Loader() {


  

  return (
    <div>

      <div className='pro-br'>

      <div class="smoke-section-parent">
    
        </div>
      <img src={logo} className='loader-smoking pb-3'/>
      <div class="ag-smoke-block">
            <div>
              <img class="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-2" src={smoke1} alt="Smoke" />

              <img class="ag-smoke-4" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-2" src={smoke1} alt="Smoke" />

              <img class="ag-smoke-4" src={smoke1} alt="Smoke" />

              <img class="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-2" src={smoke1} alt="Smoke" />

              <img class="ag-smoke-4" src={smoke1} alt="Smoke" />
            </div>
          </div>
      <div class="progress-bar ">
        <div class="progress-fill"></div>
      </div>
      </div>
    </div>
  )
}
