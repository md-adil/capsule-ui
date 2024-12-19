import { css, Global } from "@emotion/react";
import { colorStyles, type Colors } from "../colors/index.js";
import { createLabel } from "../colors/variation.js";
import { reset } from "./reset.css.js";
import { memo } from "react";
import type { ColorProp, ShadeProp } from "../colors/types.js";
import type { BaseColors } from "../colors/colors.js";

const baseStyles = [reset, { body: colorStyles }];

type Color = `${ColorProp}-${ShadeProp}` | keyof BaseColors;
interface CardStyle {
  padding?: string;
  header?: {
    color?: string;
    background?: string;
  };
}
export interface StyleProps {
  colors?: Partial<Record<Color, string>>;
  card?: CardStyle;
}

export const Styles = memo<StyleProps>(function Styles({ colors, card }) {
  return (
    <Global
      key="css-colors"
      styles={css(baseStyles, { body: [colors && labeledColor(colors), card && createVariable(card, "--card")] })}
    />
  );
});

export function labeledColor(colors: Partial<Colors>) {
  return Object.fromEntries(Object.entries(colors).map(([name, value]) => [createLabel(name), value]));
}

function createVariable<T extends Object>(
  obj: T,
  parentKey = "",
  result: Record<string, any> = {},
): Record<string, string> {
  Object.keys(obj).forEach((key) => {
    const newKey = parentKey ? `${parentKey}-${key}` : key;
    const value = (obj as T)[key as keyof T];
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      createVariable(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });
  return result;
}
