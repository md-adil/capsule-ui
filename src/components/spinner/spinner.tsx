import { keyframes, css } from "@emotion/react";
import { circle, spacing, type Unit } from "../../theme/theme.js";
import type { PropsWithClass } from "../../utils/types.js";

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}`;

const style = css(circle(), {
  borderStyle: "solid",
  borderColor: "#f3f3f37d",
  borderTopColor: "currentColor",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationName: spin,
});

interface SpinnerProps extends PropsWithClass {
  stroke?: Unit;
  duration?: number;
  size?: string;
}
export const Spinner = ({ stroke = 1 / 2, duration = 1, size = "1em", className }: SpinnerProps) => {
  return (
    <div
      css={[
        style,
        {
          height: size,
          width: size,
          borderWidth: spacing(stroke),
          animationDuration: duration + "s",
        },
      ]}
      className={className}
    />
  );
};
