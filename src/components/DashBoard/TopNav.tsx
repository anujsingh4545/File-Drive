import {LayoutGrid, Rows3, Search, Upload, X} from "lucide-react";
import {useRecoilState, useRecoilValue} from "recoil";
import viewFilesOrder from "../../recoil/atoms/ViewFilesOrder";
import uploadFileBox from "../../recoil/atoms/UploadFileBox";
import SortFiles from "../../recoil/atoms/SortFiles";
import {useRef} from "react";
import SearchBox from "../../recoil/atoms/SearchBox";

const TopNav = () => {
  const [fileorder, setFileOrder] = useRecoilState(viewFilesOrder);
  const [uploadfile, setUploadFile] = useRecoilState(uploadFileBox);
  const [sortFile, setSortFiles] = useRecoilState(SortFiles);
  const [sbox, setSBox] = useRecoilState(SearchBox);

  const searchbox: any = useRef();

  const SortData = (e: any) => {
    setSortFiles(e.target.value);
  };

  const submitSearch = (e: any) => {
    if (e.key === "Enter") {
      setSBox(searchbox.current.value);
    }
  };

  return (
    <main className=" shadow-sm   h-36 bg-white/30 ">
      <div>
        <section className=" w-full  mt-5   flex items-center justify-between px-3 md:px-10 ">
          <h1 className="hidden md:flex font-poppins font-bold tracking-wider   text-slate-800 "> Your Files </h1>

          <div className=" flex items-center justify-center w-full mr-3 md:mr-0  md:w-[35%] ">
            <input ref={searchbox} type="text" className=" w-full h-full px-3 py-3  rounded-l-full outline-none " placeholder="Enter file name" onKeyDown={submitSearch} />

            {sbox.length > 0 ? (
              <div
                className=" cursor-pointer pl-3 pr-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-r-full "
                onClick={() => {
                  setSBox("");
                  searchbox.current.value = "";
                }}
              >
                <X size={19} />
              </div>
            ) : (
              <div className=" cursor-pointer pl-3 pr-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-r-full " onClick={() => setSBox(searchbox.current.value)}>
                <Search size={19} />
              </div>
            )}
          </div>

          <button className="py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 ease-in-out duration-150  transform  outline-none rounded-sm flex items-center justify-center px-2 md:gap-2" onClick={() => setUploadFile(true)}>
            <p className="hidden md:flex">Upload File</p>
            <Upload size={18} />
          </button>
        </section>
      </div>

      {/*  */}

      <div className=" w-full mt-5 px-3 md:px-10  flex items-center justify-between  ">
        {/*  */}

        <section className=" flex items-center justify-center ">
          <p className={`flex items-center justify-center gap-2   px-3 py-2 rounded-l-full cursor-pointer text-slate-800  shadow-sm ${fileorder ? "bg-white" : "bg-white/20"} ease-in-out duration-150 transform   `} onClick={() => setFileOrder(true)}>
            <LayoutGrid size={18} /> Grid
          </p>
          <p className={` flex items-center shadow-sm justify-center gap-2  text-slate-800  px-3 py-2 rounded-r-full cursor-pointer ${!fileorder ? "bg-white" : "bg-white/20"} ease-in-out duration-150 transform  `} onClick={() => setFileOrder(false)}>
            <Rows3 size={18} /> Table
          </p>
        </section>

        {/*  */}

        <section className=" flex items-center justify-center">
          <select name="files" className=" bg-transparent  px-5 outline-none text-[0.9rem] text-slate-800 " onChange={SortData}>
            <option value="all">All</option>
            <option value="photo">Photo</option>
            <option value="csv">CSV</option>
            <option value="pdf">PDF</option>
            <option value="docx">Docx</option>
          </select>
        </section>
      </div>
    </main>
  );
};

export default TopNav;
