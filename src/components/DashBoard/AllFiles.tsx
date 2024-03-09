// import Empty from "../../common/Empty";

import FileBox from "./FileBox";

const AllFiles = () => {
  return (
    <div className="w-full overflow-y-scroll h-[calc(100lvh-198px)]  text-white ">
      <main className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 px-3 md:px-5 py-3 md:py-5 ">
        {/*  */}

        <FileBox type="csv" />
        <FileBox type="image" />
        <FileBox type="pdf" />
        <FileBox type="docs" />

        {/*  */}
      </main>
    </div>
  );
};

export default AllFiles;
