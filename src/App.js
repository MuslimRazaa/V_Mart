import "./App.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import HomePage from "./Pages/HomePage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Pages/Shop";
import Buynow from "./Pages/Buynow";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Signup from "./Pages/Signup";
import ShippingCart from "./Pages/ShippingCart";
import PaymentMethod from "./Pages/PaymentMethod";
import OrderComplete from "./Pages/OrderComplete";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Refund from "./Pages/Refund";
import PrivacyCookies from "./Pages/PrivacyCookies";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Delivery from "./Pages/Delivery";
import HowOrder from "./Pages/HowOrder";
import DeliveryTime from "./Pages/DeliveryTime";
import TrackOrder from "./Pages/TrackOrder";
import ProductAvailability from "./Pages/ProductAvailability";
import FAQ from "./Pages/Faq";
import Brand from "./Pages/Brand";
import Sales from "./Pages/Sales";
import Promotionspage from "./Pages/Promotionspage";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import ForgotPassword from "./Pages/ForgotPassword";
import DashboardAdmin from "./Pages/AdminDashboard/DashboardAdmin/DashboardAdmin";
import Error from "./Pages/404Error/Error404";
import CategorySelect from "./Pages/AdminDashboard/Categories/CategorySelect";
import SubCategories from "./Pages/AdminDashboard/Categories/SubCategory";
import BrandCategories from "./Pages/AdminDashboard/Categories/BrandCategory";
import AddBrand from "./Pages/AdminDashboard/Categories/AddBrand";
import AddSubCategories from "./Pages/AdminDashboard/Categories/AddSubcategory";
import EditBrand from "./Pages/AdminDashboard/Categories/EditBrand";
import AdminProduct from "./Pages/AdminDashboard/Products/Product";
import AddProduct from "./Pages/AdminDashboard/Products/AddProduct";
import Reports from "./Pages/AdminDashboard/Reports/Reports";
import ThisWeekPromotion from "./Pages/AdminDashboard/ThisWeekPromotion/ThisWeekPromotion";
import AddThisWeekPromotion from "./Pages/AdminDashboard/ThisWeekPromotion/AddThisWeekPromotion";
import SelectCatalog from "./Pages/AdminDashboard/Catalog/Catalog";
import Customer from "./Pages/AdminDashboard/Customer/Customer";
import AdminProtectedRoutes from "./assets/utils/AdminProtectedRoutes";
import UserProtectedRoute from "./assets/utils/UserProtectedRoute";
import CustomerDetails from "./Pages/AdminDashboard/Customer/CustomerEdit";
import AdminSales from "./Pages/AdminDashboard/AdminSales/AdminSales";
import SalesView from "./Pages/AdminDashboard/SalesView/SaleView";
import ManageReviews from "./Pages/AdminDashboard/ManageReviews/ManageReviews";
import ReviewsEdit from "./Pages/AdminDashboard/ManageReviews/EditReview";
import NewPassword from "./Pages/NewPassword";
import OTP from "./Pages/EnterOTP";
import UserDashboard from "./Pages/UserDashboard/UserDashboard/UserDashboard";
import UserOrder from "./Pages/UserDashboard/UserOrder/UserOrder";
import MyProfile from "./Pages/UserDashboard/MyProfile/MyProfile";
import Notification from "./Pages/UserDashboard/UserNotfication/UserNotification";
import EditSubCategories from "./Pages/AdminDashboard/Categories/EditSubCategory";
import EditProduct from "./Pages/AdminDashboard/Products/EditProduct";
import EditThisWeekPromotion from "./Pages/AdminDashboard/ThisWeekPromotion/EditThisWeekPromotion";
function App() {
  const [token, setToken] = useState("");
  const [isAdmin, setAdmin] = useState("");

  const handleToken = () => {
    const value = localStorage.getItem("root");
    if (value) {
      const payload = value.split(".");
      const payloadValue = JSON.parse(atob(payload[1]));

      console.log(payloadValue);
      setAdmin(payloadValue.isAdmin);
      setToken(value); // Set the token after setting isAdmin
    }
  };

  useEffect(() => {
    handleToken();
  }, []);
  return (
    // <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Buynow" element={<Buynow />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping-cart" element={<ShippingCart />} />
        <Route path="/PaymentMethod" element={<PaymentMethod />} />
        <Route path="/OrderComplete" element={<OrderComplete />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/Privacy" element={<PrivacyCookies />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/How-Order" element={<HowOrder />} />
        <Route path="/Delivery-Time" element={<DeliveryTime />} />
        <Route path="/Track-Order" element={<TrackOrder />} />
        <Route path="/Product-Availability" element={<ProductAvailability />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/Promotions" element={<Promotionspage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/otp-verification" element={<OTP />} />
        {/* Add more routes here */}
        {/* ADMIN DASHBOARD ROUTES */}

        {/* <Route
          element={
            <AdminProtectedRoutes
              setToken={setToken}
              setAdmin={setAdmin}
              token={token}
              isAdmin={isAdmin}
            />
          }
        > */}
          <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/CategorySelect" element={<CategorySelect />} />
          <Route path="/SubCategories" element={<SubCategories />} />
          <Route path="/BrandCategories" element={<BrandCategories />} />
          <Route path="/AddBrand" element={<AddBrand />} />
          <Route path="/AddSubCategories" element={<AddSubCategories />} />
          <Route path="/AdminProduct" element={<AdminProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ThisWeekPromotion" element={<ThisWeekPromotion />} />
          <Route path="/EditSubCategory/:id" element={<EditSubCategories />} />
          <Route
            path="/AddThisWeekPromotion"
            element={<AddThisWeekPromotion />}
          />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/SelectCatalog" element={<SelectCatalog />} />
          <Route path="/CustomerEdit" element={<CustomerDetails />} />
          <Route path="/AdminSales" element={<AdminSales />} />
          <Route path="/SalesView" element={<SalesView />} />
          <Route path="/ManageReviews" element={<ManageReviews />} />
          <Route path="/ReviewsEdit" element={<ReviewsEdit />} />
          <Route path="/EditBrand/:id" element={<EditBrand />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/EditProduct" element={<EditProduct />} />
          <Route
          path="/EditThisWeekPromotion"
          element={<EditThisWeekPromotion />}
        />
        {/* </Route> */}

        {/* ADMIN DASHBOARD ROUTES */}

        {/* <Route
          element={
            <UserProtectedRoute
              setToken={setToken}
              setAdmin={setAdmin}
              token={token}
              isAdmin={isAdmin}
            />
          }
        >
          <Route path="/UserDashboard" element={<UserDashboard />}></Route>
          <Route path="/UserOrder" element={<UserOrder />}></Route>
          <Route path="/MyProfile" element={<MyProfile />}></Route>
          
        </Route> */}


      {/* JUST FOR FRONTEND PURPOSE. REMOVE THIS WHEN DOING INTEGRATION */}
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserOrder" element={<UserOrder />}></Route>
        <Route path="/MyProfile" element={<MyProfile />}></Route>
        <Route path="/Notification" element={<Notification />}></Route>

        {/* ERROR PAGE ROUTES */}
        <Route path="*" element={<Error />}></Route>
        {/* ERROR PAGE ROUTES */}
      </Routes>
    </Router>
    // </Layout>
  );
}

export default App;
