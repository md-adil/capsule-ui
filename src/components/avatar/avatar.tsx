import { extractInitials, hashStringToColor } from "./function.js";
import { Text } from "../typography/index.js";
import { cloneElement, type ComponentProps, type ReactElement } from "react";
import { circle, flex, radius, screen, square, text } from "../../theme/theme.js";
import { ClassNames, css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledImg = styled.div(square(13.5), screen("md", square(15)));

const variantsMapping = {
  circle: css(circle()),
  rounded: css(radius()),
  square: css(),
};

export type AvatarVariant = keyof typeof variantsMapping;

export interface AvatarProps extends ComponentProps<typeof StyledImg> {
  name?: string;
  variant?: AvatarVariant;
  children?: ReactElement | boolean | string | null;
}
export function Avatar({ children: imageNode, variant = "circle", name = "", ...props }: AvatarProps) {
  if (typeof imageNode === "boolean") {
    imageNode = null;
  }
  if (typeof imageNode === "string") {
    if (!name) {
      name = String(imageNode);
    }
    imageNode = null;
  }
  const nameInitials = extractInitials(name);
  const color = hashStringToColor(nameInitials);
  const variation = variantsMapping[variant];
  return imageNode ? (
    <StyledImg css={[variation]} {...props}>
      <ClassNames>
        {({ cx, css }) =>
          cloneElement(imageNode, {
            className: cx(
              css(
                square("100%"),
                text("center"),
                { textIndent: "10000px", objectFit: "cover", overflow: "hidden" },
                variation,
              ),
              imageNode.props.className,
            ),
          })
        }
      </ClassNames>
    </StyledImg>
  ) : (
    <StyledImg css={[flex("center"), { backgroundColor: color }, variation]} {...props}>
      <Text variant="header-3" color="white" align="center" as="div">
        {nameInitials}
      </Text>
    </StyledImg>
  );
}
