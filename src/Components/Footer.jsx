import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className=" bg-[#232127] w-full">
      <div className="min-w-6xl max-w-6xl  mx-auto py-16 items-start text-white justify-between flex">
        <img src={logo} alt="" className="brightness-0 invert" />

        <div className="flex gap-30">
          <div className="flex gap-20">
            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Features</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span>Link Shortening</span>
                <span>Branded Links</span>
                <span>Analytics</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Resources</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span>Blog</span>
                <span>Developers</span>
                <span>Support</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Company</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span>About</span>
                <span>Our Team</span>
                <span>Careers</span>
                <span>Contact</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
