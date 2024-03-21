import React, {useEffect, useRef, useState} from "react";
import Empty from "../../common/Empty";
import MMemberOption from "./MMemberOption";
import {useRecoilValue} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import axios from "axios";
import toast from "react-hot-toast";
import {lookInSession} from "../../common/Session";

const ManageMember = () => {
  const user: any = useRecoilValue(UserData);

  const [adminG, setadminG] = useState([]);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [Mloading, setMLoading] = useState(false);

  const groupref: any = useRef();

  useEffect(() => {
    const getallagroups = async () => {
      if (user.user && user.user.id) {
        const userId = user.user.id;
        setLoading(true);
        await axios
          .post("https://file-drive-backend.vercel.app/api/v1/personal/getallagroups", {userId})
          .then((response) => {
            if (response.data.success) {
              setadminG(response.data.adminG);
              setLoading(false);
            } else {
              toast.error(response.data.message);
              setLoading(false);
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
            setLoading(false);
          });
      }
    };

    getallagroups();
  }, []);

  const updateMembers = async (e?: any) => {
    let groupId;
    if (groupref.current.value != "Group") {
      groupId = groupref.current.value;
    } else {
      groupId = e.target.value;
    }
    let userSession = lookInSession("user");

    if (userSession && groupId) {
      setMLoading(true);
      await axios
        .post(
          "https://file-drive-backend.vercel.app/api/v1/group/getmembers",
          {groupId},
          {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          }
        )
        .then((response: any) => {
          if (response.data.success) {
            setMembers(response.data.members);
            setMLoading(false);
          } else {
            setMLoading(false);
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          setMLoading(false);
        });
    }
  };

  const changeRole = async (id: string, role: string): Promise<boolean> => {
    const groupId = groupref.current.value;
    let userSession = lookInSession("user");

    if (groupId != "Group" && userSession) {
      await axios
        .post(
          "https://file-drive-backend.vercel.app/api/v1/group/changerole",
          {UserId: id, groupId: groupId, role: role},
          {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          }
        )
        .then((response: any) => {
          if (response.data.success) {
            toast.success(response.data.message);
            updateMembers();
            return true;
          } else {
            toast.error(response.data.message);
            return false;
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          return false;
        });
    }

    return false;
  };

  const deleteUser = async (id: string): Promise<boolean> => {
    const groupId = groupref.current.value;
    let userSession = lookInSession("user");

    if (groupId != "Group" && userSession) {
      await axios
        .post(
          "https://file-drive-backend.vercel.app/api/v1/group/deleteuser",
          {UserId: id, groupId: groupId},
          {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          }
        )
        .then((response: any) => {
          if (response.data.success) {
            toast.success(response.data.message);
            updateMembers();
            return true;
          } else {
            toast.error(response.data.message);
            return false;
          }
        })
        .catch((e: any) => {
          console.log(e);
          toast.error("Something went wrong!");
          return false;
        });
    }
    return false;
  };

  return (
    <div className=" flex flex-col h-full w-full  ">
      <section className=" flex items-center justify-between   mb-5 ">
        <p className=" text-gray-600  ">Select your group!</p>

        {loading ? (
          <div className=" flex flex-col ">
            <section className=" w-32 h-2 bg-gray-200 animate-pulse  rounded-xl "></section>
            <section className=" w-32 h-2 bg-gray-200 animate-pulse  rounded-xl mt-1 "></section>
          </div>
        ) : (
          <select ref={groupref} onChange={updateMembers} name="group" className="text-gray-600 outline-none max-w-[8rem]     ">
            <option defaultChecked defaultValue="Choose" hidden>
              Group
            </option>

            {adminG.map((group: any) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        )}
      </section>

      {/*  */}

      {Mloading ? (
        <div className=" w-full mt-5  flex flex-col items-center justify-center gap-y-5 ">
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
        </div>
      ) : members.length > 0 ? (
        <>
          <section className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
            <p className=" col-span-3 bg-black/40 p-1  text-center  ">Name</p>
            <p className=" col-span-2 p-1 text-center  bg-black/20   ">Joined</p>
            <p className=" col-span-3 text-center  p-1 bg-black/40  ">Role</p>
            <p className=" col-span-2   px-1 text-center py-1 bg-black/20   ">Edit</p>
          </section>

          <div className="  h-[16rem] md:h-[25rem] lg:h-[14.5rem] overflow-scroll">
            {members.map((mem: any) => (
              <MMemberOption key={mem.id} id={mem.id} name={mem.name} role={mem.role} joined={mem.joined} changeRole={changeRole} deleteUser={deleteUser} />
            ))}
          </div>
        </>
      ) : (
        <div className="  flex-1 ">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default ManageMember;
