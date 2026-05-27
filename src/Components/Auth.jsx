import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Auth = ({ heading, btnName, switchPage, switchBtn, route }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  function hanleAuth() {
    setEmailErr("");
    setPassErr("");
    if (!email || !pass) {
      toast.error("Please fill up all fields");
      return;
    }

    if (!email.includes("@") || email.length < 5) {
      setEmailErr("please enter valid email");
      return;
    } else if (pass.length < 6) {
      setPassErr("please enter 6 digit password");
      return;
    }
    const isSignup = btnName === "Signup";
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (isSignup) {
      if (savedUser) {
        toast.error("Account already exist -- /login");
        return;
      }

      const newUser = {
        email,
        pass,
      };

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isloggedIn", "true");
      toast.success("Successfully Account Created!");
      navigate("/");
      return;
    }

    if (savedUser?.email === email && savedUser?.pass === pass) {
      localStorage.setItem("isloggedIn", "true");

      toast.success("Login Successfully :)");

      navigate("/");
    } else {
      toast.error("Invalid Credentials!");
    }
  }

  return (
    <div className="h-screen px-4  flex justify-center items-center w-full">
      <div className="border-3 border-[#0000001d] py-8 max-w-md w-full px-6 sm:px-10 flex rounded-3xl justify-center items-center flex-col">
        <img src={logo} alt="" className="h-8" />

        <div className="w-full flex flex-col items-center">
          <h2 className="text-4xl my-10 font-[700] text-[#35323E] ">
            {heading}
          </h2>

          <div className="flex flex-col w-full gap-4">
            <div>
              <input
                onChange={(x) => setEmail(x.target.value)}
                value={email}
                type="text"
                placeholder="Email address"
                className="border outline-0 border-[#00000062] rounded-4xl w-full text-lg py-2 px-6"
              />
              <span className="italic px-4 text-sm text-[red]">{emailErr}</span>
            </div>

            <div>
              <input
                value={pass}
                onChange={(x) => setPass(x.target.value)}
                type="password"
                placeholder="Password"
                className="border outline-0 border-[#00000062] rounded-4xl w-full text-lg py-2 px-6"
              />
              <span className="italic px-4 text-sm text-[red]">{passErr}</span>
            </div>
          </div>

          <button
            onClick={() => hanleAuth()}
            className="border my-4 cursor-pointer bg-[#2ACFCF]   w-full text-xl text-white font-bold py-2 rounded-4xl"
          >
            {btnName}
          </button>

          <p className="flex gap-1">
            {switchPage}
            <span
              onClick={() => navigate(route)}
              className="text-[#2ACFCF] cursor-pointer font-[500]"
            >
              {switchBtn}
            </span>
          </p>

          <p
            onClick={() => navigate("/")}
            className=" py-1 cursor-pointer my-2 px-3 rounded-2xl bg-[#2acfcf48]  text-[#0000007f]"
          >
            Back To Home
          </p>

          <p className="my-4 text-sm">Note : only one user allowed</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
