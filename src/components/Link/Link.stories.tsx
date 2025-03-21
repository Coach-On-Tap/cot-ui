import Link from "./Link";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    label: "Click Here",
    href: "#",
    color: "primary",
  },
};

export const UnderlineNone: Story = {
  args: {
    label: "No Underline Link",
    href: "#",
    color: "secondary",
    underline: "none",
  },
};
