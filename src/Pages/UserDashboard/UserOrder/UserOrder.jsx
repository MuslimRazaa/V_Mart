import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/User/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faListUl,
  faTrash,
  faGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function UserOrder() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>ORDER</h1>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="add-categorie-list">
              <FontAwesomeIcon color="#fff" icon={faListUl} />
              <span className="mx-2">Order List</span>
            </div>
            <div className="order-table">
              <table className="table table-bordered">
                <thead>
                  <tr className="bg-golden-gradeint text-center">
                    <th scope="col">Order ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="data-orders-body">
                  <tr className="text-center">
                    <td className="text-light">1446</td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Dunhil</td>
                    <td className="text-light">Pending</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="text-light">1447</td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Benson & Hedges</td>
                    <td className="text-light">Completed</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="text-light" scope="row">
                      1448
                    </td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Winfield</td>
                    <td className="text-light">Canceled</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="text-light">1446</td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Dunhil</td>
                    <td className="text-light">Pending</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="text-light">1447</td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Benson & Hedges</td>
                    <td className="text-light">Completed</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="text-light" scope="row">
                      1448
                    </td>
                    <td className="text-light">Product</td>
                    <td className="text-light">Winfield</td>
                    <td className="text-light">Canceled</td>
                    <td className="text-light">$100.00</td>
                    <td className="text-light">22/07/2023</td>
                    <td>
                      <button
                        className="bg-transparent border-0 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-transparent border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <FontAwesomeIcon color="red" icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
        <div className="modal-dialog delet-popup  d-flex align-items-center justify-content-center h-100">
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
              <h1 className="text-light">You are about to delete this order</h1>
            </div>
            <div className="modal-footer justify-content-center border-0">
              <button
                type="button"
                className="btn btn-gradient"
                data-bs-dismiss="modal"
              >
                Go Back
              </button>
              <button type="button" className="btn btn-danger">
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
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered pd-responsive-modal set-the-sec-modal-box set-the-modal-box-order-one delet-popup justify-content-center">
          <div className="modal-content modal-border-set p-5">
            <div className="modal-flex-status">
              <h1>
                Status: <span>PENDING</span>
              </h1>
            </div>
            <div className="billing-row-parent my-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="billing-box rounded-3 position-relative">
                    <div className="w-75">
                      <h5>Payment Address</h5>
                      <p>Mark Allen</p>
                      <p>1234 567 890</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod tempor incididunt magna aliqua.
                      </p>
                      <p>Sydney</p>
                      <p>521105</p>
                      <p>Sydney</p>
                      <p>Australia</p>
                    </div>
                    <button
                      className="setting-icn-box btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      <FontAwesomeIcon icon={faGear} />
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="billing-box rounded-3 position-relative">
                    <div className="w-75">
                      <h5>Shipping Address</h5>
                      <p>Mark Allen</p>
                      <p>1234 567 890</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod tempor incididunt magna aliqua.
                      </p>
                      <p>Sydney</p>
                      <p>521105</p>
                      <p>Sydney</p>
                      <p>Australia</p>
                    </div>
                    <button
                      className="setting-icn-box btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <FontAwesomeIcon icon={faGear} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="method-payment-row-prnt">
              <div className="row">
                <div className="col-lg-6">
                  <div className="py-mthd-box">
                    <h5>Shipping Method</h5>
                    <p>Flat Shipping Rate</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="py-mthd-box">
                    <h5>Payment Method</h5>
                    <p>Credit Card</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-row my-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="env-box position-relative text-dark bg-light">
                    <textarea
                      name=""
                      id=""
                      className="border-0 p-2"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-order-summer-txt">
              <h1>ORDER SUMMARY</h1>
            </div>
            <div className="parent-grids-modal ">
              <div className="product-detail-grid font-bebas">
                <div className="prdct-detail-txt">
                  <h2>PRODUCT</h2>
                </div>
                <div className="prdct-detail-txt">
                  <h2>QTY</h2>
                </div>
                <div className="prdct-detail-txt text-end">
                  <h2>TOTAL PRICE</h2>
                </div>
              </div>
              <div className="prdct-dtl-line">
                <hr />
              </div>
              <div className="product-detail-grid set-grid">
                <div className="prdct-detail-img">
                  <div className="prdct-txt-nxt-grid ">
                    <img width="20%" className="me-4" src={ProductImg} alt="" />
                    <div>
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
                <div className="prdct-detail-txt set-detail-txt font-bebas">
                  <h2>01</h2>
                </div>
                <div className="prdct-detail-txt set-detail-price font-bebas">
                  <h2>$28.95</h2>
                </div>
              </div>
              <div className="prdct-dtl-line font-bebas">
                <hr />
              </div>
              <div className="prdct-sub-total-flex font-bebas">
                <h2>Subtotal :</h2>
                <h3>$28.95</h3>
              </div>
              <div className="prdct-sub-total-flex set-sec-flex font-bebas">
                <h2>SHIPPING :</h2>
                <h3>$0.00</h3>
              </div>
              <div className="prdct-sub-total-line font-bebas">
                <hr />
              </div>
              <div className="prdct-sub-total-flex set-th-flex font-bebas">
                <h2>total :</h2>
                <h3>$86.85</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
