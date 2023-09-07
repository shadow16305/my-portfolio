import React from "react";

import hero_img from "../assets/hero_image.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import mentor from "../assets/frontendmentor.svg";
import lines from "../assets/LINES.svg";
import hero_img_mobile from "../assets/Picture + Ellipse.png";
import contact_icon from "../assets/Group Message.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse pt-12 gap-8 lg:gap-0 lg:pt-0 lg:flex-row items-center lg:justify-between">
        <img
          className="absolute -left-8 top-80 lg:left-0 lg:top-52 z-0"
          src={lines}
          alt=""
        />
        <div className="flex flex-col items-center lg:items-start gap-16 lg:ps-24">
          <h1 className="max-w-[342px] lg:max-w-[660px]">
            NICE TO MEET YOU. I’M{" "}
            <span className="text-[#4BBAC4]">CHRIS A.B.</span>{" "}
          </h1>
          <p className="text-[20px] lg:text-[26px] text-center lg:text-start max-w-[343px] lg:max-w-[635px] font-['Philosopher']">
            I'm a full-stack developer passionate about building accessible web
            apps that users love.
          </p>
          <a
            href="#contact"
            className="lg:hidden flex gap-2 bg-[#4BBAC4] rounded-xl py-3 px-4 uppercase"
          >
            contact me <img src={contact_icon} alt="" />
          </a>
          <div className="flex gap-7">
            <a href="">
              <img src={github} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
            <a href="">
              <img src={telegram} alt="" />
            </a>
            <a href="">
              <img src={mentor} alt="" />
            </a>
          </div>
        </div>
        <img src={hero_img} className="hidden lg:block" alt="" />
        <img src={hero_img_mobile} className="lg:hidden" alt="" />
      </div>
    </>
  );
};

export default Hero;
