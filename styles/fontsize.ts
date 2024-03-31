import { css } from "@emotion/react";

export const fontsize = (size:number) => css`
  font-size: ${size}rem;

  @media (max-width: 750px) {
    font-size: calc(${size}rem + 0.2rem);
  }
`;
