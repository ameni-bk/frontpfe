import "./contact.css";
import React from "react";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact p-6">
      <div className="  grid grid-cols-2 gap-6 ">
        <div className="">
          <span className="text-3xl font-semibold  text-purple-300 ml-2 ">A propos</span>
          <div className="border bg-white rounded-md shadow p-6 mt-4 ">
          SUNEVIT is a company specializing in IT services situated in Sfax,
           launched in 2017, as services provider, SUNVIT has the necessary expertise to
            provide key projects to its clients. It possesses numerous services and is a
             large fan of skills and expertise.
          </div>
        </div>
        <div className="">
          <span className="text-3xl font-semibold  text-purple-300 ml-2 ">Contact us</span>
          <div className="border bg-white rounded-md shadow p-6 mt-4 ">
            where you can found us
            <div>
            <div className="s-contact flex flex-row items-center text-lg gap-2 py-2 px-4">
           <HiOutlineMail size={24} />         
             contact@sunevit.tn
           <IoEarthOutline size={24} />
           www.sunevit.tn
           <TbPhone size={24} />
           (+216)24385050

      </div>
          <label htmlFor="Name" className="font-semibold pl-2 text-lg " ></label>
            <input type="name" name="name" id="Name" placeholder="enter your name" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            </div>
            <div>
            <label htmlFor="Email" className="font-semibold pl-2 text-lg " ></label>
            <input type="email" name="email" id="Email" placeholder="enter valid adress mail" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            </div>
            <div>
            <label htmlFor="Phone" className="font-semibold pl-2 text-lg " ></label>
            <input type="phone" name="phone" id="Phone" placeholder=" phone" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
           </div>
            <div>
            <label htmlFor="Object" className="font-semibold pl-2 text-lg " ></label>
            <input type="object" name="object" id="Object" placeholder="object" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            </div>
            <div>
            <label htmlFor="Message" className="font-semibold pl-2 text-lg " ></label>
            <input type="message" name="message" id="Message" placeholder="enter your message" className="pl-2 py-0.5 border bg-blue-100 outline-none rounded-md border-blue-400 w-3/4 col-span-6" />
            </div>
            <div className="">
          <div className="w-full flex justify-end pb-4">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-sm px-3 py-1.5 text-center "
            >
              Sent
            </button>
          </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
