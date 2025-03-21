import Rating from "./Rating";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2);

    const handleChange = (
      _: React.ChangeEvent<unknown>,
      newValue: number | null
    ) => {
      setValue(newValue);
    };

    return (
      <Box>
        <Typography variant="h6">Rate this:</Typography>
        <Rating
          name="simple-controlled"
          label="Rating Label"
          value={value}
          onChange={handleChange}
        />
        <Typography variant="body1">Selected Rating: {value}</Typography>
      </Box>
    );
  },
};
