import { css, keyframes, type CSSObject, type SerializedStyles } from "@emotion/react";
import type { CSSInterpolation } from "@emotion/serialize";
import { colors, type Color } from "./colors/index.js";
import type { Axis, Dict, Edge, Side, TableAxis } from "../utils/types.js";
import { ensureArray } from "../utils/iterator.js";
import { isColorVariant } from "../utils/colors.js";
import { isNumber } from "../utils/primitive.js";

import type { CSSPercent, CSSPropertyNames, CSSVar, GlobalValues } from "./types.js";

import { edgesReversed } from "./edges.js";
import { textColors } from "./colors/text.js";

import { createSpacing, type Spacing, type Unit } from "./spacing.js";

export type { CSSPercent, CSSPropertyNames, CSSVar };
export type { Spacing, Unit };

export { colors };

export const config = {
  factor: 0.25,
  unit: "rem",
  padding: 4,
  margin: 4,
  inset: 4,
  border: {
    width: 1,
    radius: 2,
    color: colors["accent-100"],
  },
} as const;

export const spacing = createSpacing(config.factor, config.unit);

export const screens = {
  sm: spacing(160),
  // => @media (min-width: 640px) { ... }

  md: spacing(192),
  // => @media (min-width: 768px) { ... }

  lg: spacing(256),
  // => @media (min-width: 1024px) { ... }

  xl: spacing(320),
  // => @media (min-width: 1280px) { ... }

  "2xl": spacing(384),
  // => @media (min-width: 1536px) { ... }
} as const;

export type Breakpoint = keyof typeof screens;
const breakpoints = Object.keys(screens);

export { type Color };

export type ShadowTypes = keyof typeof shadows;
export const shadows = {
  default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none",
};

export function shadow(val: ShadowTypes = "default") {
  return css({
    boxShadow: shadows[val],
  });
}

// Shapes starts
export function rectangle(width: Unit, height: Unit) {
  return css({ width: spacing(width), height: spacing(height) });
}

export function circle(size?: Unit) {
  return css(radius("50%"), size && square(size));
}

export function square(size: Unit) {
  const space = spacing(size);
  return css({
    height: space,
    width: space,
  });
}

const aspectsMappings = {
  square: "1/1",
  video: "16/9",
};
export type Aspects = GlobalValues | keyof typeof aspectsMappings | `${number}/${number}` | number;
export function aspect(a: Aspects) {
  return css({ aspectRatio: aspectsMappings[a as keyof typeof aspectsMappings] || a });
}

aspect.square = css({ aspectRatio: aspectsMappings.square });
aspect.video = css({ aspectRatio: aspectsMappings.video });

export function triangle(size?: Unit, warp = false) {
  const poly = "polygon(50% 0, 100% 100%, 0 100%)";
  return css({ clipPath: poly }, warp && { shapeOutside: poly }, size && square(size));
}
// Shapes done here.

export type OutlineSides = Axis | Edge;

export type OutlineTypes = "dotted" | "solid";

export function outline(): SerializedStyles;
export function outline(size: number): SerializedStyles;
export function outline(size: number, color: Color): SerializedStyles;
export function outline(size: number, sides: OutlineSides): SerializedStyles;
export function outline(size: number, sides: OutlineSides | null, color: Color, type?: OutlineTypes): SerializedStyles;

export function outline(size: number, sides: OutlineSides | null, color: Color, type?: OutlineTypes): SerializedStyles;
export function outline(
  size: number = config.border.width,
  sides?: OutlineSides | Color | null,
  c?: Color,
  type: OutlineTypes = "solid",
): SerializedStyles {
  const style = css({
    outlineColor: colors[c!],
    outlineStyle: type,
  });

  switch (sides) {
    case "bottom":
      return css(style, {
        outlineBottomWidth: size,
      });
    case "bottom-left":
      return css(style, {
        outlineBottomWidth: size,
        outlineLeftWidth: size,
      });
    case "bottom-right":
      return css(style, {
        outlineBottomWidth: size,
        outlineLeftWidth: size,
      });

    case "left":
      return css(style, {
        outlineLeftWidth: size,
      });

    case "right":
      return css(style, {
        outlineRightWidth: size,
      });
    case "top":
      return css(style, {
        outlineTopWidth: size,
      });
    case "top-left":
      return css(style, {
        outlineTopWidth: size,
        outlineLeftWidth: size,
      });
    case "top-right":
      return css(style, {
        outlineTopWidth: size,
        outlineRightWidth: size,
      });

    case "x":
      return css(style, {
        outlineLeftWidth: size,
        outlineRightWidth: size,
      });

    case "y":
      return css(style, {
        outlineTopWidth: size,
        outlineBottomWidth: size,
      });
    default:
      if (sides) {
        return css(style, {
          outlineWidth: size,
          outlineColor: colors[sides],
        });
      }
      return css(style, { outlineWidth: size });
  }
}

