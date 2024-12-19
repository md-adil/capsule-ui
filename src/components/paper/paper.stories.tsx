import type { Meta, StoryObj } from "@storybook/react";
import { Paper, type PaperProps } from "./paper.js";
import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
import { shadows } from "../../theme/theme.js";

const Content = styled.div`
  padding: 1rem;
`;

const meta: Meta<PropsWithChildren<PaperProps>> = {
  title: "core/Paper",
  component: Paper,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "inline-radio",
      options: Object.keys(shadows),
    },
    radius: { type: "number" },
    rounded: { type: "boolean" },
    children: { control: false },
  },
  args: {
    children: <Content>lorem</Content>,
  },
};

export default meta;

type Story = StoryObj<PropsWithChildren<PaperProps>>;

export const Default: Story = {
  args: {},
};

export const Flat: Story = {
  args: {
    shadow: "none",
  },
};
export const Square: Story = {
  args: {
    rounded: false,
    shadow: "default",
  },
};
