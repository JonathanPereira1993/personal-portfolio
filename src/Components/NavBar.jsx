import React from "react";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "Experience",
    },
    {
      id: 2,
      link: "Work",
    },
    {
      id: 3,
      link: "Photography",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between align-bottom bg-slate-500 px-20 fixed w-full z-50">
      <div className="relative">
        <h1 className="font-signature pt-8 align-middle text-2xl text-colorWhite">
          JONATHAN
        </h1>
        <div className="border border-colorLightGrey absolute right-2 -left-20 opacity-40"></div>
        <p className="absolute my-2 mr-2 bottom right-0 text-xs text-colorLightGrey opacity-60">
          portfolio
        </p>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-colorWhite px-6 py-8 hover:bg-colorPrimary h-full cursor-pointer duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
