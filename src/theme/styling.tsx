import { ClassNames, type ClassNamesContent } from "@emotion/react";
import { createContext, useContext, type FC } from "react";
// work in progress.
const CSSContext = createContext<ClassNamesContent>({} as ClassNamesContent);
export function withCSS<T = {}>(Component: FC<T>) {
  function Wrapped(props: T) {
    return (
      <ClassNames>
        {(style) => (
          <CSSContext.Provider value={style}>
            <Component {...(props as any)} />
          </CSSContext.Provider>
        )}
      </ClassNames>
    );
  }

  Wrapped.displayName = Component.displayName;
  return Wrapped;
}

export function useCSS() {
  return useContext(CSSContext);
}
