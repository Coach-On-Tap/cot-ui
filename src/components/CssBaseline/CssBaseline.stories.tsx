import CssBaseline from "./CssBaseline";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/CssBaseline",
  component: CssBaseline,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof CssBaseline>;

export default meta;
type Story = StoryObj<typeof CssBaseline>;

export const Default: Story = {
  args: {
    label: "CSS Baseline",
  },
};
