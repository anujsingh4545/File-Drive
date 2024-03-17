import {Contact} from "lucide-react";
import React, {useEffect} from "react";
import Group from "./Group";

interface GroupDashProps {
  handle: any;
  id: string;
}

const GroupDash = ({handle, id}: GroupDashProps) => {
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
        Admin <span>(5)</span>
      </p>

      <section className=" flex flex-col gap-y-0 w-full max-h-[10rem] h-fit overflow-scroll ">
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
        <Group icon="admin" name="logoutUser" color="bg-purple-700" />
      </section>
      <p className="  text-[0.8rem] w-full  pt-1 ">
        Member <span>(5)</span>
      </p>

      <section className=" flex flex-col gap-y-0 w-full  max-h-[10rem] overflow-scroll">
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
        <Group icon="admin" name="logoutUser" color="bg-cyan-600" />
      </section>

      {/*  */}
    </div>
  );
};

export default GroupDash;
