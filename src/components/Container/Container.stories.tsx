import Container from "./Container";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    label: "Container Content",
  },
};
