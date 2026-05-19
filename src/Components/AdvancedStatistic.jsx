import React from "react";


const AdvancedStatistic = ({StatisticName , StatisticDiscription , StatisticImg}) => {
  return (
    <div className="rounded-md max-w-sm pb-8 bg-[white] px-8 h-fit">
      <div className="relative -top-12 p-6 bg-[#3b3054] w-fit rounded-full">
        <img src={StatisticImg} className="h-12" alt="" />
      </div>
      <div className="relative -top-2 flex flex-col gap-4">
        <h4 className="text-2xl font-[700]">{StatisticName}</h4>
        <p className="text-md font-[500] text-[#9e9aa7]">
          {StatisticDiscription}
        </p>
      </div>
    </div>
  );
};

export default AdvancedStatistic;
