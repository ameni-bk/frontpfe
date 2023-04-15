import "./addclient.css";
import React from "react";

const Addclient = () => {
  return (
    <div className="w-full p-10">
    <h1 className="text-3xl font-semibold text-gray-400">
      ADD client
    </h1>
    <div className="w-full border bg-white p-6 mt-6">
        <div className="grid grid-cols-7 gap-6">
    <label htmlFor="Name" className="font-semibold pl-2 text-lg " >client Name</label>
    <input type="name" name="name" id="Name" placeholder="client name" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
    
    <label htmlFor="Email" className="font-semibold pl-2 text-lg " >Email</label>
    <input type="email" name="email" id="Email" placeholder="client@gmail.com.." className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
    
    <label htmlFor="Phone" className="font-semibold pl-2 text-lg " >Phone</label>
    <input type="phone" name="phone" id="Phone" placeholder="client phone" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
   
    <label htmlFor="Company" className="font-semibold pl-2 text-lg " >Company</label>
    <input type="company" name="company" id="Company" placeholder="Client company" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
   
    <label htmlFor="Password" className="font-semibold pl-2 text-lg " >Password</label>
    <input type="password" name="password" id="Password" placeholder="Client password" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
   
    <div className="w-full flex gap-6 justify-end px-20 mt-10">
     <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">ADD</button>   

        </div>
    </div>
    </div>
    </div>
    );
};

export default Addclient;