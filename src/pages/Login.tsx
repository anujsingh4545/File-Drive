import {useRecoilValue} from "recoil";
import LoginMedia from "../components/Login/LoginMedia";
import UserData from "../recoil/atoms/UserData";
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import LoadingData from "../recoil/atoms/LoadingUserData";

const Login = () => {
  const user: any = useRecoilValue(UserData);
  const loading_data: boolean = useRecoilValue(LoadingData);

  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading_data) {
    return " ";
  }

  return (
    <div className=" w-full h-[100dvh] pt-[60px] flex items-center justify-center  px-3 md:px-0 ">
      <main className=" w-[100%] md:w-[50%] lg:w-[30%]  h-fit  flex flex-col items-center justify-center bg-white/20  rounded-md shadow-md px-5 py-10  ">
        <h2 className="  font-madami font-semibold text-left w-full "> Login </h2>
        <p className=" w-full text-left mt-1 text-slate-700 ">to continue to file-drive</p>

        <section className=" flex flex-col w-full mt-6 gap-y-3 ">
          <LoginMedia name="Google" profile="/google.png" />
          <LoginMedia name="Github" profile="/github.png" />
          <LoginMedia name="Facebook" profile="/facebook.svg" />
        </section>
      </main>
    </div>
  );
};

export default Login;
