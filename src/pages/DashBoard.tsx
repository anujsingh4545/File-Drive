import {Outlet} from "react-router-dom";
import SideNav from "../components/DashBoard/SideNav";
import TopNav from "../components/DashBoard/TopNav";
import UploadFile from "../components/DashBoard/UploadFile";
import {useRecoilState, useRecoilValue} from "recoil";
import uploadFileBox from "../recoil/atoms/UploadFileBox";
import ProfileSetting from "../recoil/atoms/ProfileSetting";
import Files from "../recoil/atoms/Files";
import ProfileMain1 from "../components/ProfileSetting/ProfileMain1";
import {useEffect} from "react";
import {lookInSession} from "../common/Session";
import axios from "axios";
import FileLoading from "../recoil/atoms/FileLoading";
import CallFileLoad from "../recoil/atoms/CallFileLoad";

const DashBoard = () => {
  const uploadfile = useRecoilValue(uploadFileBox);
  const profileSetting = useRecoilValue(ProfileSetting);

  const [File, setFile] = useRecoilState(Files);
  const [Fileload, setFileLoad] = useRecoilState(FileLoading);

  const CallFileLoading = useRecoilValue(CallFileLoad);

  useEffect(() => {
    const GetFiles = async () => {
      setFileLoad(true);
      let userSession = lookInSession("user");

      await axios
        .post(
          "http://localhost:4000/api/v1/personal/getallfile",
          {},
          {
            headers: {
              authorization: `Bearer ${userSession}`,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            setFile(response.data.files);
            setFileLoad(false);
          } else {
            setFileLoad(false);
          }
        })
        .catch((error) => {
          setFileLoad(false);
          // console.log(error);
        });
    };

    GetFiles();
  }, [CallFileLoading]);

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
