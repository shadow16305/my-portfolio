import React, { useState } from "react";

import { Waypoint } from "react-waypoint";

import img_desktop from "../assets/languages-desktop.png";
import img_mobile from "../assets/languages_mobile.png";

const Languages = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getWidthEnglish = () => {
    return onScreen ? "w-[158px] lg:w-[319px]" : "w-[20px] lg:w-[20px]";
  };
  const getWidthRussian = () => {
    return onScreen ? "w-[145px] lg:w-[300px]" : "w-[20px] lg:w-[20px]";
  };
  const getWidthUkranian = () => {
    return onScreen ? "w-[130px] lg:w-[275px]" : "w-[20px] lg:w-[20px]";
  };

  return (
    <>
      <div className="relative h-[380px] lg:h-[550px] mt-24 lg:mt-0">
        <div className="container mx-auto flex justify-center items-center relative z-0">
          <Waypoint
            onEnter={() => setOnScreen(true)}
            onLeave={() => setOnScreen(false)}
          >
            <div className="flex flex-col justify-center bg-[#2F2F8A] rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 w-[322px] lg:w-[633px] px-11 lg:px-20 py-4 lg:py-8">
              <h2 className="text-center">Languages</h2>
              <div className="flex gap-9">
                <h4>English</h4>
                <div className="flex flex-col justify-center">
                  <div
                    className={`flex items-center border-0 rounded-3xl bg-gradient-to-r ${getWidthEnglish()} from-[#3C1DFF] to-[#14C9C9] h-2 lg:h-4 transition-all duration-1000`}
                  ></div>
                </div>
              </div>
              <div className="flex gap-8">
                <h4>Russian</h4>
                <div className="flex flex-col justify-center">
                  <div
                    className={`flex items-center border-0 rounded-3xl bg-gradient-to-r ${getWidthRussian()} from-[#3C1DFF] to-[#14C9C9] h-2 lg:h-4 transition-all duration-1000`}
                  ></div>
                </div>
              </div>
              <div className="flex gap-5">
                <h4>Ukranian</h4>
                <div className="flex flex-col justify-center">
                  <div
                    className={`flex items-center border-0 rounded-3xl bg-gradient-to-r ${getWidthUkranian()} from-[#3C1DFF] to-[#14C9C9] h-2 lg:h-4 transition-all duration-1000`}
                  ></div>
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
        <img
          src={img_desktop}
          className="hidden lg:block absolute bottom-0 right-0 -z-10"
          alt=""
        />
        <img
          src={img_mobile}
          className="lg:hidden absolute right-0 bottom-0 -z-10"
          alt=""
        />
      </div>
    </>
  );
};

export default Languages;
