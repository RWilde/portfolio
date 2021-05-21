import React, { useState } from "react";
import { Project } from "../../helpers/types";
import {
  CheckRow,
  More,
  Section,
  SectionDivider,
  SectionHeader,
  SectionInfo,
  Skills,
  Text,
} from "../experience/styles";

const ProjectSection = (project: Project) => {
  const [open, setIsOpen] = useState(false);

  return (
    <Section open={open}>
      <SectionHeader>
        <SectionDivider>{project.name}</SectionDivider>
        <Skills>
          {project.technologies &&
            project.technologies.length > 0 &&
            project.technologies.map((item) => <CheckRow>{item}</CheckRow>)}
        </Skills>
        <Text>{project.about}</Text>
        <More onClick={() => setIsOpen(!open)}>
          {open ? "Heard enough?" : "Want to hear more?"}
        </More>
      </SectionHeader>
      <SectionInfo open={open}>
        <ul>
          {project.responsibilities &&
            project.responsibilities.length > 0 &&
            project.responsibilities.map((item) => <li>{item}</li>)}
        </ul>
      </SectionInfo>
    </Section>
  );
};

export default ProjectSection;
