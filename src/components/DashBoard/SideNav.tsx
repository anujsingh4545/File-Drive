import {AlignJustify, AlignRight, File, Star, Trash} from "lucide-react";
import {useEffect, useState} from "react";

const SideNav = () => {
  const [showpanel, setShowPanel] = useState<boolean>(true);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setShowPanel(false);
    } else {
      setShowPanel(true);
    }
  }, [windowWidth]);

  return (
    <>
      <div className={` z-40 w-[50%] sm:w-[40%] md:w-[20%] lg:w-[15%] mt-[60px] h-[100lvh]  bg-white/30  fixed  ${showpanel ? "left-0" : "left-[-500px] "} ease-in-out duration-300 `}>
        <main className=" w-full h-full  flex flex-col items-left px-5 py-3">
          <AlignJustify className=" text-gray-700 hover:text-gray-950 cursor-pointer ease-in-out duration-150 " onClick={() => setShowPanel(false)} />

          <section className=" w-full mt-10 flex-col flex items-left justify-center gap-y-5 ">
            <p className=" w-full flex  items-start  gap-3 font-medium text-slate-800 cursor-pointer hover:text-blue-500 ease-in-out  duration-150 transform  ">
              <File size={18} /> All Files
            </p>
            <p className=" w-full  flex  items-start  gap-3 font-medium text-slate-800 cursor-pointer  hover:text-blue-500 ease-in-out  duration-150 transform ">
              <Star size={18} /> Favourites
            </p>
            <p className=" w-full  flex  items-start  gap-3 font-medium text-slate-800 cursor-pointer  hover:text-blue-500 ease-in-out  duration-150 transform ">
              <Trash size={18} /> Trash
            </p>
          </section>
        </main>
      </div>

      {showpanel && <section className=" md:hidden z-20 fixed top-0 left-0 w-[100%] bg-[#b1afaf18] cursor-pointer flex-1 h-[100dvh]" onClick={() => setShowPanel(false)}></section>}

      <section className={` fixed mt-[70px]  rounded-s-sm pr-5 py-3 pl-2 rounded-full flex items-center justify-center cursor-pointer  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ${!showpanel ? "left-0" : "left-[-500px] "} ease-in-out duration-300 `} onClick={() => setShowPanel(true)}>
        <AlignRight className=" w-full text-center text-white  " />
      </section>
    </>
  );
};

export default SideNav;