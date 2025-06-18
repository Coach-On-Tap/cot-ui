import type { Meta, StoryObj } from "@storybook/react";
import Field from "./index";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "error", "info"],
    },
    textarea: {
      control: { type: "boolean" },
    },
    validated: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    placeholder: "Enter your text...",
    variant: "outlined",
    color: "primary",
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Enter your text...",
    variant: "filled",
    color: "primary",
  },
};

export const Standard: Story = {
  args: {
    placeholder: "Enter your text...",
    variant: "standard",
    color: "primary",
  },
};

export const Primary: Story = {
  args: {
    placeholder: "Enter your text...",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Enter your text...",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    placeholder: "Enter your text...",
    color: "success",
    validated: true,
  },
};

export const Warning: Story = {
  args: {
    placeholder: "Enter your text...",
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Enter your text...",
    color: "error",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email...",
    color: "primary",
    type: "email",
  },
};

export const WithInnerLabel: Story = {
  args: {
    innerLabel: "Password",
    placeholder: "Enter your password...",
    color: "primary",
    type: "password",
  },
};

export const Textarea: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    color: "primary",
    textarea: true,
  },
};

export const WithTooltip: Story = {
  args: {
    label: "Username",
    tooltip: "Choose a unique username for your account",
    placeholder: "Enter username...",
    color: "primary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4 w-80">
      <h3 className="text-h6 text-t-primary">Field Variants</h3>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-3">
          Outlined (Default)
        </h4>
        <div className="space-y-3">
          <Field
            placeholder="Primary outlined..."
            variant="outlined"
            color="primary"
            label="Primary"
          />
          <Field
            placeholder="Secondary outlined..."
            variant="outlined"
            color="secondary"
            label="Secondary"
          />
          <Field
            placeholder="Success outlined..."
            variant="outlined"
            color="success"
            label="Success"
            validated={true}
          />
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-3">Filled</h4>
        <div className="space-y-3">
          <Field
            placeholder="Primary filled..."
            variant="filled"
            color="primary"
            label="Primary Filled"
          />
          <Field
            placeholder="Secondary filled..."
            variant="filled"
            color="secondary"
            label="Secondary Filled"
          />
          <Field
            placeholder="Error filled..."
            variant="filled"
            color="error"
            label="Error Filled"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-3">Standard</h4>
        <div className="space-y-3">
          <Field
            placeholder="Primary standard..."
            variant="standard"
            color="primary"
            label="Primary Standard"
          />
          <Field
            placeholder="Warning standard..."
            variant="standard"
            color="warning"
            label="Warning Standard"
          />
          <Field
            placeholder="Info standard..."
            variant="standard"
            color="info"
            label="Info Standard"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sub-title-2 text-t-secondary mb-3">
          Textarea Examples
        </h4>
        <div className="space-y-3">
          <Field
            placeholder="Outlined textarea..."
            variant="outlined"
            color="primary"
            label="Outlined Textarea"
            textarea={true}
          />
          <Field
            placeholder="Filled textarea..."
            variant="filled"
            color="secondary"
            label="Filled Textarea"
            textarea={true}
          />
          <Field
            placeholder="Standard textarea..."
            variant="standard"
            color="success"
            label="Standard Textarea"
            textarea={true}
          />
        </div>
      </div>
    </div>
  ),
};
