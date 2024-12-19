import { colors, type Color } from "../theme/colors/index.js";

export function isColor(val: string): val is Color {
  return val[0] === "#";
}

export function isColorVariant(val: string): val is Color {
  return val in colors;
}
