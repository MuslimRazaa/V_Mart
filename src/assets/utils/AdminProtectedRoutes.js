import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminProtectedRoutes(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for token and isAdmin here
    const value = localStorage.getItem("root");
    if (value) {
      const payload = value.split(".");
      const payloadValue = JSON.parse(atob(payload[1]));
      props.setAdmin(payloadValue.isAdmin);
      props.setToken(value);
    }
    setIsLoading(false); // Set loading to false after checking
  }, []);

  if (isLoading) {
    // Render a loading indicator while checking
    return <div>Loading...</div>;
  }

  return props.token ? (
    props.isAdmin ? (
      <Outlet />
    ) : (
      <Navigate to="/UserDashboard" />
    )
  ) : (
    <Navigate to="/Login" />
  );
}

export default AdminProtectedRoutes;
