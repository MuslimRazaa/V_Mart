import React, { useEffect, useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { baseUrl } from "../../../assets/utils/IP";

export default function EditSubCategories() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>SUBCATEGORIES</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/SubCategories"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="add-categorie-list mt-5">
              <FontAwesomeIcon color="#fff" icon={faPencil} />
              <span className="mx-2">Edit Subcategory</span>
            </div>
            <form action="">
              {/* <div className="grid-add d-grid align-items-center my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  <span className="text-warning">*</span>Select Brand
                </label>

                <select
                  className="py-1 px-2"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="">Select Brand</option>
                  {subCatBrand.map((categories, index) => (
                    <option key={index} value={categories.brand_id}>
                      {categories.brand_name}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="grid-add d-grid align-items-center my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Subcategory Name
                </label>
                <input className="py-1 px-2" type="text" />
              </div>
              <hr className="text-light my-4" />
              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Title
                </label>
                <input className="py-1 px-2" type="text" />
              </div>
              <hr className="text-light my-4" />

              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Description
                </label>
                <textarea rows="5" className="py-1 px-2" type="text"></textarea>
              </div>
              <hr className="text-light my-4" />

              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Description
                </label>
                <textarea rows="5" className="py-1 px-2" type="text"></textarea>
              </div>
              <div className="grid-add d-grid my-4">
                <label htmlFor=""></label>
                <input
                  className="fw-bold add-save-btn rounded-3 border-0 ms-auto"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
