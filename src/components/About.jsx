import React from "react";

import img_desktop from "../assets/about_img_desktop.png";
import about_img_mobile from "../assets/About_mobile_bg.png";

const About = () => {
  return (
    <>
      <div
        className="container flex flex-col items-center lg:items-start lg:flex-row justify-center lg:bg-[url('/src/assets/particle_bg.png')] bg-cover bg-no-repeat mt-24 lg:mt-0 relative"
        id="about"
      >
        <img src={img_desktop} alt="" className="hidden lg:block" />
        <img
          src={about_img_mobile}
          className="lg:hidden absolute bottom-0"
          alt=""
        />
        <div className="flex flex-col gap-12 mt-10 pb-16 lg:pb-0">
          <h1 className="text-[#31F3FF]">About Me</h1>
          <p className="max-w-[208px] lg:max-w-[505px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate veli
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
