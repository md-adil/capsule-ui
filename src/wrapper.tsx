import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme/provider.js";

export default function Wrapper({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
