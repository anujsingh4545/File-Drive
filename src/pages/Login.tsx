import LoginMedia from "../components/Login/LoginMedia";

const Login = () => {
  return (
    <div className=" w-full h-[calc(100dvh-60px)] flex items-center justify-center  px-3 md:px-0 ">
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
