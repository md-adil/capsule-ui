import styled from "@emotion/styled";
import type { ButtonProps, ButtonVariation } from "./types.js";
import { ButtonBase } from "./base.js";
import { colors, margin, radius, transition, gap, spacing, flex, disabled } from "../../theme/theme.js";
import { Spinner } from "../spinner/spinner.js";
import { Text } from "../typography/text.js";
import { buttonSizes, buttonVariation } from "./variation.js";
import { forwardRef } from "react";

export type { ButtonVariation as BtnType, ButtonProps };

const StyledButton = styled(ButtonBase)(
  gap(1),
  flex.inline("center"),
  transition(),
  disabled.not({ cursor: "pointer" }),
  {
    minWidth: spacing(21),
  },
);

const Adornment = styled.span`
  display: inline-flex;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size = "medium", variant = "primary", ripple = {}, classes = {}, rounded, end, start, loading, ...props },
  ref,
) {
  if (ripple !== false && !ripple.color) {
    if (variant === "ghost") {
      ripple.color = "#fff";
    }
    if (variant === "secondary") {
      ripple.color = colors["primary-200"];
    }
  }
  return (
    <StyledButton
      ref={ref}
      {...props}
      ripple={ripple}
      data-name="button"
      css={[buttonVariation[variant], buttonSizes[size], rounded && radius(10)]}
    >
      {start && <Adornment className={classes.start}>{start}</Adornment>}
      <Text className={classes.end}>{props.children}</Text>
      {end && <Adornment className={classes.end}>{end}</Adornment>}
      {loading && <Spinner className={classes.loader} css={margin.left(1)} />}
    </StyledButton>
  );
});
