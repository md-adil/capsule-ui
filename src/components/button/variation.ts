import { css } from "@emotion/react";
import { background, disabled, focus, hover, outline, padding, radius, text, underline } from "../../theme/theme.js";

export const buttonVariation = {
  primary: css(
    background("primary"),
    text("white"),
    hover(background("primary-500")),
    disabled(background("gray-300")),
  ),
  secondary: css(
    text("primary"),
    outline(1, "primary-400"),
    disabled(outline(1, "gray-300"), text("gray-300")),
    focus(outline(2, "primary-400")),
  ),
  ghost: css(
    hover(background("primary-100"), text("primary")),
    text("primary"),
    focus(outline(1, "primary")),
    disabled(hover(background("transparent")), text("gray-300")),
  ),
  text: css(text("primary-400", "body-2"), disabled(text("gray-300"))),
  link: css(text("primary-400", "body-2"), underline(), disabled(text("gray-300"))),
};

export const buttonSizes = {
  small: css(radius(1), padding(0.75, 2.75), text("body-2")),
  medium: css(radius(2), padding(2.5, 2.75), text("header-4")),
  large: css(radius(2), text("header-4"), padding(3.5, 2.75)),
};
