import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card.js";
import { ButtonClose } from "../button/button-close.js";
import { Button } from "../button/index.js";
import paperMeta from "../paper/paper.stories.js";

const meta: Meta<typeof Card> = {
  title: "components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    ...paperMeta.argTypes,
    title: { type: "string" },
    hoverable: { type: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Welcome Home!",
  },
};

export const Titled: Story = {
  args: {
    title: "Hello",
    children: "Welcome Home!",
  },
};

export const Extras: Story = {
  args: {
    title: "Hello",
    children: "Welcome Home!",
    extras: <a href="/">Go Home</a>,
  },
};
export const Cover: Story = {
  args: {
    title: "Hello",
    children: "Welcome Home!",
    style: { width: 240 },
    hoverable: true,
    cover: (
      <img
        width="100%"
        src="https://fastly.picsum.photos/id/206/200/200.jpg?hmac=4sOfaJaxYl_SjIfzFMVrIqIi3bdvwGke2r0MBg7Q1i8"
      />
    ),
    extras: <ButtonClose />,
  },
};

export const Action: Story = {
  args: {
    title: "Hello",
    children: <>Lorem</>,
    extras: <ButtonClose />,
    action: <Button variant="ghost">Click me</Button>,
  },
};
