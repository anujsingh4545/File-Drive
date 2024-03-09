const Empty = () => {
  return (
    <div className=" w-full flex items-center justify-center h-full ">
      <section className="  w-[15%] text-center ">
        <img src="/empty.svg" alt="" />

        <p className=" mt-5 text-black  ">No file found!</p>
      </section>
    </div>
  );
};

export default Empty;
