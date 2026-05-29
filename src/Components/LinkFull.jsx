import React, { useState } from "react";
import Link from "./Link";

const LinkFull = () => {
  const [inputArr, setInputArr] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 3000);
  };

  return (
    <div className="border border-transparent bg-[#EFF1F7] lg:mt-20 mt-50 px-6">
      <Link inputArr={inputArr} setInputArr={setInputArr} />

      <div className="mx-auto max-w-6xl rounded-lg flex flex-col gap-3 py-6">
        {inputArr.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white flex-col items-start lg:flex-row flex justify-between md:items-center px-6 py-3 font-[500] text-lg rounded-lg"
            >
              <span className="truncate max-w-60 sm:max-w-100">{item.long_url}</span>

              <hr className="lg:hidden w-full border-gray-300 my-3" />

              <div className="flex items-start md:items-center lg:gap-6 flex-col lg:flex-row gap-3 lg:w-auto w-full">
                <span className="line-clamp-1 text-[#2acfcf]">
                  {item.short_url}
                </span>

                <button
                  onClick={() => handleCopy(item.short_url, index)}
                  className={`w-full md:w-auto cursor-pointer text-white px-8 font-semibold text-lg rounded-lg py-2 transition-all duration-200
                    ${
                      copiedIndex === index
                        ? "bg-[#3b3054]"
                        : "bg-[#2acfcf] hover:bg-[#80fbfb]"
                    }`}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
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
