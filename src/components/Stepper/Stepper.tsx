import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
  Step,
  StepLabel,
} from "@mui/material";
import React from "react";

type StepperBaseProps = MuiStepperProps;

export interface StepperStep {
  label: string;
}

export interface StepperProps extends StepperBaseProps {
  steps: StepperStep[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep, ...rest }) => {
  return (
    <MuiStepper activeStep={activeStep} {...rest}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

export default Stepper;
