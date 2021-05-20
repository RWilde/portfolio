import React from "react";
import { ProjectsContainer } from "./styles";
import json from "../../../data.json";
import ProjectSection from "./ProjectSection";
import { Project } from "../../helpers/types";
import { Header } from "../experience/styles";

const Projects = () => {
  const data = json.projects;

  return (
    <ProjectsContainer id="projects" data-testid={"proects"}>
      <Header>Projects</Header>
      {data &&
        data.length > 0 &&
        data.map((item) => <ProjectSection {...(item as Project)} />)}
    </ProjectsContainer>
  );
};

export default Projects;
