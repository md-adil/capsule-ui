import type { Meta, StoryObj } from "@storybook/react";
import { Card, card, type CardHeaderProps } from "./card.js";
import { padding, text } from "../../theme/theme.js";

export default {
  component: card.header,
  tags: ["autodocs"],
  argTypes: {
    title: { type: "string" },
    extras: { type: "string" },
    closable: { type: "boolean" },
    variant: { type: "string" },
    onClose: { type: "function" },
  },
  render(props) {
    return (
      <Card container={false}>
        <card.header {...props} />
        lorem
      </Card>
    );
  },
} as Meta<CardHeaderProps>;

export const Header: StoryObj<CardHeaderProps> = {
  args: {
    title: "Hello",
  },
};

export const Closable: StoryObj<CardHeaderProps> = {
  render() {
    return (
      <Card container={false}>
        <card.header closable />
        lorem
      </Card>
    );
  },
};

export const Extras: StoryObj<CardHeaderProps> = {
  render() {
    return (
      <Card container={false}>
        <card.header extras={<div css={padding(1, 2)}>Need help ?</div>} />
        lorem
      </Card>
    );
  },
};

export const TitleAndClose: StoryObj<CardHeaderProps> = {
  args: {
    title: "Cart",
    closable: true,
  },
};

export const ExtrasAndClose: StoryObj<CardHeaderProps> = {
  args: {
    closable: true,
    extras: <div css={text.gray}>Need help ?</div>,
  },
};
export const CloseWithChildren: StoryObj<CardHeaderProps> = {
  args: {
    closable: true,
    children: "Buy now",
  },
};

export const ExtrasAndCloseWithChildren: StoryObj<CardHeaderProps> = {
  args: {
    closable: true,
    extras: <div css={text.gray}>Need help ?</div>,
    children: "Buy now",
  },
};

export const Complete: StoryObj<CardHeaderProps> = {
  args: {
    title: "Cart",
    extras: <div css={text.gray}>Need help ?</div>,
    closable: true,
    children: "Buy now",
  },
};
