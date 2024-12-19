import { motion } from "framer-motion";
import { css } from "@emotion/react";
import type { ForwardRefExoticComponent, ReactNode } from "react";
import { background, inset, radius, spacing, type Unit } from "../../theme/theme.js";
import { Paper, type PaperProps } from "../paper/paper.js";
import styled from "@emotion/styled";
import { edgesReversed } from "../../theme/edges.js";
import type { Side } from "../../utils/types.js";
export type AnchorPosition = Side;

const translations: Record<AnchorPosition, string> = {
  bottom: "translateY(100%)",
  top: "translateY(-100%)",
  left: "translateX(-100%)",
  right: "translateX(100%)",
};

function getSize(anchor: AnchorPosition, size: Unit) {
  switch (anchor) {
    case "bottom":
    case "top":
      return css({ maxHeight: spacing(size) });
    case "left":
    case "right":
      return css({ maxWidth: spacing(size) });
  }
}

const AnchorContainer = styled(motion.create(Paper as unknown as ForwardRefExoticComponent<PaperProps>))(
  background(),
  inset(0),
  {
    position: "fixed",
  },
);
export interface AnchorProps {
  children: ReactNode;
  anchor: AnchorPosition;
  className?: string;
  maxSize?: Unit;
  radius?: Unit;
}

export function Anchor({ anchor, className, maxSize = "50%", children, radius: r }: AnchorProps) {
  const transform = translations[anchor];
  return (
    <AnchorContainer
      radius={r}
      exit={{ transform }}
      animate={{ transform: "translate(0)" }}
      initial={{ transform }}
      css={[{ [edgesReversed[anchor]]: "auto" }, getSize(anchor, maxSize), radius(0, anchor)]}
      className={className}
    >
      {children}
    </AnchorContainer>
  );
}
