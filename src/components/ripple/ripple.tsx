import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const RippleContainer = styled.div`
  label: ripple;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
RippleContainer.displayName = "RippleContainer";

export interface RippleEffectProps {
  x: number;
  y: number;
  size: number;
}

export interface RippleProps {
  duration?: number;
  color?: string;
  opacity?: number;
}

const effectKeyframes = keyframes`
to {
      opacity: 0;
      transform: scale(2);
    }
`;

export const RippleEffect = styled.span<Required<RippleProps> & RippleEffectProps>(
  {
    label: "ripple_effect",
    transform: "scale(0)",
    borderRadius: "100%",
    position: "absolute",
    animationName: effectKeyframes,
  },
  (props) => ({
    animationDuration: `${props.duration}ms`,
    opacity: props.opacity,
    backgroundColor: props.color,
    top: props.y,
    left: props.x,
    width: props.size,
    height: props.size,
  }),
);

RippleEffect.displayName = "RippleEffect";
