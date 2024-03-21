import {UserMinus} from "lucide-react";
import React, {useState} from "react";
import {lookInSession} from "../../common/Session";
import {useRecoilState} from "recoil";
import NavbarLoad from "../../recoil/atoms/NavbarLoad";
import axios from "axios";
import toast from "react-hot-toast";

interface ManageComp {
  index: String;
  id: String;
  name: String;
  userCreated: Date;
  load: any;
  loadChange: any;
}

const ManagePart = ({load, loadChange, index, id, name, userCreated}: ManageComp) => {
  const [loading, setLoading] = useState(false);
  const [navLoad, setnavLoad] = useRecoilState(NavbarLoad);

  const date = new Date(userCreated);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const creationDate = `${day}/${month}/${year}`;

  const DeleteUser = async () => {
    let userSession = lookInSession("user");

    if (userSession) {
      setLoading(true);
      await axios
        .post(
          "https://file-drive-backend.vercel.app/api/v1/group/deletemember",
          {groupId: id},
          {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message);
            loadChange(!load);
            setnavLoad(!navLoad);
          } else {
            toast.error(response.data.message);
          }
          setLoading(false);
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          setLoading(false);
        });
    }
  };

  return (
    <div className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-1">
      <p className="text-center col-span-2 border-x-[0.1px] py-1 "> {index}.</p>
      <p className=" col-span-3 py-1 text-center  border-x-[0.1px]  line-clamp-1 "> {name} </p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] "> {creationDate} </p>
      <p className=" col-span-2  flex items-center justify-center  px-1 text-center py-1  border-x-[0.1px]  ">{loading ? "---" : <UserMinus size={15} className=" w-full cursor-pointer text-red-700" onClick={DeleteUser} />}</p>
    </div>
  );
};

export default ManagePart;
