import { useEffect, useRef } from "react";
import type { Timeout } from "../utils/types.js";

interface IntervalProps {
  enabled: boolean;
}
export function useInterval(callback: () => void, delay: number, options: IntervalProps = { enabled: true }) {
  const ref = useRef<Timeout | undefined>();
  useEffect(() => {
    if (options.enabled) {
      ref.current = setInterval(callback, delay);
    } else {
      ref.current && clearInterval(ref.current);
    }
    return () => {
      ref.current && clearInterval(ref.current);
    };
  }, [callback, delay, options.enabled]);
}
