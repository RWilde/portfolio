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
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: ${(props) => (props.showBurger && !props.open ? "none" : "flex")};
  align-items: center;
  padding: 0 1rem;
  backdrop-filter: blur(5px);
  animation: ${(props) => (props.showBurger && !props.open ? fadeOut : fadeIn)}
    0.5s linear;
  z-index: 10;
  height: 60px;
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
  top: 5px;
  right: 5px;
  padding: 10px;
  left: auto;
  position: fixed;
`;

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateY(0)
  }
  to {
    transform: translateY(100%)
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  cursor: auto;

  @media (max-width: 575px) {
    width: 100%;
  }

  > a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  > a:hover {
    color: ${({ theme }) => theme.hover};
  }

  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0.5rem;
  left: 1rem;
  cursor: pointer;
  z-index: 10;

  > svg {
    height: 2em;
    width: 2em;
  }
  > svg:hover {
    fill: ${({ theme }) => theme.hoverBorder};
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid ${({ theme }) => theme.hoverBorder};
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
`;