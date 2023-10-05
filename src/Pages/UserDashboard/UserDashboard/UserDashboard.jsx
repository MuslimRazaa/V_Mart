import React from "react";
import SideBar from "../../../Components/User/SideBar";
import Logo from "../../../assets/images/logo.png";
import tobaccoText from "../../../assets/images/text-tobacco.png";
import graphImg from "../../../assets/images/garphOrder.png";
import NotificationUser from "../../../assets/images/notification-user.png";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <section className="bg-main">
      <SideBar />
      <div className="second-main-side">
        <div className="sec-main-side-parent ">
          <div className="sec-side-fi-text justify-content-center border-text">
            <h1 className="text-light text-center display-2">Dashboard</h1>
            <hr className="text-light opacity-100" />
          </div>
          <div className="main-without-heading p-5">
            <div className="w-100">
              <div className="parent-box-img user-prnt-box px-5">
                <div className="row">
                  <div className="col-lg-6 responsive-user-dashboard">
                    <h1 className="text-light m-0">
                      Hi <span className="fw-bold text-theme">Mark !</span>
                    </h1>
                    <p className="text-light fs-1 my-3 responsive-welcome">
                      Welcome to
                    </p>
                    <img className="text-Img" src={tobaccoText} alt="" />
                    <h1 className="fw-bold text-light py-lg-2 py-md-2 py-sm-1">
                      User Dashboard
                    </h1>
                    <Link
                      to="/MyProfile"
                      className="btn-gradient edt-profile-responsive p-2 px-3 rounded font-bebas text-dark"
                    >
                      Edit Your Profile
                    </Link>
                  </div>
                  <div className="col-lg-6 text-center responsive-user-dashboard">
                    <img className="w-75" src={Logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-parent-flex row align-items-center">
              <div className="col-lg-6 ">
                <h1 className="text-light-yellow fw-bold text-center my-4 ">
                  NOTIFICATIONS
                </h1>
                <div className="parent-status-box">
                  <Link to="">
                    <div className="flex-img-txt d-flex border border-2 rounded-4">
                      <div className="status-box-img">
                        <img src={NotificationUser} alt="" />
                      </div>
                      <div className="status-box-txt">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
                          <br />
                          sed doincididunt ut labore et dolore magna aliqua...
                        </p>
                        <span>3 hours ago</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/Notification"
                    className="btn-gradient p-2 px-5 rounded font-bebas text-dark mx-auto d-table"
                  >
                    Veiw All
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <img width="100%" src={graphImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
