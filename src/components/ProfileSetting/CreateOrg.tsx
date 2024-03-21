import {Album} from "lucide-react";
import {useRef, useState} from "react";
import {lookInSession} from "../../common/Session";
import toast from "react-hot-toast";
import axios from "axios";
import NavbarLoad from "../../recoil/atoms/NavbarLoad";
import {useRecoilState} from "recoil";

const CreateOrg = () => {
  const nameRef: any = useRef();

  const [loading, setLoading] = useState<boolean>(false);
  const [navLoad, setnavLoad] = useRecoilState(NavbarLoad);

  const createOrg = async () => {
    let userSession = lookInSession("user");

    if (nameRef.current.value.length < 5) {
      toast.error("Group name can't be less than 5 characters!");
    } else {
      if (userSession) {
        setLoading(true);
        await axios
          .post(
            "https://files-drive.vercel.app/api/v1/group/create",
            {
              name: nameRef.current.value,
            },
            {
              headers: {
                authorization: `Bearer ${userSession}`,
              },
            }
          )
          .then((response: any) => {
            if (response.data.success) {
              toast.success(response.data.message);
              setLoading(false);
              setnavLoad(!navLoad);
            } else {
              toast.error(response.data.message);
              setLoading(false);
            }
            nameRef.current.value = "";
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong !");
            setLoading(false);
          });
      }
    }
  };

  return (
    <main className="  ">
      <p className=" text-gray-600 mb-5 ">Create your group!</p>
      <section className=" w-full  flex items-center justify-center ">
        <div className=" flex items-center justify-center px-10 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-l-md ">
          <Album size={20} />
        </div>
        <input ref={nameRef} type="text" className=" rounded-r-md w-full bg-black/10 shadow-sm px-2 tracking-wider text-[0.8rem] outline-none h-full py-[12px]" placeholder="Enter group name" />
      </section>
      <section className="mt-5 flex  items-center justify-start  text-gray-700 ">
        <p className=" px-[32.5px] py-2 rounded-l-md bg-black/40">Role</p>
        <p className=" px-10 py-2 rounded-r-md bg-black/10">Admin</p>
      </section>

      <section className=" w-full  flex items-center justify-end gap-5 mt-36 md:mt-72 lg:mt-32 ">
        <button className=" outline-none text-blue-500  tracking-wider " onClick={createOrg}>
          {loading ? "Loading..." : "Create"}
        </button>
        <button className=" outline-none tracking-wider " onClick={() => (nameRef.current.value = "")}>
          Cancel
        </button>
      </section>
    </main>
  );
};

export default CreateOrg;
