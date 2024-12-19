import type { ForwardedRef, RefObject } from "react";

export function mergeRefs<T>(...refs: (RefObject<T> | ForwardedRef<T>)[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (!ref) continue;
      (ref as any).current = node;
    }
  };
}
