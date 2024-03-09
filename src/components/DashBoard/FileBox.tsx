import {FileText, Image, ListFilter, Text} from "lucide-react";

const FileBox = ({type}: any) => {
  return (
    <section className=" w-full  flex flex-col items-center justify-center bg-white rounded-md shadow-md px-3 py-3 ">
      {/*  */}

      <div className=" w-full flex  items-center justify-between pb-3  text-slate-800 gap-2  ">
        {type == "csv" && <Text size={20} />}
        {type == "image" && <Image size={20} />}
        {(type == "pdf" || type == "docs") && <FileText size={20} />}

        <p className="   line-clamp-1 text-[0.8rem] w-full  gap-2  border-0 border-black">testing </p>

        <ListFilter size={18} className=" cursor-pointer " />
      </div>

      {/*  */}

      <div className=" h-48 py-2 w-full border-y-[0.1px] flex items-center justify-center ">
        {type == "csv" && <img src="/csv.png" alt="" className=" max-w-full max-h-full " />}
        {type == "image" && <img src="/empty.svg" alt="" className=" max-w-full max-h-full " />}
        {type == "pdf" && <img src="/pdf.png" alt="" className=" max-w-full max-h-full " />}
        {type == "docs" && <img src="/docs.png" alt="" className=" max-w-full max-h-full " />}
      </div>

      {/*  */}

      <div className=" flex w-full items-center justify-between pt-3 text-slate-800 ">
        <section className="flex items-center justify-start gap-2 ">
          <img src="/unnamed.png" alt="" className=" h-6 rounded-full outline-double outline-1 p-[0.5px] outline-slate-800 " />
          <p className=" text-[0.7rem] line-clamp-1 flex-1"> anujsinghsisodiya5341</p>
        </section>

        <p className=" text-[0.7rem] "> 5:40 PM (01/12/2002) </p>
      </div>
    </section>
  );
};

export default FileBox;
