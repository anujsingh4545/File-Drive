import {Check, X} from "lucide-react";
import React, {useState} from "react";

const RequestPart = ({id, userId, groupId, grpname, role, reqdate, acceptRequest, declineRequest}: any) => {
  const date = new Date(reqdate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const requestDate = `${day}/${month}/${year}`;

  const [loading, setLoading] = useState(false);

  const acceptreq = async () => {
    setLoading(true);
    try {
      await acceptRequest(id, userId, groupId, role);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const deletereq = async () => {
    setLoading(true);
    try {
      await declineRequest(id, userId, groupId, role);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className=" grid grid-cols-12 items-start justify-center border-[1px] text-[0.6rem] md:text-[0.8rem] mb-1">
      <p className="text-center col-span-4 border-x-[0.1px] py-1 line-clamp-1 ">{grpname}</p>
      <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  ">{role}</p>
      <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">{requestDate}</p>
      <section className="col-span-3 items-center h-full justify-center ">
        {loading ? (
          <p className=" w-full text-center py-1 ">loading..</p>
        ) : (
          <div className=" grid grid-cols-2 w-full h-full  items-center justify-center ">
            <Check size={18} className=" text-green-700 w-full flex items-center justify-center cursor-pointer" onClick={acceptreq} />
            <X size={18} className="w-full text-red-700  border-l-[1px] flex items-center justify-center cursor-pointer" onClick={deletereq} />
          </div>
        )}
      </section>
    </div>
  );
};

export default RequestPart;
