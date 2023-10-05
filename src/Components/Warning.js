import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function Warning() {


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    // <div className={`war-policies ${isSticky ? 'sticky' : ''}`}>
    <div className="war-policies">
            <div className="warning">
        <p>
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.{" "}
        </p>
        <p>|</p>
        <p>This week's promotion </p>
        <p>|</p>
        <p>50% Off on Cohiba Cigars</p>
      </div>

      <div className="Refundpolicy">
        <ul>
          <li>
            {" "}
            <Link to="/Refund">Refund Policy</Link>
          </li>
          <li>
            {" "}
            <span>|</span>  <Link to="/privacy">Privacy, Security and Cookie Policy</Link>
           
          </li>
          <li>
            {" "}
            <Link to="/Privacy-Policy">
            <span>|</span> Privacy Policy</Link>
          </li>
          <li>
            {" "}
            <Link to="/Delivery">
            <span>|</span> Same Day Delivery</Link>
          </li>
          <li>
            {" "}
            <Link to="/How-Order">
            <span>|</span>How To Order{" "}</Link>
          </li>
          <li>
            {" "}
            <Link to="/Delivery-Time">
            <span>|</span>Delivery Times{" "}</Link>
          </li>
          <li>
            {" "}
            <Link to="/Track-Order">
            <span>|</span> Track Your Order</Link>
          </li>
          <li>
            {" "}
            <Link to="/Product-Availability">
            <span>|</span> Product Availability{" "}</Link>
          </li>
          <li>
            {" "}
            <Link to="/FAQ">
            <span>|</span> FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Warning
