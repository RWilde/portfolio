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
  overflow: hidden;
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
  background-color: transparent !important;
  background: none;
  box-shadow: none;
  > span {
    > svg {
      animation: ${spin} 3.5s;

      fill: ${({ theme }) => theme.text};
    }
  }
`;

export const Main = styled.div<{ blurBackground: boolean }>`
  height: 100%;
  width: 100%;

  // ${(props) => props.blurBackground && "filter: blur(2px)"};
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

export const Seperator = styled.div<{ nextColor: string; prevColor: string }>`
  height: 80px;
  overflow: hidden;
  width: 100vh;
  background: ${({ prevColor }) => prevColor};
  > svg {
    fill: ${({ nextColor: color }) => color};
  }
`;

export const WaveContainer = styled.div`
  > svg {
  }
`;
