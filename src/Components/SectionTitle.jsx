import React from "react";

function SectionTitle(props) {
  return (
    <div className="">
      <p className="text-base mb-2 text-[#8491A0]">{props.topTitle}</p>
      <h1 className="text-colorWhite text-6xl">{props.Title}</h1>
      <p className="text-lg mt-2 text-[#8491A0]">{props.subTitle}</p>
    </div>
  );
}

export default SectionTitle;
