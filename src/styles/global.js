import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: #fff;
    height: 100vh;
    width: 100vw;

    padding: 2rem 10px;
  }
`;