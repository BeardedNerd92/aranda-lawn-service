import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <body className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
}