// import Empty from "../../common/Empty";

import {useRecoilValue} from "recoil";
import FileBox from "./FileBox";
import viewFilesOrder from "../../recoil/atoms/ViewFilesOrder";
import Files from "../../recoil/atoms/Files";
import FileLoading from "../../recoil/atoms/FileLoading";
import Empty from "../../common/Empty";
import SortFiles from "../../recoil/atoms/SortFiles";
import SearchBox from "../../recoil/atoms/SearchBox";

const AllFiles = () => {
  const fileorder = useRecoilValue(viewFilesOrder);
  const File = useRecoilValue(Files);
  const LoadingFile = useRecoilValue(FileLoading);
  const sortFile = useRecoilValue(SortFiles);
  const searchText = useRecoilValue(SearchBox);

  return (
    <div className=" w-full overflow-y-scroll h-[calc(100lvh-198px)]  text-white ">
      {LoadingFile ? (
        <main className={` grid   ${fileorder ? "grid-cols-1  md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}  gap-x-3 gap-y-3 px-3 md:px-5 py-3 md:py-5 `}>
          <section className=" w-full  animate-pulse bg-white/60 h-60"></section>
          <section className=" w-full  animate-pulse bg-white/60 h-60"></section>
          <section className=" w-full  animate-pulse bg-white/60 h-60"></section>
        </main>
      ) : File.length > 0 ? (
        File.filter((file: any) => {
          return file.trash == false && file.filetype.includes(searchText) && (sortFile === "all" || (sortFile === "photo" && (file.filetype === "png" || file.filetype === "jpg" || file.filetype === "jpeg" || file.filetype === "image")) || (sortFile === "csv" && file.filetype === "xlxx") || (sortFile === "pdf" && file.filetype === "pdf") || (sortFile === "docx" && file.filetype === "docx"));
        }).length === 0 ? (
          <Empty />
        ) : (
          <main className={` grid   ${fileorder ? "grid-cols-1  md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}  gap-x-3 gap-y-3 px-3 md:px-5 py-3 md:py-5 `}>
            {File.map((file: any) => {
              if (file.trash == false && file.filetype.includes(searchText) && (sortFile === "all" || (sortFile === "photo" && (file.filetype === "png" || file.filetype === "jpg" || file.filetype === "jpeg" || file.filetype === "image")) || (sortFile === "csv" && file.filetype === "xlxx") || (sortFile === "pdf" && file.filetype === "pdf") || (sortFile === "docx" && file.filetype === "docx"))) {
                return <FileBox key={file.id} id={file.id} type={file.filetype} title={file.title} imgurl={file.url} userid={file.userId} created={file.createdAt} name={file.name} email={file.email} profile={file.profile} fav={file.favourite} trash={file.trash} trashtime={file.trashtime} />;
              }
            })}
          </main>
        )
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default AllFiles;
