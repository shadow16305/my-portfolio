import React from "react";

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

const Footer = () => {
  return (
    <>
      <div className="flex justify-between flex-col items-center lg:flex-row border border-t-[#4BBAC4] border-x-0 border-b-0 py-6 px-[90px] gap-16 lg:gap-0 mt-48">
        <h3>Christian A.B.</h3>
        <ul className="flex flex-col items-center lg:flex-row list-none uppercase gap-16">
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
    </>
  );
};

export default Footer;
