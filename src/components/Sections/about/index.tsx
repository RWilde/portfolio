import React from "react";
import {
  AboutContainer,
  AboutMe,
  Header,
  Skills,
  SubHeader,
  Name,
  Typing,
  Contents,
  WaveBackground,
  Container,
} from "./styles";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitSquare,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { HeaderWave } from "../..";

const About = () => {
  return (
    <Container>
      <AboutContainer id="about" data-testid={"about"}>
        <Contents>
          <Header>
            <Typing>
              Hello World, I'm <Name>Rebecca Wilde</Name>
            </Typing>
          </Header>
          <SubHeader>
            Full Stack developer with experience in the full lifecycle of
            Software Development, utilising Agile methodlogy.
            <br />
          </SubHeader>
          <AboutMe>
            Professional experience with Java E-Commerce and React.{" "}
          </AboutMe>
          <Skills>
            <FaJava />
            <FaReact />
            <FaDatabase />
            <FaGitSquare />
            <FaNodeJs />
            <FaHtml5 />
            <FaCss3Alt />
          </Skills>
        </Contents>
        <WaveBackground>
          <HeaderWave />
        </WaveBackground>
      </AboutContainer>
    </Container>
  );
};

export default About;
