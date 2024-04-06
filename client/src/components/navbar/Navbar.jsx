import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky w-full top-0 left-0'>
      <nav className='bg-sky-600 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/' className='text-2xl font-semibold'>
            Aranda Lawn Service
          </Link>
          <ul className='flex space-x-4'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='invoices'
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }>
                Invoices
              </NavLink>
            </li>

            <li>
              <NavLink
                to='clients'
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }>
                Clients
              </NavLink>
            </li>

            <li>
              <NavLink
                to='reports'
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }>
                Reports
              </NavLink>
            </li>

            <li>
              <NavLink
                to='settings'
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
