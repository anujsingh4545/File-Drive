import {Outlet} from "react-router-dom";
import SideNav from "../components/DashBoard/SideNav";
import TopNav from "../components/DashBoard/TopNav";

const DashBoard = () => {
  return (
    <div className=" w-full h-[100lvh] ">
      <SideNav />

      <section className=" flex flex-col w-full md:w-[80%] lg:w-[85%] right-0 flex-1  fixed overflow-scroll mt-[60px]  ">
        <TopNav />
        <Outlet />
      </section>
    </div>
  );
};

export default DashBoard;
