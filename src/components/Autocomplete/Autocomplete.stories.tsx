import Autocomplete from "./Autocomplete";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<any> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const sampleOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

export const Default: Story = {
  args: {
    label: "Select an Option",
    options: sampleOptions,
    onChange: fn(),
  },
};
