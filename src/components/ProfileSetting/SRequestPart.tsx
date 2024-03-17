const SRequestPart = () => {
  return (
    <div className=" grid grid-cols-10 items-center justify-center text-gray-800 text-[0.8rem] border-b-[0.1px] py-1  ">
      <img src="/unnamed.png" alt="" className="size-8 rounded-full col-span-1   " />

      <p className=" col-span-4  overflow-hidden text-center  line-clamp-1 px-1  ">anujsinghsisodiya5341 </p>
      <select name="role" id="role" className=" col-span-3 flex text-center items-center justify-center h-full   outline-none  ">
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>

      <button className="  outline-none  text-blue-500  w-full text-center col-span-2 "> Add </button>
    </div>
  );
};

export default SRequestPart;
