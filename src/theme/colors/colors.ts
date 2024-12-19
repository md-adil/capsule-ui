import type { ColorTypes } from "./types.js";

export const defaultColor: ColorTypes = {
  primary: {
    100: "#F0F9FF",
    200: "#C9E2F8",
    300: "#9EC2E4",
    400: "#005DAC",
    500: "#00437A",
    600: "#002747",
  },
  secondary: {
    100: "#FFEEE5",
    200: "#FFBB99",
    300: "#FF7733",
    400: "#FF5500",
    500: "#CC4400",
    600: "#993300",
  },
  tertiary: {
    100: "#FFF3E0",
    200: "#FEE0AE",
    300: "#FDB849",
    400: "#FDA416",
    500: "#CF8612",
    600: "#9F680E",
  },
  success: {
    100: "#E8FCCF",
    200: "#B7DB89",
    300: "#95C950",
    400: "#64A70B",
    500: "#568F0A",
    600: "#3C6407",
  },
  error: {
    100: "#FCEDEE",
    200: "#F08F94",
    300: "#E96269",
    400: "#DA1E28",
    500: "#B31921",
    600: "#861319",
  },
  caution: {
    100: "#FFF3E0",
    200: "#FEE0AE",
    300: "#FDB849",
    400: "#FDA416",
    500: "#CF8612",
    600: "#9F680E",
  },
  gray: {
    100: "#F2F2F2",
    200: "#DADADA",
    300: "#B3B3B3",
    400: "#575756",
    500: "#2B2B2B",
    600: "#1A1A1A",
  },
  accent: {
    100: "#EFF2F4",
    200: "#D2DAE0",
    300: "#B3C2CB",
    400: "#95AAB6",
    500: "#5E7888",
    600: "#495D6A",
  },
  info: {
    100: "#E0F2FF",
    200: "#8BC0EF",
    300: "#458ECE",
    400: "#005DAC",
    500: "#00437A",
    600: "#002747",
  },
};

export const baseColors = {
  black: "#000000",
  white: "#ffffff",
  transparent: "transparent",
  currentColor: "currentColor",
  inherit: "inherit",
  shaded: "#57565630",
};

export type BaseColors = typeof baseColors;
