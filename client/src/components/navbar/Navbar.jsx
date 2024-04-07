import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";
import Logout from "./Logout";
import Logo from "../../assets/als-min.jpg";

export default function Navbar() {
  const img = <img className='w-12 rounded-full' src={Logo} alt='' srcset='' />;

  let navBar = [
    { name: "Home", link: "/" },
    { name: "Clients", link: "clients" },
    { name: "Reports", link: "reports" },
    { name: "Settings", link: "settings" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky w-full top-0 left-0'>
      <nav className='bg-sky-600 p-4'>
        {/* Logo */}
        <div className='container mx-auto  flex justify-between items-center'>
          <Link to='/' className='hidden-mobile '>
            {img}
          </Link>

          {/* Menu button */}
          <div className='md:hidden items-center'>
            <button
              className='text-2xl text-green-200'
              onClick={() => setIsOpen(!isOpen)}
              type='button'>
              &#9776;
            </button>

            {/* Mobile menu */}
            {isOpen && (
              <ul className='md:space-x-4 md:hidden md:flex'>
                {/* Logo Mobile Menu */}
                <Link to='/'>{img}</Link>
                {navBar.map((navBars) => (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-gray-300 py-12" : "text-green-200"
                      }
                      to={navBars.link}>
                      {navBars.name}
                    </NavLink>
                  </li>
                ))}
                {/* Logout button */}
                <Logout />
              </ul>
            )}
          </div>

          {/* Desktop menu */}
          <ul className='md:space-x-4 hidden md:flex pl-9 md:pl-0'>
            {navBar.map((navBars) => (
              <li className=''>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-300" : "text-green-200"
                  }
                  to={navBars.link}>
                  {navBars.name}
                </NavLink>
              </li>
            ))}
            <Logout />
          </ul>
        </div>
      </nav>
    </header>
  );
}