export type BorderSides = Axis | Edge;

export type BorderTypes = "dotted" | "solid";

export function border(): SerializedStyles;
export function border(size: number): SerializedStyles;
export function border(size: number, color: Color): SerializedStyles;
export function border(size: number, sides: BorderSides): SerializedStyles;
export function border(size: number, sides: BorderSides | null, color: Color, type?: BorderTypes): SerializedStyles;

export function border(size: number, sides: BorderSides | null, color?: Color, type?: BorderTypes): SerializedStyles;
export function border(
  size: number = config.border.width,
  sides?: BorderSides | Color | null,
  c?: Color,
  type?: BorderTypes,
): SerializedStyles {
  const style = css({
    borderColor: colors[c!],
    borderStyle: type,
  });

  switch (sides) {
    case "bottom":
      return css(style, {
        borderBottomWidth: size,
      });
    case "bottom-left":
      return css(style, {
        borderBottomWidth: size,
        borderLeftWidth: size,
      });
    case "bottom-right":
      return css(style, {
        borderBottomWidth: size,
        borderLeftWidth: size,
      });

    case "left":
      return css(style, {
        borderLeftWidth: size,
      });

    case "right":
      return css(style, {
        borderRightWidth: size,
      });
    case "top":
      return css(style, {
        borderTopWidth: size,
      });
    case "top-left":
      return css(style, {
        borderTopWidth: size,
        borderLeftWidth: size,
      });
    case "top-right":
      return css(style, {
        borderTopWidth: size,
        borderRightWidth: size,
      });

    case "x":
      return css(style, {
        borderLeftWidth: size,
        borderRightWidth: size,
      });

    case "y":
      return css(style, {
        borderTopWidth: size,
        borderBottomWidth: size,
      });
    default:
      if (sides) {
        return css(style, {
          borderWidth: size,
          borderColor: colors[sides],
        });
      }
      return css(style, { borderWidth: size });
  }
}

const borderWidth: number = config.border.width;

border.left = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "left", color, type);
border.right = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "right", color, type);
border.top = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "top", color, type);
border.bottom = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "bottom", color, type);
border.topLeft = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "top-left", color, type);
border.topRight = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "top-right", color, type);
border.bottomRight = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "bottom-right", color, type);
border.bottomLeft = (px = borderWidth, color?: Color, type?: BorderTypes) => border(px, "bottom-left", color, type);

export function radius(val: Unit = config.border.radius, sides?: Edge | "diagonal", reversed = false) {
  if (!sides)
    return css({
      borderRadius: spacing(val),
    });

  if (sides === "diagonal") {
    return radius.diagonal(val, reversed);
  }

  if (reversed) {
    return radius(val, edgesReversed[sides]);
  }

  const r = spacing(val);

  switch (sides) {
    case "bottom":
      return css({
        borderBottomLeftRadius: r,
        borderBottomRightRadius: r,
      });
    case "top":
      return css({
        borderTopLeftRadius: r,
        borderTopRightRadius: r,
      });
    case "left":
      return css({
        borderTopLeftRadius: r,
        borderBottomLeftRadius: r,
      });
    case "right":
      return css({
        borderTopRightRadius: r,
        borderBottomRightRadius: r,
      });
    case "bottom-left":
      return css({
        borderBottomLeftRadius: r,
      });
    case "bottom-right":
      return css({
        borderBottomRightRadius: r,
      });
    case "top-left":
      return css({
        borderTopLeftRadius: r,
      });
    case "top-right":
      return css({
        borderTopRightRadius: r,
      });
  }
}

radius.top = function radiusTop(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "top", isReversed);
};

