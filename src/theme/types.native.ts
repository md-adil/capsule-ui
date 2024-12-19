export interface ThemeColorPalette {
  primary: Array<string>;
  secondary: Array<string>;
  tertiary: Array<string>;
  accent: Array<string>;
  success: Array<string>;
  caution: Array<string>;
  info: Array<string>;
  error: Array<string>;
  gray: Array<string>;
  white: string;
  black: string;
}

export interface OutputThemeColorPalette {
  colors: {
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    secondary100: string;
    secondary200: string;
    secondary300: string;
    secondary400: string;
    secondary500: string;
    secondary600: string;
    tertiary100: string;
    tertiary200: string;
    tertiary300: string;
    tertiary400: string;
    tertiary500: string;
    tertiary600: string;
    accent100: string;
    accent200: string;
    accent300: string;
    accent400: string;
    accent500: string;
    accent600: string;
    success100: string;
    success200: string;
    success300: string;
    success400: string;
    success500: string;
    success600: string;
    caution100: string;
    caution200: string;
    caution300: string;
    caution400: string;
    caution500: string;
    caution600: string;
    info100: string;
    info200: string;
    info300: string;
    info400: string;
    info500: string;
    info600: string;
    error100: string;
    error200: string;
    error300: string;
    error400: string;
    error500: string;
    error600: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    white: string;
    black: string;
  };
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
}

export type OutputBasicTheme = Omit<BasicTheme, "colors"> & OutputThemeColorPalette;

export interface ThemeProps {
  defaultTheme: "light" | "dark";
  light?: BasicTheme;
  dark?: BasicTheme;
}

export interface OutputThemeProps {
  defaultTheme: "light" | "dark";
  light?: OutputBasicTheme;
  dark?: OutputBasicTheme;
}
