import React from "react";
import Link from "./Link";

const LinkFull = () => {
  const InputArr = [
    {
      URL: "https://docs.spoo.me/",
      shortenURL: "https://rel.ink/24lKyk",
    },
    {
      URL: "https://docs.spoo.me/",
      shortenURL: "https://rel.ink/24lKyk",
    },
    {
      URL: "https://docs.spoo.me/",
      shortenURL: "https://rel.ink/24lKyk",
    },
  ];

  return (
    <div className=" border border-transparent bg-[#EFF1F7] lg:mt-20 mt-50 px-6">
      <Link />

      <div className=" mx-auto max-w-6xl rounded-lg flex flex-col gap-3 py-6 ">
        {InputArr.map((item) => {
          return (
            <div className="bg-white flex-col items-start lg:flex-row flex  justify-between md:items-center px-6 py-3  font-[500] text-lg">
              <span className="line-clamp-1">{item.URL}</span>
              <hr className="lg:hidden w-full border-gray-300 my-3" />
              <div className="flex items-start md:items-center lg:gap-6 flex-col lg:flex-row gap-3 lg:w-auto w-full">
                <span className="line-clamp-1 text-[#2acfcf]">
                  {item.shortenURL}
                </span>
                <button className="bg-[#2acfcf] w-full md:w-auto hover:bg-[#80fbfb] cursor-pointer text-white px-8  font-semibold  text-lg rounded-lg py-2 ">
                  copy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinkFull;
