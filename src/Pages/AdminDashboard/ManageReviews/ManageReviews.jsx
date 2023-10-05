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
                <h1>MANAGE REVIEW</h1>
              </div>
              <hr className="text-light opacity-100" />
            </div>

            <div className="grid-manage-parent-sup">
              <div className="grid-manage-parent">
                <div className="grid-manage-inner">
                  <p className="text-dark">Customer Name</p>
                </div>
                <div className="grid-manage-inner">
                  <p className="text-dark">Product Name</p>
                </div>
                <div className="grid-manage-inner">
                  <p className="text-dark">Review Title</p>
                </div>
                <div className="grid-manage-inner">
                  <p className="text-dark">Rating</p>
                </div>
                <div className="grid-manage-inner">
                  <p className="text-dark">Status</p>
                </div>
                <div className="grid-manage-inner">
                  <p className="text-dark">Action</p>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="yellow" icon={faDotCircle} />{" "}
                    Pending
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="yellow" icon={faDotCircle} />{" "}
                    Pending
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="yellow" icon={faDotCircle} />{" "}
                    Pending
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="red" icon={faDotCircle} /> Declined
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="green" icon={faDotCircle} />{" "}
                    Approved
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="red" icon={faDotCircle} /> Declined
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="green" icon={faDotCircle} />{" "}
                    Approved
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
              <div className="grid-manage-parent grid-manage-parent-rev">
                <div className="grid-manage-inner">
                  <p>Mark Allen</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <p>Lorem Ipsum</p>
                </div>
                <div className="grid-manage-inner">
                  <div className="mange-star-parent">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="grid-manage-inner">
                  <p>
                    <FontAwesomeIcon color="red" icon={faDotCircle} /> Declined
                  </p>
                </div>
                <div className="grid-manage-inner">
                  <Link to="/ReviewsEdit">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pagi mnge-rev-pagi">
                {/* <img src={Pagi} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
