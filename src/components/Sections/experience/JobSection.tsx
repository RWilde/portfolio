import React, { useState } from "react";
import { Job } from "../../helpers/types";
import {
  Section,
  SectionHeader,
  Skills,
  CheckRow,
  More,
  SectionInfo,
  Text,
  SectionDivider,
} from "./styles";

const JobSection = (job: Job) => {
  const [open, setIsOpen] = useState(false);

  return (
    <Section open={open}>
      <SectionHeader>
        <SectionDivider>{job.title}</SectionDivider>
        <Text>{job.company}</Text>
        <Text>{job.time}</Text>
        <Text>{job.location}</Text>
        <Skills>
          {job.skills &&
            job.skills.length > 0 &&
            job.skills.map((item) => <CheckRow>{item}</CheckRow>)}
        </Skills>
        <Text>{job.about}</Text>
        <More onClick={() => setIsOpen(!open)}>
          {open ? "Heard enough?" : "Want to hear more?"}
        </More>
        {/* <SectionDivider /> */}
      </SectionHeader>
      <SectionInfo open={open}>
        <ul>
          {job.responsibilities &&
            job.responsibilities.length > 0 &&
            job.responsibilities.map((item) => <li>{item}</li>)}
        </ul>
      </SectionInfo>
    </Section>
  );
};

export default JobSection;
