import React from "react";
import "../App.css";
import shortenBg from "../assets/bg-shorten-desktop.svg";

const Link = () => {
  return (
    <div className=" mx-auto z-20  lg:-mt-22 top-22   shorten rounded-xl max-w-6xl relative sm:flex-row flex-col flex justify-between sm:py-14 p-7 sm:px-16 gap-6">
      <input
        type="text"
        placeholder="Shorten a line here..."
        className=" outline-0 flex-1 bg-[white] lg:px-8 px-4 text-xl py-4 rounded-lg "
      />
      <button className="bg-[#2acfcf] hover:bg-[#80fbfb] cursor-pointer text-white px-10 py-4 font-semibold  text-xl rounded-lg">
        Shorten it!
      </button>
    </div>
  );
};

export default Link;
