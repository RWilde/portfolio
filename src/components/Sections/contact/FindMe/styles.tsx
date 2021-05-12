import styled from "styled-components";

export const FindMeContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  position: relative;
  background: rgb(148, 147, 247);
  background: linear-gradient(
    217deg,
    rgba(148, 147, 247, 1) 0%,
    rgba(210, 194, 221, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FindMeText = styled.div``;

export const FindMeLinks = styled.div``;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
