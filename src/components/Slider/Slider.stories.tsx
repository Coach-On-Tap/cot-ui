import Slider from "./Slider";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number>(30);

    const handleChange = (_: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    return (
      <Box>
        <Typography variant="h6">Adjust the Slider:</Typography>
        <Slider
          label="Default Slider"
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <Typography variant="body1">Current Value: {value}</Typography>
      </Box>
    );
  },
};

export const WithRange: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 50]);

    const handleChange = (_: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    return (
      <Box>
        <Slider
          label="Range Slider"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={100}
        />
        <Typography variant="body1">
          Current Range: {value[0]} - {value[1]}
        </Typography>
      </Box>
    );
  },
};
