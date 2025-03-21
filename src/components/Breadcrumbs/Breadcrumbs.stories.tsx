import Breadcrumbs from "./Breadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";
import { Link, Typography } from "@mui/material";
const meta: Meta<any> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    label: "Navigation Path",
    children: (
      <>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Category
        </Link>
        <Typography color="text.primary">Item</Typography>
      </>
    ),
  },
};
