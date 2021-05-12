import styled from "styled-components";

export const NavButtonsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const ButtonItem = styled.button`
  height: 100%;
  padding: 0.5em 1.1em;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid ${({ theme }) => theme.border};
  transition: all 220ms ease-in-out;
  border-radius: 10px;
  background: transparent;
  &:hover {
    border: 2px solid ${({ theme }) => theme.hoverBorder};
  }
`;

export const ButtonTag = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
`;
