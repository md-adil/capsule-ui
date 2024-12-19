import { screens, type Breakpoint } from "../theme/theme.js";

const bpSets = new Set(Object.keys(screens));
export function isBreakpoint(val: unknown): val is Breakpoint {
  return typeof val === "string" && bpSets.has(val);
}
