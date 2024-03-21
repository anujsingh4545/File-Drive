import React, {useRef, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import uploadFileBox from "../../recoil/atoms/UploadFileBox";
import {X} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import UserData from "../../recoil/atoms/UserData";
import CallFileLoad from "../../recoil/atoms/CallFileLoad";
import CurrentGroup from "../../recoil/atoms/CurrentGroup";
import CurrentGroupId from "../../recoil/atoms/CurrentGroupId";

const UploadFile = () => {
  const [uploadfile, setUploadFile] = useRecoilState(uploadFileBox);
  const [CallLoad, setCallLoad] = useRecoilState(CallFileLoad);
  const users: any = useRecoilValue(UserData);
  const titleref = useRef<any>();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [CurrentGroupName, setCurrentGroupName] = useRecoilState(CurrentGroup);
  const [CurrentGroupid, setCurrentGroupId] = useRecoilState(CurrentGroupId);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const uploadData = async () => {
    let title = titleref.current.value;

    if (title.length <= 2) {
      toast.error("Title length should be greater than 2!");
    }
    if (!file) {
      toast.error("Please select a file!");
    }

    setLoading(true);
    let formData = new FormData();
    formData.append("title", title);
    formData.append("image", file!);
    formData.append("userid", users.user.id);

    if (CurrentGroupName === "Personal Account" && CurrentGroupid.length === 0) {
      await axios
        .post("https://file-drive-backend.vercel.app/api/v1/personal/upload", formData)
        .then((response) => {
          if (response.data.success) {
            toast.success("File Uploaded Sucessfully");
            setLoading(false);
            setUploadFile(false);
            setCallLoad(!CallLoad);
          } else {
            setLoading(false);
            setUploadFile(false);
            toast.error("Something went wrong!");
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          setLoading(false);
        });
    } else {
      formData.append("GroupId", CurrentGroupid);
      await axios
        .post("https://file-drive-backend.vercel.app/api/v1/group/upload", formData)
        .then((response) => {
          if (response.data.success) {
            toast.success("File Uploaded Sucessfully");
            setLoading(false);
            setUploadFile(false);
            setCallLoad(!CallLoad);
          } else {
            setLoading(false);
            setUploadFile(false);
            toast.error("Something went wrong!");
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          setLoading(false);
        });
    }
  };

  return (
    <>
      <main className=" fixed top-0 z-50 h-[100lvh] w-[100lvw] bg-black/40  flex items-center justify-center ">
        <div className=" w-full h-full  bg-black/40  " onClick={() => setUploadFile(false)}>
          {" "}
        </div>

        <div className=" absolute  w-[95%] sm:w-[60%] md:w-[50%]  lg:w-[40%] h-fit bg-white  px-5 py-5  text-slate-800 rounded-md  ">
          <h3 className=" font-medium font-madami  ">Upload your file here</h3>

          <p className=" mt-5  text-[0.8rem]  ">This file will be accessible by anyone in your organization.</p>

          <section className=" mt-5 flex flex-col items-center justify-start w-full ">
            <h5 className=" w-full tracking-wider font-medium">Title</h5>

            <input type="text" ref={titleref} placeholder="Enter title" className=" w-full px-2 py-2 text-[0.9rem] border-[0.1px] mt-1 rounded-md outline-none " />
          </section>
          <section className=" mt-5 flex flex-col items-center justify-start w-full ">
            <h5 className=" w-full tracking-wider font-medium">File</h5>

            <input type="file" placeholder="Enter title" accept=".jpeg, .png, .jpg, .pdf, .docx, .xlsx" className=" w-full px-2 py-1 text-[0.9rem] border-[0.1px] mt-1 rounded-md outline-none " onChange={handleFileChange} />
          </section>

          <button className="   common_btn mt-10  w-full" onClick={uploadData}>
            {loading ? "Uploading.." : "Submit"}
          </button>

          <X size={25} className=" absolute right-2 top-2 cursor-pointer text-slate-600 " onClick={() => setUploadFile(false)} />
        </div>
      </main>
    </>
  );
};

export default UploadFile;
