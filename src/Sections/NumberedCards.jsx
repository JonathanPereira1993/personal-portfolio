import React from "react";

const NumberedCards = (props) => {
  return (
    <div>
      <span className="text-[116px] text-[#8491A0]">{props.number}</span>
      <div className="flex gap-1 align-middle text-2xl mb-2">
        <span className="text-[#3CC74E]">{props.name}</span>
        <span>{props.work}</span>
      </div>
      <span className="text-base">{props.description}</span>
    </div>
  );
};

export default NumberedCards;
