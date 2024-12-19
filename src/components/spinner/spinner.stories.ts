import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner.js";
const meta: Meta<typeof Spinner> = {
  title: "core/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    stroke: { type: "number" },
    duration: { type: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
