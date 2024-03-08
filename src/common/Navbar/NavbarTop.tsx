import {Link} from "react-router-dom";

const NavbarTop = () => {
  return (
    <main className="  h-[60px]  w-full bg-white shadow-md ">
      <div className=" w-full h-full  px-3 md:px-10 flex justify-between items-center">
        <section className=" flex flex-row items-center justify-center gap-3 ">
          <img src=" /unnamed.png " alt="" className=" h-12  rounded-full " />
          <Link to="/">
            <h1 className=" font-madami  cursor-pointer  text-[1.6rem] md:text-[1.8rem] ">File-Drive </h1>
          </Link>
        </section>

        <section className="">
          <Link to="/login">
            <button className=" common_btn"> Sign In </button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default NavbarTop;
