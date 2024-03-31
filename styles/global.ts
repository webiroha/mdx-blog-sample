import { css } from "@emotion/react";
import { fontsize } from "./fontsize";

export const global = css`
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font: normal 1em / 2 "Helvetica", "Arial", "Segoe UI", -apple-system,
      BlinkMacSystemFont, Yu Gothic, Segoe UI Emoji, Apple Color Emoji,
      Noto Color Emoji, Noto Emoji, sans-serif;
    text-size-adjust: 100%;
    color: #121212;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body > div {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1 {
    ${fontsize(3.2)}
  }

  h2 {
    ${fontsize(2.8)}
  }

  h3 {
    ${fontsize(2.4)}
  }

  h4 {
    ${fontsize(2.2)}
  }

  h5 {
    ${fontsize(2)}
  }

  ul {
    padding: 0;
    list-style-type: none;
    margin: 0;
  }

  small {
    ${fontsize(1.4)}
  }
`;
