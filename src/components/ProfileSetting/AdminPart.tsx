import {Delete} from "lucide-react";
import React from "react";

const AdminPart = () => {
  return (
    <div className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-1">
      <p className="text-center col-span-3 border-x-[0.1px] py-1 ">Ta Digital</p>
      <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  line-clamp-1 ">10</p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">02/03/2024</p>
      <p className=" col-span-2  flex items-center justify-center  px-1 text-center py-1  border-x-[0.1px]  ">
        <Delete size={15} className=" w-full cursor-pointer text-gray-700" />
      </p>
    </div>
  );
};

export default AdminPart;
