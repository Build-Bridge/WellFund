import { LogOut } from "lucide-react";
import React from "react";

const ProductModal = () => {
  return (
    <div className="bg__overlay z-[50] w-full h-full">
      <div className="ml-auto my-2 rounded-lg w-[745px] bg-[#0E0F1D] h-full py-3 px-5">
        <div className="my-3 flex items-center justify-between">
          <LogOut size={32} className="bg-[#64748B] rounded p-1" />
          <button className=" border border-[#64748B] py-1 px-5 rounded capitalize text-[14px] leading-[20px] text-[#64748B]">
            edit
          </button>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-1 h-fit w-full">
            <img src={"/prd1.svg"} alt="" />
            <div>
              <h1 className="text-white text-[14px] leading-[20px] font-bold">
                Aspirin
              </h1>
              <small>M8N7R6J2</small>
            </div>
          </div>

          <div>
            <div>
              <ul className="bg-[#242A32] flex items-center gap-5 my-5 rounded-md w-[650px]">
                <li className="p-2 capitalize font-bold text-[14px] leading-[20px] bg-[#64748B] rounded-md text-white text-nowrap">
                  general information
                </li>
                <li className="p-2 capitalize font-bold text-[14px] leading-[20px] text-[#444F5F]text-nowrap">
                  {" "}
                  Pricing & Inventory
                </li>
                <li className="p-2 capitalize font-bold text-[14px] leading-[20px] text-[#444F5F]text-nowrap">
                  Reviews & Ratings
                </li>
                <li className="p-2 capitalize font-bold text-[14px] leading-[20px] text-[#444F5F]text-nowrap">
                  Product Performance
                </li>
              </ul>
            </div>

            <div className="w-[600px]">
              <h2 className="text-white font-bold leading-6 capitalize">
                brief description
              </h2>
              <p className="text-[14px] leading-[20px] border border-[#242A32] p-2 rounded-md">
                Aspirin is a widely used over-the-counter medication that
                belongs to a class of drugs known as nonsteroidal
                anti-inflammatory drugs (NSAIDs). It is primarily used to
                relieve pain, reduce inflammation, and lower fever.
              </p>

              <div>
                <div className="flex items-center justify-between gap-10">
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                      price
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                      $10.00
                    </div>
                  </div>
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                      in stock
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                      12 product
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-10">
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                      category
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                     health product
                    </div>
                  </div>
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                     brand
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                    Starlabs Pharmacy LTD
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-10">
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                     registration date
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                    31 / 01 / 2025
                    </div>
                  </div>
                  <div className="my-3 w-full">
                    <label className="font-bold leading-6 text-white capitalize">
                     status
                    </label>
                    <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                    <div className="flex items-center gap-1">
                  <img src={"/active.svg"} alt="" />
                  <small className="text-[#059C48] text-[14px] leading-[20px] capitalize">
                    active
                  </small>
                </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
