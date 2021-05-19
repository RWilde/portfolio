import React, { useState } from "react";
import {
  DetailsContainer,
  FormGroup,
  Header,
  InnerContainer,
  SubHeader,
  StyledTextArea,
  StyledInput,
} from "./styles";

const initalState = {
  name: "",
  email: "",
  message: "",
  gender: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState(false);
  // const handleSubmit = (e: Event) => {
  //   e.preventDefault();
  //   for (let key in state) {
  //     if (state[key] === '') {
  //       setError(`You must provide the ${key}`)
  //       return
  //     }
  //   }
  //   setError('');
  // }
  //   const handleInput = e => {
  //   const inputName = e.currentTarget.name;
  //   const value = e.currentTarget.value;

  //   setState(prev => ({ ...prev, [inputName]: value }));
  // };

  return (
    <DetailsContainer>
      <InnerContainer>
        <Header>Contact me</Header>
        <SubHeader>I would love to hear from you!</SubHeader>
        <FormGroup>
          <StyledInput type="text" placeholder="Name" />
          <StyledInput type="email" placeholder="Email" />
          <StyledTextArea />
          <button type="submit">Send</button>
        </FormGroup>
      </InnerContainer>
    </DetailsContainer>
  );
};

export default ContactForm;
