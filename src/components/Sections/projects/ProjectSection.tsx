import React, { useState } from "react";
import { Project } from "../../helpers/types";
import {
  CheckRow,
  More,
  Section,
  SectionDivider,
  SectionHeader,
  Skills,
  Text,
} from "../experience/styles";

const ProjectSection = (job: Project) => {
  const [open, setIsOpen] = useState(false);

  return (
    <Section open={open}>
      <SectionHeader>
        <SectionDivider>{job.name}</SectionDivider>
        <Skills>
          {job.technologies &&
            job.technologies.length > 0 &&
            job.technologies.map((item) => <CheckRow>{item}</CheckRow>)}
        </Skills>
        <Text>{job.about}</Text>
        <More onClick={() => setIsOpen(!open)}>
          {open ? "Heard enough?" : "Want to hear more?"}
        </More>
      </SectionHeader>
      {/* <SectionInfo open={open}>
        <ul>
          {job.responsibilities &&
            job.responsibilities.length > 0 &&
            job.responsibilities.map((item) => <li>{item}</li>)}
        </ul>
      </SectionInfo> */}
    </Section>
  );
};

export default ProjectSection;
