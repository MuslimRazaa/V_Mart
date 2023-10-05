import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/Admin/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faCircleChevronLeft,
  faListUl,
  faPencil,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function ThisWeekPromotion() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>This Week Promotion</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-yellow w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/AddThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="p-3 justify-content-center bg-yellow w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to=""
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Link>
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/SelectCatalog"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Link
                className="add-categorie-btn text-dark rounded-2 px-5 py-2"
                to="/AddThisWeekPromotion"
              >
                Add Product
              </Link>
            </div>
            <div className="add-categorie-list">
              <FontAwesomeIcon color="#fff" icon={faListUl} />
              <span className="mx-2">Promoted Product List</span>
            </div>
            <div className="product-table-parent">
              <div className="product-grid-divide w-100 align-items-center rounded-3 my-3">
                <div className="categori-name p-3">
                  <input type="checkbox" />
                </div>
                <div className="categori-name p-3">
                  <p className="mx-3">Images</p>
                </div>
                <div className="categori-name d-flex align-items-center p-3">
                  <p className="mx-3">Product Name</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <div className="categori-name border-end p-3 text-start">
                  <p>Category</p>
                </div>
                <div className="categori-name border-end p-3 text-center">
                  <p>Price</p>
                </div>
                <div className="categori-name border-end p-3 text-center">
                  <p>Quantity</p>
                </div>
                <div className="categori-name p-3 text-end border-end-0">
                  <p>Action</p>
                </div>
              </div>
              <div className="product-grid-divide-box w-100 align-items-center rounded-3 my-3 text-light">
                <div className="h-100 d-flex align-items-center categori-name p-2">
                  <input type="checkbox" />
                </div>
                <div className="h-100 categori-name text-center p-2">
                  <img
                    className="w-50 rounded-4 border border-1"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-100 categori-name justify-content-between d-flex align-items-center p-2">
                  <p className="mx-3">Product Name</p>
                  <p className="fw-bold text-success">IN STOCK</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 text-start ">
                  <p>Dunhill</p>
                </div>
                <div className="h-100 categori-name border-end p-2 text-end">
                  <p className="text-decoration-line-through">$110.00</p>
                  <p className="text-warning">$90.00</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 justify-content-end">
                  <p>6</p>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-end categori-name p-2 px-3 text-end">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn bg-yellow"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </button>
                  <Link
                    className="btn bg-yellow ms-1"
                    to="/EditThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </div>
              </div>
              <div className="product-grid-divide-box w-100 align-items-center rounded-3 my-3 text-light">
                <div className="h-100 d-flex align-items-center categori-name p-2">
                  <input type="checkbox" />
                </div>
                <div className="h-100 categori-name text-center p-2">
                  <img
                    className="w-50 rounded-4 border border-1"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-100 categori-name justify-content-between d-flex align-items-center p-2">
                  <p className=" mx-3">Product Name</p>
                  <p className="fw-bold text-success">IN STOCK</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 text-start ">
                  <p>Dunhill</p>
                </div>
                <div className="h-100 categori-name border-end p-2 text-end">
                  <p className="text-decoration-line-through">$110.00</p>
                  <p className="text-warning">$90.00</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 justify-content-end">
                  <p>6</p>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-end categori-name p-2 px-3 text-end">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn bg-yellow "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </button>
                  <Link
                    className="btn bg-yellow ms-1"
                    to="/EditThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </div>
              </div>
              <div className="product-grid-divide-box w-100 align-items-center rounded-3 my-3 text-light">
                <div className="h-100 d-flex align-items-center categori-name p-2">
                  <input type="checkbox" />
                </div>
                <div className="h-100 categori-name text-center p-2">
                  <img
                    className="w-50 rounded-4 border border-1"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-100 categori-name justify-content-between d-flex align-items-center p-2">
                  <p className="mx-3">Product Name</p>
                  <p className="fw-bold text-success">IN STOCK</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 text-start ">
                  <p>Dunhill</p>
                </div>
                <div className="h-100 categori-name border-end p-2 text-end">
                  <p className="text-decoration-line-through">$110.00</p>
                  <p className="text-warning">$90.00</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 justify-content-end">
                  <p>6</p>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-end categori-name p-2 px-3 text-end">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn bg-yellow"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </button>
                  <Link
                    className="btn bg-yellow ms-1"
                    to="/EditThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </div>
              </div>
              <div className="product-grid-divide-box w-100 align-items-center rounded-3 my-3 text-light">
                <div className="h-100 d-flex align-items-center categori-name p-2">
                  <input type="checkbox" />
                </div>
                <div className="h-100 categori-name text-center p-2">
                  <img
                    className="w-50 rounded-4 border border-1"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-100 categori-name justify-content-between d-flex align-items-center p-2">
                  <p className="mx-3">Product Name</p>
                  <p className="fw-bold text-danger">OUT STOCK</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 text-start ">
                  <p>Dunhill</p>
                </div>
                <div className="h-100 categori-name border-end p-2 text-end">
                  <p className="text-decoration-line-through">$110.00</p>
                  <p className="text-warning">$90.00</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 justify-content-end">
                  <p>6</p>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-end categori-name p-2 px-3 text-end">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn bg-yellow"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </button>
                  <Link
                    className="btn bg-yellow ms-1"
                    to="/EditThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </div>
              </div>
              <div className="product-grid-divide-box w-100 align-items-center rounded-3 my-3 text-light">
                <div className="h-100 d-flex align-items-center categori-name p-2">
                  <input type="checkbox" />
                </div>
                <div className="h-100 categori-name text-center p-2">
                  <img
                    className="w-50 rounded-4 border border-1"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-100 categori-name justify-content-between d-flex align-items-center p-2">
                  <p className="mx-3">Product Name</p>
                  <p className="fw-bold text-danger">OUT STOCK</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 text-start ">
                  <p>Dunhill</p>
                </div>
                <div className="h-100 categori-name border-end p-2 text-end">
                  <p className="text-decoration-line-through">$110.00</p>
                  <p className="text-warning">$90.00</p>
                </div>
                <div className="h-100 d-flex align-items-center categori-name border-end p-2 justify-content-end">
                  <p>6</p>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-end categori-name p-2 px-3 text-end">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn bg-yellow"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </button>
                  <Link
                    className="btn bg-yellow ms-1"
                    to="/EditThisWeekPromotion"
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </div>
              </div>
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
                className="btn-close text-light position-relative"
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
                data-bs-dismiss="modal"
                className="btn btn-danger"
              >
                Delete Anyway
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">..awdawdawdawd.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
