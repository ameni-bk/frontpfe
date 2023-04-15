import "./tickets.css";
import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

const Tickets = () => {
  return (
    <div className="tickets p-6 ">
      <div className="t-xx border px-4 py-2 rounded-md bg-white ">
        <div className="t-links flex gap-1 ">
          <Link to="/" className="font-semibold">Home</Link>
          <span className="font-semibold">/</span>
          <span>Global tickets</span>
        </div>
      </div>
      <div className="t-main mt-4 bg-white rounded-md shadow border p-6">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500  rounded-md">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ticket_ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Ticket Details
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Assign To
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  <span className="">TK-0019</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="line-clamp-1">
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                    </span>
                    <div className="flex gap-1 items-center text-gray-500">
                      <p>#SP-1</p>
                      <div className="border h-5" />
                      <p className="text-red-600"> High</p>
                      <div className="border h-5" />
                      <p>25 Aug, 2011</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Belgassem</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center px-3 py-1 5 rounded-md bg-blue-600 text-white border">
                    New
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className=" flex items-center justify-center">
                    <select
                      name=""
                      id=""
                      className="rounded-md px-2 py-1.5 flex items-center hover:bg-blue-600  hover:text-white border outline-none cursor-pointer"
                    >
                      <option selected>Assign to</option>
                      <option value="US">Self assign</option>
                      <option value="CA">Others assign</option>
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="/TicketDetails">
                        <AiOutlineEye size={18} color="#3366FF" />
                      </Link>
                    </div>
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  <span className="">TK-0019</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="line-clamp-1">
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                    </span>
                    <div className="flex gap-1 items-center text-gray-500">
                      <p>#SP-1</p>
                      <div className="border h-5" />
                      <p className="text-red-600"> High</p>
                      <div className="border h-5" />
                      <p>25 Aug, 2011</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Belgassem</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center px-3 py-1 5 rounded-md bg-blue-600 text-white border">
                    New
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className=" flex items-center justify-center">
                    <select
                      name=""
                      id=""
                      className="rounded-md px-2 py-1.5 flex items-center hover:bg-blue-600  hover:text-white border outline-none cursor-pointer"
                    >
                      <option selected>Assign to</option>
                      <option value="US">Self assign</option>
                      <option value="CA">Others assign</option>
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="/TicketDetails">
                        <AiOutlineEye size={18} color="#3366FF" />
                      </Link>
                    </div>
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  <span className="">TK-0019</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="line-clamp-1">
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                      Consectetur accusantium est eos amet vitae magni
                      similique. Eum qui dolores sed. Est numquam inventore
                      laborum enim. Et debitis illo praesentium illo et.
                    </span>
                    <div className="flex gap-1 items-center text-gray-500">
                      <p>#SP-1</p>
                      <div className="border h-5" />
                      <p className="text-red-600"> High</p>
                      <div className="border h-5" />
                      <p>25 Aug, 2011</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Belgassem</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center px-3 py-1 5 rounded-md bg-blue-600 text-white border">
                    New
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className=" flex items-center justify-center">
                    <select
                      name=""
                      id=""
                      className="rounded-md px-2 py-1.5 flex items-center hover:bg-blue-600  hover:text-white border outline-none cursor-pointer"
                    >
                      <option selected>Assign to</option>
                      <option value="US">Self assign</option>
                      <option value="CA">Others assign</option>
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="/TicketDetails">
                        <AiOutlineEye size={18} color="#3366FF" />
                      </Link>
                    </div>
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/*<div
            className="
            border w-fit px-4 py-2 mt-7 rounded-md cursor-pointer hover:bg-blue-300 hover:text-white transition-all duration-500 ease-in-out
            "
            onClick={() => alert("ameni ya3tik essa7a!!!")}
          >
            <p>Click me</p>
  </div>*/}
        </div>
        {/* CARDS::::::::::::::::::::::: */}
        {/* <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border">
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-4 w-4 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
            </span>
          </div>
          <span className="self-center text-xl font-bold">Title</span>
          <div className="t-stats flex justify-between font-semibold">
            <span>dep</span>
            <span>stats</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            non massa egestas...
          </p>
          <div className="flex gap-1 items-center">
            <span className="text-sm">Essued By </span>
            <b>Mohammed talbi</b>
          </div>
        </div> */}

        {/* <Link to='/TicketDetails'>
        <div className="relative flex flex-col rounded-md py-2 px-4 gap-2 border hover:shadow-lg bg-white ">
          
          <span className="text-xl font-semibold self-center">Reclmatio 56846</span>
          <span className="text-md self-center line-clamp-3 ">
          Consectetur accusantium est eos amet vitae magni similique. Eum qui dolores sed. Est numquam inventore laborum enim. Et debitis illo praesentium illo et. Dolor architecto praesentium dicta exercitationem temporibus commodi ipsam. Sed quia non sed. Autem saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo rem et. Porro enim et consectetur ad optio totam laboriosam. Molestiae eos fugit velit quis qui impedit perspiciatis voluptas. Temporibus quibusdam animi autem at similique eos non. Sed sapiente ipsam repellendus. Voluptas molestias unde illum inventore maxime. Dolores quae corrupti illum magnam ratione. Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate nobis corrupti. Non corrupti vel dolor aut fugit sint nihil consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente facilis culpa repellat maxime corrupti fugit. Nemo impedit animi harum quam harum quae. Minima temporibus est voluptates sint cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia. Expedita est eos eum enim fugiat molestiae vero. Sit rerum et earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui laudantium reprehenderit molestiae aut voluptatem non autem. Rerum corrupti suscipit in provident.
          </span>
          <div className="border w-full"></div>
          <div className="flex flex-row gap-1 text-xs font-medium">
            <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
            <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
            <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
            <span>03/04/2023</span>
          </div>
        </div>
          </Link>*/}
      </div>
    </div>
  );
};

export default Tickets;
