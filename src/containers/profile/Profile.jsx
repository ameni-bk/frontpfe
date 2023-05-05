import React from "react";

import { HiPencil } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="flex gap-10 items-center justify-center p-8">
      <div className="flex flex-col mb-4 items-center w-2/6  rounded-md border bg-white shadow-md py-10 ">
        <div className="relative mb-6">
          <img
            src="https://i.pinimg.com/236x/c2/2f/ba/c22fba109793af9d87a249454f8a7ee2.jpg"
            alt=""
            className="w-44 h-44 rounded-full bg-blue-700 hover:p-2 hover:shadow-lg"
          />
          <div className="absolute p-1.5 rounded-full bg-white  hover:bg-blue-700 hover:text-white left-1 top-32 text-black cursor-pointer">
            <HiPencil size={28} />
          </div>
        </div>

        <div className="flex gap-4 text-2xl font-medium text-blue-700">
          <span>Ameni</span>
          <span>Ben Khalif</span>
        </div>
        <div className="flex gap-10 text-base -mt-1 font-medium">
          <span>Ameni@gmail.com</span>
        </div>
        <div className="flex gap-4 text-base -mt-1 font-medium">
          <span>tel</span>
          <span>(+216) 56 561 226</span>
        </div>
        <div className="flex mt-10 font-medium">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Update Profile
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-4 items-center w-3/6  rounded-md border bg-white shadow-md py-10 px-8 ">
        <form className="w-full broder">
          <div className="mb-8">
            <label
              for="old_password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your old Password
            </label>
            <input
              type="password"
              id="old_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder="********"
            />
          </div>
          <div className="mb-8">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder="********"
            />
          </div>
          <div className="mb-8">
            <label
              for="verifpassword"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Repeat password
            </label>
            <input
              type="password"
              id="verifpassword"
              placeholder="********"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="relative mt-1 inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                Update Password
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
