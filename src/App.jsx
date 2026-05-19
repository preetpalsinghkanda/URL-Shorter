import React from "react";
import NavBar from "./Components/NavBar";
import GetStarted from "./Components/GetStarted";
import Link from "./Components/Link";
import AdvancedStatisticsFull from "./Components/AdvancedStatisticsFull";
import Promo from "./Components/Promo";
import Footer from "./Components/Footer";
import AdvancedStatistic from "./Components/AdvancedStatistic";

const App = () => {
  return (
    <div className="flex items-center flex-col ">
      <NavBar />
      <GetStarted />
      <Link />
      <AdvancedStatisticsFull />
      <Promo />
      <Footer />
    </div>
  );
};

export default App;
