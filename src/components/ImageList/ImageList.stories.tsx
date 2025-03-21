import ImageList from "./ImageList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components/ImageList",
  component: ImageList,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof ImageList>;

export const Default: Story = {
  args: {
    label: "Image List Label",
    children: (
      <>
        {/* Example image items */}
        <img src="https://via.placeholder.com/150" alt="Example 1" />
        <img src="https://via.placeholder.com/150" alt="Example 2" />
      </>
    ),
  },
};
