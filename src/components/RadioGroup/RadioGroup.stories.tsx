import RadioGroup from "./RadioGroup";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("option1");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const options = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ];

    return (
      <Box>
        <Typography variant="h6">Select an Option:</Typography>
        <RadioGroup options={options} value={value} onChange={handleChange} />
        <Typography variant="body1">Selected: {value}</Typography>
      </Box>
    );
  },
};
