import type { Meta, StoryObj } from "@storybook/react";
import { useElement } from "./element.js";
import { background, padding, radius } from "../theme/theme.js";

export default {
  title: "hooks/useElement",
  tags: ["autodocs"],
} as Meta;

export const Element: StoryObj = {
  name: "useElement",
  render() {
    const [ref, attr] = useElement((el) => el.getBoundingClientRect());
    return (
      <div css={[padding(), background("white"), radius()]} ref={ref}>
        <pre>{attr?.bottom}</pre>
      </div>
    );
  },
};
