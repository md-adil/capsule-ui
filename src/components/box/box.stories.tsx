import type { Meta, StoryObj } from "@storybook/react";
import { Box, type BoxProps } from "./box.js";
import { colors } from "../../theme/theme.js";
const colorsNames = Object.keys(colors);
export default {
  title: "core/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    color: { options: colorsNames, control: "select" },
    background: { options: colorsNames, control: "select" },
  },
  args: {},
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {
  args: {
    padding: 4,
    border: 1,
    background: "white",
    color: "gray-600",
    children: <>Lorem</>,
  },
};
