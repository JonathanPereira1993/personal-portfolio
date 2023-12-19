import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between align-bottom bg-slate-500 py-8 px-20">
      <div className="relative">
        <h1 className="font-signature align-middle text-2xl">JONATHAN</h1>
        <div className="border border-colorLightGrey absolute right-0 -left-20"></div>
        <p className="absolute -bottom-5 right-0 text-xs">portfolio</p>
      </div>
    </div>
  );
};

export default NavBar;
