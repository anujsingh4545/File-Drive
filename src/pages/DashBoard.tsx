import {Outlet} from "react-router-dom";
import SideNav from "../components/DashBoard/SideNav";
import TopNav from "../components/DashBoard/TopNav";
import UploadFile from "../components/DashBoard/UploadFile";
import {useRecoilValue} from "recoil";
import uploadFileBox from "../recoil/atoms/UploadFileBox";
import ProfileSetting from "../recoil/atoms/ProfileSetting";
import ProfileMain1 from "../components/ProfileSetting/ProfileMain1";

const DashBoard = () => {
  const uploadfile = useRecoilValue(uploadFileBox);
  const profileSetting = useRecoilValue(ProfileSetting);

  return (
    <div className=" w-full h-[100lvh] ">
      <SideNav />

      {uploadfile && <UploadFile />}
      {profileSetting && <ProfileMain1 />}

      <section className=" flex flex-col w-full md:w-[80%] lg:w-[85%] right-0 flex-1  fixed  mt-[60px]  ">
        <TopNav />
        <Outlet />
      </section>
    </div>
  );
};

export default DashBoard;
