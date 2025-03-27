import Stack from "./Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Typography } from "@mui/material";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack spacing={2} label="Example Stack">
      <Typography variant="h6">Stack Example</Typography>
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Stack>
  ),
};
