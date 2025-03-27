import Avatar from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    label: "JD",
  },
};

export const Image: Story = {
  args: {
    label: "JD",
    src: "https://via.placeholder.com/150",
    alt: "Sample Avatar",
  },
};

export const Circular: Story = {
  args: {
    label: "JD",
    variant: "circular",
  },
};

export const Square: Story = {
  args: {
    label: "JD",
    variant: "square",
  },
};

export const CustomStyle: Story = {
  args: {
    label: "JD",
    sx: { bgcolor: "purple", color: "white", width: 60, height: 60 },
  },
};

export const Clickable: Story = {
  args: {
    label: "JD",
    onClick: () => console.log("Avatar clicked!"),
  },
};
