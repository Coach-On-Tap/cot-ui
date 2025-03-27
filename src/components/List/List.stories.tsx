import List from "./List";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      { id: "1", text: "Item 1" },
      { id: "2", text: "Item 2" },
      { id: "3", text: "Item 3" },
    ],
  },
};

export const WithCustomStyles: Story = {
  args: {
    items: [
      { id: "1", text: "Styled Item 1" },
      { id: "2", text: "Styled Item 2" },
      { id: "3", text: "Styled Item 3" },
    ],
    sx: { backgroundColor: "#f0f0f0", padding: "16px" },
  },
};
