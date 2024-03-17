import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import LoadingData from "../../recoil/atoms/LoadingUserData";
import {useEffect, useState} from "react";
import UserProfile from "../../components/UserDashboards/UserProfile";

const NavbarTop = () => {
  const user: any = useRecoilValue(UserData);
  const loading_data: boolean = useRecoilValue(LoadingData);

  const [userDash, setUserDash] = useState(false);

  return (
    <main className="  fixed h-[60px] top-0 z-20  w-full bg-white shadow-md ">
      <div className=" w-full h-full  px-3 md:px-10 flex justify-between items-center">
        <section className=" flex flex-row items-center justify-center gap-3 ">
          <img src=" /unnamed.png " alt="" className=" h-12  rounded-full " />
          <Link to="/">
            <h1 className=" font-madami  cursor-pointer  text-[1.6rem] md:text-[1.8rem] ">File-Drive </h1>
          </Link>
        </section>

        <section className="">
          {loading_data ? (
            ""
          ) : user.user && user.user.id ? (
            <div className=" flex items-center justify-center gap-3 ">
              <section></section>
              <section className=" cursor-pointer relative rounded-full ">
                <img
                  src="/unnamed.png"
                  id="imgprofile"
                  alt=""
                  className=" w-10 rounded-full outline-dotted outline-1 p-[1px]  "
                  onClick={() => {
                    setUserDash(!userDash);
                  }}
                />
                {userDash && <UserProfile handle={setUserDash} id="imgprofile" />}
              </section>
            </div>
          ) : (
            <Link to="/login">
              <button className=" common_btn"> Sign In </button>
            </Link>
          )}
        </section>
      </div>
    </main>
  );
};

export default NavbarTop;
