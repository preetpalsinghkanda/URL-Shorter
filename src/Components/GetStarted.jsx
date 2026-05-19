import React from "react";
import girlWithComputer from '../assets/illustration-working.svg'

const GetStarted = () => {
  return (
    <div className="min-w-6xl max-w-6xl my-22 flex ">
      <div className="flex flex-col items-start gap-8">
        <div className="">
          <h1 className="text-7xl/20 font-[700] text-[#35323e]">
            More than just <p className="block"></p> shorter links
          </h1>
          <p className="text-2xl text-[#9e9aa7]">
            Build your brand's recognition and get detailed <p className="block"></p> insights on how your
            links are performing.
          </p>
        </div>

        <button className="text-white px-8  rounded-4xl py-2 bg-[#2acfcf] font-[500] text-xl"> Get Started</button>
      </div>
      <div>
        <img className="absolute -right-20 h-120 top-40" src={girlWithComputer} alt="" />
      </div>
    </div>
  );
};

export default GetStarted;
