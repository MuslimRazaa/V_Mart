import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import { Link } from "react-router-dom";
import Editor from "../../../Components/Admin/CKeditor";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import axios from "axios";
import { baseUrl } from "../../../assets/utils/IP";
import ImageUploader from "../../../Components/Admin/ImageUploader";

export default function EditProduct() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [showStock, setShowStock] = useState(false);
  //category data
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [selectedImages, setSelectedImages] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  const handleImageChange = (index, images) => {
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages[index] = images;
    setSelectedImages(updatedSelectedImages);
  };
  //sub categories useEffect
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-all-category`);
        console.log(res.data);
        setCategory(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCategory();
  }, []);

  //get all Brands category
  useEffect(() => {
    const getBrands = async () => {
      console.log("Here");
      try {
        const response = await axios.get(`${baseUrl}/get-all-brands`);
        if (response?.status == 200) {
          setBrand(response?.data);
          console.log("data coming =>>>", response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getBrands();
  }, []);

  const [product, setProduct] = useState({
    product_name: "",
    brand_id: "",
    category_id: "",
    description_1: "",
    description_2: "",
    regular_price: "",
    sale_price: "",
    quantity: "",
  });
  console.log("SUb cat product", product);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/create-product`, product);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-59">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>Edit Products</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/AdminProduct"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="add-categorie-list mt-5">
              <FontAwesomeIcon color="#fff" icon={faPencil} />
              <span className="mx-2">Edit Product</span>
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
                      <option value="">Select Category</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Short Description
                    </label>
                    <textarea name="" className="p-1" rows="3"></textarea>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Long Description
                    </label>
                    <Editor
                      name="description"
                      value={product.description_2}
                      onChange={(data) => {
                        setProduct({ ...product, description_2: data });
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

                  {showStock && (
                    <div className="grid-add d-grid my-4">
                      <label className="text-light d-block text-end" htmlFor="">
                        Quantity
                      </label>

                      <input type="text" className="py-1 px-2" />
                    </div>
                  )}

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
                      <option value="">Product</option>
                      <option value="">Product</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 2
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Product</option>
                      <option value="">Product</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 3
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Product</option>
                      <option value="">Product</option>
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
                      <option value="">Product</option>
                      <option value="">Product</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 2
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Product</option>
                      <option value="">Product</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 3
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Product</option>
                      <option value="">Product</option>
                    </select>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Product 4
                    </label>
                    <select className="p-1 w-100" name="" id="">
                      <option value="">Product</option>
                      <option value="">Product</option>
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
                      <ImageUploader title="Upload Multiple Image" />
                    </div>
                   
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
