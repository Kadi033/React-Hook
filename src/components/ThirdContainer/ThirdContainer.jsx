import React from "react";
import SecondGroupImage from "../../assets/7.png";
const ThirdContainer = () => {
  return (
    <div className="mt-48 flex justify-center items-center gap-28">
      <img src={SecondGroupImage} alt="" />
      <div className="w-[520px]">
        <div className="text-start">
          <h1 className="text-4xl font-bold leading-20 pb-7">
            Flowing Conversations
          </h1>
          <p className="text-base font-normal leading-6">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
