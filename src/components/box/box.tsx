import styled, { type CSSObject } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import {
  border,
  colors,
  spacing,
  text,
  type Color,
  type Spacing,
  type TextVariant,
  type Unit,
} from "../../theme/theme.js";
import { pick } from "lodash-es";
import type { ComponentProps } from "react";
import type { CSSProperties } from "@emotion/serialize";
import type { ArrayItem } from "../../utils/types.js";
import { ensureArray } from "../../utils/iterator.js";

type CSSPropNames = keyof CSSProperties;

const nativeStyleProps = ["position", "overflow", "display"] satisfies CSSPropNames[];

const unitProps = ["padding", "margin", "height", "width"] as const;
const colorProps = ["background", "color"] as const;

type UnitProps = {
  [K in ArrayItem<typeof unitProps>]?: Unit | Unit[];
};
type ColorProps = {
  [K in ArrayItem<typeof colorProps>]?: Color;
};
interface BoxPropsBase extends Pick<CSSObject, ArrayItem<typeof nativeStyleProps>>, UnitProps, ColorProps {
  text?: TextVariant;
  border?: number;
}

export const Box = styled("div", {
  shouldForwardProp: (props) => isPropValid(props),
})<BoxPropsBase>((props) => [
  props.text && text(props.text),
  props.border && border(props.border),
  unitProps.map((x) => props[x] && { [x]: spacing(...(ensureArray(props[x]) as Spacing)) }),
  colorProps.map((x) => props[x] && { [x]: colors[props[x]] }),
  pick(props, ...nativeStyleProps),
]);

Box.displayName = "Box";
export type BoxProps = ComponentProps<typeof Box>;
