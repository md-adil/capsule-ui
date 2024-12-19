import type { CSSProperties, Dispatch, SetStateAction } from "react";
import type { Orientation } from "../utils/types.js";

export type GlobalValues = "auto" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
export type GlobalSpacing = "min-content" | "max-content" | "fit-content";
export type CSSPercent = `${number}%`;
export type CSSVar = `var(--${string})`;
export type CSSPropertyNames = keyof CSSProperties;

export interface ContextType {
  logo: string;
  setLogo: Dispatch<SetStateAction<string>>;
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

export type RGBcolor = `rgb(${number}, ${number}, ${number})`;
export type HSLcolor = `hsl(${number}, ${number}%, ${number}%)`;
export type HSLAcolor = `hsla(${number}, ${number}%, ${number}%, ${number})`;

export interface MainAndContrast {
  main: CSSProperties["color"];
  contrast: CSSProperties["color"];
}

export interface PNDshades {
  primary: CSSProperties["color"];
  neutral: CSSProperties["color"];
  disabled: CSSProperties["color"];
}

export interface Gradient {
  colors?: {
    start: CSSProperties["color"];
    end: CSSProperties["color"];
  };
  orientations: Orientation[];
}
export interface ThemeGradients {
  primary: Gradient;
  secondary: Gradient;
  accent: Gradient;
  tertiary: Gradient;
}

export type ColorShadeRange = [
  CSSProperties["color"],
  CSSProperties["color"],
  CSSProperties["color"],
  CSSProperties["color"],
  CSSProperties["color"],
  CSSProperties["color"],
];

export interface ThemeColorPalette {
  primary: ColorShadeRange;
  secondary: ColorShadeRange;
  accent: ColorShadeRange;
  tertiary: ColorShadeRange;
  info: ColorShadeRange;
  success: ColorShadeRange;
  error: ColorShadeRange;
  caution: ColorShadeRange;
  gray: ColorShadeRange;
  white: CSSProperties["color"];
  black: CSSProperties["color"];
}
export interface ThemeFont {
  typeface: string;
  category: "serif" | "sans-serif" | "cursive" | "monospace";
  fallback?: string;
  name: string;
  url?: string;
}
export interface BasicTheme {
  themeName: string;
  logoUrl: string;
  colors: ThemeColorPalette;
  fonts: ThemeFont[];
  gradients?: ThemeGradients;
}

export interface ThemeProps {
  defaultTheme: "light" | "dark";
  light?: BasicTheme;
  dark?: BasicTheme;
}

export type Shade = "100" | "200" | "300" | "400" | "500" | "600";
