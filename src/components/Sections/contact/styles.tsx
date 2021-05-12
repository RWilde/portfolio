import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.simpleBackground};
  backdrop-filter: blur(20px);

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;

export const Close = styled.div``;
