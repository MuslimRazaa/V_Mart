import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProfilePic from "../../assets/images/ProfilePic.png";
import logo from "../../assets/images/logo.png";
import dashboardIcon from "../../assets/images/dashboardIcon.png";
import CategoriesIcon from "../../assets/images/CategoriesIcon.png";
import BoxIcon from "../../assets/images/BoxIcon.png";
import ReportsIcon from "../../assets/images/ReportsIcon.png";
import SaleIcon from "../../assets/images/SaleIcon.png";
import CustomerIcon from "../../assets/images/CustomerIcon.png";
import ShutdownIcon from "../../assets/images/ShutdownIcon.png";
import { useLocation } from "react-router-dom";
import { handleLogout } from "../handleLogout";

export default function SideBar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const logout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="first-side-bar">
      <div className="side-bar-main">
        <div className="side-bar-parent">
          <div className="d-flex justify-content-center mt-3">
            <Link to="/" className="text-center">
              <img className="w-75" src={logo} alt="" />
            </Link>
          </div>
          <div className="user-img">
            <img src={ProfilePic} alt="" />
            <h5 className="text-theme mt-2">Admin</h5>
          </div>
          <div className="main-sidebar-list">
            <ul className="side-list-flex m-0 ms-5 p-0 w-100">
              <li className="flex-list-li my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/DashboardAdmin" ? "sidebar-active" : "")
                  }
                  to="/DashboardAdmin"
                >
                  <img className="px-2" src={dashboardIcon} alt="" />
                  Dashboard
                </Link>
              </li>
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/CategorySelect" ? "sidebar-active" : "")
                  }
                  to="/CategorySelect"
                >
                  <img className="px-2" src={CategoriesIcon} alt="" />
                  Categories
                </Link>
              </li>
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/SelectCatalog" ? "sidebar-active" : "")
                  }
                  to="/AdminProduct"
                >
                  <img className="px-2" src={BoxIcon} alt="" />
                  Catalog
                </Link>
              </li>
              {/* <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/ThisWeekPromotion" ? "sidebar-active" : "")
                  }
                  to="/ThisWeekPromotion"
                >
                  <img className="px-2" src={BoxIcon} alt="" />
                  This Week's Promotion
                </Link>
              </li> */}
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={"" + (url === "/Reports" ? "sidebar-active" : "")}
                  to="/Reports"
                >
                  <img className="px-2" src={ReportsIcon} alt="" />
                  Reports
                </Link>
              </li>
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/AdminSales" ? "sidebar-active" : "")
                  }
                  to="/AdminSales"
                >
                  <img className="px-2" src={SaleIcon} alt="" />
                  Sales
                </Link>
              </li>
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={"" + (url === "/Customer" ? "sidebar-active" : "")}
                  to="/Customer"
                >
                  <img className="px-2" src={CustomerIcon} alt="" />
                  Customer
                </Link>
              </li>
              <li className="flex-list-li  my-4" aria-current="page">
                <Link
                  className={
                    "" + (url === "/ManageReviews" ? "sidebar-active" : "")
                  }
                  to="/ManageReviews"
                >
                  <img className="px-2" src={ReportsIcon} alt="" />
                  ManageReviews
                </Link>
              </li>
            </ul>
          </div>
          <button className="bg-transparent border-0 logout-btn start-50 position-absolute" onClick={logout}>
            <img src={ShutdownIcon} alt="" />
            <span className="mx-1">
              Logout
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}
