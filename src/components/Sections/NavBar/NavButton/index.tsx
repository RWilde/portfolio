import React from "react";
import { ButtonItem, ButtonTag, NavButtonsContainer } from "./styles";

type NavButtonProps = {
  title: string;
  onClick: () => void;
};

const NavButton = ({ title, onClick }: NavButtonProps) => {
  return (
    <NavButtonsContainer>
      <ButtonItem onClick={onClick}>
        <ButtonTag>{title}</ButtonTag>
      </ButtonItem>
    </NavButtonsContainer>
  );
};

export default NavButton;
