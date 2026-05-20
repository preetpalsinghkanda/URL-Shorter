import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="w-full mx-auto max-w-6xl justify-between flex my-10 items-center border-black">
      <div className="flex gap-12">
        <img src={logo} alt="" />
        <div className="text-md font-[700] gap-8 text-[#9e9aa7] md:flex items-center hidden">
          <span className="">Features</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
      </div>
      <div className="md:flex items-center gap-8 hidden">
        <button className="text-md font-[700] flex gap-8 text-[#9e9aa7]">
          Login
        </button>
        <button className="text-white px-5  rounded-4xl py-2 bg-[#2acfcf] font-[700] text-md">
          Sign Up
        </button>
      </div>

      <div onClick={() => setMenuOpened(!menuOpened)} className="md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-3xl text-[#9e9aa7]" />
      </div>

      {menuOpened && (
        <div className="border text-[#ffffffdc] absolute left-1/2 -translate-x-1/2 top-25 rounded-lg  py-10 w-80 bg-[#3b3054] px-6">
          <div className="flex flex-col text-md font-[700] gap-6  items-center">
            <span>Features</span>
            <span>Pricing</span>
            <span>Resources</span>
          </div>
          <hr className="my-6 text-[#ffffff38]" />
          <div className="flex  flex-col items-center gap-6">
            <button className="text-md font-[700] flex gap-8 ">Login</button>
            <button className="text-white px-5 w-full  rounded-4xl py-2 bg-[#2acfcf] font-[700] text-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
