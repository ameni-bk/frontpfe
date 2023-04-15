import "./trashed.css";
import React from "react";
import { Link } from 'react-router-dom';
import { GrRefresh } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";

const Trashed = () => {
    return (
        <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-300">Trashed tickets</h1>
        <div className="t-main mt-4 bg-white rounded-md shadow border p-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500  rounded-md">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ticket_ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    user_ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    id_li_suprymeha
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date de suppresion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">TK0022</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">AG0016</td>
                  <td className="px-6 py-4">05/01/2002</td>
                  <td className="px-6 py-4">closed</td>
                  <td>
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="#restore">
                        <GrRefresh size={18} color="#3366FF" />
                      </Link>
                    </div>
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                  </td>
                </tr>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">Tk0011</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">CL014</td>
                  <td className="px-6 py-4">22/05/2000</td>
                  <td className="px-6 py-4">new</td>
                  <td>
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="#restore">
                        <GrRefresh size={18} color="#3366FF" />
                      </Link>
                    </div>
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                  </td>
               
                </tr>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">Tk0068</td>
                  <td className="px-6 py-4">CL0022</td>
                  <td className="px-6 py-4">AG003</td>
                  <td className="px-6 py-4">07/02/</td>
                  <td className="px-6 py-4">suspend</td>
                  <td>
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <Link to="#restore">
                        <GrRefresh size={18} color="#3366FF" />
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
    export default Trashed;