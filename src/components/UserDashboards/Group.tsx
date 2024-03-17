import {Building, Contact} from "lucide-react";
import React from "react";

interface groupprop {
  icon: string;
  name: string;
  color: string;
}

const Group = ({icon, name, color}: groupprop) => {
  return (
    <section className="  w-full py-2 flex  items-center justify-center gap-5  border-b-[0.1px] cursor-pointer ">
      <div className={`  ${color} text-white px-2 py-[5px] rounded-sm `}>{icon == "personal" ? <Contact size={18} /> : <Building size={18} />}</div>
      <p className="  flex-1 line-clamp-1 ">{name}</p>
    </section>
  );
};

export default Group;
