const Home = () => {
  return (
    <div className=" h-[calc(100dvh-70px)]">
      <main className=" w-full h-full  flex  flex-col items-center justify-center  ">
        <img src="/unnamed.png" className="rounded-full h-40 md:h-48 outline-dashed outline-2 p-1 " alt="" />

        <h1 className="  text-center text-[1.7rem] md:text-[3rem] font-bold font-madami  tracking-wider mt-5">
          The easiest way to upload <br /> and share files with your <br /> organization.
        </h1>

        <h5 className=" mt-3  md:mt-2 text-center px-4">Make an account and start managing your files in less than a minute. </h5>

        <section className=" flex  mt-10 items-center justify-center gap-5 flex-row ">
          <button className=" common_btn ">Get Started </button>
          <p className=" cursor-pointer "> Learn More -{">"}</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
