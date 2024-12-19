import { useEffect, useRef, useState } from "react";
import type { Timeout } from "../utils/index.js";

interface CounterProps {
  enabled?: boolean;
  start: number;
  end: number;
  seconds?: number;
  step?: number;
  onComplete?(num: number): void;
}

export function useCounter({
  enabled = true,
  start = 0,
  end = 60,
  seconds = 1,
  step = end > start ? 1 : -1,
  onComplete = () => {},
}: CounterProps): number {
  const [current, setCurrent] = useState(start);
  const ref = useRef<Timeout>();

  function clear() {
    clearInterval(ref.current);
  }
  function count(prev: number): number {
    const value = prev + step;
    if (value === end) {
      clear();
      onComplete(value);
    }
    return value;
  }
  useEffect(() => {
    if (!enabled) return;
    if (ref.current) {
      clear();
      setCurrent(start);
    }
    ref.current = setInterval(() => setCurrent(count), seconds * 1000);
    return clear;
  }, [start, end, enabled]);
  return current;
}
