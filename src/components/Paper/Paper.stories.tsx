import Paper from "./Paper";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";

const meta: Meta<typeof Paper> = {
  title: "Components/Paper",
  component: Paper,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    elevation: 3,
    sx: { padding: "16px", backgroundColor: "#f5f5f5" },
  },
  render: (args) => (
    <Paper {...args}>
      <Typography variant="h6">This is a Paper component</Typography>
      <Typography variant="body1">You can put any content here.</Typography>
    </Paper>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    elevation: 1,
    sx: { padding: "32px", backgroundColor: "#e0e0e0" },
  },
  render: (args) => (
    <Paper {...args}>
      <Typography variant="h6">Custom Styled Paper</Typography>
      <Typography variant="body1">
        This paper has custom styles applied.
      </Typography>
    </Paper>
  ),
};
