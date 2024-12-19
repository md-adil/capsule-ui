import { useEffect, useState } from "react";

export * from "./device.js";
export * from "./element.js";
export * from "./counter.js";
export * from "./effect.js";
export * from "./delta.js";

export function useToggle(initial = false, onChange = (_val: boolean) => {}) {
  const [state, setState] = useState(initial);
  function change() {
    setState((x) => {
      const nx = !x;
      onChange(nx);
      return nx;
    });
  }

  change.on = () => {
    setState(true);
    onChange(true);
  };

  change.off = () => {
    setState(false);
    onChange(false);
  };

  return [state, change] as const;
}

export function usePropState<T>(value: T) {
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return [state, setState] as const;
}
