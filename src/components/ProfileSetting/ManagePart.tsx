import {UserMinus} from "lucide-react";
import React from "react";

interface ManageComp {
  index: String;
  id: String;
  name: String;
  userCreated: Date;
}

const ManagePart = ({index, id, name, userCreated}: ManageComp) => {
  const date = new Date(userCreated);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const creationDate = `${day}/${month}/${year}`;
  return (
    <div className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-1">
      <p className="text-center col-span-2 border-x-[0.1px] py-1 "> {index}.</p>
      <p className=" col-span-3 py-1 text-center  border-x-[0.1px]  line-clamp-1 "> {name} </p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] "> {creationDate} </p>
      <p className=" col-span-2  flex items-center justify-center  px-1 text-center py-1  border-x-[0.1px]  ">
        <UserMinus size={15} className=" w-full cursor-pointer text-red-700" />
      </p>
    </div>
  );
};

export default ManagePart;
