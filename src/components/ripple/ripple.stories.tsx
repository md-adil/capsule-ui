import type { Meta, StoryObj } from "@storybook/react";
import { Ripple, type RippleProps } from "./index.js";
import { Box } from "../box/box.js";

interface Props extends RippleProps {
  children: string;
  background: string;
}

export default {
  title: "core/Ripple",
  tags: ["autodocs"],
  component: Ripple,
  argTypes: {
    children: { control: "text" },
    duration: { control: "number" },
    color: { type: "string", control: "color" },
    opacity: { control: "number" },
  },
  args: {
    children: "Click Me",
  },
} as Meta<Props>;

export const Default: StoryObj<Props> = {
  render({ children, ...props }) {
    return (
      <Box position="relative" overflow="hidden" background="white" padding={4} display="inline-block">
        {children}
        <Ripple {...props} />
      </Box>
    );
  },
};
