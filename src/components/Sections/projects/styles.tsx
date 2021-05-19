import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0px auto;
  background: ${({ theme }) => theme.projects};
`;

export const ProjectInfo = styled.div`
  display: grid;
  gap: 20px;
`;

export const ProjectTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

export const ProjectDetail = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0px 0px 20px;
  color: rgba(0, 0, 0, 0.7);
`;

export const TextRow = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const ProjectCheckmark = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  width: 32px;
  height: 32px;
  margin: 0px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  border-radius: 50px;
  padding: 4px;
`;

export const ProjectRight = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  max-width: 400px;
  min-width: 150px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  height: fit-content;
`;
