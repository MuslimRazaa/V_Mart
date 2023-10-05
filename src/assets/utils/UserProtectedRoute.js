import React, { useState, useEffect } from "react";

import { Outlet, Navigate } from "react-router-dom";

export default function UserProtectedRoute(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for token and isAdmin here
    const value = localStorage.getItem("root");
    if (value) {
      const payload = value.split(".");
      const payloadValue = JSON.parse(atob(payload[1]));
      console.log(payloadValue);
      console.log(value);
      props.setAdmin(payloadValue.isAdmin);
      props.setToken(value);
    }
    setIsLoading(false);
  }, []);

  return props.token ? (
    props.isAdmin ? (
      <Navigate to="/AdminDashboard" />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to="/Login" />
  );
}
