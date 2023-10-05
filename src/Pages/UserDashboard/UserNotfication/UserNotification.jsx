import { React, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/User/SideBar";
import ProductImg from "../../../assets/images/product1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationUser from "../../../assets/images/notification-user.png";

import {
  faEye,
  faCancel,
  faListUl,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
                <h1>Notofication</h1>
              </div>
              <hr className="text-light opacity-100" />
            </div>
            <div className="parent-status-box pt-3">
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4 my-3">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4 my-3">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4 my-3">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4 my-3">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className="flex-img-txt d-flex border border-2 rounded-4 my-3">
                  <div className="status-box-img">
                    <img src={NotificationUser} alt="" />
                  </div>
                  <div className="status-box-txt">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      sed doincididunt ut labore et dolore magna aliqua...
                    </p>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link className="btn-gradient p-2 px-5 rounded d-table text-dark font-bebas mt-5">
              Mark All As Read
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
