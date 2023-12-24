import React from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const CardIcon = ({ icon, title, description }) => {
  return (
    <div>
      <div className="text-[#5221E6] mb-6">
        <FaAssistiveListeningSystems size={"32px"} />
      </div>
      <h2 className="text-2xl font-bold mb-[12px]">{title}</h2>
      <span className="text-[#8491A0] text-base">{description}</span>
    </div>
  );
};

export default CardIcon;
