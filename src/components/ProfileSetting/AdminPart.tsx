import axios from "axios";
import {Delete} from "lucide-react";
import {lookInSession} from "../../common/Session";
import toast from "react-hot-toast";
import {useState} from "react";

interface adminComp {
  load: any;
  loadChange: any;
  id: String;
  createdAt: Date;
  name: String;
  membercount: String;
}

const AdminPart = ({load, loadChange, id, createdAt, name, membercount}: adminComp) => {
  const [loading, setLoading] = useState(false);

  const date = new Date(createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const creationDate = `${day}/${month}/${year}`;

  const DeleteGroup = async () => {
    let userSession = lookInSession("user");

    if (userSession) {
      setLoading(true);
      await axios
        .post(
          "http://localhost:4000/api/v1/group/delete",
          {grpId: id},
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
      <p className="text-center col-span-3 border-x-[0.1px] py-1 ">{name}</p>
      <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  line-clamp-1 ">{membercount}</p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">{creationDate}</p>
      <p className=" col-span-2  flex items-center justify-center  px-1 text-center py-1  border-x-[0.1px]  ">{loading ? "..." : <Delete size={15} className=" w-full cursor-pointer text-red-700" onClick={DeleteGroup} />}</p>
    </div>
  );
};

export default AdminPart;
