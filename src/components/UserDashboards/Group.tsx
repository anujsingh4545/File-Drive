import {Building, Contact} from "lucide-react";
import React from "react";
import {useRecoilState} from "recoil";
import CurrentGroup from "../../recoil/atoms/CurrentGroup";
import CurrentGroupId from "../../recoil/atoms/CurrentGroupId";
import CallFileLoad from "../../recoil/atoms/CallFileLoad";

interface groupprop {
  id?: string;
  icon: string;
  name: string;
  color: string;
}

const Group = ({id, icon, name, color}: groupprop) => {
  const [CurrentGroupName, setCurrentGroupName] = useRecoilState(CurrentGroup);
  const [CurrentGroupid, setCurrentGroupId] = useRecoilState(CurrentGroupId);
  const [callFileLoad, setcallFileLoad] = useRecoilState(CallFileLoad);

  const setGroup = () => {
    setCurrentGroupName(name);
    if (id) {
      setCurrentGroupId(id);
    } else {
      setCurrentGroupId("");
    }

    setcallFileLoad(!callFileLoad);
  };

  return (
    <section className="  w-full py-2 flex  items-center justify-center gap-5  border-b-[0.1px] cursor-pointer " onClick={setGroup}>
      <div className={`  ${color} text-white px-2 py-[5px] rounded-sm `}>{icon == "personal" ? <Contact size={18} /> : <Building size={18} />}</div>
      <p className="  flex-1 line-clamp-1 ">{name}</p>
    </section>
  );
};

export default Group;
