import {DeleteIcon, Settings2, UserRoundMinus} from "lucide-react";
import {useState} from "react";

const MMemberOption = () => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      <div className=" grid grid-cols-10 items-start justify-center border-[1px] text-[0.6rem] md:text-[0.8rem] mb-1">
        <p className="text-center col-span-3 border-x-[0.1px] py-1 ">Airbus</p>
        <p className=" col-span-2 py-1 text-center  border-x-[0.1px]  line-clamp-1 ">12/12/2024</p>

        {!edit ? (
          <>
            <p className=" col-span-3 text-center  py-1  border-x-[0.1px] ">Member</p>
            <p className=" col-span-2  flex items-center justify-center   text-center py-1  border-x-[0.1px]  " onClick={() => setEdit(true)}>
              <Settings2 size={15} className=" w-full cursor-pointer text-green-700" />
            </p>
          </>
        ) : (
          <>
            <select name="role" id="role" className=" ease-in-out duration-150 transform col-span-3 flex items-center justify-center h-full  border-x-[0.1px] outline-none text-center ">
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
            <p className=" col-span-2  flex items-center justify-center   text-center py-1  border-x-[0.1px]  ">
              <UserRoundMinus size={15} className=" w-full cursor-pointer text-red-700" />
            </p>
          </>
        )}
      </div>

      {edit && (
        <div className=" w-full flex items-center justify-end gap-4 text-[0.8rem] mt-1 mb-2 pr-1 ease-out duration-150 transform ">
          <button className=" outline-none text-blue-500  tracking-wider ">Update</button>
          <button className=" outline-none tracking-wider " onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default MMemberOption;
