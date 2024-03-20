import {FileText, Image, ListFilter, Text} from "lucide-react";
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import viewFilesOrder from "../../recoil/atoms/ViewFilesOrder";
import UserData from "../../recoil/atoms/UserData";
import axios from "axios";
import toast from "react-hot-toast";
import CallFileLoad from "../../recoil/atoms/CallFileLoad";
import CurrentGroup from "../../recoil/atoms/CurrentGroup";
import CurrentGroupId from "../../recoil/atoms/CurrentGroupId";

const FileBox = ({id, type, title, imgurl, userid, created, name, email, profile, fav, trash, trashtime}: any) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const fileorder = useRecoilValue(viewFilesOrder);

  const [callFileL, setCallFileL] = useRecoilState(CallFileLoad);

  const [CurrentGroupName, setCurrentGroupName] = useRecoilState(CurrentGroup);
  const [CurrentGroupid, setCurrentGroupId] = useRecoilState(CurrentGroupId);

  const date = new Date(created);

  const options = {
    hour12: true,
    hour: "numeric" as const,
    minute: "2-digit" as const,
    month: "2-digit" as const,
    day: "2-digit" as const,
    year: "numeric" as const,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  if (type == "png" || type == "jpg" || type == "jpeg" || type == "image") type = "image";

  const handleDownload = async () => {
    try {
      const response = await fetch(imgurl);
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", `${title}`);

      // Trigger a click event on the anchor element
      link.click();

      // Clean up: remove the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const MakeFav = async () => {
    const fileId = id;

    let Personalorroup = "personal";

    if (CurrentGroupName != "Personal Account" && CurrentGroupid.length != 0) {
      Personalorroup = "group";
    }

    await axios
      .post(`http://localhost:4000/api/v1/${Personalorroup}/makefav`, {fileId})
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setCallFileL(!callFileL);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong!");
      });
  };

  const RemoveFav = async () => {
    const fileId = id;

    let Personalorroup = "personal";

    if (CurrentGroupName != "Personal Account" && CurrentGroupid.length != 0) {
      Personalorroup = "group";
    }

    await axios
      .post(`http://localhost:4000/api/v1/${Personalorroup}/removefav`, {fileId})
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setCallFileL(!callFileL);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong!");
      });
  };

  const RestoreFile = async () => {
    const fileId = id;

    let Personalorroup = "personal";

    if (CurrentGroupName != "Personal Account" && CurrentGroupid.length != 0) {
      Personalorroup = "group";
    }

    await axios
      .post(`http://localhost:4000/api/v1/${Personalorroup}/removeTrash`, {fileId})
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setCallFileL(!callFileL);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong!");
      });
  };

  const DelFile = async () => {
    const fileId = id;

    let Personalorroup = "personal";

    if (CurrentGroupName != "Personal Account" && CurrentGroupid.length != 0) {
      Personalorroup = "group";
    }
    await axios
      .post(`http://localhost:4000/api/v1/${Personalorroup}/makeTrash`, {fileId})
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setCallFileL(!callFileL);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      {fileorder ? (
        <section className=" w-full  flex flex-col items-center justify-center bg-white rounded-md shadow-md px-3 py-3 ">
          <div className="  w-full flex  items-center justify-between pb-3  text-slate-800 gap-2  ">
            {type == "xlsx" && <Text size={20} />}
            {type == "image" && <Image size={20} />}
            {(type == "pdf" || type == "docx") && <FileText size={20} />}

            <p className="line-clamp-1 text-[0.8rem] w-full  gap-2  border-0 border-black">{title}</p>

            <button className="relative" onClick={() => setShowOptions(!showOptions)} onBlur={() => setShowOptions(false)}>
              <ListFilter size={18} className=" cursor-pointer " />
              {showOptions && (
                <div className="absolute right-[-11.5px] top-[28px] text-white bg-slate-700 rounded-sm flex flex-col items-center justify-center">
                  {trash ? (
                    <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2" onClick={RestoreFile}>
                      Restore
                    </p>
                  ) : (
                    <>
                      <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2" onClick={handleDownload}>
                        Download
                      </p>
                      {fav ? (
                        <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2" onClick={RemoveFav}>
                          UnFavourite
                        </p>
                      ) : (
                        <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2" onClick={MakeFav}>
                          Favourite
                        </p>
                      )}

                      {!trash && (
                        <p className="w-full hover:bg-slate-800 px-2 text-center cursor-pointer  text-[0.7rem] py-2 " onClick={DelFile}>
                          Delete
                        </p>
                      )}
                    </>
                  )}
                </div>
              )}
            </button>
          </div>

          <div className=" h-40 py-1 w-full border-y-[0.1px] flex items-center justify-center ">
            {type == "xlsx" && <img src="/csv.png" alt="" className=" max-w-full max-h-full " />}
            {type == "image" && <img src={imgurl} alt="" className=" max-w-full w-fit h-fit max-h-full " />}
            {type == "pdf" && <img src="/pdf.png" alt="" className=" max-w-full max-h-full " />}
            {type == "docx" && <img src="/docs.png" alt="" className=" max-w-full max-h-full " />}
          </div>

          <div className=" flex w-full items-center justify-between pt-3 text-slate-800 ">
            <section className="flex items-center justify-start gap-2 ">
              <img src={profile} alt="" className=" h-6 rounded-full    " />
              <p className=" text-[0.7rem] line-clamp-1 flex-1"> {name}</p>
            </section>

            <p className=" text-[0.7rem] "> {formattedDate}</p>
          </div>
        </section>
      ) : (
        <main className=" w-full relative gap-x-2 md:gap-x-0  grid grid-cols-12 items-center text-slate-800  bg-white rounded-md px-2 md:px-5 py-3  justify-between ">
          <p className=" col-span-4 sm:col-span-3   line-clamp-1 ">{title} </p>
          {type == "xlsx" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <Text size={20} />
              <p className=" hidden md:flex ">Xlsx</p>
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
          {type == "docx" && (
            <div className=" col-span-1 md:col-span-2 flex  items-center justify-start gap-2 ">
              <FileText size={20} />
              <p className=" hidden md:flex ">Docs</p>
            </div>
          )}

          <section className=" items-center justify-start gap-2 hidden sm:flex col-span-0 sm:col-span-2  lg:col-span-4 ">
            <img src={profile} alt="" className=" h-6 rounded-full outline-double outline-1 p-[0.5px] outline-slate-800 " />
            <p className=" text-[0.7rem] line-clamp-1 flex-1 hidden lg:flex  "> {name}</p>
          </section>

          <p className=" text-[0.7rem] col-span-6 sm:col-span-5 md:col-span-3 lg:col-span-2  text-left line-clamp-1 "> {formattedDate} </p>

          <button onClick={() => setShowOptions(!showOptions)} onBlur={() => setShowOptions(false)} className=" w-full  justify-end items-end flex  col-span-1  relative ">
            <ListFilter size={18} className=" cursor-pointer   " />
            {showOptions && (
              <div className="absolute z-10 right-[-8px] md:right-[-19.5px] top-[30px] text-white bg-slate-700 rounded-sm flex flex-col items-center justify-center ">
                {trash ? (
                  <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 " onClick={RestoreFile}>
                    Restore
                  </p>
                ) : (
                  <>
                    <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 " onClick={handleDownload}>
                      Download
                    </p>

                    {fav ? (
                      <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 " onClick={RemoveFav}>
                        UnFavourite
                      </p>
                    ) : (
                      <p className=" w-full hover:bg-slate-800 px-2 text-center cursor-pointer text-[0.7rem] py-2 " onClick={MakeFav}>
                        Favourite
                      </p>
                    )}
                    <p className="w-full hover:bg-slate-800 px-2 text-center cursor-pointer  text-[0.7rem] py-2 " onClick={DelFile}>
                      Delete
                    </p>
                  </>
                )}
              </div>
            )}
          </button>
        </main>
      )}
    </>
  );
};

export default FileBox;
