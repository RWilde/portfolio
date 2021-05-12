import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 120px;
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.simpleBackground};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FooterSocials = styled.div`
  align-self: center;
  flex-direction: row;
  display: flex;
  padding: 1em;
  flex: 1;
`;

export const MadeBy = styled.div`
  display: flex;
`;
