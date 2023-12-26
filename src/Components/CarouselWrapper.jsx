import React from "react";
import CarouselItems from "./CarouselItems";

const CarouselWrapper = () => {
  const technologies = [
    {
      title: "Outsystems",
    },
    {
      title: "React",
    },
    {
      title: "SCSS",
    },
    {
      title: "Javascript",
    },
    {
      title: "CSS",
    },
  ];

  return (
    <div className="mt-[120px] flex justify-between align-middle">
      {technologies.map(({ title }) => (
        <CarouselItems title={title} />
      ))}
    </div>
  );
};

export default CarouselWrapper;
