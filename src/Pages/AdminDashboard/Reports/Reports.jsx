import React, { useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChartColumn,
  faCircleChevronLeft,
  faDownload,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../../assets/utils/IP";
import axios from "axios";

export default function Reports() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>REPORTS</h1>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="mt-5">
              <h5 className="bg-golden-gradeint p-2 m-0">
                <FontAwesomeIcon icon={faChartColumn} /> Choose the report type
              </h5>
              <div className="p-4 blur-white">
                <select className="w-100 p-2">
                  <option value="">Total Sales</option>
                  <option value="">Total Orders</option>
                  <option value="">Cancelled Orders</option>
                  <option value="">Pending Orders</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="bg-golden-gradeint p-2 m-0 d-flex justify-content-between">
                <p>
                  <FontAwesomeIcon icon={faChartColumn} /> Total Sales
                </p>
                <div className="reports-table-reports-sec text-end d-flex">
                  <p className=" me-4">Date Range</p>
                  <span className="cursor-pointer rel-two-span position-relative ">
                    <FontAwesomeIcon
                      className="cursor-pointer position-absolute end-0 bg-light p-1 px-3 rounded"
                      icon={faCalendar}
                    />
                    <input className="date-inp" type="date" />
                  </span>
                  <span className="cursor-pointer rel-two-span position-relative ms-2">
                    <FontAwesomeIcon
                      className="cursor-pointer position-absolute end-0 bg-light p-1 px-3 rounded"
                      icon={faCalendar}
                    />
                    <input className="date-inp" type="date" />
                  </span>
                </div>
              </h5>
              <div className="reports-blur border">
                <div className="grid-report border">
                  <div className="border p-2 text-center">
                    <input type="checkbox" />
                  </div>
                  <div className="border  p-2">
                    <p>Customer Name</p>
                  </div>
                  <div className="border  p-2">
                    <p>Product</p>
                  </div>
                  <div className="border  p-2">
                    <p>Price</p>
                  </div>
                  <div className="border  p-2">
                    <p>Price</p>
                  </div>
                  <div className="border  p-2">
                    <p>Action</p>
                  </div>
                </div>
                <div className="d-grid grid-no-result p-2 text-center text-light">
                  <p>No Result</p>
                  <p>
                    <FontAwesomeIcon className="fs-4" icon={faDownload} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
