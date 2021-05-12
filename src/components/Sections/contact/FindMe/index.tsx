import React, { Component } from "react";
import { Close, FindMeContainer, FindMeLinks, FindMeText } from "./styles";
import {
  RiCloseFill,
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { SocialLinks } from "../../../../styles";

type FindMeProps = {
  setDisplayContactMe: () => void;
};

const FindMe = ({ setDisplayContactMe }: FindMeProps) => {
  return (
    <FindMeContainer>
      <FindMeText>You can also find me here! </FindMeText>
      <FindMeLinks>
        <SocialLinks href="https://twitter.com/wilde_becca">
          <RiTwitterFill />
        </SocialLinks>
        <SocialLinks href="https://github.com/RWilde">
          <RiGithubFill />
        </SocialLinks>
        <SocialLinks href="https://uk.linkedin.com/in/rebeccaewilde">
          <RiLinkedinBoxFill />
        </SocialLinks>
      </FindMeLinks>
      <Close>
        <SocialLinks onClick={setDisplayContactMe}>
          <RiCloseFill />
        </SocialLinks>
      </Close>
    </FindMeContainer>
  );
};

export default FindMe;