radius.bottom = function radiusBottom(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "bottom", isReversed);
};

radius.left = function radiusLeft(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "left", isReversed);
};

radius.right = function radiusRight(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "right", isReversed);
};

radius.topRight = function radiusTopRight(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "top-right", isReversed);
};

radius.topLeft = function radiusTopLeft(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "top-left", isReversed);
};

radius.bottomLeft = function radiusBottomLeft(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "bottom-left", isReversed);
};

radius.bottomRight = function radiusBottomRight(unit: Unit = config.border.radius, isReversed = false) {
  return radius(unit, "bottom-right", isReversed);
};

radius.diagonal = function radiusDiagonal(unit: Unit = config.border.radius, isReversed = false) {
  const r = spacing(unit);
  if (isReversed) {
    return css({
      borderBottomLeftRadius: r,
      borderTopRightRadius: r,
    });
  }
  return css({
    borderTopLeftRadius: r,
    borderBottomRightRadius: r,
  });
};

radius.full = radius("50%");

export const margin = createSpacer("margin-", config.margin);
export const padding = createSpacer("padding-", config.padding);

export const inset = createSpacer("", config.inset);

function createSpacer(prefix = "", def: Unit) {
  function spacer(unit?: Unit): SerializedStyles;
  function spacer(unit: Unit, axis: Axis): SerializedStyles;
  function spacer(unit: Unit, side: Edge): SerializedStyles;
  function spacer(yAxis: Unit, xAxis: Unit): SerializedStyles;
  function spacer(top: Unit, leftRight: Unit, bottom: Unit): SerializedStyles;
  function spacer(top: Unit, right: Unit, bottom: Unit, left: Unit): SerializedStyles;
  function spacer(top?: Unit, side?: Unit | Edge | Axis, bottom?: Unit, left?: Unit): SerializedStyles {
    if (typeof top === "undefined")
      return css({
        [prefix.slice(0, -1)]: spacing(def),
      });

    if (side) {
      const v = spacing(top);
      switch (side) {
        case "bottom":
          return css`
            ${prefix}bottom: ${v};
          `;
        case "bottom-left":
          return css`
            ${prefix}bottom: v;
            ${prefix}left: v;
          `;
        case "bottom-right":
          return css`
            ${prefix}bottom: ${v};
            ${prefix}right: ${v};
          `;
        case "top":
          return css`
            ${prefix}top: ${v};
          `;
        case "top-left":
          return css`
            ${prefix}top: ${v};
            ${prefix}left: ${v};
          `;
        case "top-right":
          return css`
            ${prefix}top: ${v};
            ${prefix}right: ${v};
          `;
        case "left":
          return css`
            ${prefix}left: ${v};
          `;
        case "right":
          return css`
            ${prefix}right: ${v};
          `;
        case "x":
          return css`
            ${prefix}right: ${v};
            ${prefix}left: ${v};
          `;
        case "y":
          return css`
            ${prefix}top: ${v};
            ${prefix}bottom: ${v};
          `;
      }
    }
    if (prefix === "") {
      return css({
        inset: spacing(top, side, bottom, left),
      });
    }
    return css({
      [prefix.slice(0, -1)]: spacing(top, side, bottom, left),
    });
  }
  spacer.top = function spacingTop(unit: Unit = def) {
    return spacer(unit, "top");
  };

  spacer.bottom = function spacingTop(unit: Unit = def) {
    return spacer(unit, "bottom");
  };
  spacer.left = function spacingTop(unit: Unit = def) {
    return spacer(unit, "left");
  };

  spacer.right = function spacingRight(unit: Unit = def) {
    return spacer(unit, "right");
  };

  spacer.topLeft = function spacingTopLeft(unit: Unit = def) {
    return spacer(unit, "top-left");
  };

  spacer.topRight = function spacingTopRight(unit: Unit = def) {
    return spacer(unit, "top-right");
  };

  spacer.bottomRight = function spacingBottomRight(unit: Unit = def) {
    return spacer(unit, "bottom-right");
  };

  spacer.bottomLeft = function spacingBottomLeft(unit: Unit = def) {
    return spacer(unit, "bottom-left");
  };

  spacer.x = function spacingX(unit: Unit = def) {
    return spacer(unit, "x");
  };

  spacer.y = function spacingY(unit: Unit = def) {
    return spacer(unit, "y");
  };

  spacer.none = spacer(0);

  return spacer;
}

