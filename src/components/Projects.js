import React from "react";
import { projectsData } from "../ResumeData";
import Title from "./Shared/Title";
const Projects = () => {
  return (
    <section className="project section" id="projects">
      <Title title={projectsData.title}></Title>
      <div className="certificate__container bd-grid">
        {projectsData.projects.map((project, i) => (
          <div className="project__content" key={i}>
            <h3 className="projecte__title">{project.title}</h3>
            <p className="project__description">{project.describe}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;