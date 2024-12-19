import { useState, type PropsWithChildren } from "react";
import { StateManagerContext } from "./state-manager.js";
import { Styles, type StyleProps } from "./styles/styles.js";

type ThemeProviderProps = PropsWithChildren<StyleProps>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <StateManagerContext.Provider value={useState({})}>
      <Styles {...props} />
      {children}
    </StateManagerContext.Provider>
  );
}