const effects = {
  spring:
    "linear(0.00, -0.0709, -0.0384, 0.0692, 0.225, 0.403, 0.583, 0.750, 0.896, 1.01, 1.10, 1.16, 1.19, 1.20, 1.19, 1.16, 1.13, 1.10, 1.07, 1.04, 1.01, 0.992, 0.978, 0.969, 0.964, 0.964, 0.967, 0.971, 0.977, 0.983, 0.989, 0.995, 0.999, 1.00, 1.00, 1.01, 1.01, 1.01, 1.01, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00);",
};

type TransitionEl = CSSPropertyNames | CSSPropertyNames[] | "all";
export function transition(el: TransitionEl = "all", speed = "0.3s", effect?: keyof typeof effects) {
  const modifier = effect ? (effects[effect] ?? "") : "";
  return css({
    transition: ensureArray(el)
      .map((x) => `${x} ${speed} ${modifier}`)
      .join(","),
  });
}

export function hover(...style: CSSInterpolation[]) {
  return css({ ":hover": style as unknown as CSSObject });
}

hover.or = (enabled: boolean | undefined, ...styles: CSSInterpolation[]) => {
  const style = css(styles);
  if (enabled) {
    return style;
  }
  return hover(style);
};

hover.and = (enabled: boolean | undefined, ...styles: CSSInterpolation[]) => {
  if (!enabled) {
    return css();
  }
  return hover(styles);
};

export function after(...style: CSSInterpolation[]) {
  return css`
    ::after {
      content: "";
      ${style}
    }
  `;
}

export function before(...style: CSSInterpolation[]) {
  return css`
    ::before {
      content: "";
      ${style}
    }
  `;
}

export function active(...style: CSSInterpolation[]) {
  return css`
    :active {
      ${style}
    }
  `;
}

export function focus(...style: CSSInterpolation[]) {
  return css`
    :focus {
      ${style}
    }
  `;
}

focus.or = (enabled: boolean | undefined, ...styles: CSSInterpolation[]) => {
  const style = css(styles);
  if (enabled) {
    return style;
  }
  return focus(style);
};

focus.and = (enabled: boolean | undefined, ...styles: CSSInterpolation[]) => {
  if (!enabled) {
    return css();
  }
  return focus(styles);
};

export function disabled(...style: CSSInterpolation[]) {
  return css`
    :disabled {
      ${style}
    }
  `;
}

disabled.not = (...style: CSSInterpolation[]) => css({ ":not(:disabled)": style });

export function background(value: Color = "white", shade?: CSSPercent) {
  const color = colors[value];
  if (shade) {
    return {
      ...css({
        backgroundColor: [color, `color-mix(in srgb, ${colors[value]}, transparent ${shade})`],
      }),
    };
  }
  return css({
    backgroundColor: color,
    color: textColors[value],
  });
}
background.primary = background("primary");
background.secondary = background("secondary");
background.success = background("success");
background.error = background("error");
background.tertiary = background("tertiary");
background.caution = background("caution");
background.accent = background("accent");
background.gray = background("gray");
background.black = background("black");
background.white = background("white");

background.image = function backgroundImage(
  url: string,
  repeat = true,
  size?: Unit | "cover" | "contain",
  sizeY?: Unit,
) {
  const props: CSSObject = {
    backgroundImage: `url(${url})`,
  };
  if (repeat === false) {
    props.backgroundRepeat = "no-repeat";
  }
  if (size) {
    props.backgroundSize = typeof size === "string" ? size : spacing(size);
  }
  if (sizeY) {
    props.backgroundSize += " " + spacing(sizeY);
  }
  return css(props);
};

type BackgroundPosition = Unit | Side | "center";
background.position = function backgroundPosition(x: BackgroundPosition, y?: BackgroundPosition) {
  return {
    backgroundPosition: [x, y]
      .filter(Boolean)
      .map((a) => (typeof a === "string" ? a : spacing(a!)))
      .join(" "),
  };
};

export function skew(x: number, y?: number) {
  if (y) {
    return { transform: `skew(${x}deg, ${y}deg)` };
  }
  return { transform: `skew(${x}deg)` };
}

