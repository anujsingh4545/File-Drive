// import Empty from "../../common/Empty";

import {useRecoilValue} from "recoil";
import FileBox from "./FileBox";
import viewFilesOrder from "../../recoil/atoms/ViewFilesOrder";

const AllFiles = () => {
  const fileorder = useRecoilValue(viewFilesOrder);

  return (
    <div className="w-full overflow-y-scroll h-[calc(100lvh-198px)]  text-white ">
      <main className={` grid   ${fileorder ? "grid-cols-1  md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}  gap-x-3 gap-y-3 px-3 md:px-5 py-3 md:py-5 `}>
        <FileBox type="csv" />
        <FileBox type="image" />
        <FileBox type="pdf" />
        <FileBox type="docs" />
      </main>
    </div>
  );
};

export default AllFiles;
