import { ThemeProvider as EmotionThemeProvider, useTheme } from "@emotion/react";
import React, { type PropsWithChildren, useMemo } from "react";
import { type ThemeProps } from "./types.native.js";
import { convertColorsArrayToObject, isThemeValid } from "../utils/theme-utils.native.js";

interface Props {
  defaultThemeOptions: ThemeProps;
}

const ThemeProviderNative: React.FC<PropsWithChildren<Props>> = ({ defaultThemeOptions, children }): JSX.Element => {
  const isThemeOK = useMemo(() => isThemeValid(defaultThemeOptions), [defaultThemeOptions]);

  if (!isThemeOK) throw new Error("Default theme options in the provided theme is not valid!");

  const finalTheme = useMemo(() => {
    return {
      ...defaultThemeOptions,
      light: {
        ...defaultThemeOptions.light,
        colors: convertColorsArrayToObject(defaultThemeOptions?.light?.colors),
      },
    };
  }, [defaultThemeOptions]);

  return <EmotionThemeProvider theme={finalTheme}>{children}</EmotionThemeProvider>;
};

const ThemeProvider = React.memo(ThemeProviderNative);

export { ThemeProvider, useTheme };
