import React from "react";

const SectionTitle = ({ topTitle, Title, subTitle }) => {
  return (
    <div>
      <p className="text-base mb-2 text-[#8491A0]">{topTitle}</p>
      <h1 className="text-colorWhite text-6xl">{Title}</h1>
      <p className="text-lg mt-2 text-[#8491A0]">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
