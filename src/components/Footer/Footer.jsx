import React, { useState } from "react";
import "./Footer.css";
import FooterLogo from "../../assets/16.png";
import ThirdPath from "../../assets/15.png";
import PhoneIcon from "../../assets/10.png";
import GmailIcon from "../../assets/11.png";
import FaceboookIcon from "../../assets/12.png";
import InstagramIcon from "../../assets/13.png";
import TweeterIcon from "../../assets/14.png";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMessage("Check your email please");
    } else {
      setErrorMessage("");
      console.log("Email submitted:", email);
      setEmail("");
    }
  };
  return (
    <div>
      <div className="mt-60 relative">
        <img className="w-full relative" src={ThirdPath} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center gap-44">
          <div className="w-1/2 text-start">
            <img
              className="ml-5 mt-[280px] Footer-Logo"
              src={FooterLogo}
              alt=""
            />
            <p className="text-base font-semibold leading-6 w-[340px] pt-7 pl-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="flex gap-4">
              <img src={PhoneIcon} alt="" />
              <p className="text-white">Phone: +1-543-123-4567</p>
            </div>
            <div className="flex gap-4">
              <img src={GmailIcon} alt="" />
              <p className="text-white">example@huddle.com</p>
            </div>
            <div className="flex gap-6">
              <img
                className="faceboook cursor-pointer"
                src={FaceboookIcon}
                alt=""
              />
              <img
                className="instagram cursor-pointer"
                src={InstagramIcon}
                alt=""
              />
              <img
                className="tweeter cursor-pointer"
                src={TweeterIcon}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-3xl font-bold leading-9 footer-h1">
              NEWSLETTER
            </h1>
            <p className="w-[344px] text-white text-base font-semibold leading-6 pt-4 pb-10">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-[320px] h-12 rounded-md pl-3 outline-none"
                type="email"
                name=""
                id=""
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <button
                id="btn"
                className="ml-5 w-[160px] h-12 bg-pink-500 filter drop-shadow-md rounded-md hover:bg-pink-400 text-white"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