export function zIndex(value: number | "auto" = "auto") {
  if (isNumber(value)) {
    value = value * 10;
  }
  return css({ zIndex: value });
}

export const center = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type GridUnit = number | "none" | "subgrid";
const gridTemplateMappings = {
  rows: "gridTemplateRows",
  columns: "gridTemplateColumns",
};
type GridTemplate = keyof typeof gridTemplateMappings;
function gridRepeat(num: GridUnit) {
  switch (num) {
    case "subgrid":
    case "none":
      return num;
    default:
      return `repeat(${num}, minmax(0, 1fr))`;
  }
}

export function grid(unit?: GridUnit, template: GridTemplate = "columns") {
  if (!unit) {
    return css({
      display: "grid",
    });
  }
  return css({
    display: "grid",
    [gridTemplateMappings[template]]: gridRepeat(unit),
  });
}

grid.rows = (unit: GridUnit) => grid(unit, "rows");

export function tiles(grid: number): SerializedStyles;
export function tiles<A extends number, B extends number>(grid: A, small: B): SerializedStyles;
export function tiles<A extends number, B extends number, C extends number>(
  grid: A,
  small: B,
  medium: C,
): SerializedStyles;
export function tiles<A extends number, B extends number, C extends number, D extends number>(
  grid: A,
  small: B,
  medium: C,
  large: D,
): SerializedStyles;
export function tiles<A extends number, B extends number, C extends number, D extends number, E extends number>(
  grid: A,
  small: B,
  medium: C,
  large: D,
  xLarge: E,
): SerializedStyles;
export function tiles(
  grid: number,
  small?: number,
  medium?: number,
  large?: number,
  xLarge?: number,
  doubleXLarge?: number,
): SerializedStyles;
export function tiles(min: number, ...points: (number | undefined)[]) {
  const styles: SerializedStyles[] = [grid(min)];
  for (let i = 0; i < points.length; i++) {
    const breakpoint = breakpoints[i];
    if (!breakpoint) break;
    const size = points[i];
    if (!size) continue;
    styles.push(screen(breakpoint as Breakpoint, css({ gridTemplateColumns: gridRepeat(size) })));
  }
  return css(styles);
}

/**
 * @deprecated please use `tiles` instead
 */
export const responsive = tiles;

export function rows(num: number) {
  return css({
    gridTemplateRows: `repeat(${num}, minmax(0, 1fr))`,
    gridAutoFlow: "column",
  });
}

export function cols(num: number) {
  return css({ gridTemplateColumns: `repeat(${num}, minmax(0, 1fr))` });
}

export function span(unit: number, dir: TableAxis = "column") {
  return css({ ["grid-" + dir]: `span ${unit} / span ${unit}` });
}
export function gap(gap?: Unit): SerializedStyles;
export function gap(y: Unit, x: Unit): SerializedStyles;
export function gap(num: Unit = 4, num2?: Unit) {
  return css({ gap: spacing(num, num2) });
}

gap.x = (space: Unit = 4) => css({ columnGap: spacing(space) });

gap.y = (space: Unit = 4) => css({ rowGap: spacing(space) });

export function screen(scr: Breakpoint | "all", ...styles: CSSInterpolation[]) {
  if (scr === "all") {
    return css`
      @media screen {
        ${styles}
      }
    `;
  }
  const bp = screens[scr];
  return css`
    @media (min-width: ${bp}) {
      ${styles}
    }
  `;
}

export function not(selector: string, ...styles: CSSInterpolation[]) {
  return css`
    &:not(${selector}) {
      ${styles}
    }
  `;
}

export function selection(style: false | CSSInterpolation, ...other: CSSInterpolation[]) {
  if (style === false) return css({ userSelect: "none" });
  return css`
    ::selection {
      ${style}
      ${other}
    }
  `;
}

export function divide(px: number = 1, color?: Color, axis: Axis = "y") {
  const style: CSSObject = {};
  if (color) {
    style.borderColor = colors[color];
  }
  if (axis === "x") {
    return css`
      & > * + * {
        ${style};
        border-right-width: 0px;
        border-left-width: ${px}px;
      }
    `;
  }

  return css`
    > * + * {
      ${style};
      border-top-width: ${px}px;
      border-bottom-width: 0px;
    }
  `;
}

