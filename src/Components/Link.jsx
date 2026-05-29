import React, { useState } from "react";
import "../App.css";
import shortenBg from "../assets/bg-shorten-desktop.svg";

const Link = ({ inputArr, setInputArr }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputErr, setInputErr] = useState(false);

  const [shortURL, setShortURL] = useState("");

  async function InputCheck() {
    if (!inputValue.trim()) {
      setInputErr(true);
    } else {
      setInputErr(false);

      let url = inputValue.trim()

      if(!url.startsWith("http://") && !url.startsWith("https://")){
        url = `https://${url}`
      }

      try {

        const formData = new FormData()
        formData.append("link" , url);
        const shortURLResponse = await fetch("https://lnk.ua/api/v1/link/create", {
          method: "POST",
          headers: {Accept: "application/json", Authorization:"Bearer 260|AEHuE9O7RTdrsP7ZQMOIdADPJFbswQ04bHLakYfL89da358d",
          },

          body: formData,
        });


        const responseData = await shortURLResponse.json()

        if (!shortURLResponse.ok) {
          throw new Error("Failed to short URL");
        }


        setInputArr((prev) => [{
          long_url : url,
          short_url : responseData.result.lnk,
        }, ...prev].slice(0, 3));
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <div  className="link mx-auto z-20 relative -mt-26  lg:-mt-22   shorten rounded-xl max-w-6xl  sm:flex-row flex-col flex justify-between sm:py-14 p-7 sm:px-16 sm:gap-7 gap-9">
      <input
        value={inputValue}
        onChange={(x) => setInputValue(x.target.value)}
        type="text"
        placeholder="Shorten a link here..."
        className={` ${inputErr ? "placeholder:text-[#fc5555a7] border-3 border-[#fc5555]" : ""}  outline-0 flex-1 bg-[white] lg:px-8 px-4 text-xl py-4 rounded-lg `}
      />

      {inputErr && (
        <p className="absolute lg:top-31 italic text-[#fc5555]   top-23">
          Please add a link
        </p>
      )}

      <button
        onClick={() => InputCheck()}
        className="bg-[#2acfcf] hover:bg-[#80fbfb] cursor-pointer text-white px-10 py-4 font-semibold  text-xl rounded-lg"
      >
        Shorten it!
      </button>
    </div>
  );
};

export default Link;
