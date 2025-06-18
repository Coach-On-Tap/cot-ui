import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outline", "ghost", "text"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "gray",
        "dark",
      ],
    },
    isCircle: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "error",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    color: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
    color: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Download",
    icon: "download",
    variant: "filled",
    color: "primary",
  },
};

export const Circle: Story = {
  args: {
    icon: "close",
    isCircle: true,
    variant: "filled",
    color: "gray",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-h6 text-t-primary">Button Variants</h3>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">
          Filled Buttons
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="filled" color="primary">
            Primary
          </Button>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
          <Button variant="filled" color="success">
            Success
          </Button>
          <Button variant="filled" color="warning">
            Warning
          </Button>
          <Button variant="filled" color="error">
            Error
          </Button>
          <Button variant="filled" color="gray">
            Gray
          </Button>
          <Button variant="filled" color="dark">
            Dark
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">
          Outline Buttons
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" color="success">
            Success
          </Button>
          <Button variant="outline" color="warning">
            Warning
          </Button>
          <Button variant="outline" color="error">
            Error
          </Button>
          <Button variant="outline" color="gray">
            Gray
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">
          Ghost Buttons
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" color="primary">
            Primary
          </Button>
          <Button variant="ghost" color="secondary">
            Secondary
          </Button>
          <Button variant="ghost" color="success">
            Success
          </Button>
          <Button variant="ghost" color="warning">
            Warning
          </Button>
          <Button variant="ghost" color="error">
            Error
          </Button>
          <Button variant="ghost" color="gray">
            Gray
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">Text Buttons</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="gray">
            Gray
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">With Icons</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="filled" color="primary" icon="download">
            Download
          </Button>
          <Button variant="outline" color="success" icon="check">
            Confirm
          </Button>
          <Button variant="ghost" color="error" icon="trash">
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-2">
          Circle Buttons
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="filled" color="primary" icon="plus" isCircle />
          <Button variant="outline" color="secondary" icon="edit" isCircle />
          <Button variant="ghost" color="error" icon="close" isCircle />
        </div>
      </div>
    </div>
  ),
};