divide.x = (x: number, color?: Color) => divide(x, color, "x");
divide.y = (y: number, color?: Color) => divide(y, color, "y");

export function children(...styles: CSSInterpolation[]) {
  return css({ "> *": styles });
}

const sizeMappings = {
  xs: spacing(140),
  sm: spacing(150),
  md: spacing(160),
  lg: spacing(180),
  xl: spacing(190),
};

export type MappingSize = keyof typeof sizeMappings;

export function maxWidth(x: MappingSize) {
  return css({ maxWidth: sizeMappings[x] });
}

const flexVariations = {
  center: { alignItems: "center", justifyContent: "center" },
  wrap: { flexWrap: "wrap" },
  nowrap: { flexWrap: "nowrap" },
  row: { flexDirection: "row" },
  "row-reverse": { flexDirection: "row-reverse" },
  column: { flexDirection: "column" },
  "column-reverse": { flexDirection: "column-reverse" },
  "wrap-reverse": { flexWrap: "wrap-reverse" },
  "justify-start": { justifyContent: "flex-start" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-around": { justifyContent: "space-around" },
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },
  "items-center": { alignItems: "center" },
  "items-stretch": { alignItems: "stretch" },
} satisfies Record<string, CSSInterpolation>;

export type FlexModifier = keyof typeof flexVariations;

export function flex(...modifiers: FlexModifier[]) {
  return css(
    { display: "flex" },
    modifiers.map((x) => flexVariations[x]),
  );
}

flex.inline = (...modifiers: FlexModifier[]) =>
  css(
    { display: "inline-flex" },
    modifiers.map((x) => flexVariations[x]),
  );

flex.flex = (f: number) => css({ flex: f });

export function dark(...styles: CSSInterpolation[]) {
  return css`
    @media (prefers-color-scheme: dark) {
      ${styles}
    }
  `;
}

export function light(...styles: CSSInterpolation[]) {
  return css`
    @media (prefers-color-scheme: light) {
      ${styles}
    }
  `;
}

export function spin(duration = "1s", fn = "linear") {
  return css({
    animation: `${spin.animation} ${duration} infinite ${fn}`,
  });
}

spin.animation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

// ====================
// SECTION: Transform
// ====================

type TransformType = { transform: string };

export function rotate(deg: number | CSSVar): TransformType {
  if (typeof deg === "number") {
    return {
      transform: `rotate(${deg}deg)`,
    };
  }
  return {
    transform: `rotate(${deg})`,
  };
}

export function translate(x: Unit): TransformType;
export function translate(x: Unit, y: Unit): TransformType;
export function translate(x: Unit, y: Unit, z: Unit): TransformType;
export function translate(unit: Unit, axis: Axis): TransformType;
export function translate(x: Unit, y?: Axis | Unit, z?: Unit): TransformType {
  const unit = spacing(x);
  if (!y) {
    return { transform: `translate(${unit})` };
  }
  switch (y) {
    case "x":
      return {
        transform: `translateX(${unit})`,
      };
    case "y": {
      return {
        transform: `translateY(${unit})`,
      };
    }
  }

  if (z) {
    return {
      transform: `translate3d(${unit}, ${spacing(y)}, ${spacing(z)})`,
    };
  }
  return {
    transform: `translate(${unit}, ${spacing(y)})`,
  };
}

translate.x = function translateX(x: Unit) {
  return translate(x, "x");
};

translate.y = function translateY(y: Unit) {
  return translate(y, "y");
};

export function transform(...args: (TransformType | string)[]) {
  return css({ transform: args.map((x) => (typeof x === "string" ? x : x.transform)).join(" ") });
}
rotate[0] = transform(rotate(0));
rotate[15] = transform(rotate(15));
rotate[30] = transform(rotate(30));
rotate[45] = transform(rotate(45));
rotate[60] = transform(rotate(60));
rotate[75] = transform(rotate(75));
rotate[90] = transform(rotate(90));
rotate[120] = transform(rotate(120));
rotate[150] = transform(rotate(150));
rotate[180] = transform(rotate(180));
rotate[225] = transform(rotate(225));
rotate[270] = transform(rotate(270));
rotate[360] = transform(rotate(360));
// end transformation

