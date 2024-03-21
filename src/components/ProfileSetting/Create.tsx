import React, {useState} from "react";
import CreateOrg from "./CreateOrg";
import ManageMember from "./ManageMember";
import SendRequest from "./SendRequest";

const Create = () => {
  const [toggle, setToggle] = useState<string>("create");
  return (
    <div className="  w-full h-full  flex flex-col">
      <h2>Create/Manage</h2>
      <p className="  text-[0.8rem] text-gray-500   pb-2">Create/Manage your organizations!</p>

      <section className=" mt-3 flex items-start justify-start text-[0.7rem] xl:text-[0.9rem]  border-b-[0.1px] text-gray-800  ">
        <button className={` tracking-wider  px-2 md:px-5  ease-out duration-150 transform  outline-none  ${toggle == "create" ? "border-b-[0.2px]" : ""}  border-slate-500  pb-1 `} onClick={() => setToggle("create")}>
          Create
        </button>
        <button className={` tracking-wider  px-2 md:px-5 ease-out duration-150 transform  outline-none ${toggle == "members" ? "border-b-[0.2px]" : " "} border-slate-500  pb-1 `} onClick={() => setToggle("members")}>
          Manage Members
        </button>
        <button className={` tracking-wider  px-2 md:px-5 ease-out duration-150 transform  outline-none ${toggle == "request" ? "border-b-[0.2px]" : " "} border-slate-500  pb-1 `} onClick={() => setToggle("request")}>
          Send Request
        </button>
      </section>

      <main className="mt-5  h-full flex-1 flex flex-col">
        {toggle == "create" && <CreateOrg />}
        {toggle == "members" && <ManageMember />}
        {toggle == "request" && <SendRequest />}
      </main>
    </div>
  );
};

export default Create;
