import {Search} from "lucide-react";
import SRequestPart from "./SRequestPart";

const SendRequest = () => {
  return (
    <div className=" ">
      <section className=" flex items-center justify-between   mb-5 ">
        <p className=" text-gray-600  ">Select your group!</p>

        <select name="group" id="group" className="text-gray-600 outline-none max-w-[8rem]   ">
          <option defaultChecked defaultValue="Choose" hidden>
            Group
          </option>
          <option value="volvo">Lorem </option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </section>

      <main className=" w-full mt-5 ">
        <section className=" flex items-center justify-center w-full ">
          <input type="text" placeholder="search username here..." className=" bg-black/10 shadow-sm flex-1 text-left tracking-wider text-[0.8rem] border-[0.1px] py-2 rounded-l-full px-3 outline-none " />
          <div className=" flex items-center justify-center py-2 pl-5 pr-8 rounded-r-full cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">
            <Search size={18} className=" " />
          </div>
        </section>

        <section className=" mt-3 flex flex-col  h-[14rem] md:h-[24rem] lg:h-[14rem] overflow-scroll ">
          <SRequestPart />
          <SRequestPart />
          <SRequestPart />
          <SRequestPart />
          <SRequestPart />
          <SRequestPart />
          <SRequestPart />
        </section>
      </main>
    </div>
  );
};

export default SendRequest;
