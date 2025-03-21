import ImageListItem from "./ImageListItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/ImageListItem",
  component: ImageListItem,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof ImageListItem>;

export default meta;
type Story = StoryObj<typeof ImageListItem>;

export const Default: Story = {
  args: {
    label: "Image Item Label",
    children: <img src="https://via.placeholder.com/150" alt="Example" />,
  },
};
