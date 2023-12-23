import React from "react";
import avatar from "../assets/avatar-photo.png";

const MainSection = () => {
  return (
    <div className="pt-20 h-screen">
      <div className="absolute h-screen bg-colorSecondaryLight w-3/5 top-0 right-0"></div>
      <div className="absolute min-w-fit flex align-baseline justify-start pt-12 pl-12 left-0 h-1/2  top-1/2 -translate-y-1/2 w-3/5 bg-[url('/src/assets/Bg-main-section-image.jpg')] object-cover bg-no-repeat">
        <img className="" src={avatar} alt="avatar" />
      </div>
      <div className="text-colorWhite text-7xl ml-[40%] right-0 absolute max-w-[800px] flex flex-col top-[30%] items-start mr-10 leading-tight">
        <h1 className="">
          I’m Jonathan. <br /> A frontend developer
        </h1>
        <h1 className="text-[#8c8c96]">based in Portugal.</h1>
        <p className="text-lg mt-20">
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
