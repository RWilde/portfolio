import React, { Component, useEffect, useState } from "react";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import {
  LeftSection,
  LinksContainer,
  MenuContainer,
  MenuFab,
  MiddleSection,
  NavBarContainer,
  RightSection,
  StyledBurger,
} from "./styles";
import { RiMenuFill } from "react-icons/ri";
import { Fab } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";

type NavBarProps = {
  setDisplayContactMe: () => void;
};

const NavBar = ({ setDisplayContactMe }: NavBarProps) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggleMenu] = useState(false);
  const [showBurger, setShowBurger] = React.useState(window.innerWidth < 850);

  useEffect(() => {
    const handleWindowResize = () => setShowBurger(window.innerWidth < 850);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <NavBarContainer data-testid={"header"} showBurger={showBurger} open={open}>
      <VisibilitySensor
      // onChange={(isVisible) => {
      //   setShowBurger(!isVisible);
      // }}
      >
        <StyledBurger toggle={false} open={open}>
          {showBurger && (
            <MenuFab onClick={() => setOpen(!open)}>
              <Fab>
                <RiMenuFill />
              </Fab>
            </MenuFab>
          )}
          <MenuContainer open={open} showBurger={showBurger}>
            <LeftSection>Rebecca Wilde</LeftSection>
            <MiddleSection>
              <LinksContainer>
                <NavLink title="About" linkTag="about" />
                <NavLink title="Experience" linkTag="#exp" />
                <NavLink title="Projects" linkTag="#projects" />
              </LinksContainer>
            </MiddleSection>
            <RightSection>
              <NavButton title="Contact Me" onClick={setDisplayContactMe} />
              <NavButton title="Download CV" onClick={() => {}} />
            </RightSection>
          </MenuContainer>
        </StyledBurger>
      </VisibilitySensor>
    </NavBarContainer>
  );
};

export default NavBar;
