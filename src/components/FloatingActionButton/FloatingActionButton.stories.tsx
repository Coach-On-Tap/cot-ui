import Fab from "@/components/FloatingActionButton/FloatingActionButton";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<any> = {
  title: "Components/Fab",
  component: Fab,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  args: {
    label: "Floating Action Button",
    onClick: fn(),
  },
};
