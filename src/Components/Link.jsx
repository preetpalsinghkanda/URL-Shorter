import React from "react";
import "../App.css";
import shortenBg from "../assets/bg-shorten-desktop.svg";

const Link = () => {
  return (
    <div className=" shorten rounded-xl min-w-6xl max-w-6xl  my-30 flex justify-between py-14 px-16 gap-6">
      <input
        type="text"
        placeholder="Shorten a line here..."
        className=" outline-0 flex-1 bg-[white] px-8  text-xl py-4 rounded-lg "
      />
      <button className="bg-[#2acfcf] text-white px-10 font-semibold  text-xl rounded-lg">
        Shorten it!
      </button>
    </div>
  );
};

export default Link;
