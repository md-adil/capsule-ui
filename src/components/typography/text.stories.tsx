import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index.js";
import { css } from "@emotion/react";
import { colors, variantToStyledTextMapper } from "../../theme/theme.js";
import { Card } from "../card/card.js";

const textAlignments = ["center", "justify", "left", "right"] as const;

const variants = Object.keys(variantToStyledTextMapper);

const meta: Meta<typeof Text> = {
  component: Text,
  title: "components/Text",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Card
        css={css`
          span {
            display: block;
          }
        `}
      >
        <Story />
      </Card>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
      description: "Variant of the text to be used.",
    },
    children: {
      description: "The text to be displayed.",
    },
    color: {
      control: "select",
      description: "Color of the text.",
      defaultValue: "black",
      options: Object.keys(colors),
    },
    align: {
      description: "Specify the alignment of the text.",
      control: "inline-radio",
      options: textAlignments,
    },
    bold: { type: "boolean" },
    italic: { type: "boolean" },
    oblique: { type: "boolean" },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export const Label4: Story = {
  args: {
    variant: "label-4",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Label3: Story = {
  args: {
    variant: "label-3",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Label2: Story = {
  args: {
    variant: "label-2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Label1: Story = {
  args: {
    variant: "label-1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Body4: Story = {
  args: {
    variant: "body-4",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Body3: Story = {
  args: {
    variant: "body-3",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Body2: Story = {
  args: {
    variant: "body-2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Body1: Story = {
  args: {
    variant: "body-1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const SubHeading2: Story = {
  args: {
    variant: "sub-heading-2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const SubHeading1: Story = {
  args: {
    variant: "sub-heading-1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Header4: Story = {
  args: {
    variant: "header-4",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Header3: Story = {
  args: {
    variant: "header-3",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Header2: Story = {
  args: {
    variant: "header-2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Header1: Story = {
  args: {
    variant: "header-1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
export const Display2: Story = {
  args: {
    variant: "display-2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Display1: Story = {
  args: {
    variant: "display-1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
