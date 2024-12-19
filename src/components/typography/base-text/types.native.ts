import { type OutputThemeProps } from "../../../theme/types.native.js";

export type BaseTextProps = {
  color?: BaseTextColorVariant;
  fontFamily?: string;
  fontSize?: string | number | number;
  fontWeight?: string | number;
  fontStyle?: "normal" | "italic";
  textDecorationLine?: "line-through" | "none" | "underline";
  lineHeight?: string | number;
  textAlign?: BaseTextAlignVariant;
  children: React.ReactNode;
  textTransform?: BaseTextTransformVariant;
  numberOfLines?: number;
  variant?: BaseTextVariant;
};

export type BaseTextTransformVariant = "none" | "capitalize" | "uppercase" | "lowercase";

export type BaseTextAlignVariant = "center" | "justify" | "left" | "right";

export type BaseTextColorVariant =
  | "primary100"
  | "primary200"
  | "primary300"
  | "primary400"
  | "primary500"
  | "primary600"
  | "secondary100"
  | "secondary200"
  | "secondary300"
  | "secondary400"
  | "secondary500"
  | "secondary600"
  | "tertiary100"
  | "tertiary200"
  | "tertiary300"
  | "tertiary400"
  | "tertiary500"
  | "tertiary600"
  | "accent100"
  | "accent200"
  | "accent300"
  | "accent400"
  | "accent500"
  | "accent600"
  | "success100"
  | "success200"
  | "success300"
  | "success400"
  | "success500"
  | "success600"
  | "caution100"
  | "caution200"
  | "caution300"
  | "caution400"
  | "caution500"
  | "caution600"
  | "info100"
  | "info200"
  | "info300"
  | "info400"
  | "info500"
  | "info600"
  | "error100"
  | "error200"
  | "error300"
  | "error400"
  | "error500"
  | "error600"
  | "gray100"
  | "gray200"
  | "gray300"
  | "gray400"
  | "gray500"
  | "gray600"
  | "white"
  | "black";

export type BaseTextVariant =
  | "display-1"
  | "display-2"
  | "header-1"
  | "header-2"
  | "header-3"
  | "sub-heading-1"
  | "sub-heading-2"
  | "body-1"
  | "body-2"
  | "body-3"
  | "label-1"
  | "label-2"
  | "label-3"
  | "label-4";

export type BaseTextWithThemeProps = BaseTextProps & {
  theme?: OutputThemeProps;
};
