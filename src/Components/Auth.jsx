import React from "react";
import logo from "../assets/logo.svg";

const Auth = ({heading , btnName , switchPage , switchBtn}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-3 border-[#0000001d] py-8   min-w-md  px-10 flex rounded-3xl justify-center items-center flex-col">
        <img src={logo} alt="" className="h-8" />

        <div className="w-full flex flex-col items-center">
          <h2 className="text-4xl my-10 font-[700] text-[#35323E]">
            {heading}
          </h2>

          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              placeholder="Email address"
              className="border outline-0 border-[#00000062] rounded-4xl w-full text-lg py-2 px-6"
            />
            <input
              type="password"
              placeholder="Password"
              className="border outline-0 border-[#00000062] rounded-4xl w-full text-lg py-2 px-6"
            />
          </div>

          <button className="border my-4 bg-[#2ACFCF]   w-full text-xl text-white font-bold py-2 rounded-4xl">
            {btnName}
          </button>

          <p className="flex gap-1">
            {switchPage}<span className="text-[#2ACFCF] font-[500]">{switchBtn}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
