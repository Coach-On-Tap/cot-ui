import Badge from "./Badge";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const meta: Meta<any> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 4,
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const StringLabel: Story = {
  args: {
    label: "New",
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const Dot: Story = {
  args: {
    label: 0, // Still shows as a dot due to variant
    variant: "dot",
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const Primary: Story = {
  args: {
    label: 10,
    color: "primary",
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const Invisible: Story = {
  args: {
    label: 5,
    invisible: true,
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const CustomStyle: Story = {
  args: {
    label: 3,
    sx: { "& .MuiBadge-badge": { backgroundColor: "purple", color: "white" } },
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};
