import React from "react";
import { StyledButton, ButtonTag, NavButtonsContainer } from "./styles";

type NavButtonProps = {
  title: string;
  onClick?: () => void;
  href?: string;
};

const NavButton = ({ title, onClick, href }: NavButtonProps) => {
  return (
    <NavButtonsContainer>
      <StyledButton onClick={onClick}>
        <ButtonTag href={href} download>
          {title}
        </ButtonTag>
      </StyledButton>
    </NavButtonsContainer>
  );
};

export default NavButton;
