import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload, MdDelete } from "react-icons";
import { AiFillFileImage } from "react-icons/ai";
import PlusCirc from "../../assets/images/plus-circ.png";
import "./imageUploader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ImageUploader({ title }) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const imagesArray = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
        return null

      })



    }
  }

  const handleRemoveImage = (index) => {
    console.log("here");
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));

  }

  return (
    <div class="right-parent">
      <div class="image-box-parent">
        <div class="image-box-heading"></div>
        <div class="image-box" onclick="selectImage(this)">
          <input
            type="file"
            class="image-input"
            id="fileInput"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <p className="text-center">
            <span>
              <img
                class="img-plus"
                src={PlusCirc}
                alt=""
                onClick={() => {
                  document.getElementById("fileInput").click();
                }}
              />
            </span>
            {title}
          </p>




          {/* {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" width="200" />
            </div>
          )}
          {selectedImage ? (
            ""
          ) : (
            <p className="text-center">
              <span>
                <img
                  class="img-plus"
                  src={PlusCirc}
                  alt=""
                  onClick={() => {
                    document.getElementById("fileInput").click();
                  }}
                />
              </span>
              Upload Product Image
            </p>
          )} */}
        </div>

        {selectedImages.length > 0 ? (
          <div className="d-flex justify-content-around flex-wrap mt-3 uploaded-images">
            {selectedImages.map((image, index) => {
              console.log("Images", image, "Index", index);
              return (
                <div key={index} className="position-relative align-items-center bg-white border d-flex mx-2 my-3 px-2 rounded-3 image-uploader-width">
                  <img src={image} alt={`Selected ${index}`} className="w-100" />
                  <span onClick={() => handleRemoveImage(index)} className="bg-white border position-absolute rounded-5 shadow text-danger cross-btn" ><FontAwesomeIcon icon={faTimes} /></span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="alert alert-warning mt-2">Currently No images uploaded</div>
        )




        }



      </div>
    </div>
  );
}
