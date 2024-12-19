import { useRef, useState } from "react";
import { useUpdateEffect } from "./effect.js";

function compare<T extends unknown[]>(prev: T, current: T) {
  const result: boolean[] = [];
  for (let i = 0; i < prev.length; i++) {
    result.push(prev[i] !== current[i]);
  }
  return result;
}

export function useDelta<T extends unknown[]>(...val: T) {
  const ref = useRef({ prev: val });
  const [changed, setChanges] = useState<boolean[]>([]);
  useUpdateEffect(() => {
    setChanges(compare(val, ref.current.prev));
    ref.current.prev = val;
  }, val);
  return changed;
}
