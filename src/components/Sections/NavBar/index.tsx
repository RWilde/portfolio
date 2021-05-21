import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import {
  LeftSection,
  LinkItem,
  LinksContainer,
  LinkTag,
  MenuContainer,
  MiddleSection,
  RightSection,
  StyledBurger,
  StyledMenu,
} from "./styles";
import { TiThMenu } from "react-icons/ti";
import useWindowResize from "../../../hooks/useWindowResize";
import useScrollPosition from "../../../hooks/useScrollPosition";
import useComponentRef from "../../../hooks/useComponentRef";
import { RiCloseFill } from "react-icons/ri";
import { SocialLinks } from "../../../styles";
import { Close } from "../contact/styles";

type NavBarProps = {
  setDisplayContactMe: () => void;
};

const MINIMUM_SCROLL = 80;
const TIMEOUT_DELAY = 400;

const NavBar = ({ setDisplayContactMe }: NavBarProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [isSmallWindow] = useWindowResize();

  // useComponentRef(ref, setOpen);

  useScrollPosition((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setTimeout(() => {
      setShowBurger(isScrolledDown);
    }, TIMEOUT_DELAY);
  });

  useEffect(() => {
    if (!showBurger) {
      setOpen(false);
    }
  }, [showBurger]);

  const openContactMe = () => {
    setOpen(false);
    setDisplayContactMe();
  };

  const headerBar = () => {
    return (
      <MenuContainer open={open} showBurger={Boolean(showBurger)}>
        <LeftSection>Rebecca Wilde</LeftSection>
        <MiddleSection>
          <LinksContainer>
            {link("About", "#about")}
            {link("Experience", "#exp")}
            {link("Projects", "#projects")}
          </LinksContainer>
        </MiddleSection>
        <RightSection>
          <NavButton title="Contact Me" onClick={setDisplayContactMe} />
          <NavButton title="Download CV" href="./RebeccaWilde-CV.pdf" />
        </RightSection>
      </MenuContainer>
    );
  };

  const menu = () => {
    return (
      <StyledMenu open={open} ref={ref}>
        <Close>
          <SocialLinks onClick={() => setOpen(false)}>
            <RiCloseFill />
          </SocialLinks>
        </Close>
        <a href="#about">About</a>
        <a href="#exp">Experience</a>
        <a href="#projects">Projects</a>
        <a onClick={openContactMe}>Contact me</a>
        <a href="./RebeccaWilde-CV.pdf" download="RebeccaWilde-CV.pdf">
          Download CV
        </a>
      </StyledMenu>
    );
  };

  const link = (title: string, linkTag: string) => {
    return (
      <LinkItem>
        <LinkTag href={linkTag}>{title}</LinkTag>
      </LinkItem>
    );
  };

  return (
    <div>
      {(showBurger || isSmallWindow) && (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <TiThMenu />
        </StyledBurger>
      )}

      {showBurger || isSmallWindow ? menu() : headerBar()}
    </div>
  );
};

export default NavBar;
