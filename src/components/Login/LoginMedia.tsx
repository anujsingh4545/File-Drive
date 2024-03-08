import {MoveRight} from "lucide-react";

type LoginMediaProps = {
  name: string;
  profile: string;
};

const LoginMedia = ({name, profile}: LoginMediaProps) => {
  return (
    <section className=" w-full  rounded-full bg-white/50 shadow-md  cursor-pointer  py-2  flex justify-between items-center px-5 ">
      <div className=" flex items-center justify-between gap-5  ">
        <img src={profile} alt="" className=" h-8" />
        <p>Login with {name}</p>
      </div>

      <MoveRight size={20} className=" text-slate-700 " />
    </section>
  );
};

export default LoginMedia;
