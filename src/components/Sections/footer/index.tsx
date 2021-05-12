import React, { Component } from "react";
import { FooterContainer, FooterSocials, MadeBy } from "./styles";
import { RiTwitterFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { SocialLinks } from "../../../styles";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer data-testid={"footer"}>
        <FooterSocials>
          <SocialLinks href="https://twitter.com/wilde_becca">
            <RiTwitterFill />
          </SocialLinks>
          <SocialLinks href="https://github.com/RWilde">
            <RiGithubFill />
          </SocialLinks>
          <SocialLinks href="https://uk.linkedin.com/in/rebeccaewilde">
            <RiLinkedinBoxFill />
          </SocialLinks>
        </FooterSocials>
        <MadeBy> Rebecca Wilde 2021 </MadeBy>
      </FooterContainer>
    );
  }
}
