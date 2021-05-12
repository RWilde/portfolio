import styled from "styled-components";

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
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

export const LinkTag = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
`;
