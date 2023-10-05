import React from "react";
import SideBar from "../../../Components/Admin/SideBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";

export default function SelectCatalog() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <h1>CATALOG</h1>
              <hr className="text-light opacity-100" />
            </div>
            <div className="d-flex justify-content-center position-absolute w-100 mx-auto h-75 align-items-center">
              <Link
                className="btn-gradient mx-2 w-25 text-center p-3 rounded-3 text-dark fs-4 fw-bold font-bebas"
                to="/AdminProduct"
              >
                Product
              </Link>
              <Link
                className="btn-gradient mx-2 w-25 text-center p-3 rounded-3 text-dark fs-4 fw-bold font-bebas"
                to="/ThisWeekPromotion"
              >
                This Week Promotion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
