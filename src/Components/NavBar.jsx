import React from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="min-w-6xl max-w-6xl justify-between flex my-10 items-center border-black">
      <div className="flex gap-12">
        <img src={logo} alt="" />
        <div className="text-md font-[700] flex gap-8 text-[#9e9aa7]">
          <span className="">Features</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-md font-[700] flex gap-8 text-[#9e9aa7]">
          Login
        </button>
        <button className="text-white px-4  rounded-2xl py-1 bg-[#2acfcf] font-[700] text-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
