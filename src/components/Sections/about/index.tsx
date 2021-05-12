import React, { Component } from "react";
import {
  AboutContainer,
  AboutMe,
  Header,
  Skills,
  SubHeader,
  Name,
} from "./styles";

import {
  FaAndroid,
  FaCss3Alt,
  FaDatabase,
  FaGitSquare,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

export default class About extends Component {
  render() {
    return (
      <AboutContainer data-testid={"about"}>
        <Header>
          Hello World, I'm <Name>Rebecca Wilde</Name>
        </Header>
        <SubHeader>
          Full Stack developer with experience in the full lifecycle of Software
          Development, utilising Agile methodlogy.
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
          <FaAndroid />
        </Skills>
      </AboutContainer>
    );
  }
}
