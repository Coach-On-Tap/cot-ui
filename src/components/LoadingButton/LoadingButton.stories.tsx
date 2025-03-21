import LoadingButton from "./LoadingButton";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<any> = {
  title: "Components/LoadingButton",
  component: LoadingButton,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const Default: Story = {
  args: {
    label: "Click Me",
  },
};
