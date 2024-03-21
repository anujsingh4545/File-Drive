import {Search} from "lucide-react";
import SRequestPart from "./SRequestPart";
import {useEffect, useRef, useState} from "react";
import {useRecoilValue} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import axios from "axios";
import toast from "react-hot-toast";
import Empty from "../../common/Empty";
import {lookInSession} from "../../common/Session";

const SendRequest = () => {
  const user: any = useRecoilValue(UserData);

  const [adminG, setadminG] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Uloading, setULoading] = useState(false);

  const [users, setUsers] = useState([]);
  const selectG: any = useRef();
  const searchbox: any = useRef();

  useEffect(() => {
    const getallagroups = async () => {
      if (user.user && user.user.id) {
        const userId = user.user.id;
        setLoading(true);
        await axios
          .post("https://file-drive-backend.vercel.app/api/v1/personal/getallagroups", {userId})
          .then((response) => {
            if (response.data.success) {
              setadminG(response.data.adminG);
              setLoading(false);
            } else {
              toast.error(response.data.message);
              setLoading(false);
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
            setLoading(false);
          });
      }
    };

    getallagroups();
  }, []);

  const trackname = (e: any) => {
    if (e.key === "Enter") {
      searchUser();
    }
  };

  const searchUser = async () => {
    const Username = searchbox.current.value;

    if (Username.length < 3) {
      toast.error("Minimum search length supported is 3!");
    } else {
      let userSession = lookInSession("user");
      if (userSession) {
        setULoading(true);
        await axios
          .post(
            "https://file-drive-backend.vercel.app/api/v1/personal/getalluser",
            {username: Username},
            {
              headers: {
                authorization: `Bearer ${userSession}`,
              },
            }
          )
          .then((response: any) => {
            if (response.data.success) {
              setUsers(response.data.users);
              setULoading(false);
            } else {
              setULoading(false);
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
            setLoading(false);
          });
      }
    }
  };

  const AddUsertoG = async (userId: any, role: any): Promise<any> => {
    if (selectG.current.value == "Group") {
      toast.error("Please select group first!");
    } else {
      let userSession = lookInSession("user");
      if (userId && role && userSession) {
        const DataSent = {
          groupId: selectG.current.value,
          UserId: userId,
          role: role,
        };

        await axios
          .post("https://file-drive-backend.vercel.app/api/v1/request/add", DataSent, {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          })
          .then((response: any) => {
            if (response.data.success) {
              toast.success(response.data.message);
              return 1;
            } else {
              toast.error(response.data.message);
              return 1;
            }
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong!");
            return 1;
          });
      }
    }
  };
  return (
    <div className=" ">
      <section className=" flex items-center justify-between   mb-5 ">
        <p className=" text-gray-600  ">Select your group!</p>

        {loading ? (
          <div className=" flex flex-col ">
            <section className=" w-32 h-2 bg-gray-200 animate-pulse  rounded-xl "></section>
            <section className=" w-32 h-2 bg-gray-200 animate-pulse  rounded-xl mt-1 "></section>
          </div>
        ) : (
          <select ref={selectG} name="group" className="text-gray-600 outline-none max-w-[8rem]   ">
            <option defaultChecked defaultValue="Choose" hidden>
              Group
            </option>

            {adminG.map((group: any) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        )}
      </section>

      <main className=" w-full mt-5 ">
        <section className=" flex items-center justify-center w-full ">
          <input ref={searchbox} type="text" placeholder="search username here..." className=" bg-black/10 shadow-sm flex-1 text-left tracking-wider text-[0.8rem] border-[0.1px] py-2 rounded-l-full px-3 outline-none " onKeyDown={trackname} />
          <div className=" flex items-center justify-center py-2 pl-5 pr-8 rounded-r-full cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white " onClick={searchUser}>
            <Search size={18} className=" " />
          </div>
        </section>

        <section className=" mt-3 flex flex-col  h-[14rem] md:h-[24rem] lg:h-[14rem] overflow-scroll ">
          {Uloading ? (
            <div className=" w-full mt-5  flex flex-col items-center justify-center gap-y-5 ">
              <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
              <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
              <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
              <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            </div>
          ) : users.length <= 0 ? (
            <Empty />
          ) : (
            users.map((user: any) => <SRequestPart key={user.id} id={user.id} name={user.name} profile={user.profile} addusertog={AddUsertoG} />)
          )}
        </section>
      </main>
    </div>
  );
};

export default SendRequest;
