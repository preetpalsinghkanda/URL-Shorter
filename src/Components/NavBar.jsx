import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate() ;

  return (
    <div className="w-full mx-auto max-w-6xl justify-between flex my-10 items-center border-black">
      <div className="flex gap-12">
        <img src={logo} alt="" />
        <div className="text-md font-[700] gap-8 text-[#9e9aa7]  md:flex items-center hidden">
          <span className="hover:text-black cursor-pointer">Features</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
          <span className="hover:text-black cursor-pointer">Resources</span>
        </div>
      </div>
      <div className="md:hidden items-center gap-8 hidden">
        <button onClick={()=>navigate("/login")} className="text-md cursor-pointer font-[700] flex gap-8 text-[#9e9aa7]">
          Login
        </button>
        <button onClick={()=>navigate("/signup")} className="text-white px-5 hover:bg-[#2acfcf84] cursor-pointer rounded-4xl py-2 bg-[#2acfcf] font-[700] text-md">
          Sign Up
        </button>
      </div>

      <div>
        
      </div>

      <div onClick={() => setMenuOpened(!menuOpened)} className="md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-3xl text-[#9e9aa7]" />
      </div>

      {menuOpened && (
        <div className="border z-20  absolute left-1/2 -translate-x-1/2 top-25 rounded-lg  py-10 w-80 bg-[#3b3054] px-6">
          <div className="flex flex-col text-md text-[#ffffffdc] font-[700] gap-6   items-center">
            <span className="cursor-pointer">Features</span>
            <span className="cursor-pointer">Pricing</span>
            <span className="cursor-pointer">Resources</span>
          </div>
          <hr className="my-6 text-[#ffffff38]" />
          <div className="flex  flex-col items-center gap-6 text-white font-[700] text-md ">
            <button className=" flex gap-8 ">Login</button>
            <button className=" px-5 w-full  rounded-4xl py-2 bg-[#2acfcf]  ">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
