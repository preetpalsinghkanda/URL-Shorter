import React from "react";
import "../App.css";

const Promo = () => {
  return (
    <div className="border promo w-full  flex items-center flex-col gap-7 py-18">
      <h3 className="lg:text-4xl text-2xl md:text-3xl font-[700] text-white">Boost your links today</h3>
      <button className="text-white px-8 rounded-4xl py-3 bg-[#2acfcf] font-[500] text-xl">
        {" "}
        Get Started
      </button>
    </div>
  );
};

export default Promo;
