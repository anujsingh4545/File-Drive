import React from "react";
import RequestPart from "./RequestPart";

const Requests = () => {
  return (
    <div className="  w-full h-full ">
      <h2>Requests</h2>
      <p className="  text-[0.8rem] text-gray-500  border-b-[0.1px]  pb-2">Manage your requests!</p>

      <main className=" mt-5  ">
        <section className=" grid grid-cols-12 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
          <p className=" col-span-4 bg-black/40 p-1  text-center  ">Name</p>
          <p className=" col-span-2 p-1 text-center  bg-black/20   ">Role</p>
          <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date</p>
          <p className=" col-span-3   px-1 text-center py-1 bg-black/20   ">Choose</p>
        </section>

        <div className="  h-[21rem] md:h-[30rem] lg:h-[20rem] overflow-scroll   ">
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
          <RequestPart />
        </div>
      </main>
    </div>
  );
};

export default Requests;
