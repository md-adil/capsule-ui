import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index.js";
import { IconButton } from "./icon-button.js";
import { fn } from "@storybook/test";
import { RoundButton } from "./round-button.js";
import { Fragment } from "react";
import { flex, gap, rotate } from "../../theme/theme.js";
import { ArrowChevronRight } from "../../icons/arrow-chevron-right.js";
import { buttonSizes, buttonVariation } from "./variation.js";
import { LocationFilled } from "../../icons/location-filled.js";
import { ButtonClose } from "./button-close.js";
import { Call } from "../../icons/call.js";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: Object.keys(buttonVariation),
      description: "The variant of the button",
    },
    size: {
      control: "radio",
      options: Object.keys(buttonSizes),
      description: "The size of the button",
    },
  },
  args: {
    onClick: fn(),
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Hello world",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Hello world",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Hello world",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Hello world",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Hello world",
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
    children: "Hello world",
  },
};

export const AdornmentButton: StoryObj<typeof IconButton> = {
  render: (props) => (
    <div css={[flex("center"), gap(7)]}>
      <Button end={<ArrowChevronRight />}>Hello World</Button>
      <Button variant="secondary" {...props} end={<ArrowChevronRight />}>
        Hello World
      </Button>
      <Button variant="text" {...props} end={<ArrowChevronRight />}>
        Hello World
      </Button>
      <Button variant="link" {...props} end={<ArrowChevronRight />}>
        Hello World
      </Button>
      <Button {...props} start={<ArrowChevronRight css={rotate(180)} />}>
        Hello World
      </Button>
    </div>
  ),
};

export const IconButtonDefault: StoryObj<typeof IconButton> = {
  render: (props) => (
    <IconButton {...props}>
      <Call />
    </IconButton>
  ),
};

export const CloseButton: StoryObj<typeof ButtonClose> = {
  render: (props) => <ButtonClose {...props} />,
};

export const RoundedButton: StoryObj<typeof RoundButton> = {
  render: (props) => {
    return (
      <>
        {[...new Array(5).keys()]
          .map((x) => `${2 + x}${"0".repeat(x)}`)
          .map((x) => (
            <Fragment key={String(x)}>
              <RoundButton title={x} {...props}>
                {x}
              </RoundButton>
              &nbsp;
            </Fragment>
          ))}
      </>
    );
  },
};

export const RoundedButtonIcon: StoryObj<typeof RoundButton> = {
  render: (props) => {
    return (
      <div css={[flex(), gap(5)]}>
        <RoundButton size="large" {...props}>
          <LocationFilled />
        </RoundButton>
        <RoundButton variant="ghost" size="large" {...props}>
          <LocationFilled />
        </RoundButton>
      </div>
    );
  },
};

export const RoundedButtonDisabled: StoryObj<typeof RoundButton> = {
  render: (props) => {
    return (
      <>
        <RoundButton {...props} size="large" disabled>
          <LocationFilled />
        </RoundButton>
      </>
    );
  },
};
