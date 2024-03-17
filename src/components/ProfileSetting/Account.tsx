const Account = () => {
  return (
    <div className="  w-full h-full ">
      <h2>Account</h2>
      <p className="  text-[0.8rem] text-gray-500 border-b-[0.1px] pb-2 ">Manage your account information!</p>

      <section className="  w-full flex items-center justify-center mt-3 flex-col  ">
        <label htmlFor="fileupload">
          <img src="/unnamed.png" alt="" className=" size-40 cursor-pointer rounded-full " />
        </label>

        <input type="file" accept=".jpeg, .png, .jpg" id="fileupload" className="hidden" />
        <p className=" flex items-center justify-center text-[0.8rem] mt-1 ">Profile picture</p>
      </section>

      <section className=" w-full flex flex-col md:flex-row items-start justify-center mt-10 ">
        <p className=" account1"> Username</p>
        <p className="account2">anujsinghsisodiya5341</p>
      </section>
      <section className=" w-full flex flex-col md:flex-row items-start justify-center mt-5 ">
        <p className="  account1 "> Email</p>
        <p className=" account2">anujsinghsisodiya5341@gmail.com</p>
      </section>
    </div>
  );
};

export default Account;
