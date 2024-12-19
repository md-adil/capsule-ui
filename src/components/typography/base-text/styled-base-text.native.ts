import styled from "@emotion/native";
import type { BaseTextVariant, BaseTextWithThemeProps } from "./types.native.js";
import { scale } from "../../../utils/index.native.js";
import { type TextStyle } from "react-native";

const StyledDisplay1: TextStyle = {
  fontSize: scale(36),
  lineHeight: 44,
  fontWeight: "600",
};

const StyledDisplay2: TextStyle = {
  fontSize: scale(36),
  lineHeight: 44,
  fontWeight: "600",
  fontStyle: "italic",
};

const StyledHeader1: TextStyle = {
  fontSize: scale(18),
  lineHeight: 24,
  fontWeight: "500",
};

const StyledHeader2: TextStyle = {
  fontSize: scale(16),
  lineHeight: 20,
  fontWeight: "500",
};

const StyledHeader3: TextStyle = {
  fontSize: scale(14),
  lineHeight: 18,
  fontWeight: "500",
};

const StyledSubHeader1: TextStyle = {
  fontSize: scale(14),
  lineHeight: 18,
  fontWeight: "400",
};

const StyledSubHeader2: TextStyle = {
  fontSize: scale(12),
  lineHeight: 16,
  fontWeight: "400",
  textTransform: "uppercase",
  letterSpacing: 1,
};

const StyledBody1: TextStyle = {
  fontSize: scale(12),
  lineHeight: 14,
  fontWeight: "400",
  letterSpacing: 1,
};

const StyledBody2: TextStyle = {
  fontSize: scale(12),
  lineHeight: 20,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 1,
};

const StyledBody3: TextStyle = {
  fontSize: scale(12),
  lineHeight: 14,
  fontWeight: "400",
  textDecorationLine: "line-through",
  letterSpacing: 1,
};

const StyledLabel1: TextStyle = {
  fontSize: scale(11),
  lineHeight: 12,
  fontWeight: "400",
  letterSpacing: 1,
};

const StyledLabel2: TextStyle = {
  fontSize: scale(11),
  lineHeight: 12,
  fontWeight: "500",
  letterSpacing: 1,
};

const StyledLabel3: TextStyle = {
  fontSize: scale(11),
  lineHeight: 12,
  fontWeight: "400",
  fontStyle: "italic",
  letterSpacing: 1,
};

const StyledLabel4: TextStyle = {
  fontSize: scale(10),
  lineHeight: 12,
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: 1,
};

const variantToStyledTextMapper: Record<BaseTextVariant, TextStyle> = {
  "display-1": StyledDisplay1,
  "display-2": StyledDisplay2,
  "header-1": StyledHeader1,
  "header-2": StyledHeader2,
  "header-3": StyledHeader3,
  "sub-heading-1": StyledSubHeader1,
  "sub-heading-2": StyledSubHeader2,
  "body-1": StyledBody1,
  "body-2": StyledBody2,
  "body-3": StyledBody3,
  "label-1": StyledLabel1,
  "label-2": StyledLabel2,
  "label-3": StyledLabel3,
  "label-4": StyledLabel4,
};

export const StyledBaseText = styled.Text<BaseTextWithThemeProps>((props) => ({
  color: props?.theme.light?.colors?.[props?.color || "black"],
  textAlign: props?.textAlign,
  fontStyle: props?.fontStyle,
  fontFamily: props?.theme?.light?.fonts?.[0]?.typeface || "Rubik",
  textTransform: props?.textTransform,
  ...variantToStyledTextMapper[props.variant || "body-1"],
}));
