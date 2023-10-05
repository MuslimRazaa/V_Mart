import React, { useEffect, useState } from "react";
import SideBar from "../../../Components/Admin/SideBar";
import Graph from "../../../Components/Admin/Graph";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faCircleChevronLeft,
  faListUl,
  faPencil,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { baseUrl } from "../../../assets/utils/IP";

export default function BrandCategories() {
  const [brands, setBrands] = useState()
  const [deleteIdProduct, setDeletedIdProduct] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/get-all-brands`);
        console.log(JSON.stringify(response.data));
        setBrands(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function when the component mounts
  }, []);


  const handleDeleteClick = (catId) => {
    setDeletedIdProduct(catId);
  };

  const handleDelete = async (id) => {
    try {
      console.log("id =>>>", id);
      const res = await axios.delete(`${baseUrl}/brand-delete/${id}`);
      console.log("its deleted response =>>", res.data);
      setBrands((prevBrand) =>
      prevBrand.filter((brand) => brand.brand_id !== id)
    );
    } catch (error) {
      console.error("Error deleting product:", error);
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
                <h1>BRANDS</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-yellow w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/AddBrand"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                  <Link
                    className="p-3 justify-content-center bg-yellow w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to=""
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Link>
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/CategorySelect"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>

            <div className="d-flex justify-content-end mt-4">
              <Link
                className="add-categorie-btn text-dark rounded-2 px-5 py-2 font-bebas"
                to="/AddBrand"
              >
                Add Brand
              </Link>
            </div>
            <div className="add-categorie-list">
              <FontAwesomeIcon color="#fff" icon={faListUl} />
              <span className="mx-2">Brands List</span>
            </div>
            <div className="categories-parent-table-box">
              <div className="brand-categorie-table-box w-100 align-items-center rounded-3 my-3">
                <div className="categori-name d-flex align-items-center p-3">
                  <input type="checkbox" />
                  <p className="mx-3">Brands</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>

                <div className="border-end p-3 text-end">
                  <p>Number of Products</p>
                </div>
                <div className="p-3 text-end">
                  <p>Action</p>
                </div>
              </div>

              {brands?.map((brand) => (
        <div
          key={brand.brand_id}
          className="brand-categorie-table-box-sec text-light w-100 align-items-center rounded-3 my-2"
        >
          <div className="categori-name d-flex align-items-center p-3">
            <input type="checkbox" />
            <p className="mx-3">{brand.brand_name}</p>
          </div>

          <div className="border-end text-end p-3">
            <p>{brand.product_count}</p>
          </div>
          <div className="p-2 px-3 text-end">
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn bg-yellow me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleDeleteClick(brand.brand_id)}
            >
              <FontAwesomeIcon color="red" icon={faTrash} />
            </button>
            <Link to={`/EditBrand/${brand.brand_id}`} className="btn bg-yellow">
              <FontAwesomeIcon icon={faPencil} />
            </Link>
          </div>
        </div>
      ))}
            </div>
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
        <div className="modal-dialog delet-popup d-flex align-items-center justify-content-center h-100">
          <div className="modal-content p-3 rounded-5">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close text-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center delete-modal-responsive">
              <FontAwesomeIcon color="red" fontSize="80px" icon={faTrash} />{" "}
              <h1 className="text-light">
                You are about to delete this product
              </h1>
            </div>
            <div className="modal-footer justify-content-center border-0">
              <button
                type="button"
                className="btn btn-gradient"
                data-bs-dismiss="modal"
              >
                Go Back
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={()=> handleDelete(deleteIdProduct)}
              >
                Delete Anyway
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
