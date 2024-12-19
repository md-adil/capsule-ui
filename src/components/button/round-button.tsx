import { forwardRef } from "react";
import { circle, flex, padding, type Unit } from "../../theme/theme.js";
import { ButtonBase, type ButtonBaseProps } from "./base.js";
import type { ButtonSize, ButtonVariation, ButtonProps } from "./types.js";
import type { PropsWithClasses } from "../../utils/types.js";
import { buttonVariation } from "./variation.js";

const sizeChart: Record<Required<ButtonProps>["size"], Unit> = {
  small: 4,
  medium: 8,
  large: 12,
};

export interface RoundButtonProps extends ButtonBaseProps, PropsWithClasses<"content"> {
  variant?: ButtonVariation;
  size?: ButtonSize;
}
export const RoundButton = forwardRef<HTMLButtonElement, RoundButtonProps>(function RoundButton(
  { size = "medium", children, disabled, variant = "primary", classes = {}, ...props },
  ref,
) {
  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      ref={ref}
      css={[
        { label: "btn_round", overflow: "hidden" },
        flex.inline("center"),
        padding(1),
        circle(sizeChart[size]),
        buttonVariation[variant],
      ]}
    >
      {children}
    </ButtonBase>
  );
});
