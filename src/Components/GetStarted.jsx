import React from "react";
import girlWithComputer from "../assets/illustration-working.svg";

const GetStarted = () => {
  return (
    <div className="w-full max-w-6xl lg:my-35 md:12 flex flex-col gap-14">
      <div className="overflow-hidden flex justify-center items-center">
        <img
          className="w-[500px] max-w-none shrink-0 relative -right-20"
          src={girlWithComputer}
          alt=""
        />
      </div>

      <div className="flex  flex-col lg:items-start items-center text-center gap-8 z-10">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-[80px]/22 text-[40px]/13 font-[800] lg:font-[700] text-[#35323e]">
            More than just <p className="lg:block hidden"></p> shorter links
          </h1>
          <p className="lg:text-2xl/9 px-6 text-lg text-[#9e9aa7]">
            Build your brand's recognition and get detailed{" "}
            <p className="lg:block hidden"></p> insights on how your links are
            performing.
          </p>
        </div>

        <button className="text-white px-8 w-fit  rounded-4xl py-3 bg-[#2acfcf] font-[500] text-xl">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
