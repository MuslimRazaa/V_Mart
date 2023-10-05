import React, { useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../../assets/utils/IP";
import axios from "axios";

export default function AddBrand() {
  const [brandName, setBrandName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setDisplayedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      // Handle the case where no file is selected
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("brand_name", brandName);
    formData.append("brand_logo", selectedFile);

    try {
      const response = await axios.post(`${baseUrl}/brand-create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      console.log(response.data);
      setBrandName("");
      setDisplayedImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
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
                    <input
                      type="file"
                      className="image-input"
                      id="fileInput"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="fileInput"
                      className="img-plus"
                      style={{ width: "200px" }}
                    >
                      {displayedImage ? (
                        <img
                          src={displayedImage}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      ) : (
                        <span style={{color:"yellow"}}>+ Click to upload image</span>
                      )}
                    </label>
                  </div>
                </div>
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
