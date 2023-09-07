import React from "react";

import MyCarousel from "./MyCarousel";
import MyCarousel_Mobile from "./MyCarousel_Mobile";

import { projects_items } from "../Tools/projects_items";

import bg_desktop from "../../assets/projects_bg_desktop.png";
import bg_mobile from "../../assets/projects_bg_mobile.png";

const Projects = () => {
  return (
    <>
      <div
        className="container mx-auto flex flex-col items-center justify-center gap-[75px] relative mt-48"
        id="projects"
      >
        <div className="relative z-10 flex flex-col items-center gap-[74px]">
          <h1>My Projects</h1>
          <div className="hidden lg:block">
            <MyCarousel projects_items={projects_items} />
          </div>
          <div className="lg:hidden">
            <MyCarousel_Mobile projects_items={projects_items} />
          </div>
        </div>
        <img
          src={bg_desktop}
          className="absolute -top-[360px] hidden lg:block"
          alt=""
        />
        <img
          src={bg_mobile}
          className="absolute lg:hidden top-[370px]"
          alt=""
        />
      </div>
    </>
  );
};

export default Projects;
