import type { ComponentProps } from "react";
import styled from "@emotion/styled";
import { after, background, hover, transition } from "../../theme/theme.js";
import { css } from "@emotion/react";

const decorations = {
  underline: css(after({ bottom: -1 })),
  overline: css(after({ top: 0 })),
  "line-through": css(),
};

export interface BaseProps {
  smooth?: boolean;
  decoration?: keyof typeof decorations;
}
export const TextDecoration = styled.span<BaseProps>(
  { position: "relative" },
  after(background("currentColor"), transition("width", "0.5s", "spring"), {
    position: "absolute",
    width: 0,
    height: 2,
  }),
  hover({ ":after": { width: "100%" } }),
  (props) => decorations[props.decoration!],
);

export type TextDecorationProps = ComponentProps<typeof TextDecoration>;
