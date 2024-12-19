import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, type AvatarProps } from "./avatar.js";
import { border } from "../../theme/theme.js";

export default {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

export const Default: StoryObj<AvatarProps> = {
  args: { name: "Md Adil" },
};

export const Photo: StoryObj<AvatarProps> = {
  args: {
    name: "Md Adil",
    children: <img css={border(5, "white")} src="https://mui.com/static/images/avatar/3.jpg" />,
  },
};
