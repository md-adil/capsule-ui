import { forwardRef, type ComponentProps } from "react";
import { Ripple, type RippleProps } from "../ripple/index.js";

import styled, { type CSSObject } from "@emotion/styled";
import { yes } from "../../utils/helpers.js";

export const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  font-size: inherit;
`;

export interface ButtonBaseProps extends ComponentProps<typeof StyledButton> {
  ripple?: RippleProps | false;
  cursor?: CSSObject["cursor"];
}
export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(function ButtonBase(
  { children, ripple = {}, cursor, disabled, ...props },
  ref,
) {
  if (disabled) {
    ripple = false;
  }
  return (
    <StyledButton
      type={yes.no(props.as, "button")}
      {...props}
      disabled={disabled}
      css={[cursor && { cursor }]}
      ref={ref}
    >
      {children}
      {ripple !== false && <Ripple {...ripple} />}
    </StyledButton>
  );
});
