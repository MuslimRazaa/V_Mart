import React, { useEffect, useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { baseUrl } from "../../../assets/utils/IP";

export default function EditSubCategories() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({
    category_name: "",
    meta_tag_title: "",
    meta_tag_description: "",
    meta_tag_keyword: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/get-categoryById/${id}`);
        setCategoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function when the component mounts
  }, [id]);

  const handleSaveData = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        "category_name": categoryData.category_name,
        "meta_tag_title": categoryData.meta_tag_title,
        "meta_tag_description": categoryData.meta_tag_description,
        "meta_tag_keyword": categoryData.meta_tag_keyword,
      });

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${baseUrl}/category-update/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value,
    });
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
              <span className="mx-2">Edit Subcategory</span>
            </div>
            <form action="" onSubmit={handleSaveData}>
              <div className="grid-add d-grid align-items-center my-4">
                <label className="text-light d-block text-end" htmlFor="category_name">
                  Subcategory Name
                </label>
                <input
                  className="py-1 px-2"
                  type="text"
                  name="category_name"
                  value={categoryData.category_name}
                  onChange={handleInputChange}
                />
              </div>
              <hr className="text-light my-4" />
              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="meta_tag_title">
                  Meta Tag Title
                </label>
                <input
                  className="py-1 px-2"
                  type="text"
                  name="meta_tag_title"
                  value={categoryData.meta_tag_title}
                  onChange={handleInputChange}
                />
              </div>
              <hr className="text-light my-4" />
              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="meta_tag_description">
                  Meta Tag Description
                </label>
                <textarea
                  rows="5"
                  className="py-1 px-2"
                  name="meta_tag_description"
                  value={categoryData.meta_tag_description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <hr className="text-light my-4" />
              <div className="grid-add d-grid my-4">
                <label className="text-light d-block text-end" htmlFor="meta_tag_keyword">
                  Meta Tag Keyword
                </label>
                <textarea
                  rows="5"
                  className="py-1 px-2"
                  name="meta_tag_keyword"
                  value={categoryData.meta_tag_keyword}
                  onChange={handleInputChange}
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
