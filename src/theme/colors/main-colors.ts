import { defaultColor } from "./colors.js";
import { colors, type Color } from "./index.js";

export const mainColors = Object.fromEntries(
  Object.entries(defaultColor).map(([name]) => [name, colors[name as Color]]),
);
