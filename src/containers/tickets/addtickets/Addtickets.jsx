import "./addtickets.css";
import React from "react";

const Addtickets = () => {
  return (
    <div className="w-full p-10">
      <h1 className="text-3xl font-semibold text-gray-400">
        ADD Ticket
      </h1>

      <div className="w-full border bg-white p-6 mt-6">
        <div className="grid grid-cols-7 gap-6">
            {/* Email:::: */}
            {/* <div className="flex  gap-2 text-md border"> */}
                <label htmlFor="Email" className="font-semibold pl-2 text-lg " >Email</label>
                <input type="email" name="email" id="Email" placeholder="Example@gmail.com.." className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            
            {/* Subjct:::: */}
            {/* <div className="flex  gap-2 text-md border"> */}
                <label htmlFor="Subject" className="font-semibold pl-2 text-lg" >Subject</label>
                <input type="text" name="Subject" id="Subject" placeholder="Subject.." className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            {/* </div> */}
            {/* Category:::: */}
            {/* <div className="flex  gap-2 text-md border"> */}
                <label htmlFor="text" className="font-semibold pl-2 text-lg" >Priority</label>
                <select
                    name=""
                    id=""
                    className="rounded-md px-2 py-1.5 flex items-center bg-blue-100 border-blue-400   border outline-none cursor-pointer col-span-6 w-fit"
                  >
                    <option selected>Choose Priority</option>
                    <option value="US">Low</option>
                    <option value="CA">High</option>
                  </select>
                  <label htmlFor="text" className="font-semibold pl-2 text-lg" >Department</label>
                <select
                    name=""
                    id=""
                    className="rounded-md px-2 py-1.5 flex items-center bg-blue-100 border-blue-400   border outline-none cursor-pointer col-span-6 w-fit"
                  >
                    <option selected>Choose Department</option>
                    <option value="US">dev</option>
                    <option value="CA">finance</option>
                  </select>
            {/* </div> */}
            {/* Description:::: */}
            {/* <div className="flex flex-col mt-4 gap-2 text-md border"> */}
                <label htmlFor="desc" className="font-semibold pl-2 text-lg" >Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10" className="block w-3/4 p-2.5 text-sm text-gray-900  bg-blue-100 outline-none rounded-md border-blue-400 border  focus:ring-blue-500 focus:border-blue-500 col-span-6 " ></textarea>
            {/* </div> */}
        </div>
        <div className="w-full flex gap-6 justify-end px-20 mt-10">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>   

        </div>
      </div>
    </div>
  );
};

export default Addtickets;
