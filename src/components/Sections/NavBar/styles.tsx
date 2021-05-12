import { Fab } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

export const NavBarContainer = styled.header<{
  showBurger: boolean;
  open: boolean;
}>``;

export const MenuContainer = styled.nav<{
  showBurger: boolean;
  open: boolean;
}>`
  width: 100%;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.showBurger && !props.open ? "none" : "flex")};
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const LeftSection = styled.div`
  display: flex;
  width: 33%;
  flex: 1;
  justify-content: flex-start;
`;

export const MiddleSection = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  width: 33%;
`;

export const RightSection = styled.div`
  display: flex;
  width: auto;
  flex: 1;
  justify-content: flex-end;
`;

export const LinksContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

export const MenuFab = styled.div`
  margin: 0;
  top: 0;
  right: 0;
  padding: 10px;
  left: auto;
  position: absolute;
`;

export const StyledBurger = styled.div<{ open: boolean; toggle: boolean }>`
  width: 100%;
  // width: 2rem;
  // height: 2rem;
  // position: fixed;
  // top: 15px;
  // right: 20px;
  // z-index: 20;
  // display: flex;
  // @media (max-width: 768px) {
  //   display: flex;
  //   justify-content: space-around;
  //   flex-flow: column nowrap;
  // }
`;

const appear = keyframes`{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const slideIn = `{
  0% {
    transform: translateX(-2%);
  }
  100% {
    transform: translateX(0);
  }
}`;

const shrink = `{
  0% {
    width: 95%;
  }
  100% {
    width: 90%;
  }
}`;
