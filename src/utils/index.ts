export type * from "./types.js";
export * from "./iterator.js";
export * from "./random.js";
export * from "./breakpoint.js";
export * from "./primitive.js";
export * from "./colors.js";

export function sleep(milliseconds: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

export function isSSR() {
  return typeof document === "undefined";
}
