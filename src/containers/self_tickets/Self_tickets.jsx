import "./self_tickets.css";
import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

const Self_tickets = () => {
  return (
    <div className="self_tickets p-6 ">
      <div className="a-xx border px-4 py-2 rounded-md bg-white ">
        <div className="t-links flex gap-1 ">
          <Link to="/" className="font-semibold">Home</Link>
          <span className="font-semibold">/</span>
          <span>Self tickets</span>
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
                <td className="px-6 py-4">Ameni</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center px-3 py-1 5 rounded-md bg-blue-600 text-white border">
                    closed
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
          </div>
          </div>
    </div>
  );
};
export default Self_tickets;