export function shimmer(color: Color, shade: Color, duration = "2s") {
  const c = colors[color];
  const s = colors[shade];
  return css`
    background: linear-gradient(90deg, ${c} 25%, ${s} 50%, ${c} 75%);
    background-size: 200% 100%;
    color: transparent;
    animation: ${shimmer.animation} ${duration} infinite;
  `;
}

shimmer.animation = keyframes`
0% {
  background-position: 200% 0;
}
100% {
  background-position: -200% 0;
}
`;

export function container(fluid: boolean = false) {
  if (fluid) return [css({ label: "container", width: "100%" }), padding()];
  return [
    css({ label: "container", width: "100%" }),
    padding(),
    margin("auto", "x"),
    screen("sm", css({ maxWidth: screens.sm })),
    screen("md", css({ maxWidth: screens.md })),
    screen("lg", css({ maxWidth: screens.lg })),
    screen("xl", css({ maxWidth: screens.xl })),
    screen("2xl", css({ maxWidth: screens["2xl"] })),
  ];
}

// ========================
// SECTION: Text
// ========================

export function uppercase() {
  return css({ textTransform: "uppercase" });
}

export function underline() {
  return css({
    textDecoration: "underline",
  });
}

const displayBase = css(
  {
    fontSize: spacing(9),
    fontWeight: 600,
    lineHeight: spacing(11),
  },
  screen("md", {
    fontWeight: 600,
    fontSize: spacing(12),
    lineHeight: spacing(14),
  }),
);

const display1 = css(displayBase, {
  label: "display-1",
});

const display2 = css(displayBase, {
  label: "display-2",
  fontStyle: "italic",
});

const headerBase = css({
  fontSize: spacing(6),
  fontWeight: 450,
  lineHeight: spacing(7),
});

const header1 = css(
  screen("md", {
    fontSize: spacing(9),
    fontWeight: 450,
    lineHeight: spacing(11),
  }),
  headerBase,
  {
    label: "header-1",
  },
);

const header2 = css(screen("md", headerBase), {
  label: "header-2",
  fontSize: spacing(4.5),
  fontWeight: 450,
  lineHeight: spacing(5.5),
});

const header3 = css(
  screen("md", {
    fontSize: spacing(4.5),
    lineHeight: spacing(5.5),
    fontWeight: 450,
  }),
  {
    label: "header-3",
    fontSize: spacing(4),
    lineHeight: spacing(4),
    fontWeight: 450,
  },
);

const header4 = css(
  screen(
    "md",
    css({
      fontSize: spacing(4),
      lineHeight: spacing(5),
      fontWeight: 450,
    }),
  ),
  {
    label: "header-4",
    fontSize: spacing(3.5),
    lineHeight: spacing(4.5),
    fontWeight: 450,
  },
);

const subHeadingBase = {
  fontSize: spacing(3.5),
  fontWeight: 400,
  lineHeight: spacing(4.5),
};

const subHeading1 = css(
  screen("md", {
    fontSize: spacing(4),
    lineHeight: spacing(5),
    fontWeight: 400,
  }),
  subHeadingBase,
  {
    label: "sub-heading-1",
  },
);

const subHeading2 = css(screen("md", subHeadingBase), uppercase(), {
  label: "sub-heading-2",
  fontSize: spacing(3),
  lineHeight: spacing(4),
  fontWeight: 400,
});

const body1 = css(
  screen("md", {
    fontSize: spacing(3.5),
    fontWeight: 400,
    lineHeight: spacing(4.5),
  }),
  {
    label: "body-1",
    fontSize: spacing(3),
    fontWeight: 400,
    lineHeight: spacing(4),
  },
);

const body2 = css(
  screen("md", {
    fontSize: spacing(3.5),
    fontWeight: 450,
    lineHeight: spacing(4.5),
  }),
  {
    label: "body-2",
    fontSize: spacing(3),
    fontWeight: 450,
    lineHeight: spacing(4),
  },
);

const body3 = css(
  screen("md", {
    fontSize: spacing(3.5),
    lineHeight: spacing(4.5),
    fontWeight: 400, // discrpency
    textDecorationLine: "line-through",
  }),
  {
    fontSize: spacing(3),
    lineHeight: spacing(4),
    fontWeight: 400,
    textDecorationLine: "line-through",
  },
);

