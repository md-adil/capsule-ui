import type { Meta, StoryObj } from "@storybook/react";
import { card, type CardFooterProps } from "./card.js";
import { Button } from "../button/button.js";
import { colors } from "../../theme/theme.js";

export default {
  component: card.footer,
  argTypes: {
    children: { type: "string" },
    style: { control: false },
    action: { control: false },
  },
  tags: ["autodocs"],
} as Meta<CardFooterProps>;

export const Footer: StoryObj<CardFooterProps> = {
  args: {
    style: {
      backgroundColor: colors.white,
    },
    children: <>&copy; 2024</>,
    action: <Button size="small">Click me</Button>,
  },
};
