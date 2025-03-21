import Skeleton from "./Skeleton";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <Box>
      <Typography variant="h6">Loading...</Typography>
      <Skeleton variant="text" width={210} label="Loading text" />
      <Skeleton
        variant="rectangular"
        width={210}
        height={118}
        label="Loading rectangular"
      />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        label="Loading circular"
      />
    </Box>
  ),
};
