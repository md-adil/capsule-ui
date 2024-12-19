import { useEffect, useState, type EventHandler, type MouseEvent } from "react";
import { colors } from "../../theme/theme.js";
import {
  RippleEffect as Effect,
  RippleContainer,
  type RippleEffectProps as EffectProps,
  type RippleProps,
} from "./ripple.js";
import type { Timeout } from "../../utils/index.js";

export * from "./ripple.js";

function useDebouncedRippleCleanUp(rippleCount: number, duration: number, cleanUpFunction: () => void) {
  useEffect(() => {
    let bounce: Timeout | null = null;
    function clear() {
      if (!bounce) return;
      clearTimeout(bounce);
    }
    if (rippleCount > 0) {
      clear();
      bounce = setTimeout(() => {
        cleanUpFunction();
        clear();
      }, duration * 4);
    }
    return clear;
  }, [rippleCount, duration, cleanUpFunction]);
}

export function Ripple({ duration = 850, color: c = colors["accent-100"], opacity = 0.75 }: RippleProps) {
  const [ripples, setRipples] = useState<EffectProps[]>([]);
  useDebouncedRippleCleanUp(ripples.length, duration!, () => {
    setRipples([]);
  });

  const addRipple: EventHandler<MouseEvent> = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;
    const ripple: EffectProps = { x, y, size };
    setRipples([...ripples, ripple]);
  };

  return (
    <RippleContainer onMouseDown={addRipple}>
      {ripples.map((ripple, index) => (
        <Effect key={String(index)} opacity={opacity} duration={duration} color={c} {...ripple} />
      ))}
    </RippleContainer>
  );
}
