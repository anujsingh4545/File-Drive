import React from "react";
import {useRecoilState} from "recoil";
import uploadFileBox from "../../recoil/atoms/UploadFileBox";
import {X} from "lucide-react";

const UploadFile = () => {
  const [uploadfile, setUploadFile] = useRecoilState(uploadFileBox);

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

            <input type="text" placeholder="Enter title" className=" w-full px-2 py-2 text-[0.9rem] border-[0.1px] mt-1 rounded-md outline-none " />
          </section>
          <section className=" mt-5 flex flex-col items-center justify-start w-full ">
            <h5 className=" w-full tracking-wider font-medium">File</h5>

            <input type="file" placeholder="Enter title" className=" w-full px-2 py-1 text-[0.9rem] border-[0.1px] mt-1 rounded-md outline-none " />
          </section>

          <button className="   common_btn mt-10  w-full  ">Submit</button>

          <X size={25} className=" absolute right-2 top-2 cursor-pointer text-slate-600 " onClick={() => setUploadFile(false)} />
        </div>
      </main>
    </>
  );
};

export default UploadFile;
