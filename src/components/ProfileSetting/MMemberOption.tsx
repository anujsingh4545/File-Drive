import {DeleteIcon, Settings2, UserRoundMinus} from "lucide-react";
import {useRef, useState} from "react";
import toast from "react-hot-toast";

const MMemberOption = ({id, name, role, joined, changeRole, deleteUser}: any) => {
  const date = new Date(joined);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const joinedDate = `${day}/${month}/${year}`;
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const roleref: any = useRef();

  const updatemember = async () => {
    if (roleref.current.value == role) {
      toast.error("Same role can't be updated!");
    } else {
      setLoading(true);
      try {
        await changeRole(id, roleref.current.value);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };
  const deletemember = async () => {
    if (role == "admin") {
      toast.error("Admins can't be removed !");
    } else {
      setLoading(true);
      try {
        await deleteUser(id);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.6rem] md:text-[0.7rem] mb-1">
        <p className="text-center col-span-3 border-x-[0.1px] py-1 ">{name}</p>
        <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  line-clamp-1 ">{joinedDate}</p>

        {!edit ? (
          <>
            <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">{role}</p>
            <p className=" col-span-2  flex items-center justify-center   text-center py-1  border-x-[0.1px] " onClick={() => setEdit(true)}>
              <Settings2 size={15} className=" w-full cursor-pointer text-green-700" />
            </p>
          </>
        ) : (
          <>
            <select ref={roleref} name="role" id="role" className=" ease-in-out duration-150 transform col-span-3 flex items-center justify-center h-full  border-x-[0.1px] outline-none text-center ">
              {role == "admin" ? (
                <>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </>
              ) : (
                <>
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </>
              )}
            </select>
            <p className=" col-span-2  flex items-center justify-center   text-center py-1  border-x-[0.1px]" onClick={deletemember}>
              <UserRoundMinus size={15} className=" w-full cursor-pointer text-red-700" />
            </p>
          </>
        )}
      </div>

      {edit && (
        <div className=" w-full flex items-center justify-end gap-4 text-[0.8rem] mt-1 mb-2 pr-1 ease-out duration-150 transform ">
          {loading ? (
            <>
              <button className=" outline-none text-blue-500  tracking-wider "> ---</button>
              <button className=" outline-none tracking-wider ">---</button>
            </>
          ) : (
            <>
              <button className=" outline-none text-blue-500  tracking-wider " onClick={updatemember}>
                Update
              </button>
              <button className=" outline-none tracking-wider " onClick={() => setEdit(false)}>
                Cancel
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MMemberOption;
