import DatePickerMui from "./DatePicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/DatePicker",
  component: DatePickerMui,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof DatePickerMui>;

export default meta;
type Story = StoryObj<typeof DatePickerMui>;

export const Default: Story = {
  args: {
    label: "Select Date",
  },
};
