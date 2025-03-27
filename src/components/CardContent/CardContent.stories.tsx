import CardContent from "./CardContent";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/CardContent",
  component: CardContent,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof CardContent>;

export const Default: Story = {
  args: {
    label: "Card Content Text",
  },
};
