import React, { useState } from "react";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import telegram from "../../assets/telegram.svg";
import mentor from "../../assets/frontendmentor.svg";
import bg_desktop from "../../assets/contact_bg_desktop.png";
import bg_mobile from "../../assets/contact_bg_mobile.png";
import Form from "./Form";

const inputs = [
  {
    type: "text",
    id: "name",
    name: "Name",
    placeholder: "Name",
  },
  {
    type: "email",
    id: "email",
    name: "Email Address",
    placeholder: "Email Address",
  },
  {
    type: "text",
    id: "subject",
    name: "Subject",
    placeholder: "Subject",
  },
  {
    type: "textarea",
    id: "Message",
    name: "Your Message",
    placeholder: "Your Message",
  },
];

const Contact = () => {
  return (
    <>
      <div className="mt-32 lg:mt-96 relative">
        <h1 className="text-center">Contact Me</h1>
        <div
          className="relative lg:z-10 container mx-auto flex flex-col items-center bg-[#2F2F8A] backdrop-filter backdrop-blur-sm bg-opacity-60 rounded-[30px] py-14 max-w-[316px] lg:max-w-[830px] gap-7"
          id="contact"
        >
          <Form />
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
        <img
          src={bg_desktop}
          className="absolute left-20 z-0 -top-80 hidden lg:block"
          alt=""
        />
        <img
          src={bg_mobile}
          className="absolute -left-10 top-[480px] lg:hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Contact;
