import {getAuth} from "firebase/auth";
import {LogOut, Settings} from "lucide-react";
import React, {useEffect, useState} from "react";
import {removeFromSession} from "../../common/Session";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import ProfileSetting from "../../recoil/atoms/ProfileSetting";

const UserProfile = ({handle, id}: any) => {
  const navigate = useNavigate();

  const [user, setuser]: any = useRecoilState(UserData);
  const [pSetting, setPSetting] = useRecoilState(ProfileSetting);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const brandSection = document.getElementById("profiledash");
      const profilesection = document.getElementById(id);

      if (brandSection && !brandSection.contains(event.target) && profilesection && !profilesection.contains(event.target)) {
        handle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handle]);

  const logoutUser = async () => {
    await getAuth().signOut();
    removeFromSession("user");
    setuser([]);
    handle(false);
    navigate("/");

    toast.success("Log out Sucessfully !");
  };

  return (
    <div id="profiledash" className="absolute right-0 top-[40px] px-3 py-5  bg-white shadow-md  w-[21rem] cursor-default ">
      <main className=" flex flex-col items-center justify-center gap-y-3">
        <section className=" w-full flex flex-row items-center justify-center gap-4 ">
          <img src={user.user.profile} alt="" className=" size-10 rounded-full " />

          <div className=" flex flex-col items-start flex-1 justify-center">
            <p className=" text-[0.7rem]  w-[calc(21rem-5rem)]  text-ellipsis overflow-clip   ">{user.user.name}</p>
            <p className="text-[0.7rem] w-[calc(21rem-5rem)]  text-ellipsis overflow-clip  text-gray-600">{user.user.email}</p>
          </div>
        </section>

        <section className=" w-full flex flex-row items-center  justify-start gap-4 ">
          <div className=" w-10 flex items-center justify-center ">
            <Settings size={15} className="text-gray-500" />
          </div>
          <p
            className=" text-gray-900 flex-1 cursor-pointer text-[0.8rem] "
            onClick={() => {
              handle(false);
              setPSetting(true);
            }}
          >
            Manage account
          </p>
        </section>

        <section className=" w-full flex flex-row items-center  justify-start gap-4 ">
          <div className=" w-10 flex items-center justify-center ">
            <LogOut size={15} className="text-gray-500" />
          </div>
          <p className=" text-gray-900 flex-1 cursor-pointer  text-[0.8rem]" onClick={logoutUser}>
            Log out
          </p>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
