import React from "react";
import Empty from "../../common/Empty";
import MMemberOption from "./MMemberOption";

const ManageMember = () => {
  return (
    <div className=" ">
      <section className=" flex items-center justify-between   mb-5 ">
        <p className=" text-gray-600  ">Select your group!</p>

        <select name="group" id="group" className="text-gray-600 outline-none max-w-[8rem]   ">
          <option defaultChecked defaultValue="Choose" hidden>
            Group
          </option>
          <option value="volvo">Lorem </option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </section>

      {/*  */}

      <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
        <p className=" col-span-3 bg-black/40 p-1  text-center  ">Name</p>
        <p className=" col-span-2 p-1 text-center  bg-black/20   ">Joined</p>
        <p className=" col-span-3 text-center  p-1 bg-black/40  ">Role</p>
        <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Edit</p>
      </section>

      <div className="  h-[16rem] md:h-[25rem] lg:h-[14.5rem] overflow-scroll">
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
        <MMemberOption />
      </div>
    </div>
  );
};

export default ManageMember;
