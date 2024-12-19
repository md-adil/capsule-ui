import { css } from "@emotion/react";
import { colors } from "../colors/index.js";
import { config } from "../theme.js";

export const reset = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
    border: 0 solid ${config.border.color};
  }

  fieldset {
    border-width: 1px;
  }

  body {
    font-family: Rubik;
    font-size: 0.875rem;
    color: ${colors["gray-500"]};
  }

  button {
    background-color: transparent;
    padding: 0;
    outline: none;
    font-family: inherit;
  }
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
  }
`;
