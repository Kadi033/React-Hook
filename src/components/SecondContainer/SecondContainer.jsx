import React from "react";
import FirstPath from "../../assets/5.png";
import GroupImage from "../../assets/6.png";
const SecondContainer = () => {
  return (
    <div className="mt-60 relative">
      <img className="w-full relative" src={FirstPath} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
        <div className="w-1/2 text-start">
          <h1 className="text-4xl font-bold leading-20 pb-7">Grow Together</h1>
          <p className="text-base font-normal leading-6 max-w-[520px]">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={GroupImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
