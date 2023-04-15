import "./dashboard.css";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-300">Dashboard</h1>

      <div className="flex flex-col gap-10">
        <div className="border">
          <h1 className="text-2xl font-semibold text-black">Global tickets</h1>
          <div className="t-main mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center ite rounded-md border shadow-sm">
              <h1 className="text-xl font-bold">All tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div className="w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm">
              <h1 className="text-xl font-bold">Recent tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div className="w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm">
              <h1 className="text-xl font-bold">Active tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div className="w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm">
              <h1 className="text-xl font-bold">Suspend tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div className="w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm">
              <h1 className="text-xl font-bold">Closed tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
          </div>
        </div>

        <div className="border">
          <h1 className="text-2xl font-semibold text-black">Self tickets</h1>
          <div
            className="
          t-main mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <div
              className="
            w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm"
            >
              <h1 className="text-xl font-bold">tickets</h1>
              <span className="text-md px-10">100</span>
            </div>
            <div
              className="
            w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm"
            >
              <h1 className="text-xl font-bold">Recent tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div
              className="
            w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm"
            >
              <h1 className="text-xl font-bold">Active tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div
              className="
            w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm"
            >
              <h1 className="text-xl font-bold">Suspend tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
            <div
              className="
            w-1/7 bg-white px-5 py-3 mt-1 flex flex-col justify-center items-center rounded-md border shadow-sm"
            >
              <h1 className="text-xl font-bold">Closed tickets</h1>
              <span className="text-md px-11">100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
