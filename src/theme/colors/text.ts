import type { Dict } from "../../utils/types.js";
import { colors } from "./index.js";
import type { MainColors } from "./types.js";
import type { Color } from "./variation.js";

function colorRange(prefix: keyof MainColors, value: string) {
  const out: Dict = { [prefix]: value };
  out[`${prefix}-100`] = colors[`${prefix}-500`];
  out[`${prefix}-200`] = colors[`${prefix}-600`];
  out[`${prefix}-300`] = value;
  out[`${prefix}-400`] = value;
  out[`${prefix}-500`] = colors[`${prefix}-100`];
  out[`${prefix}-600`] = colors[`${prefix}-200`];
  return out;
}

export const textColors = {
  ...colorRange("primary", colors.white),
  ...colorRange("secondary", colors.white),
  ...colorRange("tertiary", colors["gray-500"]),
  ...colorRange("accent", colors.white),
  ...colorRange("caution", colors.black),
  ...colorRange("info", colors.white),
  ...colorRange("success", colors.white),
  ...colorRange("gray", colors.white),
  ...colorRange("accent", colors.white),
  ...colorRange("error", colors.white),
  black: colors.white,
} as Partial<Record<Color, string>>;
