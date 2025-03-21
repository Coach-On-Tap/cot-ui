import Table from "./Table";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    const columns = [
      { id: "name", label: "Name" },
      { id: "age", label: "Age" },
      { id: "email", label: "Email" },
    ];

    const data = [
      { name: "John Doe", age: 28, email: "john@example.com" },
      { name: "Jane Smith", age: 34, email: "jane@example.com" },
      { name: "Alice Johnson", age: 45, email: "alice@example.com" },
    ];

    return (
      <Box>
        <Table columns={columns} data={data} />
      </Box>
    );
  },
};
