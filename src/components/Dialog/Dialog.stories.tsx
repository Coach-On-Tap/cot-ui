import Dialog from "./Dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    label: "Dialog Label",
    children: "This is the content of the dialog.",
    actions: (
      <>
        <button onClick={fn()}>Cancel</button>
        <button onClick={fn()}>Confirm</button>
      </>
    ),
    open: true,
  },
};
