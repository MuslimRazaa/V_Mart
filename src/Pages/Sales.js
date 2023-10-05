import React, { useEffect, useRef, useState } from "react";
import Warning from "../Components/Warning";
import Banner from "../Components/Banner";
import Header from "../Components/Header/Header";
import brandhover from "../assets/images/brandhover.png";
import brand1 from "../assets/images/brand1.png";
import shoptria from "../assets/images/shoptria.png";
import shoptria2 from "../assets/images/shoptria2.png";
import line from "../assets/images/pathline.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

import promotionimg from "../assets/images/promotionimg.png";
import promotionpro1 from "../assets/images/promotionpro1.png";
import flower from "../assets/images/flower.png";
import smokepromotionspan from "../assets/images/smoke-promotion-span.png";

import popularpro1 from "../assets/images/popularpro1.png";
import popularpro3 from "../assets/images/popularpro3.png";
import smoke1 from "../assets/images/smoke1.png";
import sectioncoverline from "../assets/images/sectioncoverline.png";
import filterproduct2 from "../assets/images/filterproduct2.png";
import filterproduct1 from "../assets/images/filterproduct1.png";
import filterproduct3 from "../assets/images/filterproduct3.png";

import filterproduct4 from "../assets/images/filterproduct4.png";
import filterproduct5 from "../assets/images/filterproduct5.png";
import filterproduct6 from "../assets/images/filterproduct6.png";

import filterproduct7 from "../assets/images/filterproduct7.png";
import filterproduct8 from "../assets/images/filterproduct8.png";
import filterproduct9 from "../assets/images/filterproduct9.png";

import filterproduct10 from "../assets/images/filterproduct10.png";
import filterproduct11 from "../assets/images/filterproduct11.png";
import filterproduct12 from "../assets/images/filterproduct12.png";

import span1 from "../assets/images/span1.png";
import span2 from "../assets/images/span2.png";

import brandsales1 from "../assets/images/brandsales1.png";
import brandsales2 from "../assets/images/brandsales2.png";

import brandsales3 from "../assets/images/brandsales3.png";
import brandsales4 from "../assets/images/brandsales4.png";

import brandsales5 from "../assets/images/brandsales5.png";

import Footer from "../Components/Footer/Footer";

