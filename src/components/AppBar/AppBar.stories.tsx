import AppBar from "./AppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    title: "My AppBar",
  },
};
