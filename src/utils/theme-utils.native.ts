import type { BasicTheme, ThemeColorPalette, ThemeProps } from "../theme/types.native.js";

export const isThemeValid = (fullTheme: ThemeProps): boolean => {
  try {
    if (fullTheme.defaultTheme === undefined) return false;
    const theme = fullTheme[fullTheme.defaultTheme as "defaultTheme"] as unknown as BasicTheme;
    if (theme.themeName === undefined) return false;
    if (theme.logoUrl === undefined) return false;
    if (theme.colors === undefined) return false;
    if (theme.colors.primary === undefined) return false;
    if (theme.colors.secondary === undefined) return false;
    if (theme.colors.accent === undefined) return false;
    if (theme.colors.tertiary === undefined) return false;
    if (theme.colors.info === undefined) return false;
    if (theme.colors.success === undefined) return false;
    if (theme.colors.error === undefined) return false;
    if (theme.colors.caution === undefined) return false;
    if (theme.colors.gray === undefined) return false;
    if (theme.colors.white === undefined) return false;
    if (theme.colors.black === undefined) return false;
    if (theme.fonts === undefined) return false;
    if (theme.fonts.length === 0) return false;
  } catch {
    return false;
  }
  return true;
};

export const convertColorsArrayToObject = (colorsArray?: ThemeColorPalette) => {
  const outputColors: Record<string, string> = {};

  if (colorsArray) {
    Object.entries(colorsArray).forEach(([key, values]) => {
      if (Array.isArray(values)) {
        values.forEach((color, index) => {
          const newKey = `${key}${index + 1}00`;
          outputColors[newKey as keyof typeof outputColors] = color;
        });
      } else {
        const newKey = key;
        outputColors[newKey] = values;
      }
    });
  }

  return outputColors;
};
