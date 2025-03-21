import SpeedDial from "./SpeedDial";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SpeedDial as MuiSpeedDial, SpeedDialIcon, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";

const meta: Meta<typeof SpeedDial> = {
  title: "Components/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof SpeedDial>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const actions = [
      {
        icon: <EditIcon />,
        name: "Edit",
        onClick: () => alert("Edit clicked!"),
      },
      {
        icon: <DeleteIcon />,
        name: "Delete",
        onClick: () => alert("Delete clicked!"),
      },
      {
        icon: <ShareIcon />,
        name: "Share",
        onClick: () => alert("Share clicked!"),
      },
    ];

    return (
      <Box>
        <MuiSpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          onClose={handleToggle}
          onOpen={handleToggle}
          open={open}
        >
          <SpeedDial actions={actions} ariaLabel="SpeedDial actions" />
        </MuiSpeedDial>
      </Box>
    );
  },
};
