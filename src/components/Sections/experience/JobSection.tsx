import React, { useRef, useState } from "react";
import useFadeIn from "../../../hooks/useFadeIn";
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
  // const ref = useRef<HTMLInputElement | null>(null);
  // const [isVisible] = useFadeIn(ref);

  const SectionGrid = () => {
    return (
      <SectionInfo open={open}>
        <ul>
          {job.responsibilities &&
            job.responsibilities.length > 0 &&
            job.responsibilities.map((item) => <li>{item}</li>)}
        </ul>
      </SectionInfo>
    );
  };

  return (
    <Section isVisible={true} open={open}>
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
      <SectionGrid />
    </Section>
  );
};

export default JobSection;
