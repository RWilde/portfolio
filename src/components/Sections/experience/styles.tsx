import styled, { keyframes } from "styled-components";

export const ExpContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0px auto;
  background: ${({ theme }) => theme.experience};
`;

export const Section = styled.div<{ open?: boolean }>`
  max-width: 1024px;
  margin: auto;
  display: grid;
  grid-template-columns: ${({ open }) => (open ? "1fr 1fr" : "1fr")};
  gap: 60px;
  padding: 0px 30px;
  justify-content: stretch;
  transition: ${({ open }) => (open ? slideIn : slideOut)};

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

const slideIn = keyframes`
    100% { transform: translateX(0%); }
`;

const slideOut = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }`;

export const SectionHeader = styled.div``;

export const Header = styled.h1``;

export const SectionInfo = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "grid" : "none")};
  max-width: 1800px;
  margin: 0px auto;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-self: stretch;
  gap: 8px;
  justify-items: left;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 20px;
  margin: 5px;

  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0px 0px 20px;
  font-style: italic;
  margin: 5px;
  text-align: justify;
`;

export const CheckRow = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  width: auto;
  // height: auto;
  margin: 0.5em;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  padding: 0.5em 1em;
`;

export const More = styled.button`
  width: auto;
`;

export const Skills = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SectionDivider = styled.h2`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-top: 1em;

  &:after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background: ${({ theme }) => theme.hoverBorder};
    min-width: 20px;
    margin: auto;
  }

  &:after {
    margin-left: 20px;
  }
`;
