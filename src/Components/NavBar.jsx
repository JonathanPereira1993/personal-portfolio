import React, { useEffect, useState } from "react";

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

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 150)
      );
    }
  }, []);

  return (
    <div
      className={`flex justify-between bg-slate-500 px-20 fixed w-full z-50 ${
        small ? "bg-[#181823] transition-all duration-500 shadow-md" : ""
      }`}
    >
      <div className="relative">
        <h1
          className={`font-signature pt-8 align-middle text-2xl text-colorWhite ${
            small ? "transition-all duration-500 pt-5" : ""
          }`}
        >
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
