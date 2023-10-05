import React, { useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../../assets/utils/IP";
import axios from "axios";
import { useEffect } from "react";
import ImageUploader from "../../../Components/Admin/ImageUploader";

export default function EditBrand() {
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [dispplayedImage, setDispplayedImage] = useState();

  const location = useLocation();
  const [brandName, setName] = useState();
  const [id, setID] = useState();
  const [initialImage, setInitialImage] = useState();

  useEffect(() => {
    if (location.state) {
      setName(location.state.brand_name);
      setID(location.state.brand_id);
      setInitialImage(`${baseUrl}/${location.state.brand_logo || ""}`);
      console.log("yhn pe", location.state.brand_logo); // Provide a default value if brand_logo is undefined
    }
  }, [location.state]);
  console.log("inital image", initialImage);
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
    console.log("File changed", file);

    if (!file) {
      return;
    }
    const reader = new FileReader();
    if (file instanceof Blob) {
      console.log("Slected file", selectedFile);
      setSelectedFile(file);
      reader.onloadend = () => {
        setDispplayedImage(reader.result);
        // Store the base64 encoded image data in state
        console.log("Displainf image =>", dispplayedImage);
      };
      reader.readAsDataURL(file);
    } else {
      // Handle the case where 'file' is not a valid Blob object
      console.error("Invalid file object:", file);

      // Set the 'dispplayedImage' back to the previous image URL

      setDispplayedImage(reader.result);
      console.log("reader result", reader.result);
    }
    // if (file) {
    //   setSelectedFile(file);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setDispplayedImage(reader.result);
    //     // Store the base64 encoded image data in state
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   // setSelectedFile(initialImage);
    //   console.log("Hello in else file change");
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setDispplayedImage(initialImage);
    //     // Store the base64 encoded image data in state
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("in handle savaeda s");
    const FormData = require("form-data");
    // const fs = require("fs");
    let data = new FormData();
    console.log("brand Name Coming from the state =>>>>", brandName);
    data.append("brand_name", brandName);

    if (selectedFile) {
      console.log("In selected if=>>", selectedFile);
      data.append("brand_logo", selectedFile);
    } else {
      // If no new image is selected, send the initial image

      const image = initialImage.substring(initialImage.lastIndexOf("/") + 1);
      console.log("image address after ", image);

      data.append("brand_logo", image);
    }
    console.log("Data append Before saving", data);
    const res = await axios.put(`${baseUrl}/brand-update/${id}`, data);
    console.log(res.data);
    setName("");
    setDispplayedImage();
    setInitialImage();
  };

  const handleShowFile = () => {
    alert("your file is selected");
  };

  // console.log(id, brandName);
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>EDIT BRAND</h1>
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
              <span className="mx-2">Edit Brand</span>
            </div>
            <form action="">
              <div className="grid-add d-grid align-items-center my-5">
                <label className="text-light d-block text-end" htmlFor="">
                  <span className="text-warning">*</span>Brand Name
                </label>
                <input
                  value={brandName}
                  onChange={(e) => setName(e.target.value)}
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
                    <ImageUploader title="Upload Image"/>
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
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
