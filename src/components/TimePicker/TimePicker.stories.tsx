import TimePicker from "./TimePicker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null);

    const handleChange = (newValue: Date | null) => {
      setValue(newValue);
    };

    return (
      <Box>
        <Typography variant="h6">Select Time:</Typography>
        <TimePicker label="Time Picker" value={value} onChange={handleChange} />
        <Typography variant="body1" mt={2}>
          Selected Time: {value ? value.toLocaleTimeString() : "None"}
        </Typography>
      </Box>
    );
  },
};
