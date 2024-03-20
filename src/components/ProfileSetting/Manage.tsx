import React, {useEffect, useState} from "react";
import ManagePart from "./ManagePart";
import AdminPart from "./AdminPart";
import {useRecoilState} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import axios from "axios";
import toast from "react-hot-toast";
import Empty from "../../common/Empty";

const Manage = () => {
  const [toggle, setToggle] = useState<string>("part");
  const [admins, setAdmins] = useState([]);
  const [members, setMembers] = useState([]);
  const [user, setuser]: any = useRecoilState(UserData);
  const [loading, setLoading] = useState(false);

  const [loadChange, setloadChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.user.id) {
        setLoading(true);
        await axios
          .post("http://localhost:4000/api/v1/user/getadminmember", {userId: user.user.id})
          .then((response) => {
            if (response.data.success) {
              setAdmins(response.data.admin);
              setMembers(response.data.member);

              setLoading(false);
            } else {
              toast.error("Something went wrong!");
              setLoading(false);
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [loadChange]);

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
        loading ? (
          <div className=" w-full mt-5  flex flex-col items-center justify-center gap-y-5 ">
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          </div>
        ) : members.length > 0 ? (
          <main className=" mt-5  ">
            <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
              <p className=" col-span-2 bg-black/40 p-1  text-center  ">S.No</p>
              <p className=" col-span-3 p-1 text-center  bg-black/20   ">Group</p>
              <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date Joined</p>
              <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Leave</p>
            </section>

            <div className="  h-[19rem] md:h-[27rem] lg:h-[17rem] overflow-scroll   ">
              {members.map((group: any, index: any) => (
                <ManagePart key={group.id} index={index + 1} id={group.id} name={group.name} userCreated={group.userCreated} />
              ))}
            </div>
          </main>
        ) : (
          <Empty />
        )
      ) : loading ? (
        <div className=" w-full mt-5  flex flex-col items-center justify-center gap-y-5 ">
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
        </div>
      ) : admins.length > 0 ? (
        <main className=" mt-5 ">
          <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
            <p className=" col-span-3 bg-black/40 p-1  text-center  ">Name</p>
            <p className=" col-span-2 p-1 text-center  bg-black/20   ">Members</p>
            <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date Created</p>
            <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Delete</p>
          </section>

          <div className="  h-[19rem] md:h-[27rem] lg:h-[17rem] overflow-scroll   ">
            {admins.map((group: any) => (
              <AdminPart load={loadChange} loadChange={setloadChange} key={group.id} id={group.id} createdAt={group.createdAt} name={group.name} membercount={group.membercount} />
            ))}
          </div>
        </main>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Manage;
