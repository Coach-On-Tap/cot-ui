import Typography from "./Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <Box>
      <Typography variant="h1" label="Heading 1">
        Heading 1
      </Typography>
      <Typography variant="h2" label="Heading 2">
        Heading 2
      </Typography>
      <Typography variant="h3" label="Heading 3">
        Heading 3
      </Typography>
      <Typography variant="body1" label="Body Text">
        This is body text.
      </Typography>
      <Typography variant="body2" label="Secondary Body Text">
        This is secondary body text.
      </Typography>
    </Box>
  ),
};
