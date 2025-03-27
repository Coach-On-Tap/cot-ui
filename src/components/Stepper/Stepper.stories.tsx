import Stepper from "./Stepper";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Box } from "@mui/material";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => {
    const steps = [
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" },
    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) =>
        Math.min(prevActiveStep + 1, steps.length - 1)
      );
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (
      <Box>
        <Stepper steps={steps} activeStep={activeStep} />
        <Box mt={2}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    );
  },
};
