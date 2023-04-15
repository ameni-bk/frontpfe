import "./agent.css";
import React from "react";
import { Link } from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5";

const Agent = () => {
    return (
<div className="p-4">
      <h1 className="text-3xl font-semibold text-gray-300">Agent</h1>
      
      <div className="t-main mt-4 bg-white rounded-md shadow border p-6">
        <div className="">
          <Link
        to="/ADDagent"
        className="text-white outline-none "
>
          <div className="w-full flex justify-end pb-4">
            
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-sm px-3 py-1.5 text-center "
            >
              Add new agent
            </button>
          </div>
          </Link>

          <table className="w-full text-sm text-left text-gray-500  rounded-md">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Agent_name
                </th>
                <th scope="col" className="px-6 py-3">
                  Agent_ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">sahar</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
                <td className="px-6 py-4">12345</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">ameni</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
                <td className="px-6 py-4">12345</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="border p-1.5 rounded-md cursor-pointer hover:shadow ">
                      <IoTrashOutline size={18} color="#F94A5B" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">tahani</td>
                <td className="px-6 py-4">CL0022</td>
                <td className="px-6 py-4">devlopement</td>
                <td className="px-6 py-4">amenibenkalifa@gmail.com</td>
                <td className="px-6 py-4">28173458</td>
                <td className="px-6 py-4">12345</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
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
    
    export default Agent;