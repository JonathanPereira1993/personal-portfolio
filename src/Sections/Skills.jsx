import React from "react";
import CardIcon from "../Components/CardIcon";

const Skills = () => {
  return (
    <div className="mt-[264px] ml-20 mr-20 grid grid-cols-2  gap-6">
      <div className="min-w-[360px] rox-span-2">
        <h1 className="text-5xl mb-6">Skills</h1>
        <span className="text-lg text-[#8491A0]">
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <CardIcon
          title={"Product Design"}
          description={
            "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
          }
        />
        <CardIcon
          title={"Product Design"}
          description={
            "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
          }
        />
        <CardIcon
          title={"Product Design"}
          description={
            "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
          }
        />
        <CardIcon
          title={"Product Design"}
          description={
            "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
          }
        />
      </div>
    </div>
  );
};

export default Skills;
