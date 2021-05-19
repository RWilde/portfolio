import React, { useEffect } from "react";
import useComponentRef from "../../../hooks/useComponentRef";
import { SocialLinks } from "../../../styles";
import ContactForm from "./ContactForm";
import { Close, ContactContainer, FindMeLinks, FindMeText } from "./styles";
import {
  RiCloseFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

type ContactProps = {
  setDisplayContactMe: () => void;
};

const Contact = ({ setDisplayContactMe }: ContactProps) => {
  const contactRef = React.useRef<HTMLDivElement>(null);

  useComponentRef(contactRef, setDisplayContactMe);

  useEffect(() => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <ContactContainer ref={contactRef} data-testid={"contact"}>
      <ContactForm />
      <Close>
        <SocialLinks onClick={setDisplayContactMe}>
          <RiCloseFill />
        </SocialLinks>
      </Close>
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
    </ContactContainer>
  );
};

export default Contact;
