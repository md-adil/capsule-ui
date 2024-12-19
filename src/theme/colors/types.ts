export type ColorScale = Readonly<{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}>;

export type ColorProp = keyof MainColors;
export type ShadeProp = keyof ColorScale;

export type MainColors = Readonly<{
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  error: string;
  caution: string;
  gray: string;
  accent: string;
  info: string;
}>;

export type ColorTypes = Readonly<{
  primary: ColorScale;
  secondary: ColorScale;
  tertiary: ColorScale;
  success: ColorScale;
  error: ColorScale;
  caution: ColorScale;
  gray: ColorScale;
  accent: ColorScale;
  info: ColorScale;
}>;
