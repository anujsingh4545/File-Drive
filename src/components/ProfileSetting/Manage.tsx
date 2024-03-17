import React, {useState} from "react";
import ManagePart from "./ManagePart";
import AdminPart from "./AdminPart";

const Manage = () => {
  const [toggle, setToggle] = useState<string>("part");

  return (
    <div className="  w-full h-full ">
      <h2>Manage</h2>
      <p className="  text-[0.8rem] text-gray-500   pb-2">Manage your organizations!</p>

      <section className=" mt-3 flex items-start justify-start  border-b-[0.1px] text-gray-800  ">
        <button className={` tracking-wider  px-5  ease-out duration-150 transform  outline-none  ${toggle == "part" ? "border-b-[0.2px]" : ""}  border-slate-500  pb-1 `} onClick={() => setToggle("part")}>
          Part of
        </button>
        <button className={` tracking-wider px-5 ease-out duration-150 transform  outline-none ${toggle == "admin" ? "border-b-[0.2px]" : " "} border-slate-500  pb-1 `} onClick={() => setToggle("admin")}>
          Admin
        </button>
      </section>

      {toggle == "part" ? (
        <main className=" mt-5  ">
          <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
            <p className=" col-span-2 bg-black/40 p-1  text-center  ">S.No</p>
            <p className=" col-span-3 p-1 text-center  bg-black/20   ">Group</p>
            <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date Joined</p>
            <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Leave</p>
          </section>

          <div className="  h-[19rem] md:h-[27rem] lg:h-[17rem] overflow-scroll   ">
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
            <ManagePart />
          </div>
        </main>
      ) : (
        <main className=" mt-5 ">
          <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
            <p className=" col-span-3 bg-black/40 p-1  text-center  ">Name</p>
            <p className=" col-span-2 p-1 text-center  bg-black/20   ">Members</p>
            <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date Created</p>
            <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Delete</p>
          </section>

          <div className="  h-[19rem] md:h-[27rem] lg:h-[17rem] overflow-scroll   ">
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
            <AdminPart />
          </div>
        </main>
      )}
    </div>
  );
};

export default Manage;
