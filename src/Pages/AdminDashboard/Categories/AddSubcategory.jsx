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

export default function AddSubCategories() {
  const [subCatBrand, setSubCat] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const [metaTagTitle, setMetaTagTitle] = useState("");
  const [metaTagDescription1, setMetaTagDescription1] = useState("");
  const [metaTagDescription2, setMetaTagDescription2] = useState("");
  const [brandID, setBrandID] = useState();
  const status = true;
  //handling all the states in of subcategory edit
  useEffect(() => {
    const getSubBrand = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-all-brands`);
        console.log(res.data);
        setSubCat(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSubBrand();
  }, []);

  console.log(
    "All form data===>",

    selectedBrand,
    subcategoryName,
    metaTagTitle,
    metaTagDescription1,
    metaTagDescription2
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        brand_id: brandID,
        brand_name: selectedBrand,
        category_name: subcategoryName,
        meta_tag_title: metaTagTitle,
        meta_tag_description: metaTagDescription1,
        meta_tag_keywords: metaTagDescription2,
        status,
      };
      const res = await axios.post(`${baseUrl}/create-category`, formData);
      console.log("responese ===>", res);
    } catch (error) {
      console.log(error.message);
    }
  };

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
              <span className="mx-2">Add Brand</span>
            </div>
            <form action="" onSubmit={handleSubmit}>
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
                <input
                  className="py-1 px-2"
                  type="text"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                />
              </div>
              <hr className="text-light my-4" />
              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Title
                </label>
                <input
                  className="py-1 px-2"
                  type="text"
                  value={metaTagTitle}
                  onChange={(e) => setMetaTagTitle(e.target.value)}
                />
              </div>
              <hr className="text-light my-4" />

              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Description
                </label>
                <textarea
                  rows="5"
                  className="py-1 px-2"
                  type="text"
                  value={metaTagDescription1}
                  onChange={(e) => setMetaTagDescription1(e.target.value)}
                ></textarea>
              </div>
              <hr className="text-light my-4" />

              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="">
                  Meta Tag Description
                </label>
                <textarea
                  rows="5"
                  className="py-1 px-2"
                  type="text"
                  value={metaTagDescription2}
                  onChange={(e) => setMetaTagDescription2(e.target.value)}
                ></textarea>
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
