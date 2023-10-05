import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/Admin/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faCircleChevronLeft,
  faListUl,
  faFilter,
  faPencil,
  faPlus,
  faTrash,
  faEye,
  faStar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

export default function ManageReviews() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>Edit Review</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/ManageReviews"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>

            <div className="edit-mange-cent position-relative">
              <div className="edit-mnge-heading">
                <h3>Product Name</h3>
              </div>
              <div className="edit-mnge-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <hr className="hr-edit-cust" />
            <div className="edit-cust-grid">
              <div className="edit-cust-grid-inner text-end">
                <p>Name</p>
              </div>
              <div className="edit-cust-grid-inner">
                <input type="text" placeholder="Mark Allen" />
              </div>
            </div>
            <hr className="hr-edit-cust" />
            <div className="edit-cust-grid">
              <div className="edit-cust-grid-inner text-end">
                <p>Email</p>
              </div>
              <div className="edit-cust-grid-inner">
                <input type="email" placeholder="mark_allen@gmail.com" />
              </div>
            </div>
            <hr className="hr-edit-cust" />
            <div className="edit-cust-grid">
              <div className="edit-cust-grid-inner text-end">
                <p>Review Title</p>
              </div>
              <div className="edit-cust-grid-inner">
                <input type="text" placeholder="Lorem ipsum dolor sit" />
              </div>
            </div>
            <hr className="hr-edit-cust" />
            <div className="edit-cust-grid">
              <div className="edit-cust-grid-inner text-end h-100">
                <p>Review Message</p>
              </div>
              <div className="edit-cust-grid-inner">
                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Link
                className="py-2 px-4 rounded  bg-success mx-2 text-light "
                // to="/ManageReviews"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Approved
              </Link>
              <Link
                className="py-2 px-4 rounded  bg-danger mx-2 text-light "
                to="/ManageReviews"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Declined
              </Link>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pagi mnge-rev-pagi">
                {/* <img src={Pagi} alt="" /> */}
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
              <Link
                to="/ManageReviews"
                className="btn-close text-dark position-relative bg-yellow d-flex align-items-center justify-content-center rounded-pill"
                data-bs-dismiss="modal"
              >
                X
              </Link>
            </div>
            <div className="modal-body text-center delete-modal-responsive">
              <FontAwesomeIcon color="green" fontSize="80px" icon={faCheck} />
              <h1 className="text-light">Review has Been Approved</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog delet-popup d-flex align-items-center justify-content-center h-100">
          <div className="modal-content p-3 rounded-5">
            <div className="modal-header border-0">
              <Link
                to="/ManageReviews"
                className="btn-close text-dark position-relative bg-yellow d-flex align-items-center justify-content-center rounded-pill"
                data-bs-dismiss="modal"
              >
                X
              </Link>
            </div>
            <div className="modal-body text-center delete-modal-responsive">
              <FontAwesomeIcon color="red" fontSize="80px" icon={faTrash} />
              <h1 className="text-light">Review has Been Declined</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
