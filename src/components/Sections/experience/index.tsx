import { ExpContainer, Header } from "./styles";
import JobSection from "./JobSection";
import json from "../../../data.json";
import { Job } from "../../helpers/types";

const Experience = () => {
  const data = json.jobs;

  return (
    <ExpContainer id="exp" data-testid={"experience"}>
      <Header>Experience</Header>
      {data &&
        data.length > 0 &&
        data.map((item) => <JobSection {...(item as Job)} />)}
    </ExpContainer>
  );
};

export default Experience;
