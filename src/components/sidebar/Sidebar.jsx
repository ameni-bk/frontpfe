import "./sidebar.css";
import React, { useContext, useState } from "react";
import { TbHomeStats } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";
import { RiShieldUserLine } from "react-icons/ri";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { TbClockHour2 } from "react-icons/tb";
import { TbTrash } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MainContext } from "../../hooks/context/MainContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarOpen } = useContext(MainContext);
  const [subMenuTicketG, setSubMenuTicketG] = useState(false);
  const [subMenuTicketS, setSubMenuTicketS] = useState(false);
  return (
    <div className="sidebar overflow-y-auto fixed z-20 h-screen p-3 flex flex-col gap-4  border transform transition-all duration-500 bg-white ">
      <Link to="/">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md 
      "
        >
          <TbHomeStats size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Dashboard
          </span>
        </div>
      </Link>

      <Link to="/tickets">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
      onClick={()=> setSubMenuTicketG(!subMenuTicketG)}
        >
          <HiOutlineTicket size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Global Tickets
          </span>
          {subMenuTicketG ?
          <IoIosArrowDown size={16} />
          :
          <IoIosArrowForward size={16} />
          }
        </div>
      </Link>
      {!subMenuTicketG ? null : 
      <div className=" border w-full flex flex-col gap-2 pl-6">
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">total Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">Recent Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">suspend Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">closed Tickets</span>
          </div>
        </Link>
      </div>
      }


 <Link to="/self_tickets">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
      onClick={()=> setSubMenuTicketS(!subMenuTicketS)}
        >
          <HiOutlineTicket size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Self Tickets
          </span>
          {subMenuTicketS ?
          <IoIosArrowDown size={16} />
          :
          <IoIosArrowForward size={16} />
          }
        </div>
      </Link>
      {!subMenuTicketS ? null : 
      <div className=" border w-full flex flex-col gap-2 pl-6">
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">My assigned Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">self Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">suspend Tickets</span>
          </div>
        </Link>
        <Link to="#clients">
          <div className=" flex flex-row items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
            <p className="text-xs">o</p>
            <span className="text-sm">closed Tickets</span>
          </div>
        </Link>
      </div>
      }


      <Link to="/client">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <FiUsers size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Manage clients
          </span>
        </div>
      </Link>

      <Link to="/agent">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <RiShieldUserLine size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Manage Agents
          </span>
        </div>
      </Link>

      <Link to="/bills">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <BsFileEarmarkMedical size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Bills
          </span>
        </div>
      </Link>

      <Link to="/trashed">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <TbTrash size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Trashed tickets
          </span>
        </div>
      </Link>

      <Link to="/bhour">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <TbClockHour2 size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Business hour
          </span>
        </div>
      </Link>

      <Link to="/contact">
        <div
          className="
      s-dash flex flex-row items-center text-lg gap-2 py-2 px-4  hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer
      "
        >
          <TfiHeadphoneAlt size={24} />
          <span className={`font-semibold ${sidebarOpen ? "" : "hidden"}`}>
            Contact support
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
