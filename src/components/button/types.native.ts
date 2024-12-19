import type { ClickHandler } from "../../utils/types.js";

export type BtnType = "primary" | "secondary" | "ghost" | "text";
export type BtnSize = "x-small" | "small" | "medium" | "large";

export interface ButtonProps {
  variant?: BtnType;
  size?: BtnSize;
  disabled?: boolean;
  className?: string;
  label: string;
  onClick: ClickHandler;
}
