import Warning from "../Components/Warning";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import buyimg from "../assets/images/buyimg.png";
import upcoming1 from "../assets/images/upcoming1.png";
import upcoming2 from "../assets/images/upcoming2.png";
import upcoming3 from "../assets/images/upcoming3.png";
import upcoming4 from "../assets/images/upcoming4.png";
import upcoming5 from "../assets/images/upcoming5.png";
import frequently1 from "../assets/images/frequently1.png";
import frequently2 from "../assets/images/frequently2.png";
import frequently3 from "../assets/images/frequently3.png";
import plus from "../assets/images/plus.svg";
import Slider from "react-slick";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import edit from "../assets/images/edit.png";
import kl from "../assets/images/kl.png";
import b from "../assets/images/b.png";
import like from "../assets/images/like.png";
import filter from "../assets/images/filtericon.png";
import flower from "../assets/images/flower.png";
import smokepromotionspan from "../assets/images/smoke-promotion-span.png";
import filterproduct1 from "../assets/images/filterproduct1.png";
import filterproduct2 from "../assets/images/filterproduct2.png";
import filterproduct3 from "../assets/images/filterproduct3.png";
import filterproduct4 from "../assets/images/filterproduct4.png";
import filterproduct6 from "../assets/images/filterproduct6.png";
import filterproduct9 from "../assets/images/filterproduct9.png";
import filterproduct10 from "../assets/images/filterproduct10.png";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modallogo from "../assets/images/modallogo.png";
import cohibalighter from "../assets/images/cohibalighter.png";
import addphoto from "../assets/images/addphoto.png";
import cohibmodallighter from "../assets/images/cohibmodallighter.png";

