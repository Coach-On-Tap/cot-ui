import Tabs from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("tab1");

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    const tabs = [
      { label: "Tab 1", value: "tab1" },
      { label: "Tab 2", value: "tab2" },
      { label: "Tab 3", value: "tab3" },
    ];

    return (
      <Box>
        <Tabs value={value} onChange={handleChange} tabs={tabs} />
        <Typography variant="body1" mt={2}>
          Current Tab: {value}
        </Typography>
      </Box>
    );
  },
};
