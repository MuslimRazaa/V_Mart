import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/Admin/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faCircleChevronLeft,
  faListUl,
  faFilter,
  faPencil,
  faPlus,
  faTrash,
  faEye,
  faCalendar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Customer() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>Customer</h1>
                <div className="boxs-flex"></div>
              </div>
              <hr className="text-light opacity-100" />
            </div>

            <div className="row pd-customer-row">
              <div className="col-lg-8 border border-2 rounded-5 px-5 py-3">
                <div className="add-categorie-list">
                  <FontAwesomeIcon color="#fff" icon={faListUl} />
                  <span className="mx-2">Customers List</span>
                </div>
                <div className="grid-sales-parent grid-customer-parent py-4">
                  <div className="grid-sales grid-customer text-dark">
                    <div className="inner-grid-sales">
                      <p>Customer Name</p>
                    </div>
                    <div className="inner-grid-sales text-start ">
                      <p className="justify-content-start">Email</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Contact #</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Status</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Date Added</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Action</p>
                    </div>
                  </div>

                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Enabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Disabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Enabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Enabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Disabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Enabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="grid-sales grid-customer grid-sales-two border border-1 text-light">
                    <div className="inner-grid-sales">
                      <p>Mark Allen</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p className="justify-content-start">
                        mark_allen@gmail.com
                      </p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>123 456 7890</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>Disabled</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>20/12/2023</p>
                    </div>
                    <div className="inner-grid-sales">
                      <p>
                        <Link to="/CustomerEdit">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <div className="pagi"><img src={Pagi} alt="" /></div>
                  <div className="txt-right-pagi text-light">
                    <p>Showing 1 to 10 of 90 (9 Pages)</p>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4">
                <div className="filter-box-parent">
                  <div className="filter-box-heading">
                    <h3 className="text-dark">
                      <FontAwesomeIcon icon={faFilter} />
                      Filter
                    </h3>
                  </div>
                  <div className="filter-box-body">
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtone">Order ID</label>
                      <input type="text" id="filtone" placeholder="Order ID" />
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filttwo">Customer</label>
                      <input type="text" id="filttwo" placeholder="Customer" />
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtthree">Brand</label>
                      <select className="w-100 fs-7 p-2" name="" id="">
                        <option value="">Dunhill</option>
                        <option value="">Long Beach</option>
                        <option value="">Dunhill</option>
                      </select>
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtthree">Status</label>
                      <select className="w-100 fs-7 p-2" name="" id="">
                        <option value="">Enabled</option>
                        <option value="">Disabled</option>
                      </select>
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtfour">Total</label>
                      <input type="text" id="filtfour" placeholder="Total" />
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtfive">Date From</label>
                      <div className="position-relative">
                        <input
                          className="date-inpt position-relative"
                          type="date"
                          id="filtfive"
                        />
                        <FontAwesomeIcon
                          className="h-75 me-1 mt-1 position-absolute end-0"
                          icon={faCalendar}
                          color="SaddleBrown"
                          fontSize="14px"
                        />
                      </div>
                    </div>
                    <div className="filter-lb-inp-parent">
                      <label htmlFor="filtsix">Date To</label>
                      <div className="position-relative">
                        <input
                          className="date-inpt position-relative"
                          type="date"
                          id="filtsix"
                        />
                        <FontAwesomeIcon
                          className="h-75 me-1 mt-1 position-absolute end-0"
                          icon={faCalendar}
                          color="SaddleBrown"
                          fontSize="14px"
                        />
                      </div>
                    </div>
                    <div className="reset-filt-parent">
                      <input type="reset" value="Reset" />
                      <button>
                        <FontAwesomeIcon icon={faFilter} />
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
