import axios from "axios";
import React, { ChangeEventHandler, useState } from "react";
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
};

const ContactForm = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState(false);

  const submitEmail = (e: Event) => {
    console.log(state);
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    setState({ name: "", email: "", message: "" });
  };

  const onNameChange = (event: { target: { value: any } }) => {
    const newState = state;
    newState.name = event.target.value;
    setState(newState);
  };
  const onEmailChange = (event: { target: { value: any } }) => {
    const newState = state;
    newState.email = event.target.value;
    setState(newState);
  };
  const onMsgChange = (event: { target: { value: any } }) => {
    const newState = state;
    newState.message = event.target.value;
    setState(newState);
  };

  return (
    <DetailsContainer>
      <InnerContainer>
        <Header>Contact me</Header>
        <SubHeader>I would love to hear from you!</SubHeader>
        <FormGroup>
          <StyledInput type="text" placeholder="Name" onChange={onNameChange} />
          <StyledInput
            type="email"
            placeholder="Email"
            onChange={onEmailChange}
          />
          <StyledTextArea onChange={onMsgChange} />
          <button type="submit" onClick={(e: any) => submitEmail(e)}>
            Send
          </button>
        </FormGroup>
      </InnerContainer>
    </DetailsContainer>
  );
};

export default ContactForm;
