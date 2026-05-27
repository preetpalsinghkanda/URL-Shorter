import React from "react";
import NavBar from "./Components/NavBar";
import GetStarted from "./Components/GetStarted";
import Link from "./Components/Link";
import AdvancedStatisticsFull from "./Components/AdvancedStatisticsFull";
import Promo from "./Components/Promo";
import Footer from "./Components/Footer";
import AdvancedStatistic from "./Components/AdvancedStatistic";
import LinkFull from "./Components/LinkFull";
import Auth from "./Components/Auth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex items-center flex-col">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="px-6 w-full">
                <NavBar />
              </div>
              <div className="lg:px-6 px-0 w-full">
                <GetStarted />
              </div>
              <div className=" w-full">
                <LinkFull />
              </div>
              <div className=" w-full">
                <AdvancedStatisticsFull />
                <Promo />
                <Footer />
              </div>
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <Auth
              heading={"Create Account"}
              btnName={"Signup"}
              switchPage={"Have an account?"}
              switchBtn={"Log in"}
              route={"/login"}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Auth
              heading={"Welcome Back"}
              btnName={"Login"}
              switchPage={"Don't have an account?"}
              switchBtn={"Sign up"}
              route={"/signup"}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
