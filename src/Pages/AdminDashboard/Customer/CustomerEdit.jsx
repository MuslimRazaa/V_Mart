import React from "react";
import SideBar from "../../../Components/Admin/SideBar";
import ImgUpload from "../../../Components/Admin/ImgUpload";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

export default function CustomerDetails() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>Customer Detail</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/Customer"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>

            <form action="">
              <div className="border px-4 py-2 rounded-4 w-85 my-5">
                <div className="add-categorie-list mt-2">
                  <FontAwesomeIcon color="#fff" icon={faPencil} />
                  <span className="mx-2">Edit Customer</span>
                </div>

                <div className="add-categorie-list mt-5">
                  <span className="mx-2">Customer Details</span>
                  <hr className="text-light " />
                </div>

                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    <span className="text-warning">*</span>First Name
                  </label>
                  <input className="py-1 px-2" type="text" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    Last Name
                  </label>
                  <input className="py-1 px-2" type="text" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    Email
                  </label>
                  <input className="py-1 px-2" type="email" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    Contact #
                  </label>
                  <input className="py-1 px-2" type="number" />
                </div>
                <hr className="text-light my-4" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    Street Address
                  </label>
                  <input className="py-1 px-2" type="text" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    City
                  </label>
                  <input className="py-1 px-2" type="text" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    State
                  </label>
                  <input className="py-1 px-2" type="text" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    Passport Number/ Identity Number
                  </label>
                  <input className="py-1 px-2" type="number" />
                </div>

                <div className="add-categorie-list mt-5">
                  <span className="mx-2">Change Password</span>
                  <hr className="text-light " />
                </div>
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    <span className="text-danger">*</span>Password
                  </label>
                  <input className="py-1 px-2" type="password" />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid align-items-center my-3">
                  <label className="text-light d-block text-end" htmlFor="">
                    <span className="text-danger">*</span>Confirm
                  </label>
                  <input className="py-1 px-2" type="password" />
                </div>
                <hr className="text-light" />
                <div className="add-categorie-list mt-5">
                  <span className="mx-2">Other</span>
                  <hr className="text-light " />
                </div>
                <div className="edit-customer-grid d-grid align-items-center my-3 form-check form-switch p-0">
                  <label className="text-light d-block text-end" htmlFor="">
                    Newletter
                  </label>
                  <input
                    class="form-check-input m-0"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <div className="edit-customer-grid d-grid align-items-center my-3 form-check form-switch p-0">
                  <label className="text-light d-block text-end" htmlFor="">
                    Status
                  </label>
                  <input
                    class="form-check-input m-0"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <hr className="text-light" />
                <div className="edit-customer-grid d-grid my-3">
                  <label htmlFor=""></label>
                  <input
                    className="fw-bold add-save-btn rounded-3 border-0 ms-auto"
                    type="submit"
                    value="Save"
                  />
                </div>
              </div>
            </form>
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
