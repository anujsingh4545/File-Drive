const Empty = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center h-full ">
      <section className="  w-[15%] text-center ">
        <img src="/empty.svg" alt="" />
      </section>
      <p className=" mt-5 text-black  ">No data found!</p>
    </div>
  );
};

export default Empty;
