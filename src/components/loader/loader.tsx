import { aspect, center, spacing, type Unit } from "../../theme/theme.js";
import type { PropsWithClass } from "../../utils/types.js";
import { Spinner } from "../spinner/spinner.js";

export interface LoaderProps extends PropsWithClass {
  "spinner-size"?: Unit;
  "spinner-stroke"?: Unit;
  size: Unit;
}
export function Loader({
  size,
  "spinner-size": spinnerSize = 6,
  "spinner-stroke": spinnerStroke,
  className,
}: LoaderProps) {
  return (
    <div css={[center(), { width: spacing(size) }, aspect.video]} className={className}>
      <Spinner stroke={spinnerStroke} size={spacing(spinnerSize)} />
    </div>
  );
}
