import {CloudHail, Contact} from "lucide-react";
import React, {useEffect, useState} from "react";
import Group from "./Group";
import {useRecoilState} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import axios from "axios";
import toast from "react-hot-toast";
import NavbarLoad from "../../recoil/atoms/NavbarLoad";
import CurrentGroup from "../../recoil/atoms/CurrentGroup";
import CurrentGroupId from "../../recoil/atoms/CurrentGroupId";

interface GroupDashProps {
  admin: any;
  member: any;
  loading: boolean;
  handle: any;
  id: string;
}

const GroupDash = ({admin, member, loading, handle, id}: GroupDashProps) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const brandSection = document.getElementById("groupdash");
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

  return (
    <div id="groupdash" className=" min-h-[5rem]  flex items-center flex-col justify-center absolute  right-[-50px] md:right-0 top-[40px] px-3 pt-2  bg-white shadow-md   w-[21rem] cursor-default text-gray-800 ">
      {/*  */}

      <Group icon="personal" name="Personal Account" color="bg-blue-500" />

      <p className="  text-[0.8rem] w-full  pt-3 ">
        Admin <span>({admin.length})</span>
      </p>

      <section className=" flex flex-col gap-y-0 w-full max-h-[10rem] h-fit overflow-scroll ">
        {loading ? (
          <div className=" w-full flex flex-col items-center justify-center gap-y-3 mt-2 ">
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          </div>
        ) : (
          admin.map((group: any) => <Group key={group.id} id={group.id} icon="admin" name={group.name} color="bg-purple-700" />)
        )}
      </section>
      <p className="  text-[0.8rem] w-full  pt-1 ">
        Member <span>({member.length})</span>
      </p>

      <section className=" flex flex-col gap-y-0 w-full  max-h-[10rem] overflow-scroll">
        {loading ? (
          <div className=" w-full flex flex-col items-center justify-center gap-y-3 mt-2 ">
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          </div>
        ) : (
          member.map((group: any) => <Group key={group.id} id={group.id} icon="admin" name={group.name} color="bg-cyan-600" />)
        )}
      </section>

      {/*  */}
    </div>
  );
};

export default GroupDash;
