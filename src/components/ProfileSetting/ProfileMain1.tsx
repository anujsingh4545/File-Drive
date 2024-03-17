import {useRecoilState} from "recoil";
import ProfileSetting from "../../recoil/atoms/ProfileSetting";
import {BadgePlus, FolderKanban, MessageSquarePlus, User, X} from "lucide-react";
import {useState} from "react";
import Account from "./Account";
import Manage from "./Manage";
import Requests from "./Requests";
import Create from "./Create";

const ProfileMain1 = () => {
  const [pSetting, setPSetting] = useRecoilState(ProfileSetting);

  const [menu, setMenu] = useState<Number>(1);

  return (
    <div className="fixed top-0 left-0  z-50 h-[100lvh] w-[100lvw]   flex items-center justify-center">
      <section className=" fixed top bg-black/60  cursor-pointer z-50  w-full h-full"></section>
      {/*  */}

      <main className=" w-[95%] md:w-[80%] lg:w-[60%] flex-col md:flex-row  h-[40rem] lg:h-[30rem]  z-50  flex items-center justify-center shadow-md ">
        <section className=" h-[26%] w-full md:w-[30%] py-1 md:py-8 md:h-full bg-gray-100  rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl flex items-start justify-start flex-col gap-y-1 md:gap-y-2 ">
          <p className={`setting_pNav ${menu == 1 ? " bg-black/40 " : ""} `} onClick={() => setMenu(1)}>
            <User size={20} className="  " /> Account
          </p>
          <p className={`setting_pNav ${menu == 2 ? " bg-black/40 " : ""} `} onClick={() => setMenu(2)}>
            <FolderKanban size={20} /> Manage
          </p>
          <p className={`setting_pNav ${menu == 3 ? " bg-black/40 " : ""} `} onClick={() => setMenu(3)}>
            <MessageSquarePlus size={20} /> Requests
          </p>
          <p className={`setting_pNav ${menu == 4 ? " bg-black/40 " : ""} `} onClick={() => setMenu(4)}>
            <BadgePlus size={20} /> Create Group
          </p>
        </section>

        <section className=" w-full md:w-[70%] relative p-4 md:p-8 h-[74%]  md:h-full bg-white rounded-b-xl md:rounded-b-none md:rounded-r-xl md:rounded-br-xl ">
          {menu == 1 && <Account />}
          {menu == 2 && <Manage />}
          {menu == 3 && <Requests />}
          {menu == 4 && <Create />}

          <X size={23} className=" absolute right-3 top-3  text-gray-700 cursor-pointer " onClick={() => setPSetting(false)} />
        </section>
      </main>
    </div>
  );
};

export default ProfileMain1;
