import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 50vh;
  height: 500px;
  display: flex;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;

  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
`;

export const Close = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`;

export const FindMeText = styled.div``;

export const FindMeLinks = styled.div`
  margin-bottom: 0.5em;
`;
