import React from "react";
import { StyledButton, ButtonTag, NavButtonsContainer } from "./styles";

type NavButtonProps = {
  title: string;
  onClick: () => void;
};

const NavButton = ({ title, onClick }: NavButtonProps) => {
  return (
    <NavButtonsContainer>
      <StyledButton onClick={onClick}>
        <ButtonTag>{title}</ButtonTag>
      </StyledButton>
    </NavButtonsContainer>
  );
};

export default NavButton;
