import Select from "./Select";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography, SelectChangeEvent } from "@mui/material";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("option1");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
      setValue(event.target.value as string | number);
    };

    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];

    return (
      <Box>
        <Typography variant="h6">Select an Option:</Typography>
        <Select value={value} onChange={handleChange} options={options} />
        <Typography variant="body1">Selected: {value}</Typography>
      </Box>
    );
  },
};
