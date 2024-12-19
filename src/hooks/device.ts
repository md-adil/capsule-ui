import { useEffect, useState } from "react";
import { screens, type Breakpoint } from "../theme/index.js";

export function useWindowSize() {
  const [size, setSize] = useState<[width: number, height: number]>(() => [0, 0]);
  useEffect(() => {
    function handleSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return size;
}

export { type Breakpoint };

export function useScreen(size: Breakpoint) {
  const [matched, setMatched] = useState(false);
  useEffect(() => {
    const media = matchMedia(`(min-width: ${screens[size]})`);
    function handleChange(ev: MediaQueryListEvent) {
      setMatched(ev.matches);
    }
    media.addEventListener("change", handleChange);
    setMatched(media.matches);
  }, [size]);
  return matched;
}

export function useScreenToggle<T, X>(size: Breakpoint, val1: T, val2: X): T | X {
  return useScreen(size) ? val1 : val2;
}
