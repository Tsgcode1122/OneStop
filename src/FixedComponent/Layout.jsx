import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";

// import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  const location = useLocation();

  // Check if the current path is the appointment page
  const isAppointmentPage = location.pathname === "/appointment";

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <ScrollToTopButton /> */}
      {/* Conditionally render Footer only if not on the appointment page */}
    </>
  );
};

export default Layout;
