import "./details.css";
import React from "react";

import Avatar from "../../../assets/images/avatar.png";

const TicketDetails = () => {
  return (
    <div className="w-full p-10">
      <h1 className="text-3xl font-semibold text-gray-400">
        Ticket Information
      </h1>

      <div className="flex gap-6 mt-6">
        <div className="w-4/6">
          <div className=" bg-white px-6 py-4 flex flex-col rounded-md border shadow-sm">
            <h1 className="text-xl font-bold">Title</h1>

            <div className="flex flex-row gap-1 text-sm font-medium mb-4">
              <span>#SPG-01</span>
              <div className="border h-full border-gray-300" />
              <span className="text-green-700">Low</span>
              <div className="border h-full border-gray-300" />
              <span className="text-blue-700">Inprogress</span>
              <div className="border h-full border-gray-300" />
              <span>03/04/2023</span>
            </div>

            <span className="text-md self-center ">
              Consectetur accusantium est eos amet vitae magni similique. Eum
              qui dolores sed. Est numquam inventore laborum enim. Et debitis
              illo praesentium illo et. Dolor architecto praesentium dicta
              exercitationem temporibus commodi ipsam. Sed quia non sed. Autem
              saepe est porro molestiae. Nemo totam qui facilis facere ipsam quo
              rem et. Porro enim et consectetur ad optio totam laboriosam.
              Molestiae eos fugit velit quis qui impedit perspiciatis voluptas.
              Temporibus quibusdam animi autem at similique eos non. Sed
              sapiente ipsam repellendus. Voluptas molestias unde illum
              inventore maxime. Dolores quae corrupti illum magnam ratione.
              Sequi quis sunt repellendus voluptatem omnis. Aliquam voluptate
              nobis corrupti. Non corrupti vel dolor aut fugit sint nihil
              consectetur. Vel laboriosam qui in et est rerum. Laborum sapiente
              facilis culpa repellat maxime corrupti fugit. Nemo impedit animi
              harum quam harum quae. Minima temporibus est voluptates sint
              cupiditate magnam minus. Voluptatem nam iusto modi vero unde quia.
              Expedita est eos eum enim fugiat molestiae vero. Sit rerum et
              earum maxime molestiae est qui. Voluptas quis dolorem fugit. Qui
              laudantium reprehenderit molestiae aut voluptatem non autem. Rerum
              corrupti suscipit in provident.
            </span>
          </div>

          <div className=" mt-4 bg-white flex flex-col rounded-md border shadow-sm">
            <h1 className="text-xl font-bold ml-4 my-2">Coversation</h1>

            <div className="border w-full px-2" />

            <div className="flex flex-col gap-2 p-4 pb-6 ">
              <div className="flex flex-row items-center gap-4 ">
                <img src={Avatar} alt="user_avatar" className="w-12 h-auto" />
                <div className="flex flex-col gap">
                  <span className="text-gray-700 text-xl font-semibold">
                    Amni ben Khlifa
                  </span>
                  <span className="text-gay-400 text-xs">
                    Sat, 25 Feb 2017, 02:22 AM
                  </span>
                </div>
              </div>
              <p className="text-md ml-10 ">
                Id non esse quo possimus. Magni omnis qui omnis dolores
                veritatis quasi minus. Perspiciatis velit corporis beatae
                eveniet itaque aspernatur ullam. Et illum reiciendis qui non
                quae enim. Hic cumque laboriosam autem qui. Aliquid at
                voluptatibus fuga illum mollitia id. Dolore officia non nesciunt
                voluptate illo. Rerum ab assumenda et id quae est.
              </p>
            </div>

            <div className="border w-full px-2" />

            <div className="flex flex-col gap-2 p-4 pb-6 ">
              <div className="flex flex-row items-center gap-4 ">
                <img src={Avatar} alt="user_avatar" className="w-12 h-auto" />
                <div className="flex flex-col gap">
                  <span className="text-gray-700 text-xl font-semibold">
                    Amni ben Khlifa
                  </span>
                  <span className="text-gay-400 text-xs">
                    Sat, 25 Feb 2017, 02:22 AM
                  </span>
                </div>
              </div>
              <p className="text-md ml-10 ">
                Id non esse quo possimus. Magni omnis qui omnis dolores
                veritatis quasi minus. Perspiciatis velit corporis beatae
                eveniet itaque aspernatur ullam. Et illum reiciendis qui non
                quae enim. Hic cumque laboriosam autem qui. Aliquid at
                voluptatibus fuga illum mollitia id. Dolore officia non nesciunt
                voluptate illo. Rerum ab assumenda et id quae est.
              </p>
            </div>

            <div className="border w-full px-2" />

            <div className="flex flex-col gap-2 p-4 pb-6 ">
              <div className="flex flex-row items-center gap-4 ">
                <img src={Avatar} alt="user_avatar" className="w-12 h-auto" />
                <div className="flex flex-col gap">
                  <span className="text-gray-700 text-xl font-semibold">
                    Amni ben Khlifa
                  </span>
                  <span className="text-gay-400 text-xs">
                    Sat, 25 Feb 2017, 02:22 AM
                  </span>
                </div>
              </div>
              <p className="text-md ml-10 ">
                Id non esse quo possimus. Magni omnis qui omnis dolores
                veritatis quasi minus. Perspiciatis velit corporis beatae
                eveniet itaque aspernatur ullam. Et illum reiciendis qui non
                quae enim. Hic cumque laboriosam autem qui. Aliquid at
                voluptatibus fuga illum mollitia id. Dolore officia non nesciunt
                voluptate illo. Rerum ab assumenda et id quae est.
              </p>
            </div>

            <div className="border w-full px-2" />

            <div className="flex flex-col gap-2 p-4 pb-6 ">
              <div className="flex flex-row items-center gap-4 ">
                <img src={Avatar} alt="user_avatar" className="w-12 h-auto" />
                <div className="flex flex-col gap">
                  <span className="text-gray-700 text-xl font-semibold">
                    Amni ben Khlifa
                  </span>
                  <span className="text-gay-400 text-xs">
                    Sat, 25 Feb 2017, 02:22 AM
                  </span>
                </div>
              </div>
              <p className="text-md ml-10 ">
                Id non esse quo possimus. Magni omnis qui omnis dolores
                veritatis quasi minus. Perspiciatis velit corporis beatae
                eveniet itaque aspernatur ullam. Et illum reiciendis qui non
                quae enim. Hic cumque laboriosam autem qui. Aliquid at
                voluptatibus fuga illum mollitia id. Dolore officia non nesciunt
                voluptate illo. Rerum ab assumenda et id quae est.
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/7 h-fit   ">
          <div className=" pb-6 bg-white border rounded-md shadow">
            <h2 className=" my-4 mb-4 font-semibold text-center">
              Ticket Information
            </h2>

            <div className="pl-3 grid grid-cols-11 gap-1">
              <div className="col-span-3 text-md font-semibold ">
                <span>Ticket_ID</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>TK-0021</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>User</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>Salah Guesmi</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Status</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>New</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Prioraty</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>Urgent</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Open Date</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>12/04/2023</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Asign</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <div className="">
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
              </div>
            </div>
          </div>

          
          
          <div className="w-2/7 pb-6 h-fit border bg-white rounded-md shadow mt-10 ">
            <h1 className="my-4 mb-4 font-semibold text-center">Client Details</h1>
            
            <div className="pl-3 grid grid-cols-11 gap-1">
              <div className="col-span-3 text-md font-semibold ">
                <span>ID</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>CL-0025</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Name</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>Salah Guesmi</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Email</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>salah.guesmi@gmail.com</span>
              </div>

              <div className="col-span-3 text-md font-semibold ">
                <span>Phone</span>
              </div>
              <div className="text-lg font-semibold text-center ">
                <span>:</span>
              </div>
              <div className="col-span-7 text-sm ">
                <span>26 173 452</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
