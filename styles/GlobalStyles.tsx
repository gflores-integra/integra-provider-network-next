import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Montserrat } from "next/font/google";

import { Theme } from "./themes.d";

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  @font-face {
    font-family: Montserrat;
    src: url(Montserrat) format("woff2");
    font-weight: 400;
  }

  html, body {
    font-size: 16px;
  }
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-family: Sailec, sans-serif;
    font-weight: 100;
    background-color: ${({ theme }) => theme.grayscale.white};
  }

  .svg-icon{
      height: 1em;
      fill: currentColor;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  /*
  * Links
  */
  a {
    color: red;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  /*
  * Images and content
  */
  img {
    vertical-align: middle;
    border-style: none; 
  }
`;

export { GlobalStyles };
