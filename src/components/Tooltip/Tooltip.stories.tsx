import Tooltip from "./Tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Box } from "@mui/material";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Box>
      <Tooltip title="This is a tooltip" label="Tooltip Label" arrow>
        <Button variant="contained">Hover over me</Button>
      </Tooltip>
    </Box>
  ),
};
