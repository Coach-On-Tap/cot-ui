import LinearProgress from "./LinearProgress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinearProgress> = {
  title: "Components/LinearProgress",
  component: LinearProgress,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
  args: {
    label: "Loading Progress",
    variant: "determinate",
    value: 50,
    sx: { width: "100%" },
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Loading...",
    variant: "indeterminate",
    sx: { width: "100%" },
  },
};
