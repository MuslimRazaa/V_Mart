import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SideBar from "../../../Components/Admin/SideBar";
import { Link } from "react-router-dom";
import Editor from "../../../Components/Admin/CKeditor";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import ImageUploader from "../../../Components/Admin/ImageUploader";
import { useEffect } from "react";
import { useState } from "react";
// import { baseUrl } from "../../../assets/utils/IP";

export default function AddThisWeekPromotion() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-59">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>This Week Promotion</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/ThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="add-categorie-list mt-5">
              <FontAwesomeIcon color="#fff" icon={faPencil} />
              <span className="mx-2">Add Product</span>
            </div>
            <form action="">
              <div className="row">
                <div className="col-lg-9">
                  <div className="grid-add d-grid align-items-center my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      <span className="text-warning">*</span>Product Name
                    </label>
                    <input className="py-1 px-2" type="text" />
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid align-items-center my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Select Brand
                    </label>
                    <select className="py-1 px-2 border">
                      <option>Select Brand</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Select Sub-Category
                    </label>
                    <select className="py-1 px-2 border">
                      <option value="">Select Sub-category</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Short Description
                    </label>
                    <input type="text" />
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Long Description
                    </label>
                    <Editor
                      name="description"
                      onChange={(data) => {
                        setData(data);
                      }}
                      editorLoaded={editorLoaded}
                    />
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Regular Price
                    </label>
                    <input type="text" />
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Sale Price
                    </label>
                    <input type="text" />
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Manage Stock
                    </label>
                    <div className="text-start">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Quantity
                    </label>

                    <input type="text" className="py-1 px-2" />
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      <span className="text-warning">*</span>Add Frequently
                      Bought Together Products
                    </label>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 1
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 2
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 3
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      <span className="text-warning">*</span>Add You May Also
                      Like Products
                    </label>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 1
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 2
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 3
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 4
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Select Product</option>
                      <option value="">Select Product1</option>
                      <option value="">Select Product2</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label htmlFor=""></label>
                    <input
                      className="fw-bold add-save-btn rounded-3 border-0 ms-auto"
                      type="submit"
                      value="Save"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <ImageUploader title="Upload Multiple Image"/>
                    </div>
                    <div className="col-lg-12 text-end">
                      <input
                        className="fw-bold w-50 add-save-btn rounded-3 border-0 ms-auto"
                        type="submit"
                        value="Upload"
                      />
                    </div>
                  </div>
                  <div className="px-1">
                    <div className="row my-3 bg-light">
                      <div className="col-7 p-0">
                        <div className="bg-cross-img p-3 fw-bold">
                          COST CALCULATOR
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="p-3 fw-bold">VALUES</div>
                      </div>
                    </div>
                    <div className="row border-bottom border-2">
                      <div className="col-lg-8 bg-light p-3">
                        <label className="p-2 fw-bold" htmlFor="">
                          Cost of Product
                        </label>
                      </div>
                      <div className="col-lg-4 bg-light p-3 bg-400-grey">
                        <input className="w-100 p-1" type="number" />
                      </div>
                    </div>
                    <div className="row border-bottom border-2">
                      <div className="col-lg-8 bg-light p-3">
                        <label className="p-2 fw-bold" htmlFor="">
                          Original Selling Price
                        </label>
                      </div>
                      <div className="col-lg-4 bg-light p-3 bg-400-grey">
                        <input className="w-100 p-1" type="number" />
                      </div>
                    </div>
                    <div className="row border-bottom border-2">
                      <div className="col-lg-8 bg-light p-3">
                        <label className="p-2 fw-bold" htmlFor="">
                          Discounted Price
                        </label>
                      </div>
                      <div className="col-lg-4 bg-light p-3 bg-400-grey">
                        <input className="w-100 p-1" type="number" />
                      </div>
                    </div>
                    <div className="row border-bottom border-2">
                      <div className="col-lg-8 bg-light p-3">
                        <label className="p-2 fw-bold" htmlFor="">
                          Marketing Cost
                        </label>
                      </div>
                      <div className="col-lg-4 bg-light p-3 bg-400-grey">
                        <input className="w-100 p-1" type="number" />
                      </div>
                    </div>
                    <div className="row border-bottom border-2">
                      <div className="col-lg-8 bg-light p-3">
                        <label className="p-2 fw-bold" htmlFor="">
                          Estimated Profit
                        </label>
                      </div>
                      <div className="col-lg-4 bg-light p-3 bg-400-grey">
                        <input className="w-100 p-1" type="number" />
                      </div>
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button className="btn-gradient p-2 border-0 rounded">
                      Suggest Price
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