const body4 = css(
  screen("md", {
    fontSize: spacing(3.5),
    lineHeight: spacing(4.5),
  }),
  underline(),
  {
    label: "body-4",
    fontSize: spacing(3),
    fontWeight: 450,
    lineHeight: spacing(4),
  },
);

const label1 = css(
  screen("md", {
    fontSize: spacing(3.25),
    fontWeight: 400,
    lineHeight: spacing(4),
  }),
  {
    label: "label-1",
    fontSize: spacing(2.75),
    fontWeight: 400,
    lineHeight: spacing(3.5),
  },
);

const label2 = css(
  screen("md", {
    fontSize: spacing(3.25),
    lineHeight: spacing(4),
  }),
  {
    label: "label-2",
    fontWeight: 450,
    fontSize: spacing(2.75),
    lineHeight: spacing(3.5),
  },
);

const label3 = css(
  screen("md", {
    fontSize: spacing(3.25),
  }),
  {
    label: "label-3",
    fontSize: spacing(2.75),
    fontWeight: 400,
    fontStyle: "italic",
    lineHeight: spacing(3.5),
  },
);

const label4 = css(
  screen("md", {
    fontSize: spacing(3),
    lineHeight: spacing(4),
  }),
  uppercase(),
  {
    label: "label-4",
    fontSize: spacing(2.5),
    fontWeight: 450,
    lineHeight: spacing(3),
  },
);

export const variantToStyledTextMapper = {
  "display-1": display1,
  "display-2": display2,
  "header-1": header1,
  "header-2": header2,
  "header-3": header3,
  "header-4": header4,
  "sub-heading-1": subHeading1,
  "sub-heading-2": subHeading2,
  "body-1": body1,
  "body-2": body2,
  "body-3": body3,
  "body-4": body4,
  "label-1": label1,
  "label-2": label2,
  "label-3": label3,
  "label-4": label4,
  center: css({ textAlign: "center" }),
  left: css({ textAlign: "left" }),
  right: css({ textAlign: "right" }),
  justify: css({ textAlign: "justify" }),
  uppercase: uppercase(),
  underline: css({ textDecoration: "underline" }),
  wrap: css({ whiteSpace: "wrap" }),
  nowrap: css({ whiteSpace: "nowrap" }),
  ellipsis: css({ overflow: "hidden", textOverflow: "ellipsis" }),
} satisfies Record<string, SerializedStyles>;

export type TextVariant = keyof typeof variantToStyledTextMapper;

export function text(...variants: TextVariant[]): SerializedStyles;
export function text(color: Color | "hint", ...variants: TextVariant[]): SerializedStyles;
export function text(color: Color | TextVariant | "hint", ...variants: TextVariant[]) {
  if (color === "hint") {
    color = "gray-300";
  }

  if (isColorVariant(color)) {
    return css(
      { color: colors[color] },
      variants.map((x) => variantToStyledTextMapper[x]),
    );
  }

  return css(
    variantToStyledTextMapper[color],
    variants.map((x) => variantToStyledTextMapper[x]),
  );
}

text.primary = css({ color: colors.primary });
text.secondary = css({ color: colors.secondary });
text.tertiary = css({ color: colors.tertiary });
text.accent = css({ color: colors.accent });
text.error = css({ color: colors.error });
text.caution = css({ color: colors.caution });
text.success = css({ color: colors.success });
text.white = css({ color: colors.white });
text.gray = css({ color: colors.gray });
text.black = css({ color: colors.black });
text.info = css({ color: colors.info });
/*
Text Variants ends
*/

export function cv<T extends string>(name: T): `var(--${T})`;
export function cv<T extends string, U extends string>(name: T, def?: U): `var(--${T}, ${U})`;
export function cv(name: string, def?: string): string {
  if (def) {
    return `var(--${name}, ${def})`;
  }
  return `var(--${name})`;
}

cv.define = (vars: Dict<string | number | false>) => {
  return Object.fromEntries(
    Object.entries(vars)
      .filter((x) => x[1])
      .map(([x, y]) => [`--${x}`, y]),
  );
};

export function slide(isOpen = false, transition = "0.3s ease") {
  return css`
    display: grid;
    grid-template-rows: ${isOpen ? "1fr" : "0fr"};
    transition: grid-template-rows ${transition};
    > * {
      overflow-y: hidden;
    }
  `;
}
