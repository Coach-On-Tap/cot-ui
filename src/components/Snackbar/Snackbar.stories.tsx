import Snackbar from "./Snackbar";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, SnackbarCloseReason } from "@mui/material";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (
      _: Event | React.SyntheticEvent<any, Event>,
      reason: SnackbarCloseReason
    ) => {
      if (reason === "clickaway" || reason === "escapeKeyDown") {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Show Snackbar
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          message="This is a default snackbar message!"
          severity="info"
          autoHideDuration={3000}
        />
      </>
    );
  },
};
