import Grid from "./Grid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    label: "Grid Label",
    children: <div>Grid Content</div>,
  },
};
