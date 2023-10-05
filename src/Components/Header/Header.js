import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brandhover from "../../assets/images/brandhover.png";
import headerlogo from "../../assets/images/headerlogo.png";
import { Link } from "react-router-dom";
import headermenushover from "../../assets/images/headermenushover.png";
import smallheaderhover from "../../assets/images/smallheaderhover.png";

import pluseight from "../../assets/images/18+.png";

function Header() {

// modale 2
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// modale 1
  
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  // modale 2
  
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2= () => setShow2(true);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {



      window.scrollTo(0, 0);
 

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
    <div className='main-header'>
      <div className="feedcont">
        <Link onClick={handleShow1} className='align-items-center d-flex justify-content-center'>Contact us</Link>
        <Link onClick={handleShow} className='align-items-center d-flex justify-content-center'>FEEDBACK</Link>
      </div>
      <header >
        <div className="container-1640">
          <div className="flhed">
            <div className="logo">
              <Link to="/">
                <img src={headerlogo} />
              </Link>
            </div>
            <div className="menusheader">
              <ul>
                <li className="brandhover">
                  <Link to="">
                    Brands <i class="fa-solid fa-chevron-down"></i>
                    <img src={smallheaderhover} />
                  </Link>
                  <div className="hoverul">
                    <span>
                      {" "}
                      <img src={brandhover} /> <img src={brand1} />
                    </span>
                    <span>
                      {" "}
                      <img src={brandhover} /> <img src={brand2} />
                    </span>
                    <span>
                      {" "}
                      <img src={brandhover} /> <img src={brand3} />
                    </span>
                    <span>
                      {" "}
                      <img src={brandhover} /> <img src={brand4} />
                    </span>
                    <span>
                      {" "}
                      <img src={brandhover} /> <img src={brand5} />
                    </span>
                  </div>
                </li>

                <li className='shop-active'>
                  <Link to="/Brand" >
                    SHOP <img src={smallheaderhover} />
                  </Link>
                </li>

                <li className='Sales-active'>
                  <Link to="/sales">
                    Sales <img src={smallheaderhover} />
                  </Link>
                </li>

                <li className='Promotion-active'>
                <Link to="/Promotions">
                    This week's Promotion
                    <img src={headermenushover} />
                  </Link>
                </li>

                <li className='Order'>
                  <Link to="/Promotions">
                    Order Status <img src={smallheaderhover} />
                  </Link>
                </li>

                <li className='about-active'>
                  <Link to="/about">
                    ABOUT US <img src={smallheaderhover} />
                  </Link>
                </li>

                <li className='Contact-active'>
                  <Link to="/contact">
                    Contact <img src={smallheaderhover} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="iconsheader">
              <div className='Account-my'>
                <ul>
                  <li><Link to="/Login"><i class="fa-solid fa-user"></i></Link></li>
                </ul>
              </div>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </header>









      <Modal className='Feedbackmodal' show={show} onHide={handleClose}>
        <Modal.Header>
        <i onClick={handleClose} class="fa-solid fa-circle-xmark"></i>
        
          <Modal.Title> <h1>Can't Find what you are looking for ?  </h1>

          <p>Please tell us below what you would like to see on our site</p>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

      <textarea cols='30' rows='10'> </textarea>
      <div className='opentiming'>
        <p style={{color:"#7998EA"}}>Open 09AM - 05PM <br/>
Monday - Friday</p>
<Link >SUBMIT</Link>
<p style={{color:"#F2EA9A"}}>Feedback will be given within 30 mins</p>
      </div>

        </Modal.Body>
 
      </Modal>






      
      <Modal className='Feedbackmodal Contactmodal' show={show1} onHide={handleClose1}>
        <Modal.Header>
        <i onClick={handleClose1} class="fa-solid fa-circle-xmark"></i>
        
          <Modal.Title> <h1>CONTACT US </h1>

          <p>Do you have a question, let us know</p>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <label>Name</label>
      <input type='text'/> 

      <label>EMAIL</label>
      <input type='email'/> 

      <label>MESSAGE</label>
      <textarea cols='30' rows='10'> </textarea>
      <div className='opentiming'>

<Link >SUBMIT</Link>

      </div>

        </Modal.Body>
 
      </Modal>








            
      <Modal className='Feedbackmodal Contactmodal' show={show2} onHide={handleClose2}>
        <Modal.Header>
        {/* <i onClick={handleClose2} class="fa-solid fa-circle-xmark"></i> */}
        
          <Modal.Title> <img style={{paddingTop:"30px"}} src={pluseight} alt=''/>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

      <div className='restriction'>

        <h1>Age Restricted Content</h1>
        <p>You must be 18+ </p>

      </div>

        </Modal.Body>
 
      </Modal>




    </div>
  );
}

export default Header;
