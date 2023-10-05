import React from "react";
import SideBar from "../../../Components/Admin/SideBar";
import Graph from "../../../Components/Admin/Graph";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChartSimple,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

export default function DashboardAdmin() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent ">
          <div className="sec-side-fi-text justify-content-center border-text">
            <h1 className="text-light text-center display-2">Dashboard</h1>
            <hr className="text-light opacity-100" />
          </div>
          <div className="main-without-heading p-5">
            <div className="parent-boxes-flex row">
              <div className="col-lg-3 p-3">
                <div className="parent-box-img">
                  <div className="text-center pt-2">
                    <FontAwesomeIcon
                      color="#fff"
                      fontSize="100px"
                      icon={faChartSimple}
                    />
                  </div>
                  <p className="text-center text-light fs-4 pt-3 m-0">
                    Total Sales
                  </p>
                  <h1 className="text-light fs-70 text-center">$8.4k</h1>
                  <div class="text-center mt-4 ">
                    <Link
                      className="py-2 btn-gradient d-table w-75 mx-auto rounded-pill text-dark fw-bold font-bebas"
                      to="/AdminSales"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 p-3">
                <div className="parent-box-img">
                  <div className="text-center pt-2">
                    <FontAwesomeIcon
                      color="#fff"
                      fontSize="100px"
                      icon={faCartShopping}
                    />
                  </div>
                  <p className="text-center text-light fs-4 pt-3 m-0">
                    Cancelled Order
                  </p>
                  <h1 className="text-light fs-70 text-center">30</h1>
                  <div class="text-center mt-4 ">
                    <Link
                      className="py-2 btn-gradient d-table w-75 mx-auto rounded-pill text-dark fw-bold font-bebas"
                      to="/AdminSales"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 p-3">
                <div className="parent-box-img">
                  <div className="text-center pt-2">
                    <FontAwesomeIcon
                      color="#fff"
                      fontSize="100px"
                      icon={faCartShopping}
                    />
                  </div>
                  <p className="text-center text-light fs-4 pt-3 m-0">
                    Pending Orders
                  </p>
                  <h1 className="text-light fs-70 text-center">50</h1>
                  <div class="text-center mt-4 ">
                    <Link
                      className="py-2 btn-gradient d-table w-75 mx-auto rounded-pill text-dark fw-bold font-bebas"
                      to="/AdminSales"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 p-3">
                <div className="parent-box-img">
                  <div className="text-center pt-2">
                    <FontAwesomeIcon
                      color="#fff"
                      fontSize="100px"
                      icon={faCartShopping}
                    />
                  </div>
                  <p className="text-center text-light fs-4 pt-3 m-0">
                    Total Order
                  </p>
                  <h1 className="text-light fs-70 text-center">80</h1>
                  <div class="text-center mt-4 ">
                    <Link
                      className="py-2 btn-gradient d-table w-75 mx-auto rounded-pill text-dark fw-bold font-bebas"
                      to="/AdminSales"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-parent-flex row">
              <div className="col-lg-6">
                <div className="graph my-4">
                  <Graph />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="graph my-4">
                  <Graph />
                </div>
              </div>
            </div>
            <div className="latest-order-box-parent">
              <div className="latest-order-flex">
                <img src="assets/imgs/Group-22.png" alt="" />
                <span>Latest Orders</span>
              </div>
              <div className="fi-order-box">
                <ul className="order-list">
                  <li>Order ID</li>
                  <li>Customer</li>
                  <li>Status</li>
                  <li>Date Added</li>
                  <li>Total</li>
                  <li>Action</li>
                </ul>
              </div>
              <div className="sec-order-box py-4 border my-4 rounded rounded-3">
                <ul className="sec-order-list text-light">
                  <li>#1111</li>
                  <li>Mark Allen</li>
                  <li className="set-color-icn">
                    <FontAwesomeIcon
                      className="me-1 text-danger"
                      icon={faCircleDot}
                    />
                    Pending
                  </li>
                  <li>28 Mar 2023</li>
                  <li>$99.00</li>
                  <li>
                    <Link to="/SalesView">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sec-order-box py-4 border my-4 rounded rounded-3">
                <ul className="sec-order-list text-light">
                  <li>#1111</li>
                  <li>Mark Allen</li>
                  <li className="set-color-icn2">
                    <FontAwesomeIcon
                      className="me-1 text-success"
                      icon={faCircleDot}
                    />
                    Shipped
                  </li>
                  <li>28 Mar 2023</li>
                  <li>$99.00</li>
                  <li>
                    <Link to="/SalesView">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sec-order-box py-4 border my-4 rounded rounded-3">
                <ul className="sec-order-list text-light">
                  <li>#1111</li>
                  <li>Mark Allen</li>
                  <li className="set-color-icn">
                    <FontAwesomeIcon
                      className="me-1 text-danger"
                      icon={faCircleDot}
                    />
                    Pending
                  </li>
                  <li>28 Mar 2023</li>
                  <li>$99.00</li>
                  <li>
                    <Link to="/SalesView">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sec-order-box py-4 border my-4 rounded rounded-3">
                <ul className="sec-order-list text-light">
                  <li>#1111</li>
                  <li>Mark Allen</li>
                  <li className="set-color-icn">
                    <FontAwesomeIcon
                      className="me-1 text-danger"
                      icon={faCircleDot}
                    />
                    Pending
                  </li>
                  <li>28 Mar 2023</li>
                  <li>$99.00</li>
                  <li>
                    <Link to="/SalesView">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
