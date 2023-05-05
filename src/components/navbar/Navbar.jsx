import "./navbar.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineExpand } from "react-icons/ai";
import { BsMoonStars, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import { MainContext } from "../../hooks/context/MainContext";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  let user = cookies.get("user");
  const { sidebarOpen, setSidebarOpen } = useContext(MainContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const Logout = async () => {
    cookies.remove("user");
    window.location.reload();
  };

  return (
    <div className=" fixed navbar z-20 h-14 w-screen flex flex-row items-center justify-between  px-4  bg-white shadow-md">
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
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1.5 "
      >
        <div className="flex flex-row items-center gap-1 text-lg">
          <HiOutlineTicket size={24} /> Create Ticket
        </div>
      </button>

      <div className="n-right w-1/2 flex flex-row items-center justify-between pr-2 h-full  ">
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
        <div
          className="n-icons relative w-2/5 flex flex-row items-center justify-between h-full "
          ref={menuRef}
        >
          <BsMoonStars size={24} color="#707070" />
          <AiOutlineExpand size={24} color="#707070" />
          <div
            className="n-auth h-full px-1 flex flex-row gap-2 items-center hover:bg-gray-100 cursor-pointer "
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div className="n-auth-icon p-1 rounded-full bg-blue-700  ">
              <BsFillPersonFill size={24} color="#fff" />
            </div>
            <span>
              {!user ? null :
                <b>{user.username}</b>
              }
              {/* <b>Ameni Ben Khalifa</b> */}
            </span>
          </div>
          {!toggleMenu ? null : (
            <div className="scale-up-ver-top shadow-md flex flex-col items-center gap-2 px-1 py-2 font-medium rounded-md z-30 absolute top-12 right-5 bg-white border ">
              <Link
                to="profile"
                className="w-full px-3 py-1 text-center hover:bg-blue-700 hover:text-white rounded-md"
              >
                My Profile
              </Link>
              {/* <Link
                to="#"
                className="w-full px-3 py-1 text-center hover:bg-blue-700 hover:text-white rounded-md"
              >
                Settings
          </Link> */}
              <div className="w-11/12 border " />
              <button
                type="button"
                onClick={() => Logout()}
                className="w-full px-3 py-1 text-center hover:bg-blue-700 hover:text-white rounded-md"
              >
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
