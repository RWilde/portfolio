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
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  margin: 5px;
  padding-left: 1.5em;
  padding-right: 3em;
  border-radius: 17px;
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background: transparent;
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const Message = styled.textarea`
  outline: none;
  color: ${({ theme }) => theme.text};
  background: transparent;
  width: 100%;
  min-height: 100px;
  resize: none;
  padding-left: 1.5em;
  padding-right: 3em;
  border-radius: 17px;
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 16px;
  height: 100%;
  margib: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const SendButton = styled.button`
  width: 50%;
  margin: auto;
  margin-right: 0;
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
