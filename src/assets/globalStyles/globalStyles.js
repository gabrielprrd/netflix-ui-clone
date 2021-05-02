import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after  {
    /* reset */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body {
    width: 100vw;
    background: black;
    color: white;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
