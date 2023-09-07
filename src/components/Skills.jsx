import React, { useState } from "react";

import img_desktop from "../assets/skills_desktop.png";
import img_mobile from "../assets/skills_mobile.png";

import { Waypoint } from "react-waypoint";

import { icons_desktop, icons_mobile } from "./Tools/icons";

const Skills = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getHeight = () => {
    return onScreen ? "lg:h-[1000px]" : "lg:h-0";
  };

  return (
    <>
      <Waypoint
        onEnter={() => setOnScreen(true)}
        onLeave={() => setOnScreen(false)}
      >
        <div
          className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start relative lg:h-[900px]"
          id="skills"
        >
          <div className="flex flex-wrap-reverse justify-center max-w-[260px] lg:max-w-[430px] gap-1 lg:gap-4 mt-32 relative z-10">
            {icons_desktop.map((elem) => (
              <img src={elem} alt="" key={elem} className="hidden lg:block" />
            ))}
            {icons_mobile.map((elem) => (
              <img src={elem} alt="" className="lg:hidden" />
            ))}
          </div>
          <img
            src={img_desktop}
            className="absolute transition-all duration-1000 hidden lg:block"
            alt=""
            style={{ height: getHeight() }}
          />
          <img src={img_mobile} className="lg:hidden" alt="" />
        </div>
      </Waypoint>
    </>
  );
};

export default Skills;
