import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinking = keyframes`
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
`;

export const Container = styled.div``;

export const AboutContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.about};
`;

export const Name = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

export const Header = styled.div`
  width: fit-content;
`;

export const Typing = styled.div`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  letter-spacing: 0.15em;
  font-size: 40px;
  display: flex;
  animation: ${typing} 3.5s steps(40, end), ${blinking} 0.75s step-end infinite;
`;

export const SubHeader = styled.div`
  display: flex;
  text-align: left;
`;

export const AboutMe = styled.div`
  display: flex;
`;

export const Skills = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1em;
  flex-direction: row;

  > svg {
    margin: 1em;
    height: 2em;
    width: 2em;
    &:hover {
      height: 3em;
      width: 3em;
      stroke: ${({ theme }) => theme.hover};
      fill: ${({ theme }) => theme.hover};
    }
  }
`;

export const Contents = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const WaveBackground = styled.div`
  > svg {
    bottom: 0;
    position: absolute;
    left: 0;
    width: 100vh;
  }
`;
