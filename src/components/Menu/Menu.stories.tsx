import Menu from "./Menu";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const items = [
      { id: "1", text: "Profile", onClick: handleClose },
      { id: "2", text: "My Account", onClick: handleClose },
      { id: "3", text: "Logout", onClick: handleClose },
    ];

    return (
      <>
        <Button onClick={handleClick}>Open Menu</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          items={items}
        />
      </>
    );
  },
};
