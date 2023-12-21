import React from "react";
import SectionTitle from "../Components/SectionTitle";
import NumberedCards from "./NumberedCards";

function Experience() {
  const clients = [
    {
      id: 1,
      number: "01",
      name: "Fidelidade",
      work: "Frontend Developer",
      description:
        "I currently work with an insurance client, as a Frontend Developer, working with Outsystems.",
    },
    {
      id: 2,
      number: "02",
      name: "Facebook",
      work: "Frontend Developer",
      description:
        "I’ve worked on a wide variety of internal tools for facebook over the past 6 years.",
    },
    {
      id: 3,
      number: "03",
      name: "Dribble",
      work: "Frontend Developer",
      description:
        "I started my design career with Dribbble. I was incharge of creating illustrations for the platform.",
    },
  ];

  return (
    <div className="ml-20 mr-20 mt-[120px] mb-[120px] text-colorWhite">
      <SectionTitle
        topTitle="WORK EXPERIENCE"
        Title="Clients"
        subTitle="Clients I have worked for, with Mediaweb, since 2020"
      />
      <div className="mt-10 grid gap-[60px] grid-cols-3">
        {clients.map(({ id, number, name, work, description }) => (
          <NumberedCards
            key={id}
            number={number}
            name={name}
            work={work}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
