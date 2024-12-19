import styled from "@emotion/styled";

import { colors, margin, variantToStyledTextMapper, type Color, type TextVariant } from "../../theme/theme.js";
import { type ComponentProps, type CSSProperties } from "react";

export function booleanAttr(val: Record<string, boolean | undefined>) {
  for (const [attr, active] of Object.entries(val)) {
    if (active) return attr;
  }
  return;
}

export interface BaseTextProps {
  align?: CSSProperties["textAlign"];
  transform?: CSSProperties["textTransform"];
  decoration?: CSSProperties["textDecoration"];
  overflow?: CSSProperties["textOverflow"];
  color?: Color;
  bold?: boolean;
  italic?: boolean;
  oblique?: boolean;
}

export const BaseText = styled.span<BaseTextProps>(margin(0), (props) => ({
  color: colors[props.color!],
  textAlign: props.align,
  textDecoration: props.decoration,
  textTransform: props.transform,
  fontStyle: booleanAttr({ italic: props.italic, oblique: props.oblique }),
  fontWeight: booleanAttr({ bold: props.bold }),
  textOverflow: props.overflow,
}));

export interface TextProps extends ComponentProps<typeof BaseText> {
  variant?: TextVariant;
}

const textVariantElements: Partial<Record<TextVariant, keyof JSX.IntrinsicElements>> = {
  "header-1": "h1",
  "header-2": "h2",
  "header-3": "h3",
  "header-4": "h4",
  "sub-heading-1": "p",
  "sub-heading-2": "p",
  "display-1": "h1",
  "label-3": "i",
  "display-2": "em",
};

export function Text({ as, variant, ...props }: TextProps) {
  return (
    <BaseText
      as={as ?? textVariantElements[variant!]}
      css={variantToStyledTextMapper[variant!]}
      data-text={variant}
      {...props}
    />
  );
}
