import "./navbar.css";
import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineExpand } from "react-icons/ai";
import { BsMoonStars, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import { MainContext } from "../../hooks/context/MainContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(MainContext);
  return (
    <div className="fixed navbar z-20 h-14 w-screen flex flex-row items-center justify-between border px-4 py-2 bg-white shadow-md">
      <div className="n-left w-1/4 flex flex-row items-center justify-between px-10 ">
        <div
          className="n-menuIcon cursor-pointer "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AiOutlineMenu size={24} />
        </div>
        <div className="n-LOGO cursor-pointer ">
          <p>LOGO</p>
        </div>
      </div>
      <Link
        to="/ADDticket"
        className="text-white outline-none  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1.5 "
      >
        <div className="flex flex-row items-center gap-1 text-lg">
          <HiOutlineTicket size={24} /> Create Ticket
        </div>
      </Link>

      <div className="n-right w-1/2 flex flex-row items-center justify-between pr-2 ">
        <div className="n-input ">
          <form>
            <label
              for="default-search"
              className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-72 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-1 py-0.5 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="n-icons w-2/5 flex flex-row items-center justify-between ">
          <BsMoonStars size={24} color="#707070" />
          <AiOutlineExpand size={24} color="#707070" />
          <div className="n-auth flex flex-row gap-2 items-center">
            <div className="n-auth-icon p-1 rounded-full bg-blue-700  ">
              <BsFillPersonFill size={24} color="#fff" />
            </div>
            <span>
              <b>Ameni Ben Khalifa</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
