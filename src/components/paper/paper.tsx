import styled from "@emotion/styled";
import { colors, radius, shadow, type ShadowTypes, type Unit } from "../../theme/theme.js";
import type { ComponentProps } from "react";

interface PaperPropsBase {
  shadow?: ShadowTypes;
  radius?: Unit;
  rounded?: boolean;
}
export const Paper = styled.div<PaperPropsBase>(
  {
    label: "paper",
    backgroundColor: colors.white,
  },
  ({ shadow: val = "default", radius, rounded = true }) => [val !== "none" && shadow(val), makeRound(radius, rounded)],
);

Paper.displayName = "Paper";

export type PaperProps = ComponentProps<typeof Paper>;

function makeRound(r?: Unit, def?: boolean) {
  if (r !== undefined) return radius(r);
  if (def) return radius();
  return;
}
