import type { ButtonBaseProps } from "./base.js";
import type { PropsWithAdornment, PropsWithClasses } from "../../utils/types.js";
import type { buttonSizes, buttonVariation } from "./variation.js";

export type ButtonVariation = keyof typeof buttonVariation;
export type ButtonSize = keyof typeof buttonSizes;
export interface ButtonProps
  extends ButtonBaseProps,
    PropsWithClasses<"start" | "end" | "content" | "loader", PropsWithAdornment> {
  variant?: ButtonVariation;
  size?: ButtonSize;
  loading?: boolean;
  rounded?: boolean;
  href?: string;
  target?: string;
}
