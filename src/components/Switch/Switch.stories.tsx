import Switch from "./Switch";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <Box>
        <Typography variant="h6">Toggle Switch:</Typography>
        <Switch
          label="Toggle Switch"
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography variant="body1">
          Switch is {checked ? "ON" : "OFF"}
        </Typography>
      </Box>
    );
  },
};
