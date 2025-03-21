import Backdrop from "./Backdrop";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<any> = {
  title: "Components/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    open: true,
    label: "Backdrop Active",
  },
};

export const Invisible: Story = {
  args: {
    open: true,
    invisible: true,
    label: "Invisible Backdrop",
  },
};

export const Clickable: Story = {
  args: {
    open: true,
    label: "Click to Close",
    onClick: fn(),
  },
};

export const CustomStyle: Story = {
  args: {
    open: true,
    label: "Styled Backdrop",
    sx: { backgroundColor: "rgba(255, 0, 0, 0.5)" },
  },
};

export const NoLabel: Story = {
  args: {
    open: true,
  },
};
