import React from "react";
import Button from "../../button/Button";
import RespDesign from "../../assets/2.png";
import FirstCountIcon from "../../assets/3.png";
import SecondCountIcon from "../../assets/4.png";
const FirstContainer = () => {
  return (
    <div>
      <div className="grid justify-center justify-items-center p-3">
        <h1 className=" text-5xl text-black font-bold leading-16 pt-[226px] pb-7">
          Build The Community Your Fans Will Love
        </h1>
        <p className="w-[551px] h-24 text-center font-normal text-lg leading-9 mb-12">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button />
        <div className="mt-32">
          <img className="kadi" src={RespDesign} alt="Responsiv Deisgn" />
        </div>
        <div className="flex justify-center mt-32 gap-[341px]">
          <div className="card p-0">
            <img src={FirstCountIcon} alt="Icon" />
            <h1 className=" text-start text-[90px] font-bold">1.4k+</h1>
            <p className="font-normal text-2xl text-center text-[#808E9A]">
              Communities Formed
            </p>
          </div>
          <div className="card p-0">
            <img src={SecondCountIcon} alt="Icon" />
            <h1 className=" text-start text-[90px] font-bold">2.7m+</h1>
            <p className="font-normal text-2xl text-center text-[#808E9A]">
              Messages Sent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContainer;
