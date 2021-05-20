import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

  ul{
    margin: 0;
    text-align: justify;
    padding-inline-start: 10px;
    > li {
      padding: 5px 0;
    }
  }

  input,
  textarea,
  button {
    outline: none;
    border: 1px solid transparent;
    padding: 0.5em 1.5em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(12px);
    box-shadow: 0 13px 21px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    margin: 5px;
    width: 100%;
    color: ${({ theme }) => theme.text}
  }

  button {
    &:hover {
      border: 1px solid ${({ theme }) => theme.hoverBorder};
    }  
  }
`;
