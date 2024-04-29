import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <div className="w-[400px] h-20 bg-pink-500 filter drop-shadow-md flex kd justify-center items-center rounded-full hover:bg-pink-400">
      <p className="text-white font-bold text-lg leading-9">
        Get Started For Free
      </p>
    </div>
  );
};

export default Button;
