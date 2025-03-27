import TextField from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Box>
        <Typography variant="h6">Enter Text:</Typography>
        <TextField
          value={value}
          onChange={handleChange}
          label="Text Field"
          variant="outlined"
          fullWidth
        />
        <Typography variant="body1" mt={2}>
          Current Value: {value}
        </Typography>
      </Box>
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Box>
        <Typography variant="h6">Enter Text with Helper:</Typography>
        <TextField
          value={value}
          onChange={handleChange}
          label="Text Field"
          helperText="This is some helper text"
          variant="outlined"
          fullWidth
        />
      </Box>
    );
  },
};
