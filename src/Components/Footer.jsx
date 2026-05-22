import React from "react";
import logo from "../assets/logo.svg";
import {
  logoFacebook,
  logoTwitter,
  logoPinterest,
  logoInstagram,
} from "ionicons/icons";

import { IonIcon } from "@ionic/react";
const Footer = () => {
  return (
    <div className=" bg-[#232127] w-full ">
      <div className="w-full items-center px-4 flex-col lg:gap-0 gap-14 max-w-6xl  mx-auto py-16 lg:items-start text-white justify-between flex lg:flex-row">
        <img src={logo} alt="" className="brightness-0 invert" />

        <div className="flex lg:gap-30 gap-15 md:flex-row flex-col">
          <div className="flex lg:gap-20 gap-12 sm:flex-row flex-col text-center">
            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Features</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Link Shortening
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Branded Links
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Analytics
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Resources</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Blog
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Developers
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Support
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-lg font-semibold">Company</h6>
              <div className="flex flex-col gap-3 text-[#9e9aa7] font-[500]">
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  About
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Our Team
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Careers
                </span>
                <span className="cursor-pointer hover:text-[#2acfcf]">
                  Contact
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start lg:justify-start justify-center gap-6 text-3xl">
            <IonIcon
              icon={logoFacebook}
              className=" cursor-pointer hover:text-[#2acfcf] text-white transition"
            />

            <IonIcon
              icon={logoTwitter}
              className="  cursor-pointer hover:text-[#2acfcf] text-white transition"
            />

            <IonIcon
              icon={logoPinterest}
              className="  cursor-pointer hover:text-[#2acfcf] text-white transition"
            />

            <IonIcon
              icon={logoInstagram}
              className="  cursor-pointer hover:text-[#2acfcf] text-white transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
