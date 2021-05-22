import axios from "axios";
import React, { ChangeEventHandler, useState } from "react";
import Message from "../../Landing/Message";
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
  const [data, setData] = useState(initalState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const submitEmail = (e: Event) => {
    e.preventDefault();
    if (
      data.email.length < 1 ||
      data.message.length < 1 ||
      data.name.length < 1
    ) {
      setError(true);
      setMessage(
        "Looks like we're missing some information - please fill in everything :)"
      );
    } else {
      axios
        .post("/api/sendmail", data)
        .then((res) => {
          setShowForm(false);
          if (res.data.result !== "success") {
            setMessage(
              "Looks like something went wrong - please reach out to me via the links below :)"
            );
          } else {
            setMessage(
              "Thanks for getting in touch - I'll get back to you soon!"
            );
          }
        })
        .catch((err) => {
          setMessage(
            "Looks like something went wrong - please reach out to me via the links below :)"
          );
        });
    }
  };

  const resetForm = () => {
    setData(initalState);
  };

  return (
    <DetailsContainer>
      <InnerContainer>
        <Header>Contact me</Header>
        {showForm ? (
          <>
            <SubHeader>I would love to hear from you!</SubHeader>
            <FormGroup>
              <StyledInput
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
              <StyledInput
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
              <StyledTextArea name="message" onChange={handleChange} required />
              {message.length > 0 && <div>{message}</div>}
              <button type="submit" onClick={(e: any) => submitEmail(e)}>
                Send
              </button>
            </FormGroup>
          </>
        ) : (
          <SubHeader>{message}</SubHeader>
        )}
      </InnerContainer>
    </DetailsContainer>
  );
};

export default ContactForm;