function Sales() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleSliderChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  return (
    <div className="font-bebas">
      <Warning />

      <div className="sales-hover">
        <Header />
      </div>

      <section className="secshop ">
        <div class="smoke-section-parent">
          <div class="ag-smoke-block">
            <div>
              <img class="ag-smoke-1" src={smoke1} alt="Smoke" />
              <img class="ag-smoke-2" src={smoke1} alt="Smoke" />

              <img class="ag-smoke-4" src={smoke1} alt="Smoke" />
            </div>
          </div>
        </div>
        <span className="EXQUISITE-span1">
          <img src={span1} />
        </span>
        <span className="EXQUISITE-span2">
          <img src={span2} />
        </span>

        <div className="container-1640 position-relative z-10">
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
            <div className="pagin">
              <div className="bx">
                <img src={shoptria} alt="" />
                <img src={line} alt="" />
                <img src={shoptria2} alt="" />
              </div>
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>12</option>
                  <option value="1">13</option>
                  <option value="2">14</option>
                  <option value="3">15</option>
                </select>
              </div>
            </div>
          </div>

          <div className="filter-mean">
            <div className="filterleft position-relative z-1">
              <div className="filters">
                <div className="fitlertitel">
                  <h2>Filters</h2>
                </div>

                <div className="range" style={{ marginTop: "20px" }}>
                  <Slider
                    range
                    min={0}
                    max={100}
                    defaultValue={[minPrice, maxPrice]}
                    onChange={handleSliderChange}
                  />
                  <p>
                    <span> Min:$ {minPrice}</span>
                    <span> Max:$ {maxPrice}</span>
                  </p>
                </div>
                <div className="select-apn">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option>Most viewed</option>
                    <option value="1">Most viewed</option>
                    <option value="2">Most viewed</option>
                    <option value="3">Most viewed</option>
                  </select>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option>All Brands</option>
                    <option value="1">13</option>
                    <option value="2">14</option>
                    <option value="3">15</option>
                  </select>
                </div>
                <div className="categories">
                  <h2>Category</h2>
                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html1" />
                      <label for="html1"></label>
                    </div>
                    <div className="catecon">
                      <p>Cigars</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html2" />
                      <label for="html2"></label>
                    </div>
                    <div className="catecon">
                      <p>Lighters</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html3" />
                      <label for="html3"></label>
                    </div>
                    <div className="catecon">
                      <p>Tobacco</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html4" />
                      <label for="html4"></label>
                    </div>
                    <div className="catecon">
                      <p>Ash Tray</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html5" />
                      <label for="html5"></label>
                    </div>
                    <div className="catecon">
                      <p>Vapes</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html6" />
                      <label for="html6"></label>
                    </div>
                    <div className="catecon">
                      <p>Premium Cigars</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html7" />
                      <label for="html7"></label>
                    </div>
                    <div className="catecon">
                      <p>Cutters</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html8" />
                      <label for="html8"></label>
                    </div>
                    <div className="catecon">
                      <p>Box</p>
                      <p>(17)</p>
                    </div>
                  </div>
                </div>

                <div className="categories salespage">
                  <div className="brandtitle">
                    <h2>Brands</h2>
                  </div>
                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="dunhil" />
                      <label for="dunhil"></label>
                    </div>
                    <div className="catecon">
                      <img src={brandsales1} alt="" />
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="benson" />
                      <label for="benson"></label>
                    </div>
                    <div className="catecon">
                      <img src={brandsales2} alt="" />
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="winfield" />
                      <label for="winfield"></label>
                    </div>
                    <div className="catecon">
                      <img src={brandsales3} alt="" />
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="longbeach" />
                      <label for="longbeach"></label>
                    </div>
                    <div className="catecon">
                      <img src={brandsales4} alt="" />
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="portroyale" />
                      <label for="portroyale"></label>
                    </div>
                    <div className="catecon">
                      <img src={brandsales5} alt="" />
                    </div>
                  </div>

                  {/* <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html6" />
                      <label for="html6"></label>
                    </div>
                    <div className="catecon">
                      <p>Premium Cigars</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html7" />
                      <label for="html7"></label>
                    </div>
                    <div className="catecon">
                      <p>Cutters</p>
                      <p>(17)</p>
                    </div>
                  </div>

                  <div className="categoriesitem">
                    <div class="form-group">
                      <input type="checkbox" id="html8" />
                      <label for="html8"></label>
                    </div>
                    <div className="catecon">
                      <p>Box</p>
                      <p>(17)</p>
                    </div>
                  </div> */}
                </div>
                <div className="fitlertitel ab">
                  <h2>Filters</h2>
                </div>
              </div>
            </div>
            <div className="filterright filter-product w-100">
              <div className="d-flex flex-wrap justify-content-around">
                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct1} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>

                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct2} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>

                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct3} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>

                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct4} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>

                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct5} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>

                <div className="d-flex position-relative product-main">
                  <div className="align-items-end d-flex mx-2 pro2-content">
                    <div className="position-relative product-img z-1 w-25">
                      <img src={filterproduct6} alt="" className="w-100" />
                    </div>
                    <div className="position-relative procontent w-75">
                      <img src={flower} alt="" />
                      <h1>Lorem Ipsum</h1>
                      <p>
                        All-in-one system MESH COIL Up to 5500 Puffs 15ml
                        E-Liquid Capacity
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
                  <span className="position-absolute smokehover">
                    <img src={smokepromotionspan} alt="" />
                  </span>
                </div>
              </div>

              <div class="d-flex justify-content-between mx-5 pagiban">
                <p>Page 1 of 12</p>

                <div class="pagination">
                  <a href="#">
                    <i class="fa-solid fa-chevron-left"></i>
                  </a>
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">. . . . . . . . . . .</a>

                  <a href="#" className="active">
                    50
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sales;
