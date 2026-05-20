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
   <div className="flex items-center flex-col">
  
  <div className="px-6 w-full">
    <NavBar />
  </div>

<div className="lg:px-6 px-0 w-full">
  <GetStarted />
</div>

<div className="px-6 w-full">
<Link/>
</div>


 <div className=" w-full">
  
    {/* <AdvancedStatisticsFull />
    <Promo /> */}
  </div> 

</div>
  );
};

export default App;
