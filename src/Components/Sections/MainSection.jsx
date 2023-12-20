import React from "react";
import avatar from "../../assets/avatar-photo.png";

const MainSection = () => {
  return (
    <div className="pt-20 h-screen">
      <div className="absolute h-screen bg-colorSecondaryLight w-3/5 top-0 right-0"></div>
      <div className="absolute flex align-baseline justify-center left-0 h-1/2  top-1/2 -translate-y-1/2 w-3/5 bg-[url('/src/assets/Bg-main-section-image.jpg')] object-cover">
        <img className="max-w-[500px] " src={avatar} alt="avatar" />
      </div>
      <h1 className="text-colorWhite text-center">MainSection</h1>
    </div>
  );
};

export default MainSection;
