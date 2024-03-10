import {FileText, Image, ListFilter, Text} from "lucide-react";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import viewFilesOrder from "../../recoil/atoms/ViewFilesOrder";

const FileBox = ({type}: any) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const fileorder = useRecoilValue(viewFilesOrder);

  return (
    <>
      {fileorder ? (
        <section className=" w-full  flex flex-col items-center justify-center bg-white rounded-md shadow-md px-3 py-3 ">
          <div className=" relative w-full flex  items-center justify-between pb-3  text-slate-800 gap-2  ">
            {type == "csv" && <Text size={20} />}
            {type == "image" && <Image size={20} />}
            {(type == "pdf" || type == "docs") && <FileText size={20} />}

            <p className="   line-clamp-1 text-[0.8rem] w-full  gap-2  border-0 border-black">testing </p>

            <button onClick={() => setShowOptions(!showOptions)} onBlur={() => setShowOptions(false)}>
              <ListFilter size={18} className=" cursor-pointer " />
            </button>

            {showOptions && (
              <div className="absolute right-[-11.5px] top-[28px] text-white bg-slate-700 rounded-sm flex flex-col items-center justify-center   ">
                <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 ">Download</p>
                <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 ">Favourites</p>
                <p className="w-full hover:bg-slate-800 px-2 text-center cursor-pointer  text-[0.6rem] py-2 ">Delete</p>
              </div>
            )}
          </div>

          <div className=" h-48 py-2 w-full border-y-[0.1px] flex items-center justify-center ">
            {type == "csv" && <img src="/csv.png" alt="" className=" max-w-full max-h-full " />}
            {type == "image" && <img src="/empty.svg" alt="" className=" max-w-full max-h-full " />}
            {type == "pdf" && <img src="/pdf.png" alt="" className=" max-w-full max-h-full " />}
            {type == "docs" && <img src="/docs.png" alt="" className=" max-w-full max-h-full " />}
          </div>

          <div className=" flex w-full items-center justify-between pt-3 text-slate-800 ">
            <section className="flex items-center justify-start gap-2 ">
              <img src="/unnamed.png" alt="" className=" h-6 rounded-full outline-double outline-1 p-[0.5px] outline-slate-800 " />
              <p className=" text-[0.7rem] line-clamp-1 flex-1"> anujsinghsisodiya5341</p>
            </section>

            <p className=" text-[0.7rem] "> 5:40 PM (01/12/2002) </p>
          </div>
        </section>
      ) : (
        <main className=" w-full relative gap-x-2 md:gap-x-0  grid grid-cols-12 items-center text-slate-800  bg-white rounded-md px-2 md:px-5 py-3  justify-between ">
          <p className=" col-span-3   line-clamp-1 ">testing </p>
          {type == "csv" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <Text size={20} />
              <p className=" hidden md:flex ">Csv</p>
            </div>
          )}

          {type == "image" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <Image size={20} />
              <p className=" hidden md:flex ">Image</p>
            </div>
          )}
          {type == "pdf" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <FileText size={20} />
              <p className=" hidden md:flex ">Pdf</p>
            </div>
          )}
          {type == "docs" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <FileText size={20} />
              <p className=" hidden md:flex ">Docs</p>
            </div>
          )}

          <section className="flex items-center justify-start gap-2 col-span-2  md:col-span-4 ">
            <img src="/unnamed.png" alt="" className=" h-6 rounded-full outline-double outline-1 p-[0.5px] outline-slate-800 " />
            <p className=" text-[0.7rem] line-clamp-1 flex-1 hidden md:flex  "> anujsinghsisodiya5341</p>
          </section>

          <p className=" text-[0.7rem] col-span-5 md:col-span-2  text-left line-clamp-1 "> 5:40 PM (01/12/2002) </p>

          <button onClick={() => setShowOptions(!showOptions)} onBlur={() => setShowOptions(false)} className=" w-full  justify-end items-end flex  col-span-1  ">
            <ListFilter size={18} className=" cursor-pointer   " />
          </button>

          {showOptions && (
            <div className="absolute z-10 right-0 top-[35px] text-white bg-slate-700 rounded-sm flex flex-col items-center justify-center   ">
              <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 ">Download</p>
              <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 ">Favourite</p>
              <p className="w-full hover:bg-slate-800 px-2 text-center cursor-pointer  text-[0.7rem] py-2 ">Delete</p>
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default FileBox;
