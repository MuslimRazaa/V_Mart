import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/Admin/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faPlus,
  faTrash,
  faGear,
  faInfoCircle,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminOrder() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent p-5">
          <div className="blur-pages px-5">
            <div className="border-text">
              <div className="d-flex justify-content-between">
                <h1>Order</h1>
                <div className="boxs-flex">
                  <Link
                    className="p-3 justify-content-center bg-yellow w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to=""
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                  </Link>
                  <Link
                    className="p-3 justify-content-center bg-light w-25 h-25 d-flex align-items-center text-dark rounded-2"
                    to="/AdminSales"
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </Link>
                </div>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="pd-customer-row py-2">
              <div className="pd-customer-row ">
                <div className="add-categorie-list py-3">
                  <FontAwesomeIcon color="#fff" icon={faInfoCircle} />
                  <span className="mx-2">Order (#1446)</span>
                </div>
                <div className="inv-row-parent">
                  <div className="row py-4">
                    <div className="col-lg-4">
                      <div className="env-box position-relative text-dark bg-light">
                        <h5>Invoice</h5>
                        <p>INV-2022-000</p>
                        <div className="setting-icn-box">
                          <button
                            className="h-100 w-100 px-1 bg-transparent border-0"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <FontAwesomeIcon icon={faGear} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="env-box bg-light text-dark">
                        <h5>Customer</h5>
                        <p>Mark Allen</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="env-box bg-light text-dark">
                        <h5>Date Added</h5>
                        <p>05/04/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sales-view-tble-parent">
                  <div className="sales-view-table">
                    <div className="sales-view-table-inner sale-indent">
                      <p>Product</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Category</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Quantity</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Unit Price</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Total</p>
                    </div>
                    {/* <div className="sales-view-table-inner text-center">
                      <p>Action</p>
                    </div> */}
                  </div>
                  <div className="sales-view-table sales-view-table-semi text-light">
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view ">
                      <p>Product Name 1</p>
                    </div>
                    <div className="sales-view-table-inner text-center brdr-right-sl-view">
                      <p>Category Name</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view text-center ">
                      <p>2</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view ">
                      <p>$120.00</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view ">
                      <p>$224.00</p>
                    </div>
                    {/* <div className="sales-view-table-inner text-center">
                      <p>
                        <button>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="billing-row-parent my-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="billing-box rounded-3 position-relative">
                        <h5>Payment Address</h5>
                        <p>Mark Allen</p>
                        <p>1234 567 890</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do <br /> eiusmod tempor incididunt magna
                          aliqua.
                        </p>
                        <p>Sydney</p>
                        <p>521105</p>
                        <p>Sydney</p>
                        <p>Australia</p>
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
                        <h5>Shipping Address</h5>
                        <p>Mark Allen</p>
                        <p>1234 567 890</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do <br /> eiusmod tempor incididunt magna
                          aliqua.
                        </p>
                        <p>Sydney</p>
                        <p>521105</p>
                        <p>Sydney</p>
                        <p>Australia</p>
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
                        <p>Comment</p>
                        <div className="setting-icn-box">
                          <button
                            className="h-100 w-100 px-1 bg-transparent border-0"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3"
                          >
                            <FontAwesomeIcon icon={faGear} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total-price-row ">
                  <div className="row">
                    <div className="col-lg-11 pe-0">
                      <div className="border  border-1 text-end bg-light">
                        <p className="border p-1 fw-bold">Sub Total</p>
                        <p className="border p-1 fw-bold">Flat Shipping Rate</p>
                        <p className="border p-1 fw-bold">Total</p>
                      </div>
                    </div>
                    <div className="col-lg-1 ps-0">
                      <div className=" border border-1 text-center bg-light">
                        <p className="border p-1">$200.00</p>
                        <p className="border p-1">$50.00</p>
                        <p className="border p-1">$250.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sales-history-tble-parent my-4">
                  <div className="sales-history-table bg-golden-gradeint d-grid p-3">
                    <div className="sales-view-table-inner sale-indent">
                      <p>Product</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Category</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Quantity</p>
                    </div>
                    <div className="sales-view-table-inner text-center">
                      <p>Unit Price</p>
                    </div>
                  </div>
                  <div className="sales-history-table d-grid text-light border">
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2">
                      <p>29/07/2023</p>
                    </div>
                    <div className="sales-view-table-inner text-center brdr-right-sl-view p-2">
                      <p>Product 2</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2 text-center">
                      <p>Pending</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2 text-center">
                      <p>No</p>
                    </div>
                  </div>
                  <div className="sales-history-table d-grid text-light border">
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2">
                      <p>29/07/2023</p>
                    </div>
                    <div className="sales-view-table-inner text-center brdr-right-sl-view p-2">
                      <p>Product 2</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2 text-center">
                      <p>Pending</p>
                    </div>
                    <div className="sales-view-table-inner sale-indent brdr-right-sl-view p-2 text-center">
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <form action="">
                  <div className="add-categorie-list py-3">
                    <FontAwesomeIcon color="#fff" icon={faInfoCircle} />
                    <span className="mx-2">Order (#1446)</span>
                  </div>
                  <div className="grid-add d-grid align-items-center my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Order Status
                    </label>
                    <select className="py-1 px-2">
                      <option value="">In Progress</option>
                      <option value="">Complete</option>
                      <option value="">Cancelled</option>
                    </select>
                  </div>
                  <hr className="text-light my-4" />

                  <div className="grid-add d-grid my-4 form-check form-switch p-0">
                    <label className="text-light d-block text-end" htmlFor="">
                      Notify Customer
                    </label>
                    <input
                      class="form-check-input m-0"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <hr className="text-light my-4" />
                  <div className="grid-add d-grid my-4">
                    <label className="text-light d-block text-end" htmlFor="">
                      Comment
                    </label>
                    <textarea
                      rows="5"
                      className="py-1 px-2"
                      type="text"
                    ></textarea>
                  </div>
                  <div className="grid-add d-grid my-4">
                    <label htmlFor=""></label>
                    <input
                      className="fw-bold add-save-btn w-25 rounded-3 border-0 ms-auto"
                      type="submit"
                      value="+ Add History "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL  1*/}
      <div
        className="modal fade sales-view-invoice-modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h1
                className="modal-title fs-5 text-light text-center"
                id="exampleModalLabel"
              >
                INV-2022-000
              </h1>
            </div>
            <div className="modal-body p-0">
              <div className="inv-modal-input-parent">
                <div className="grid-inpt-modal-parent">
                  <div className="grid-inpt-modal">
                    <label htmlFor="inv-mdl-one text-light">Order #</label>
                    <input type="number" placeholder={1446} id="inv-mdl-one" />
                  </div>
                  <div className="grid-inpt-modal">
                    <label htmlFor="inv-mdl-two">Date Added</label>
                    <input
                      type="text"
                      placeholder="25/07/2023"
                      id="inv-mdl-two"
                    />
                  </div>
                </div>
                <div className="grid-inpt-modal-parent">
                  <div className="grid-inpt-modal">
                    <label htmlFor="inv-mdl-three">Name</label>
                    <input
                      type="text"
                      placeholder="Mark Allen"
                      id="inv-mdl-three"
                    />
                  </div>
                  <div className="grid-inpt-modal">
                    <label htmlFor="inv-mdl-four">Email</label>
                    <input
                      type="email"
                      placeholder="mark_allen@gmail.com"
                      id="inv-mdl-four"
                    />
                  </div>
                  <div className="grid-inpt-modal">
                    <label htmlFor="inv-mdl-five">Contact #</label>
                    <input
                      type="number"
                      placeholder="1234 567 890"
                      id="inv-mdl-five"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="grid-inpt-modal">
                      <label htmlFor="inv-mdl-six">Shipping Address</label>
                      <textarea
                        id="inv-mdl-six"
                        className="fs-7 text-dark"
                        placeholder="Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod 
tempor incididunt magna aliqua."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-inpt-modal">
                      <label htmlFor="inv-mdl-six">Billing Address</label>
                      <textarea
                        id="inv-mdl-six"
                        className="fs-7 text-dark"
                        placeholder="Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod 
tempor incididunt magna aliqua."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid-inpt-modal">
                      <label htmlFor="inv-mdl-seven">Payment Method</label>
                      <input
                        type="text"
                        id="inv-mdl-six"
                        placeholder="Credit Card"
                      />
                    </div>
                  </div>
                </div>
                <div className="table-modal-parent">
                  <div className="table-modal-inner-parent">
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Product</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Brand</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Quantity</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Unit Price</p>
                    </div>
                    <div className="table-modal-inner text-start pd-left-mdl-ttl">
                      <p>Total</p>
                    </div>
                  </div>
                  <div className="table-modal-inner-parent mdl-top-border">
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Product Name</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>Dunhill</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>2</p>
                    </div>
                    <div className="table-modal-inner text-center mdl-right-border">
                      <p>$122.00</p>
                    </div>
                    <div className="table-modal-inner text-start pd-left-mdl-ttl">
                      <p>$244.00</p>
                    </div>
                  </div>
                  <div className="total-price-grid ">
                    <div>
                      <div className="text-end text-light">
                        <p className="border p-1">Sub Total</p>
                        <p className="border p-1">Flat Shipping Rate</p>
                        <p className="border p-1">Total</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-light text-center">
                        <p className="border p-1">$200.00</p>
                        <p className="border p-1">$50.00</p>
                        <p className="border  p-1">$250.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-gradient"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL  1*/}
      {/* MODAL  2*/}
      <div
        class="modal fade sales-view-invoice-modal"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header  border-0">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Payment Address
              </h5>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Full Name
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Contact Number
                  </label>
                  <input type="number" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Email Address
                  </label>
                  <input type="email" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Billing Address
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Shipping Address
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Country
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    City
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Post Code
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Special Instruction
                  </label>
                  <textarea type="text" className="w-100 my-2 fs-7"></textarea>
                </div>
                <div className="my-2 text-end">
                  <button
                    type="button"
                    className="btn-secondary border-0 rounded p-1 px-3 me-4"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save"
                    className="btn-gradient border-0 rounded p-1 px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL  2*/}
      {/* MODAL  3*/}
      <div
        class="modal fade sales-view-invoice-modal"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header  border-0">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Shipping Address
              </h5>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Full Name
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Contact Number
                  </label>
                  <input type="number" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Email Address
                  </label>
                  <input type="email" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Billing Address
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Shipping Address
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Country
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    City
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Post Code
                  </label>
                  <input type="text" className="w-100 my-1 p-1 fs-7" />
                </div>
                <div className="my-1 ">
                  <label className="text-light fs-7" htmlFor="">
                    Special Instruction
                  </label>
                  <textarea type="text" className="w-100 my-2 fs-7"></textarea>
                </div>
                <div className="my-2 text-end">
                  <button
                    type="button"
                    className="btn-secondary border-0 rounded p-1 px-3 me-4"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save"
                    className="btn-gradient border-0 rounded p-1 px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL  3*/}
      {/* MODAL  3*/}
      <div
        class="modal fade sales-view-invoice-modal"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog d-flex align-items-center justify-content-center h-75">
          <div class="modal-content p-3">
            <div class="modal-header  border-0">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Comment
              </h5>
            </div>
            <div class="modal-body">
              <form action="">
                <div>
                  <label className="d-block text-light" htmlFor="">
                    Comment
                  </label>
                  <textarea
                    type="text"
                    rows="7"
                    className="w-100 my-2 fs-7"
                  ></textarea>
                </div>

                <div className="my-2 text-end">
                  <button
                    type="button"
                    className="btn-secondary border-0 rounded p-1 px-3 me-4"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save"
                    className="btn-gradient border-0 rounded p-1 px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL  3*/}
    </section>
  );
}
