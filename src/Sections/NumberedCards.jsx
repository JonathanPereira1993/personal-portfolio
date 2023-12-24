import React from "react";

const NumberedCards = ({ number, name, work, description, color }) => {
  return (
    <div>
      <span className="text-[116px] text-[#8491A0]">{number}</span>
      <div className="flex gap-1 align-middle text-2xl mb-2">
        <span className={`text-[${color}]`}>{name}</span>
        <span>{work}</span>
      </div>
      <span className="text-base">{description}</span>
    </div>
  );
};

export default NumberedCards;
