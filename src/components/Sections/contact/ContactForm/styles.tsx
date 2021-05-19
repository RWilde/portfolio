import { Input } from "@material-ui/core";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

export const Header = styled.h1`
  margin: 0;
  color: #262fec;
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.textHeader};
`;

export const SubHeader = styled.h3`
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 24px;
`;

export const Text = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  position: relative;
  margin-top: 1em;
  flex-direction: column;

  > input,
  > textarea,
  > button {
    outline: none;
    border: none;
    padding: 0.5em 1.5em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(12px);
    box-shadow: 0 13px 21px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    margin: 5px;
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.text};
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const StyledTextArea = styled.textarea`
  color: ${({ theme }) => theme.text};
  min-height: 100px;
  resize: none;
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

