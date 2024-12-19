import { createVariation } from "./variation.js";
import type { Colors, Color } from "./variation.js";

export type { Colors, Color };

export const [colors, colorStyles] = createVariation();
