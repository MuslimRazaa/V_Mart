import React, { useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../../assets/utils/IP";
import axios from "axios";
import ImageUploader from "../../../Components/Admin/ImageUploader";

export default function AddBrand() {
  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [dispplayedImage, setDispplayedImage] = useState();

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log("File:", file); // Log the file object
  //   if (file) {
  //     setSelectedFile(file);
  //     console.log(selectedFile, "-----image"); // Store the file object in state
  //   }
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file:", file); // Log the file object
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setDispplayedImage(reader.result);
        // Store the base64 encoded image data in state
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("in handle savaeda s");
    const FormData = require("form-data");
    // const fs = require("fs");
    let data = new FormData();
    console.log("brandadsa =>>>>", brandName);
    data.append("brand_name", brandName);
    data.append("brand_logo", selectedFile);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseUrl}/brand-create`,

      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    setBrandName("");
    setDispplayedImage();
  };

  const handleShowFile = () => {
    alert("your file is selected");
  };

  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>BRAND CATEGORIES</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/BrandCategories"
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
            <form action="">
              <div className="grid-add d-grid align-items-center my-5">
                <label className="text-light d-block text-end" htmlFor="">
                  <span className="text-warning">*</span>Brand Name
                </label>
                <input
                  value={brandName}
                  onChange={(e) => {
                    setBrandName(e.target.value);
                  }}
                  className="py-1 px-2"
                  type="text"
                  required
                />
              </div>
              <div className="grid-add d-grid my-5">
                <label className="text-light d-block text-end" htmlFor="">
                  <span className="text-warning">*</span>Upload Image
                </label>
                <div className="row">
                  <div className="col-lg-4">
                    <ImageUploader title="Upload Image" />
                  </div>
                </div>
                {/* <ImgUpload /> */}
                <input
                  type="file"
                  class="image-input"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <span>
                  <img
                    class="img-plus"
                    src={dispplayedImage}
                    alt=""
                    onClick={() => {
                      document.getElementById("fileInput").click();
                    }}
                    style={{ width: "200px" }}
                  />
                </span>
              </div>
              <div className="grid-add d-grid align-items-center my-4">
                <label htmlFor=""></label>
                <input
                  className="fw-bold add-save-btn rounded-3 border-0"
                  type="submit"
                  value="Save"
                  onClick={handleSave}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog delet-popup">
          <div className="modal-content p-3 rounded-5">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close text-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">
              <FontAwesomeIcon color="green" fontSize="80px" icon={faCheck} />{" "}
              <h1 className="text-light">Add Product Successfully </h1>
            </div>
            {/* <div className="modal-footer justify-content-center border-0">
            
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
