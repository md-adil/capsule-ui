import { css } from "@emotion/react";
import { defaultColor, baseColors, type BaseColors } from "./colors.js";
import type { ColorProp, ShadeProp } from "./types.js";
import type { CSSObject } from "@emotion/serialize";

export type Color = ColorProp | `${ColorProp}-${ShadeProp}` | keyof BaseColors;
export type Colors = Record<Color, string>;

function createColor() {
  const labeled: Colors = {} as Colors;
  function setColor(name: string, label: string) {
    labeled[name as Color] = `var(${label})`;
  }
  return [labeled, setColor] as const;
}

export function createLabel(name: string, shade?: number | string) {
  return shade ? `--color-${name}-${shade}` : `--color-${name}`;
}

export function createVariation() {
  const [labeled, setColor] = createColor();

  const colorsStyled: CSSObject = {};

  for (const [name, color] of Object.entries(baseColors)) {
    const label = createLabel(name);
    setColor(name, label);
    colorsStyled[label] = color;
  }

  for (const [name, shades] of Object.entries(defaultColor)) {
    for (const [shade, color] of Object.entries(shades)) {
      const label = createLabel(name, shade);
      setColor(`${name}-${shade}`, label);
      colorsStyled[label] = color;
    }
    setColor(name, createLabel(name, 400));
  }
  return [Object.freeze(labeled), css(colorsStyled)] as const;
}
