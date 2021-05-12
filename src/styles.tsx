import styled, { css, keyframes } from "styled-components";
import { Fab } from "@material-ui/core";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AppContainer = styled.div`
  display: block;
  box-sizing: border-box;
  height: 100%;
`;

export const ToggleContainer = styled.div`
  margin: 0;
  top: auto;
  bottom: 0;
  right: 0;
  padding: 10px;
  left: auto;
  position: fixed;
`;

export const ToggleFab = styled(Fab)<{ clicked: boolean }>`
  background: ${({ theme }) => theme.simpleBackground};
  > span {
    > svg {
      ${(props) =>
        props.clicked &&
        css`
          animation: ${spin} 3.5s;
        `}
      fill: ${({ theme }) => theme.text};
    }
  }
`;

export const Main = styled.div<{ blurBackground: boolean }>`
  height: 100%;
  width: 100%;

  ${(props) => props.blurBackground && "filter: blur(2px)"};
`;

export const SocialLinks = styled.a`
  cursor: pointer;
  > svg {
    margin: 5px;
    height: 2em;
    width: 2em;
    fill: ${({ theme }) => theme.text};
  }

  > svg:hover {
    fill: ${({ theme }) => theme.hoverBorder};
  }
`;
