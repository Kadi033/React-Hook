import React from "react";
import SecondPath from "../../assets/8.png";
import ThirdGroupImage from "../../assets/9.png";
import Button from "../../button/Button";
const FourthContainer = () => {
  return (
    <div>
      <div className="mt-60 relative">
        <img className="w-full relative" src={SecondPath} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
          <div className="w-1/2 text-start">
            <h1 className="text-4xl font-bold leading-20 pb-7">Your Users</h1>
            <p className="text-base font-normal leading-6 max-w-[520px]">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={ThirdGroupImage} alt="" />
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold leading-20 text-center pt-[120px] mb-12">
        Ready To Build Your Community?
      </h1>
      <Button />
    </div>
  );
};

export default FourthContainer;
