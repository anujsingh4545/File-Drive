import {useRef, useState} from "react";

const SRequestPart = ({name, id, profile, addusertog}: any) => {
  const selectrole: any = useRef();

  const [loading, setLoading] = useState(false);
  const adduser = async () => {
    setLoading(true);

    try {
      await addusertog(id, selectrole.current.value);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className=" grid grid-cols-10 items-center justify-center text-gray-800 text-[0.8rem] border-b-[0.1px] py-1  ">
      <img src={profile} alt="" className="size-8 rounded-full col-span-1   " />

      <p className=" col-span-4  overflow-hidden text-center  line-clamp-1 px-1  ">{name} </p>
      <select ref={selectrole} name="role" id="role" className=" col-span-3 flex text-center items-center justify-center h-full   outline-none  ">
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>

      <button className="  outline-none  text-blue-500  w-full text-center col-span-2 " onClick={adduser}>
        {loading ? "..." : "Add"}
      </button>
    </div>
  );
};

export default SRequestPart;
