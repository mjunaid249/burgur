import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-neutral z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-warning lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/burgur"}>Home</Link>
            </li>
            <li>
              <Link to={"/gallery"}>About</Link>
              <ul className="p-2">
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/burgur"}
          className="btn btn-ghost normal-case text-xl text-yellow-500"
        >
          BURGURZZ
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={"/burgur"}
              className="hover:bg-yellow-400 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:bg-yellow-400 hover:text-black">
                About
              </summary>
              <ul className="p-2 z-20">
                <li>
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="hover:bg-yellow-400 hover:text-black"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/menu"} className="btn btn-outline btn-warning btn-sm">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
