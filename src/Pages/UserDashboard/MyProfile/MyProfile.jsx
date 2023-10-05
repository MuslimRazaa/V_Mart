import { React, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/User/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCancel,
  faListUl,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "../../../Components/Admin/ImageUploader";

export default function MyProfile() {
  const [isInputVisible, setInputVisible] = useState(true);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>My Profile</h1>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <form action="">
              <div className="profile-main-box">
                <div className="parent-payment-box set-profile-box">
                  <div className="text-light">
                    <p>Upload Profile Picture</p>
                    <div className="w-25">
                      <ImageUploader title="Upload Image" />
                    </div>
                    {/* <input type="file" className="image-input" /> */}
                  </div>
                  <div className="parent-profile-form text-light py-3">
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">Full Name</label>
                        <input className="w-100 my-1 p-1" type="text" />
                      </div>
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">Last Name</label>
                        <input className="w-100 my-1 p-1" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">Email</label>
                        <input className="w-100 my-1 p-1" type="email" />
                      </div>
                      <div className="col-lg-6 py-2">
                        <div>
                          <label htmlFor="">Contact Number</label>
                          <input className="w-100 my-1 p-1" type="number" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 py-2">
                        <label htmlFor="">Street Address</label>
                        <input className="w-100 my-1 p-1" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">Country</label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">City</label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">State</label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">
                          Passport Number / identity Number
                        </label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <h3 className="fw-bold">Change Password</h3>
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">New Password</label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                      <div className="col-lg-6 py-2">
                        <label htmlFor="">Confirm Password</label>
                        <input className="w-100 my-1" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <h3 className="fw-bold">Two Factor Authentication</h3>
                        <div className="col-lg-6 mb-3">
                          <div className="form-check form-switch py-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              onChange={toggleInputVisibility}
                            />
                          </div>
                          {!isInputVisible && (
                            <div className="py-4">
                              <input className="w-100 p-1" type="text" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <input type="checkbox" name="" id="" />
                        <label className="ms-1">
                          Send Newsletters And Promotional Emails
                        </label>
                      </div>
                    </div>
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn-gradient p-2 px-5 rounded font-bebas text-dark"
                    >
                      Update
                    </Link>
                  </div>
                </div>
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
              <h1 className="text-light">Your Profile Has Been Updated</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
    </section>
  );
}
