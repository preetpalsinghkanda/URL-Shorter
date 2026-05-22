import React from "react";
import AdvancedStatistic from "./AdvancedStatistic";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullCustomizable from "../assets/icon-fully-Customizable.svg";
import brandRecognition from "../assets/icon-brand-recognition.svg";

const AdvancedStatisticsFull = () => {
  return (
    <div className="pt-35 pb-30 w-full items-center flex justify-center bg-[#EFF1F7] ">
      <div className=" max-w-6xl w-full mx-auto flex gap-30 flex-col items-center ">
        <div className="text-center flex gap-4 flex-col">
          <h2 className="lg:text-4xl text-3xl font-[700] text-[#232127]">
            Advanced Statistics
          </h2>
          <p className="text-xl font-[500] text-[#9e9aa7] ">
            Track how your links are performing across the web with{" "}
            <p className="sm:block hidden"></p> our advanced statistics dashboard.
          </p>
        </div>

        <div className="relative flex lg:gap-8 gap-25 h-auto lg:h-95 items-start flex-col lg:flex-row">
          <hr className="absolute lg:top-1/2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:w-full lg:h-auto w-0 h-full border-5 border-cyan-400" />

          <div className="self-start z-10">
            <AdvancedStatistic
              StatisticName={"Brand Recognition"}
              StatisticDiscription={
                "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              }
              StatisticImg={brandRecognition}
            />
          </div>

          <div className="self-center z-10">
            <AdvancedStatistic
              StatisticName={"Detailed Records"}
              StatisticDiscription={
                "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              }
              StatisticImg={detailedRecords}
            />
          </div>

          <div className="self-end z-10">
            <AdvancedStatistic
              StatisticName={"Fully Customizable"}
              StatisticDiscription={
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              }
              StatisticImg={fullCustomizable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatisticsFull;
