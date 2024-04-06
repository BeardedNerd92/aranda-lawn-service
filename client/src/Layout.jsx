import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <body className='h-screen bg-sky-50 font-poppins'>
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
}
