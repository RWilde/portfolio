import React, { Component, useRef } from "react";
import useComponentRef from "../../../hooks/useComponentRef";
import ContactForm from "./ContactForm";
import FindMe from "./FindMe";
import { ContactContainer } from "./styles";

type ContactProps = {
  setDisplayContactMe: () => void;
};

const Contact = ({ setDisplayContactMe }: ContactProps) => {
  const contactRef = useRef<HTMLInputElement>(null);

  useComponentRef(contactRef, setDisplayContactMe);

  return (
    <ContactContainer ref={contactRef} data-testid={"contact"}>
      <ContactForm />
      <FindMe setDisplayContactMe={setDisplayContactMe} />
    </ContactContainer>
  );
};

export default Contact;
