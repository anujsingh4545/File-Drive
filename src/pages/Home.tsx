import {Divide, MoveRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import LoadingData from "../recoil/atoms/LoadingUserData";

const Home = () => {
  const loading_data: boolean = useRecoilValue(LoadingData);
  return (
    <div className=" h-[100dvh] pt-[60px] ">
      <main className=" w-full h-full  flex  flex-col items-center justify-center  ">
        <img src="/unnamed.png" className="rounded-full h-40 md:h-42 outline-dashed outline-1 p-1 " alt="" />

        <h1 className="  text-center text-[1.7rem] md:text-[2.8rem] font-bold font-madami  tracking-wider mt-5">
          The easiest way to upload <br /> and share files with your <br /> Organization.
        </h1>

        <h5 className=" mt-3  md:mt-2 text-center px-4 text-[0.8rem] ">Make an account and start managing your files in less than a minute. </h5>

        <section className=" flex  mt-10 items-center justify-center gap-5 flex-row ">
          {loading_data ? (
            <div className=" h-[2.35rem] w-20 "> </div>
          ) : (
            <>
              <Link to="/dashboard">
                <button className=" common_btn ">Get Started </button>
              </Link>
              <p className=" cursor-pointer  flex items-center justify-center gap-2">
                Learn More <MoveRight size={18} />
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
