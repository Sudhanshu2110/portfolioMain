import React from "react";
import { Projects } from "../Projects/projects.js";

import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20  dark:bg-gray-900 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => (
            <SingleCard
              image={project.image}
              projectTitle={project.name}
              titleHref={project.links.view}
              viewHref={project.links.view}
              codeHref={project.links.code}
              projectDescription={project.desc}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
