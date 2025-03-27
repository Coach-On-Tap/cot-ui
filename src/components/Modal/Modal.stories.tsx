import Modal from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal open={open} onClose={handleClose} title="Modal Title">
          <div>This is the content of the modal.</div>
        </Modal>
      </>
    );
  },
};
