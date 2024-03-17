import {Check, X} from "lucide-react";
import React from "react";

const RequestPart = () => {
  return (
    <div className=" grid grid-cols-12 items-start justify-center border-[1px] text-[0.6rem] md:text-[0.8rem] mb-1">
      <p className="text-center col-span-4 border-x-[0.1px] py-1 line-clamp-1 ">TA Digital </p>
      <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  ">Member</p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">02/03/2024</p>
      <section className="col-span-3 items-center h-full justify-center ">
        <div className=" grid grid-cols-2 w-full h-full  items-center justify-center ">
          <Check size={18} className=" text-green-700 w-full flex items-center justify-center cursor-pointer" />
          <X size={18} className="w-full text-red-700  border-l-[1px] flex items-center justify-center cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default RequestPart;
