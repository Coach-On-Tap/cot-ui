import Pagination from "./Pagination";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    );
  },
};
