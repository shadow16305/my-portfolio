import React, { useState } from "react";

import contact_icon from "../assets/Group Message.svg";

const navLinks = [
  {
    name: "about me",
    id: 0,
    href: "#about",
  },
  {
    name: "skills",
    id: 1,
    href: "#skills",
  },
  {
    name: "projects",
    id: 2,
    href: "#projects",
  },
  {
    name: "contact me",
    id: 3,
    href: "#contact",
    icon: <img src={contact_icon} alt="" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 bg-white transition ease transform duration-300`;

  return (
    <>
      {/* DESKTOP */}
      <div className="lg:flex justify-between hidden bg-[#2C2253] border border-b-[#4BBAC4] border-x-0 border-t-0 py-6 px-[90px]">
        <h3>Christian A.B.</h3>
        <ul className="flex list-none uppercase gap-16">
          {navLinks.map((elem) => (
            <li key={elem.id}>
              <a href={elem.href} className="flex gap-2">
                {elem.name}
                {elem.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE */}
      <div
        className={`flex justify-end gap-[72px] w-screen items-center lg:hidden py-3 px-6 fixed z-30 ${
          isOpen ? "bg-none" : "bg-[#2C2253]"
        }`}
      >
        <h3>Christian A.B.</h3>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "left-0 h-full w-screen" : "left-[-1000px] h-full w-screen"
        } transition-all duration-700 fixed bg-[url('/src/assets/hamburger-bg.png')] bg-cover z-20 pt-48 lg:hidden`}
      >
        <ul className="list-none uppercase gap-16 flex flex-col items-center justify-center">
          {navLinks.map((elem) => (
            <li key={elem.id}>
              <a
                href={elem.href}
                className="flex gap-2"
                onClick={() => setIsOpen(false)}
              >
                {elem.name}
                {elem.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