function Buynow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 4000, // Set the time interval in milliseconds (e.g., 2000ms = 2 seconds)
  };

  // const data = [
  //   {
  //     id: "1",
  //     key: "1",
  //     title: "Title1",
  //     img: {upcoming1}
  //   },
  //   {
  //     id: "2",
  //     key: "2",
  //     title: "Title2",
  //     img: {upcoming2}
  //   },
  //   {
  //     id: "3",
  //     key: "3",
  //     title: "Title3",
  //     img: {upcoming3}
  //   },
  //   {
  //     id: "4",
  //     key: "4",
  //     title: "Title4",
  //     img: {upcoming4}
  //   }
  // ];

  const [toggle, setToggle] = useState("1");

  const [isStarBoxVisible, setIsStarBoxVisible] = useState(true);

  //   const toggleHighlight = (element) => {
  //     element.classList.toggle('highlight');
  //   };

  const handleToggleClick = () => {
    setIsStarBoxVisible(!isStarBoxVisible);
  };

  //   const [isHighlighted, setIsHighlighted] = useState(false);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  //   const toggleHighlight = () => {
  //     setIsHighlighted(!isHighlighted);
  //   };

  const handleClick = (val) => {
    setState1("");
    setState2("");
    setState3("");
    setState4("");
    setState5("");
    if (val === 1) {
      setState1("highlight");
    } else if (val === 2) {
      setState2("highlight");
    } else if (val === 3) {
      setState3("highlight");
    } else if (val === 4) {
      setState4("highlight");
    } else if (val === 5) {
      setState5("highlight");
    }
  };

  const [cartvalue, setcartvalue] = useState(1);

  const handleCartValue = (event) => {
    setcartvalue(event.target.value);
  };
  //   const starBoxInnerClass = `star-box-inner ${isHighlighted ? 'highlight' : ''}`;

  return (
    <div className="font-bebas">
      <Warning />

      <Header />

      <div className="bglinear">
        <section className="buynowsec">
          <span className="buyleftspan">
            <img src={buyleftspan} alt="" />
          </span>
          <span className="buyrightspan">
            <img src={buyrightspan} />
          </span>
          <div className="container-1640">
            <div className="toplinecon">
              <div className="hamicons">
                <ul>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>
                      <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row buyrowone">
              <div className="col-lg-4 p-0">
                <div className="buyimg">
                  {toggle === "1" ? <img src={upcoming1} alt="" /> : null}
                  {toggle === "2" ? <img src={upcoming2} alt="" /> : null}
                  {toggle === "3" ? <img src={upcoming3} alt="" /> : null}
                  {toggle === "4" ? <img src={upcoming4} alt="" /> : null}
                  {toggle === "5" ? <img src={upcoming5} alt="" /> : null}
                  <div className="upcomingpro">
                    <Slider {...settings}>
                      <img
                        src={upcoming1}
                        alt=""
                        onClick={() => setToggle("1")}
                      />
                      <img
                        src={upcoming2}
                        alt=""
                        onClick={() => setToggle("2")}
                      />
                      <img
                        src={upcoming3}
                        alt=""
                        onClick={() => setToggle("3")}
                      />
                      <img
                        src={upcoming4}
                        alt=""
                        onClick={() => setToggle("4")}
                      />
                      <img
                        src={upcoming5}
                        alt=""
                        onClick={() => setToggle("5")}
                      />
                      <img
                        src={upcoming2}
                        alt=""
                        onClick={() => setToggle("2")}
                      />
                      <img
                        src={upcoming3}
                        alt=""
                        onClick={() => setToggle("3")}
                      />
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="d-flex flex-column h-100 justify-content-between productdetail">
                  <div className="protitle-name">
                    <h2>Cohiba Lighter</h2>
                    <div className="rating-whishlist">
                      <Rating rating={4} />
                      <div className="cohib-add">
                        <Link>
                          <p>
                            <i class="fa-solid fa-heart fa-beat"></i>Add to
                            Wishlist
                          </p>
                        </Link>
                        <span></span>
                        <Link>
                          <p
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i class="fa-sharp fa-solid fa-star"></i>Write
                            Review
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="prodetail-price">
                    <p className="pricesku mb-5">
                      $26.00 <span>incl. tax</span>
                    </p>
                    <div className="sku">
                      <p>Availability</p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i> In Stock
                        </span>
                      </p>
                    </div>

                    <p className="lh-lg mt-3 poppins text-white">
                      All-in-one system <br />
                      MESH COIL
                      <br />
                      Up to 5500 Puffs
                      <br />
                      15ml E-Liquid Capacity
                      <br />
                      5% TOBACCO-FREE NICOTINE
                      <br />
                      650mAH Rechargeable Battery
                      <br />
                      USB Type-C charging port
                      <br />
                      Non-Refillable
                      <br />
                      Adjustable airflow
                      <br />
                      Draw Activation
                      <br />
                      Anti-Leak Design
                    </p>
                  </div>

                  <div className="addtocart">
                    <Link onClick={handleShow}>Add to cart</Link>
                    <input
                      type="number"
                      name="cartquantity"
                      min={1}
                      value={cartvalue}
                      onChange={handleCartValue}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row Description ">
              <span className="buyleftspan">
                <img src={buyleftspan} alt=""/>
              </span>
              <span className="buyrightspan">
                <img src={buyrightspan} alt=""/>
              </span>
              <div className="col-lg-12 ">
                <div className="discript">
                  <div className="abdesttitle">
                    <h2>Description</h2>
                  </div>
                  <p>
                    The strong, legendary and arrogant Dr.Pepper mixed the
                    special juice mixture with caramel and carbonic acid. The
                    aroma of multiple flavors fascinated <br />
                    lovers and brought you a more pure and local retro spirit.
                  </p>
                  <h4>Flavors:</h4>
                  <p>
                    Bubble gang Watermelon Ice
                    <br />
                    Menthol Mint Ice
                    <br />
                    Green Apple Raspberry Watermelon Ice
                    <br />
                    Strawberry Watermelon Kiwi Ice
                    <br />
                    Blue Raspberry Cherry Ice
                    <br />
                    Banana Raspberry Ice
                    <br />
                    Lemon Rainbow Ice
                    <br />
                    Kiwi Watermelon Acai Ice
                    <br />
                    Lemon Blueberry Raspberry Ice
                    <br />
                    Watermelon Strawberry Methol Ice
                    <br />
                    Blueberry kiwi
                    <br />
                    Peach apricot ice
                    <br />
                    Pineapple blueberry kiwi ice
                  </p>
                </div>
              </div>
            </div>

            <div className="row FrequentlyBought">
              <span className="buyleftspan">
                <img src={buyleftspan} alt="" />
              </span>
              <span className="buyrightspan">
                <img src={buyrightspan}alt="" />
              </span>
              <div className="col-lg-12">
                <div className=" frequently">
                  <h2>Frequently Bought Together</h2>
                  <div className="dflx">
                    <div className="leftpro">
                      <img src={frequently1} alt=""/>
                      <img src={plus} alt=""/>
                      <img src={frequently2} alt=""/>
                      <img src={plus} alt=""/>
                      <img src={frequently3} alt=""/>
                      <img src={plus} alt=""/>
                    </div>
                    <div className="righttpro">
                      <p className="mb-4">
                        Total Price: <span> $75.00</span>
                      </p>
                      <Link to="/cart">Add Selected To Cart</Link>
                    </div>
                  </div>

                  <div class="categoriesitem frequent">
                    <div class="form-group">
                      <input type="checkbox" id="html10" />
                      <label for="html10"></label>
                    </div>
                    <div class="catecon">
                      <p>Cohiba Cigar Holder</p>
                      <input type="number"  min={1}/>
                      <p>$25.00</p>
                    </div>
                  </div>

                  <div class="categoriesitem frequent">
                    <div class="form-group">
                      <input type="checkbox" id="html11" />
                      <label for="html11"></label>
                    </div>
                    <div class="catecon">
                      <p>Cohiba Cigar Holder</p>
                      <input type="number"  min={1}/>
                      <p>$25.00</p>
                    </div>
                  </div>

                  <div class="categoriesitem frequent">
                    <div class="form-group">
                      <input type="checkbox" id="html12" />
                      <label for="html12"></label>
                    </div>
                    <div class="catecon">
                      <p>Cohiba Cigar Holder</p>
                      <input type="number"  min={1}/>
                      <p>$25.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
          <div className="row ">
            <div className="col-lg-12 p-0">
              <div className="reviewpart">
                <p>
                  <span>4.5</span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                  Based on 2 Reviews
                </p>
                <p>
                  <span>100%</span> would recommend this product
                </p>
              </div>
            </div>
          </div> */}

            <div class="content-descrip-sec-parent">
              <span className="buyleftspan">
                <img src={buyleftspan} alt=""/>
              </span>
              <span className="buyrightspan">
                <img src={buyrightspan} alt=""/>
              </span>
              <div class="descrip-box descrip-box-gap">
                <div class="rating-box-pr-top-parent">
                  <div class="rating-pr">
                    <span class="rate-pr-head-one">4.5</span>
                    <span class="star-parent-top">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </span>
                    <span class="rate-pr-head-two">Based on 2 Reviews</span>
                  </div>
                  <div class="rating-pr">
                    <span class="rate-pr-head-one">100%</span>
                    <span class="rate-pr-head-two">
                      would recommend this product
                    </span>
                  </div>
                </div>
                <div class="progess-bar-parensupper">
                  <div class="progess-bar-parent">
                    <div class="progres-num-and-star">
                      <span class="rate-pr-head-two">5</span>
                      <span class="sm-starr">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div class="progress2 progress-moved">
                      <div class="progress-bar2"></div>
                    </div>
                    <div class="progres-num-and-star progres-num-and-star-pd">
                      <span class="rate-pr-head-two">1</span>
                    </div>
                  </div>
                  <div class="progess-bar-parent">
                    <div class="progres-num-and-star">
                      <span class="rate-pr-head-two">4</span>
                      <span class="sm-starr">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div class="progress2 progress-moved">
                      <div class="progress-bar2"></div>
                    </div>
                    <div class="progres-num-and-star progres-num-and-star-pd">
                      <span class="rate-pr-head-two">1</span>
                    </div>
                  </div>
                  <div class="progess-bar-parent">
                    <div class="progres-num-and-star">
                      <span class="rate-pr-head-two">3</span>
                      <span class="sm-starr">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div class="progress2 progress-moved">
                      <div class="progress-bar2 anim-none"></div>
                    </div>
                    <div class="progres-num-and-star progres-num-and-star-pd">
                      <span class="rate-pr-head-two">0</span>
                    </div>
                  </div>
                  <div class="progess-bar-parent">
                    <div class="progres-num-and-star">
                      <span class="rate-pr-head-two">2</span>
                      <span class="sm-starr">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div class="progress2 progress-moved">
                      <div class="progress-bar2 anim-none"></div>
                    </div>
                    <div class="progres-num-and-star progres-num-and-star-pd">
                      <span class="rate-pr-head-two">0</span>
                    </div>
                  </div>
                  <div class="progess-bar-parent">
                    <div class="progres-num-and-star">
                      <span class="rate-pr-head-two">1</span>
                      <span class="sm-starr">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div class="progress2 progress-moved">
                      <div class="progress-bar2 anim-none"></div>
                    </div>
                    <div class="progres-num-and-star progres-num-and-star-pd">
                      <span class="rate-pr-head-two">0</span>
                    </div>
                  </div>
                </div>

                <div class="reviews-descrip-parent">
                  <div class="reviews-heading">
                    <div class="reques">
                      <h3>Reviews (2)</h3>

                      <h3>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        >
                          Questions
                        </Link>
                      </h3>
                    </div>
                    <hr class="hl-pr" />
                  </div>
                  <div class="filter-and-write-parent">
                    <div class="filter-parent">
                      <div class="btn-filt-pr">
                        <button id="toggleButton" onClick={handleToggleClick}>
                          <span>
                            <img src={filter} alt="" />
                          </span>
                          Filter
                        </button>
                        <div
                          className={`star-box-parent ${
                            isStarBoxVisible ? "flex" : "none"
                          }`}
                        >
                          <div
                            className={`star-box-inner ${state1}`}
                            onClick={() => handleClick(1)}
                          >
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div
                            className={`star-box-inner ${state2}`}
                            onClick={() => handleClick(2)}
                          >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div
                            className={`star-box-inner ${state3}`}
                            onClick={() => handleClick(3)}
                          >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div
                            className={`star-box-inner ${state4}`}
                            onClick={() => handleClick(4)}
                          >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div
                            className={`star-box-inner ${state5}`}
                            onClick={() => handleClick(5)}
                          >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="write-modal-button">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <span>
                          <img src={edit} alt="" />
                        </span>
                        Write a Review
                      </button>
                    </div>
                  </div>

                  <div class="review-two-head">
                    <div class="review-two-head-inner">
                      <h3>2 Reviews</h3>
                    </div>
                    <div class="review-two-head-inner review-two-head-innerrev">
                      <h3>Sort</h3>
                      <select>
                        <option>Most Recent</option>
                        <option>Oldest</option>
                        <option>High Rated</option>
                        <option>lowest Rated</option>
                      </select>
                    </div>
                  </div>
                  <hr class="hl-pr" />

                  <div class="review-two-inner-box-parent">
                    <div class="rv-two-left-box">
                      <div class="rv-two-left-box-head">
                        <img src={kl} alt="" /> <span>kimberley i.</span>
                      </div>
                      <div class="recomm-rev-box-two">
                        <span>
                          <img src={like} alt="" />
                        </span>
                        <span>I recommend this product</span>
                      </div>
                    </div>
                    <div class="rv-two-right-box">
                      <div class="rv-two-star-and-due-parent">
                        <div class="rv-two-star">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="due">
                          <p>2 weeks ago</p>
                        </div>
                      </div>
                      <div class="well-head-rv-two">
                        <h3>Well Priced, Last A Long Time</h3>
                      </div>
                      <div class="rv-two-m-para">
                        <p>
                          I like their products and how long they last with
                          being able to recharge them. The flavours are nice but
                          it does disipate over time and once you recharge it,
                          some can have an ashy after taste to it. Dispatching
                          and delivery is always quick and efficient but they
                          don't seem to respond to their emails and the phone
                          number on their website is disconnected.
                        </p>
                      </div>
                      <div class="was-this-help-parent">
                        <div class="span-was-this">
                          <span>Was this helpful ?</span>
                        </div>
                        <div class="span-was-this">
                          <span>
                            <i class="fa-solid fa-thumbs-up"></i> 0
                          </span>
                          <span>
                            <i class="fa-solid fa-thumbs-down"></i> 0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="hl-pr" />

                  <div class="review-two-inner-box-parent">
                    <div class="rv-two-left-box">
                      <div class="rv-two-left-box-head">
                        <img src={b} alt="" /> <span>Bec</span>
                      </div>
                      <div class="recomm-rev-box-two">
                        <span>
                          <img src={like} alt="" />
                        </span>
                        <span>I recommend this product</span>
                      </div>
                    </div>
                    <div class="rv-two-right-box">
                      <div class="rv-two-star-and-due-parent">
                        <div class="rv-two-star">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="due">
                          <p>2 months ago</p>
                        </div>
                      </div>
                      <div class="well-head-rv-two">
                        <h3>Great Price For A Great Lighter.</h3>
                      </div>
                      <div class="rv-two-m-para">
                        <p>
                          I really like these Lighters. Flame is strong and
                          lasts a long time, lots of colors to choice from.
                        </p>
                      </div>
                      <div class="was-this-help-parent">
                        <div class="span-was-this">
                          <span>Was this helpful ?</span>
                        </div>
                        <div class="span-was-this">
                          <span>
                            <i class="fa-solid fa-thumbs-up"></i> 0
                          </span>
                          <span>
                            <i class="fa-solid fa-thumbs-down"></i> 0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="buyproduct">
          <span className="buyleftspan">
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            <img src={buyrightspan} />
          </span>
          <div className="container-1640 position-relative z-10">
            <div className="d-flex flex-wrap justify-content-around youmealso filter-mean">
              <h4 className="d-flex justify-content-center w-100">
                You May <span> Also Like</span>
              </h4>
              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct1} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct2} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct3} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct4} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-around youmealso filter-mean">
              <h4 className="d-flex justify-content-center w-100">
                Recently <span>Viewed</span>
              </h4>
              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct1} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct2} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct3} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>

              <div className="d-flex position-relative product-detail-also-like">
                <div className="align-items-end d-flex mx-2 pro2-content">
                  <div className="position-relative product-img z-1 w-25">
                    <img src={filterproduct4} alt="" className="w-100" />
                  </div>
                  <div className="position-relative procontent w-75">
                    <img src={flower} alt="" />
                    <h1>Lorem Ipsum</h1>
                    <p>
                      All-in-one system MESH COIL Up to 5500 Puffs 15ml E-Liquid
                      Capacity
                    </p>
                    <h6>$25</h6>
                    <span>incl. Tax</span>
                    <a className="probtn" href="/Buynow">
                      Buy Now
                    </a>
                  </div>
                  <div className="per-off">
                    70% <sub>Off</sub>
                  </div>
                </div>
                <span className="position-absolute smokehover bottom-0">
                  <img src={smokepromotionspan} alt="" className="w-100" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal cohibeproduct fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <span className="modallogo">
                  <img src={modallogo} />
                </span>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
              <div class="modal-body">
                <div className="cohibamodalcontetn">
                  <div>
                    <img src={cohibalighter} />
                  </div>
                  <div className="managerating">
                    <h2>Cohiba Lighter</h2>
                    <Rating />
                  </div>
                </div>

                <div className="cohibinput">
                  <input type="text" placeholder="Review Title" />
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="What did you think about Cohiba Lighter ?"
                  ></textarea>
                  <div className="addphoto">
                    <img src={addphoto} />
                    <p>
                      Add Photos Or Videos
                      <span>Click here or drag to upload</span>
                    </p>
                  </div>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <div className="addphoto">
                    <img src={addphoto} />
                    <p>
                      Profile Picture ( Optional )
                      <span>Click here or drag to upload</span>
                    </p>
                  </div>
                </div>
                <div className="btnaggrement">
                  <p>
                    By continuing you agree to our
                    <span>
                      <Link>Terms and Conditions</Link>
                    </span>
                    and
                    <span>
                      <Link to="/Privacy-Policy"> Privacy Policy </Link>
                    </span>
                  </p>
                  <Link class="btn btn-secondary" data-bs-dismiss="modal">
                    Agree & Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modale 2 */}

        <div
          class="modal cohibeproduct fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <span className="modallogo">
                  <img src={modallogo} alt=""/>
                </span>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
              <div class="modal-body">
                <div className="cohibamodalcontetn">
                  <div>
                    <img src={cohibalighter} />
                  </div>
                  <div className="managerating">
                    <h2>Cohiba Lighter</h2>
                  </div>
                </div>

                <div className="cohibinput">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="What would you know about Cohiba Lighter ?"
                  ></textarea>

                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <div className="addphoto">
                    <img src={addphoto} />
                    <p>
                      Profile Picture ( Optional )
                      <span>Click here or drag to upload</span>
                    </p>
                  </div>
                </div>
                <div className="btnaggrement">
                  <p>
                    By continuing you agree to our
                    <span>
                      <Link>Terms and Conditions</Link>
                    </span>
                    and
                    <span>
                      <Link> Privacy Policy </Link>
                    </span>
                  </p>
                  <Link
                    to="/buynow"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Agree & Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal
        className="accountcreated continuemodl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="pb-3">
          <h2 className="mb-0">Cohiba Lighter</h2>
          <Button onClick={handleClose} className="p-0">
            <i class="fa-solid fa-circle-xmark"></i>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-5 p-0">
              <img src={cohibmodallighter} alt="Smoke" />
            </div>
            <div className="col-lg-7">
              <div className="mx-2 my-4">
                <h2>
                  <i class="fa-solid fa-check"></i> Cohiba Lighter was added to{" "}
                  <br />
                  your shopping cart. !
                </h2>

                <p class="pricesku">
                  $26.00 <span>incl. tax</span>
                </p>
              </div>
              <div class="signinbtn d-flex">
                <Link to="/shop" className="me-4 px-4 py-2">
                  <i class="fa-solid fa-chevron-left"></i> Continue Shopping
                </Link>
                <Link to="/cart" className="px-4 py-2">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Buynow;
