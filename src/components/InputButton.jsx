import React from "react";

const InputButton = () => {
  return (
    <form>
      <div className="w-full flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Email Address"
          className=" w-full md:w-[60%] py-[14px] md:py-[16px] px-6  text-xl bg-black text-white active:outline-none hover:outline-none focus:outline-none"
        />
        <button
          type="submit"
          className=" py-2 md:py-[14px] px-6 bg-orange text-[18px] font-bold text-white rounded-sm md:rounded-tr-[5px] md:rounded-br-[5px]"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default InputButton;
